import User from "../models/user.Model.js";
import bcryptjs from 'bcryptjs';

export const register = async (req, res ) =>{
    const {username, lastname, email, password } = req.body;

    if (!username || !lastname || !email || !password || username === '' || lastname === '' || email === '' || password ==='') {
        return res.status(400).json({ message: 'All fields are required '});
        
    }

    const hashedPassword = bcryptjs.hashSync(password, 10); 

    const newUser = new User({
        username,
        lastname,
        email,
        password: hashedPassword,
    });

    try {
        
        await newUser.save();
        res.json('Register successful');
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
};