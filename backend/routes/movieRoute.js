import express from "express";
import { verifyToken, verifyAdmin } from "../controllers/authController.js";
import {
  getMovies,
  addMovies,
  updateMovie,
  deleteMovie,
  getSortedMovies,
  searchMovies,
} from "../controllers/movieController.js";

const router = express.Router();

// user routes
router.get("/search", verifyToken, searchMovies); // Search movies by title or genre
router.get("/", verifyToken, getMovies); // Get all movies
router.get("/sorted", verifyToken, getSortedMovies); // Get sorted movies
// admin routes
router.post("/", verifyToken, verifyAdmin, addMovies); // Add a new movie
router.put("/:id", verifyToken, verifyAdmin, updateMovie); // Update a movie
router.delete("/:id", verifyToken, verifyAdmin, deleteMovie); // Delete a movie

export default router;
