import mongoose, { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'; // Correct import for bcrypt

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true, // Ensures uniqueness of username
    }, 
    password: {
        type: String,
        required: true,
        select: false, // Prevents password from being selected in queries by default
    },
    avatar: {
        public_id: {
            type: String, 
            required: true,
        },
        url: {
            type: String, 
            required: true,
        }
    }
}, { timestamps: true });

// Pre-save hook to hash password
schema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
});

export const User = mongoose.models.User || model("User", schema);
