import mongoose from "mongoose";

// Define the User schema
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

// Create the User model
const User = mongoose.model("User", userSchema);

export default User;
