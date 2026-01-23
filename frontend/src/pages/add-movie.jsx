import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: "",
    year: "",
    duration: "",
    rating: "",
    image: "",
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
        <Typography variant="h6" mb={2}>
          Add Movie
        </Typography>

        <form onSubmit={handleSubmit}>
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
            label="Release Year"
            name="year"
            margin="normal"
            size="small"
            required
            value={movie.year}
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
            label="Rating (e.g. 8.5 / 10)"
            name="rating"
            margin="normal"
            size="small"
            required
            value={movie.rating}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Image URL"
            name="image"
            margin="normal"
            size="small"
            required
            value={movie.image}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Save Movie
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddMovie;
