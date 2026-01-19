import Movie from "../model/movie.js";

// Controller to add a new movie (admin only)
export const addMovies = async (req, res) => {
  const { title, description, genre, releaseDate, duration, rating } = req.body;
  if (!title || !description || !genre || !releaseDate || !duration) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const movie = await Movie.create({
    title,
    description,
    genre,
    releaseDate,
    duration,
    rating,
  });
  res.status(201).json({ message: "Movie added successfully", movie });
};

// Controller to update a movie (admin only)
export const updateMovie = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const movie = await Movie.findByIdAndUpdate(id, updates, { new: true });
  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }
  res.status(200).json({ message: "Movie updated successfully", movie });
};

// Controller to delete a movie (admin only)
export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findByIdAndDelete(id);
  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }
  res.status(200).json({ message: "Movie deleted successfully" });
};

// Controller to get all movies
export const getMovies = async (req, res) => {
  const movies = await Movie.find();// Fetch all movies from the database
  if (!movies) {
    return res.status(404).json({ message: "No movies found" });
  }
  res.status(200).json(movies);
};
