import Movie from "../model/movie.js";

// Controller to add a new movie (admin only)
export const addMovies = async (req, res) => {
  const { imageUrl, title, description, genre, releaseDate, duration, rating } = req.body;
  if (!imageUrl || !title || !description || !genre || !releaseDate || !duration || !rating) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const movie = await Movie.create({
    imageUrl,
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

//get sorted movies
export const getSortedMovies = async (req, res) => {
  const { sortBy } = req.query; 
  let sortCriteria = {};
  if (sortBy) {
    sortCriteria[sortBy] = 1; // Ascending order
  }
  // Possible values for sortBy:
  // {title : 1}
  // {releaseDate: 1}
  // {rating: 1}
  // {duration: 1}

  const movies = await Movie.find().sort(sortCriteria);
  if (!movies) {
    return res.status(404).json({ message: "No movies found" });
  }
  res.status(200).json(movies);
};

// Controller to search movies by title or description
export const searchMovies = async (req, res) => {
  const { input, option } = req.query;
  if (!input || !option) {
    return res.status(400).json({ message: "Input and option are required" });
  }

  // Example: if option is "title" and input is "blade", the query will be
  // {
  //   title: { $regex: new RegExp("blade", 'i')}
  // }
  // {
  //   description: { $regex: new RegExp("blade", 'i')}
  // }
  const movies = await Movie.find({
    [option]: { $regex: new RegExp(input, 'i') },
  });

  if (!movies) {
    return res.status(404).json({ message: "No movies found" });
  }
  res.status(200).json(movies);
};