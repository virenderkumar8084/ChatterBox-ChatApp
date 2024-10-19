import { compare } from "bcrypt";
import { NEW_REQUEST, REFETCH_CHATS } from "../constants/events.js";
import { getOtherMember } from "../lib/helper.js";
import { TryCatch } from "../middlewares/error.js";
import { Chat } from "../models/chat.js";
import { Request } from "../models/request.js";
import { User } from "../models/user.js";
import { cookieOptions, emitEvent, sendToken, uploadFilesToCloudinary } from "../utils/features.js";
import { ErrorHandler } from "../utils/utility.js";

// Create a new user and save it into database and in cookie
const newUser = TryCatch(async (req, res, next) => {
    const { name, username, password, bio } = req.body;
  
    const file = req.file;
  
    if (!file) return next(new ErrorHandler("Please Upload Avatar"));
  
    const result = await uploadFilesToCloudinary([file]);
  
    const avatar = {
      public_id: result[0].public_id,
      url: result[0].url,
    };
  
    const user = await User.create({
      name,
      bio,
      username,
      password,
      avatar,
    });
    sendToken(res, user, 201, "Sign Up Successful");
  });
  

const login = TryCatch(
    async (req, res, next) => {
        const { username, password } = req.body;
        // console.log(username);
        const user = await User.findOne({ username }).select("+password");
        if (!user) return next(new ErrorHandler("Invalid Username or Password", 404));
        const isMatch = await compare(password, user.password); 
        if (!isMatch) return next(new ErrorHandler("Invalid Username or Password", 404));
        sendToken(res, user, 200, `Welcome Back, ${username}`);
    }
) 

const getMyProfile = TryCatch(
    async (req, res) => {
        const user = await User.findById(req.user).select("-password");
        if (!user) return next(new ErrorHandler("User not found", 404));
        return res.status(200).json({
            success: true,
            user,
        })
    }
)

const logout = TryCatch(
    async (req, res) => {
        return res.status(200).cookie("chatterbox-token", "", {...cookieOptions, maxAge: 0}).json({
            success: true,
            message: "Logout Successfully"
        })
    }
)

const searchUser = TryCatch(
    async (req, res, next) => {
        const { name = "" } = req.query;
        const myChats = await Chat.find({ groupChat: false, members: req.user });
        // All users from mychat and users i have chatted with
        const allUsersFromMyChat = myChats.flatMap(((chat) => chat.members));
        const allUsersExceptMeAndFriends = await User.find({
            _id: { $nin: allUsersFromMyChat.concat(req.user) },
            name: { $regex: name, $options: "i" },
        });
        const users = allUsersExceptMeAndFriends.map(({_id, name, avatar}) => ({_id, name, avatar: avatar.url}))
        return res.status(200).json({
            success: true,
            users,
        })

    }
);

const sendFriendRequest = TryCatch(
    async (req, res, next) => {
        const { userId } = req.body;
        const request = await Request.findOne({
            $or: [
                {
                    sender: req.user, reciever: userId
                },
                {
                    sender: userId, reciever: req.user
                }
            ]
        })
        if (request) return next(new ErrorHandler("Request already sent", 400));

        await Request.create({
            sender: req.user,
            reciever: userId,
        });
           
        emitEvent(req, NEW_REQUEST, [userId]);
        return res.status(200).json({
            success: true,
            message: "Friend Request sent"
        })
    }
)

const acceptFriendRequest = TryCatch(
    async (req, res, next) => {
        const { requestId, accept } = req.body;
        const request = await Request.findById(requestId).populate("sender", "name").populate("reciever", "name");
        if (!request) return next(new ErrorHandler("Request not found", 400));
        if (request.reciever._id.toString() !== req.user.toString()) return next(new ErrorHandler("You are not authorized to accept this request.", 401));

        if (!accept) {
            await request.deleteOne();
            return res.status(200).json({
                status: true, 
                message: "Friend Request Rejected"
            })
        }
        const members = [request.sender._id, request.reciever._id];
        await Promise.all([Chat.create({ members, name: `${request.sender.name}-${request.reciever.name}` }), request.deleteOne()]);
        emitEvent(req, REFETCH_CHATS, members);
        return res.status(200).json({
            success: true,
            message: "Friend Request Accepted",
            senderId: request.sender._id,
        })
    }
)

const getMyNotifications = TryCatch(
    async (req, res) => {
        const requests = await Request.find({ reciever: req.user }).populate("sender", "name avatar");
        const allRequests = requests.map(({ _id, sender }) => ({
            _id, sender: {
                _id: sender._id,
                name: sender.name,
                avatar: sender.avatar.url,
            }
        }))
        return res.status(200).json({
            success: true,
            allRequests,
        })
    }
)

const getMyFriends = TryCatch(
    async (req, res) => {
        const chatId = req.query.chatId;
        const chats = await Chat.find({ members: req.user, groupChat: false }).populate("members", "name avatar");
        const friends = chats.map(({ members }) => {
            const otherUser = getOtherMember(members, req.user);
            if (!otherUser) {
                return null; // Return null if otherUser is not found
            }
            return {
                _id: otherUser._id,
                name: otherUser.name,
                avatar: otherUser.avatar.url,
            };
        });
        if (chatId) {
            const chat = await Chat.findById(chatId);
            const availableFriends = friends.filter((friend) => !chat.members.includes(friend._id));
            return res.status(200).json({
                success: true,
                friends: availableFriends,
            })
        }
        else {
            return res.status(200).json({
                success: true,
                friends: friends,
            })
        }
    }
)

export { acceptFriendRequest, getMyFriends, getMyNotifications, getMyProfile, login, logout, newUser, searchUser, sendFriendRequest };

