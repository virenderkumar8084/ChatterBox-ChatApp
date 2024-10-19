import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { v4 as uuid } from 'uuid';
import { corsOptions } from "./constants/config.js";
import { CHAT_JOINED, CHAT_LEAVED, NEW_MESSAGE, NEW_MESSAGE_ALERT, ONLINE_USERS, START_TYPING, STOP_TYPING } from "./constants/events.js";
import { getSockets } from "./lib/helper.js";
import { socketAuthenticator } from "./middlewares/auth.js";
import { errorMiddleware } from "./middlewares/error.js";
import { Message } from "./models/message.js";
import { connectDB } from "./utils/features.js";

import adminRoute from "./routes/admin.js";
import chatRoute from "./routes/chat.js";
import userRoute from "./routes/user.js";

dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 3000;
const envMode = process.env.NODE_ENV.trim() || "PRODUCTION";

const adminSecretKey = process.env.ADMIN_SECRET_KEY || "memememe";
const userSocketIDs = new Map();
const onlineUsers = new Set();   
const mongoURI = process.env.MONGO_URI;

const app = express();
const server = createServer(app); // Create HTTP server
const io = new Server(server, {
    cors: corsOptions,
}); // Attach socket.io to the server

app.set("io", io);

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
connectDB(mongoURI);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// seeders
// createUser(10);
// createSingleChats(10);
// createGroupChats(10);
// createMessagesInAChat("66ebfe5edf8f5ee80392fc11", 50);

app.use("/api/v1/user", userRoute);
app.use("/api/v1/chat", chatRoute);
app.use("/api/v1/admin", adminRoute);


app.get("/", (req, res) => {
    res.send("Hello home");
});

// middleware
io.use((socket, next) => {
    cookieParser()(socket.request, socket.request.res, async (err) => await socketAuthenticator(err, socket, next)
)}); 

io.on("connection", (socket) => {
    const user = socket.user;
    // console.log(user);
    userSocketIDs.set(user._id.toString(), socket.id);
    // console.log(userSocketIDs);
    // console.log("user connected", socket.id);
    socket.on(NEW_MESSAGE, async ({ chatId, message, members }) => {
        const messageForRealTime = {
            _id: uuid(),
            content: message,
            sender: {
                _id: user._id,
                name: user.name,
            },
            chat: chatId,
            createdAt: new Date().toISOString(),
        }
        const messageForDB = {
            content: message,
            sender: user._id,
            chat: chatId,
        }
        console.log("EMITTING", messageForRealTime);
        const membersSocket = getSockets(members);
        io.to(membersSocket).emit(NEW_MESSAGE, {
            chatId,
            message: messageForRealTime
        });
        io.to(membersSocket).emit(NEW_MESSAGE_ALERT, { chatId })
        try {
            await Message.create(messageForDB)
        } catch (error) {
            throw new Error(error);
        }
        console.log("NEW MESSAGE", messageForRealTime);
    });

    socket.on(START_TYPING, ({ members, chatId }) => {
        const membersSockets = getSockets(members);
        socket.to(membersSockets).emit(START_TYPING, { chatId });
      });
    
    socket.on(STOP_TYPING, ({ members, chatId }) => {
        const membersSockets = getSockets(members);
        socket.to(membersSockets).emit(STOP_TYPING, { chatId });
      });
    
    socket.on(CHAT_JOINED, ({ userId, members }) => {
        onlineUsers.add(userId.toString());
        const membersSocket = getSockets(members);
        io.to(membersSocket).emit(ONLINE_USERS, Array.from(onlineUsers));
      });
    
    socket.on(CHAT_LEAVED, ({ userId, members }) => {
        onlineUsers.delete(userId.toString());
        const membersSocket = getSockets(members);
        io.to(membersSocket).emit(ONLINE_USERS, Array.from(onlineUsers));
      });

    socket.on("disconnect", () => {
        // console.log("user disconnected");
        userSocketIDs.delete(user._id.toString());
        onlineUsers.delete(user._id.toString());
        socket.broadcast.emit(ONLINE_USERS, Array.from(onlineUsers));
    })
})

app.use(errorMiddleware);

server.listen(port, () => {
    console.log(`Server is running on port ${port} in ${envMode} mode`);
})

export { adminSecretKey, envMode, userSocketIDs };

