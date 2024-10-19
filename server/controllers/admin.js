import jwt from "jsonwebtoken";
import { adminSecretKey } from "../app.js";
import { TryCatch } from "../middlewares/error.js";
import { Chat } from "../models/chat.js";
import { Message } from "../models/message.js";
import { User } from "../models/user.js";
import { cookieOptions } from "../utils/features.js";
import { ErrorHandler } from "../utils/utility.js";

const allUsers = TryCatch(
    async (req, res, next) => {
        const users = await User.find({});
        const transformedUsers = await Promise.all(
            users.map(async ({ name, username, avatar, _id }) => {
            const [groups, friends] = await Promise.all([Chat.countDocuments({groupChat: true, members: _id}), Chat.countDocuments({groupChat: false, members: _id})])
            return {
                name, 
                username, 
                avatar: avatar.url,
                _id,
                groups,
                friends,
            }
        }))
        return res.status(200).json({
            status: "success",
            users: transformedUsers,
        });
    }
);

const allChats = TryCatch(
    async (req, res, next) => {
        const chats = await Chat.find({}).populate("members", "name avatar").populate("creator", "name avatar");
        const transformedChats = await Promise.all(chats.map(async ({ members, groupChat, _id, name, creator }) => {
            const totalMessages = await Message.countDocuments({ chat: _id });
            return {
                name, 
                _id,
                groupChat,
                avatar: members.slice(0, 3).map((member) => member.avatar.url),
                members: members.map((_id, name, avatar) => ({
                    _id,
                    name,
                    avatar: avatar.url
                })),
                creator: {
                    name: creator?.name || "None",
                    avatar: creator?.avatar.url || "",
                },
                totalMembers: members.length, 
                totalMessages
            }
        }))
        return res.status(200).json({
            status: "success",
            chats: transformedChats,
        });
    }
);

const allMessages = TryCatch(async (req, res) => {
    const messages = await Message.find({})
        .populate("sender", "name avatar")
        .populate("chat", "groupChat");
  
    const transformedMessages = messages.map(
        ({ content, attachments, _id, sender, createdAt, chat }) => ({
            _id,
            attachments,
            content,
            createdAt,
            chat: chat._id,
            groupChat: chat.groupChat,
            sender: {
                _id: sender._id,
                name: sender.name,
                avatar: sender.avatar.url,
            },
        })
    );
  
    return res.status(200).json({
        success: true,
        messages: transformedMessages,
    });
});

const getDashboardStats = TryCatch(
    async (req, res, next) => {
        const [groupsCount, usersCount, messagesCount, totalChatsCount] = await Promise.all([Chat.countDocuments({ groupChat: true }), User.countDocuments(), Message.countDocuments(), Chat.countDocuments()]);
        const today = new Date();
        const last7Days = new Date();
        last7Days.setDate(last7Days.getDate() - 7);
        const last7DaysMessages = await Message.find({
            createdAt: {
                $gte: last7Days,
                $lte: today,
            }
        }).select("createdAt");
        const messages = new Array(7).fill(0);
        last7DaysMessages.forEach(message => {
            const indexApprox = (today.getTime() - message.createdAt.getTime()) / (1000 * 24 * 60 * 60);
            const index = Math.floor(indexApprox);
            messages[6 - index]++;
        })
        const stats = { groupsCount, usersCount, messagesCount, totalChatsCount};
        return res.status(200).json({
            status: "success",
            stats,
            messagesChart: messages,
        });
    }
);

const adminLogin = TryCatch(
    async (req, res, next) => {
        const { secretKey } = req.body;
        const isMatched = adminSecretKey === secretKey;
        if (!isMatched) return next(new ErrorHandler("Invalid Admin Key", 401));
        const token = jwt.sign(secretKey, process.env.JWT_SECRET);
        return res.status(200).cookie("chatterbox-admin-token", token, { ...cookieOptions, maxAge: 100 * 60 * 15 }).json({
            success: true,
            message: "Authenticated Successfully, Welcome Admin"
        })
    }
)

const adminLogout = TryCatch(
    async (req, res, next) => {
        return res.status(200).cookie("chatterbox-admin-token", "", { ...cookieOptions, maxAge: 0 }).json({
            success: true,
            message: "Logout Successfully"
        })
    }
)

const verifyAdmin = TryCatch(
    async (req, res, next) => {
        return res.status(200).json({
            admin: true,
        })
    }
)


export { adminLogin, adminLogout, allChats, allMessages, allUsers, getDashboardStats, verifyAdmin };

