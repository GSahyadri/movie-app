import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/dbConnection.js";
import registerRoute from "./routes/registerRoute.js";
import authRoute from "./routes/authRoute.js";

//initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

//environment variables
dotenv.config();
connectDB();
app.use(express.json());

//routes
app.use("/register", registerRoute);
app.use("/auth", authRoute);
app.use("/movies", movieRoute);

//listen for requests
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  }); 
});
