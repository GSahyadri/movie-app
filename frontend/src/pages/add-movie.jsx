import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  Alert,
} from "@mui/material";
import { useState, useContext } from "react";
import { useParams } from "react-router";
import moviesContext  from "../context/movie-context";

const AddMovie = (props) => {
  const { mode } = props;
  const { id } = useParams(); // Get movie ID from URL params for edit mode
  const { movies, addMovieHandler } = useContext(moviesContext); // Access movies and addMovie from context
  const selectedMovie =
    mode === "edit"
      ? movies.find((movie) => movie._id === id)
      : null;

  const [movie, setMovie] = useState({
    imageUrl: mode === "edit" ? selectedMovie?.imageUrl : "",
    title: mode === "edit" ? selectedMovie?.title : "",
    description: mode === "edit" ? selectedMovie?.description : "",
    genre: mode === "edit" ? selectedMovie?.genre : "",
    releaseDate: mode === "edit" ? selectedMovie?.releaseDate : "",
    duration: mode === "edit" ? selectedMovie?.duration : "",
    rating: mode === "edit" ? selectedMovie?.rating : "",
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addMovieHandler(movie);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        px: 2,
      }}
    >
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" mb={2}>
          {mode === "edit" ? "Edit Movie" : "Add Movie"}
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Image URL"
            name="imageUrl"
            margin="normal"
            size="small"
            required
            value={movie.imageUrl}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Title"
            name="title"
            margin="normal"
            size="small"
            required
            value={movie.title}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Description"
            name="description"
            margin="normal"
            size="small"
            required
            multiline
            rows={2}
            value={movie.description}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Release Date"
            name="releaseDate"
            margin="normal"
            size="small"
            required
            value={movie.releaseDate}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Duration (e.g. 120 min)"
            name="duration"
            margin="normal"
            size="small"
            required
            value={movie.duration}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Genre"
            name="genre"
            margin="normal"
            size="small"
            required
            value={movie.genre}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Rating (e.g. 8.5 / 10)"
            name="rating"
            margin="normal"
            size="small"
            required
            value={movie.rating}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
          >
            {mode === "edit" ? "Update Movie" : "Add Movie"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddMovie;
