import mongoose, { Schema, Types, model } from "mongoose";

const schema = new Schema({
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"], // Use enum for allowed values
        default: "pending", // Default should be a single string, not an array
    },
    sender: {
        type: Types.ObjectId,
        ref: "User", 
        required: true,
    },
    reciever: {  // Corrected spelling of "receiver"
        type: Types.ObjectId,
        ref: "User", 
        required: true,
    },
}, { timestamps: true });

export const Request = mongoose.models.Request || model("Request", schema);
