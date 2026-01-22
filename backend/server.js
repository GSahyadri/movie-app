import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/dbConnection.js";
import registerRoute from "./routes/registerRoute.js";
import authRoute from "./routes/authRoute.js";
import movieRoute from "./routes/movieRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

//initialize express app
const app = express();
const PORT = process.env.PORT;

//environment variables

connectDB();

app.use(cors({
  origin: process.env.FRONTEND_URL, // frontend URL
  credentials: true // allow cookies to be sent
}));

app.use(express.json());  //middleware to parse JSON request body
app.use(cookieParser());  //middleware to parse cookies

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
