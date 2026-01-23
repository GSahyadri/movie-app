import mongoose from "mongoose";

// Define the Movie schema
const movieSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  duration: { type: Number, required: true },
  rating: { type: Number, min: 0, max: 10 },
});

// Create the Movie model
const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
