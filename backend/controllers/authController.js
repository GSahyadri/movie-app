import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user.js";

export const handleLogin = async (req, res) => {
    const {username, password } = req.body;
    //check if required fields are present or not
    if(!username || !password){
        return res.status(400).json({'message' : 'username and password are required'});
    }
    //find the user from DB
    const foundUser = await User.findOne({ username });
    if(!foundUser){
        return res.status(401).json({'message' : 'user not found'});
    }
    //match the password
    const match = await bcrypt.compare(password, foundUser.password);
    if(!match){
        return res.status(401).json({'message': 'wrong password'})
    }
    
    //login successful
     const token = jwt.sign(
        { id: foundUser._id, username: foundUser.username },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );

    // Set token in HTTP-only cookie
    res.cookie('token', token, {
        httpOnly: true, // Prevents JS access (XSS protection)
        secure: process.env.NODE_ENV === 'production', // Set to true in production (HTTPS)
        sameSite: 'strict', // CSRF protection
        maxAge: 3600000 // 1 hr in ms
    });

    res.status(200).json({
        'message': 'login success',
        'user': {
            id: foundUser._id,
            username: foundUser.username,
            role: foundUser.role
        }
    });
};

export const handleLogout = (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    });
    res.status(200).json({ message: 'Logout successful' });
}

// Verify JWT token
export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(403).json({ message: 'Token is required' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

// Verify Admin role
export const verifyAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Admin access required' });
        }
        
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Error verifying admin', error: error.message });
    }
};