import bcrypt from "bcrypt";
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
    res.status(200).json({'message': 'login success'})
};