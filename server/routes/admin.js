import express from "express";
import { adminLogin, adminLogout, allChats, allMessages, allUsers, getDashboardStats, verifyAdmin } from "../controllers/admin.js";
import { adminLoginValidator, validateHandler } from "../lib/validators.js";
import { adminOnly } from "../middlewares/auth.js";
const app = express.Router();

app.post("/verify", adminLoginValidator(), validateHandler, adminLogin);
app.get("/logout", adminLogout);
// only admin can access 
app.use(adminOnly)
app.get("/", verifyAdmin);
app.get("/users", allUsers);
app.get("/chats", allChats);
app.get("/messages", allMessages);
app.get("/stats", getDashboardStats);

export default app;