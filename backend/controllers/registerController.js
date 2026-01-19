import bcrypt from "bcrypt";
import User from "../model/user.js";

const registerUser = async (req, res) => {
  const { username, password, role } = req.body;

  //check if required fields are present or not
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "username and password are required" });
  }

  //check for duplicate user name
  const duplicate = await User.findOne({ username });
  if (duplicate) {
    return res.status(409).json({ message: "username already exist" });
  }

  //hash the password and create the user
  const hashedPassword = await bcrypt.hash(password, 10);
  // Create and store the new user
  const user = await User.create({
    username,
    password: hashedPassword,
    role,
  });

  res
    .status(201)
    .json({ message: "user created successfully", userId: user._id });
};

export default registerUser;
