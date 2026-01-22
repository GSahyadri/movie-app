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

const dummyMovies = [
  {
    title: "The Last Horizon",
    description: "A scientist ventures beyond the edge of the solar system to save humanity.",
    genre: "Sci-Fi",
    releaseDate: new Date("2021-06-18"),
    duration: 132,
    rating: 8.4,
    poster: "https://m.media-amazon.com/images/M/MV5BNTJhNTJiOTItYjk4Yy00MjliLWJmZTgtYjA2YTVjOGZlMGQ2XkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg",
  },
  {
    title: "Broken Silence",
    description: "A crime journalist uncovers a conspiracy that puts her life at risk.",
    genre: "Thriller",
    releaseDate: new Date("2020-10-09"),
    duration: 118,
    rating: 7.6,
        poster: "https://m.media-amazon.com/images/M/MV5BNTJhNTJiOTItYjk4Yy00MjliLWJmZTgtYjA2YTVjOGZlMGQ2XkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg",

  },
  {
    title: "Echoes of Time",
    description: "A historian accidentally travels back to medieval Europe.",
    genre: "Adventure",
    releaseDate: new Date("2019-03-22"),
    duration: 140,
    rating: 8.1,
        poster: "https://m.media-amazon.com/images/M/MV5BNTJhNTJiOTItYjk4Yy00MjliLWJmZTgtYjA2YTVjOGZlMGQ2XkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg",

  },
  {
    title: "City of Shadows",
    description: "A detective hunts a serial killer in a rain-soaked metropolis.",
    genre: "Crime",
    releaseDate: new Date("2018-11-02"),
    duration: 125,
    rating: 7.9,
        poster: "https://m.media-amazon.com/images/M/MV5BNTJhNTJiOTItYjk4Yy00MjliLWJmZTgtYjA2YTVjOGZlMGQ2XkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg",

  },
  {
    title: "Love in Autumn",
    description: "Two strangers find love during a quiet fall season in a small town.",
    genre: "Romance",
    releaseDate: new Date("2022-09-30"),
    duration: 105,
    rating: 6.8,
        poster: "https://m.media-amazon.com/images/M/MV5BNTJhNTJiOTItYjk4Yy00MjliLWJmZTgtYjA2YTVjOGZlMGQ2XkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg",

  },
  {
    title: "Iron Resolve",
    description: "An underdog boxer fights his way to a championship title.",
    genre: "Drama",
    releaseDate: new Date("2017-05-12"),
    duration: 110,
    rating: 7.4,
        poster: "https://m.media-amazon.com/images/M/MV5BNTJhNTJiOTItYjk4Yy00MjliLWJmZTgtYjA2YTVjOGZlMGQ2XkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg",

  },
  {
    title: "Realm of Fire",
    description: "Warriors defend their kingdom against an ancient dragon.",
    genre: "Fantasy",
    releaseDate: new Date("2023-07-14"),
    duration: 145,
    rating: 8.7,
        poster: "https://m.media-amazon.com/images/M/MV5BNTJhNTJiOTItYjk4Yy00MjliLWJmZTgtYjA2YTVjOGZlMGQ2XkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg",

  },
  {
    title: "Laugh Track",
    description: "A struggling comedian navigates fame, failure, and friendship.",
    genre: "Comedy",
    releaseDate: new Date("2021-02-19"),
    duration: 98,
    rating: 6.9,
        poster: "https://m.media-amazon.com/images/M/MV5BNTJhNTJiOTItYjk4Yy00MjliLWJmZTgtYjA2YTVjOGZlMGQ2XkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg",

  },
  {
    title: "Final Descent",
    description: "A commercial flight faces disaster after a systems failure mid-air.",
    genre: "Action",
    releaseDate: new Date("2020-08-07"),
    duration: 115,
    rating: 7.2,
        poster: "https://m.media-amazon.com/images/M/MV5BNTJhNTJiOTItYjk4Yy00MjliLWJmZTgtYjA2YTVjOGZlMGQ2XkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg",

  },
  {
    title: "Whispers in the Dark",
    description: "A family moves into a house haunted by a terrifying presence.",
    genre: "Horror",
    releaseDate: new Date("2019-10-31"),
    duration: 102,
    rating: 6.5,
        poster: "https://m.media-amazon.com/images/M/MV5BNTJhNTJiOTItYjk4Yy00MjliLWJmZTgtYjA2YTVjOGZlMGQ2XkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg",

  },
];
// Controller to get all movies
export const getMovies = async (req, res) => {
  const movies = await Movie.find();// Fetch all movies from the database
  if (!movies) {
    return res.status(404).json({ message: "No movies found" });
  }
  res.status(200).json(dummyMovies);
};
