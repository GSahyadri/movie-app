import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  Alert,
} from "@mui/material";
import { useState } from "react";
import apiClient from "../api/apiClient";

const AddMovie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [movie, setMovie] = useState({
    imageUrl: "",
    title: "",
    description: "",
    genre: "",
    releaseDate: "",
    duration: "",
    rating: "",
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");
    //api call to backend
    try {
      const response = await apiClient.post("/movies", {
        imageUrl: movie.imageUrl,
        title: movie.title,
        description: movie.description,
        genre: movie.genre,
        releaseDate: movie.releaseDate,
        duration: movie.duration,
        rating: movie.rating,
      });
      setSuccess("Movie added successfully");
      console.log("Add Movie response", response);
      // clear form
      setMovie({
        imageUrl: "",
        title: "",
        description: "",
        genre: "",
        releaseDate: "",
        duration: "",
        rating: "",
      });
    } catch (error) {
      console.error("Add Movie error", error.response.data.message);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }

    // submit logic here
    console.log(movie);
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
        {success ||
          (error && (
            <Alert
              severity={error ? "error" : "success"}
              variant="filled"
              sx={{ width: "100%" }}
            >
              {success || error}
            </Alert>
          ))}
        <Typography variant="h6" mb={2}>
          Add Movie
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
            disabled={isLoading}
            loading={isLoading}
          >
            Save Movie
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddMovie;
