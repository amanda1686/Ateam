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
    profilePicture: {
        type: String,
        default: "https://images.pexels.com/photos/1694874/pexels-photo-1694874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
},{timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;