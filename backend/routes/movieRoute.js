import express from "express";
import { verifyToken, verifyAdmin } from "../controllers/authController.js";
import {
  getMovies,
  addMovies,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js";

const router = express.Router();

// user routes
router.get("/", verifyToken, getMovies); // Get all movies
// admin routes
router.post("/", verifyToken, verifyAdmin, addMovies); // Add a new movie
router.put("/:id", verifyToken, verifyAdmin, updateMovie); // Update a movie
router.delete("/:id", verifyToken, verifyAdmin, deleteMovie); // Delete a movie
export default router;
