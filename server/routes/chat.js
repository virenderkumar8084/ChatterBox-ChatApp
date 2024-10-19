import express from "express";
import { addMembers, deleteChat, getChatDetails, getMessages, getMyChats, getMyGroups, leaveGroup, newGroupChat, removeMember, renameGroup, sendAttachments } from "../controllers/chat.js";
import { addMemberValidator, chatIdValidator, newGroupValidator, removeMemberValidator, renameValidator, sendAttachmentsValidator, validateHandler } from "../lib/validators.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { attachmentsMulter } from "../middlewares/multer.js";
const app = express.Router();

// After Login routes (must be login)
app.use("/", isAuthenticated);

// create a new group chat
app.post("/new", newGroupValidator(), validateHandler, newGroupChat);
// get the chat on homepage
app.get("/my", getMyChats);
// get the list of myGroups in chats
app.get("/my/group", getMyGroups);
// add members to the group
app.put("/addmembers", addMemberValidator(), validateHandler, addMembers);
// remove the member from the group
app.put("/removemember", removeMemberValidator(), validateHandler, removeMember);
// Leave the group
app.delete("/leave/:id", chatIdValidator(), validateHandler, leaveGroup)
// send attachments
app.post("/message", attachmentsMulter, sendAttachmentsValidator(), validateHandler, sendAttachments);
// Get messages
app.get("/message/:id", chatIdValidator(), validateHandler, getMessages)
// Get chat details, rename, delete
app.route("/:id").get(chatIdValidator(), validateHandler, getChatDetails).put(renameValidator(), validateHandler, renameGroup).delete(chatIdValidator(), validateHandler, deleteChat);

export default app;