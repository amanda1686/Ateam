import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: false,
    },
    lastname: {
        type: String,
        required: true,
        unique: true,
        trim: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: false,
    },
    password: {
        type: String,
        required: true,
        trim: false,
    },
},{timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;