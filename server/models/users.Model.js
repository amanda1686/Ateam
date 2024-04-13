import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
        unique:true
    }, 
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true}
);

export default mongoose.model('Users', userSchema);