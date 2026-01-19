import express from "express";
import {
  getMovies,
  addMovies,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js";

const router = express.Router();

// user routes
router.get("/", getMovies); // Get all movies
// admin routes
router.post("/", addMovies); // Add a new movie
router.put("/:id", updateMovie); // Update a movie
router.delete("/:id", deleteMovie); // Delete a movie

export default router;
