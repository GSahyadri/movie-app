import { useContext } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoviesContext  from "../context/movie-context";
import { useNavigate } from "react-router";

const MovieItem = ({ movie }) => {
  const { isAdmin, deleteMovie } = useContext(MoviesContext);
  const navigate = useNavigate();

  const editMovie = () => {
    navigate(`/edit-movie/${movie._id}`);
  };


  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        mb: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        {/* Image */}
        <Box
          component="img"
          src={movie.imageUrl}
          alt={movie.title}
          sx={{
            width: 90,
            height: 130,
            objectFit: "cover",
            borderRadius: 1,
          }}
        />

        {/* Stacked details */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Typography fontWeight={600}>
            {movie.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Genre: {movie.genre}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Release: {new Date(movie.releaseDate).getFullYear()}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Duration: {movie.duration} mins
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Rating: ⭐ {movie.rating}
          </Typography>
        </Box>
      </Box>
      <Stack direction="row" spacing={1}>
        {
          isAdmin && (<>
            <EditIcon onClick={editMovie} color="primary" sx={{ cursor: 'pointer' }} />
            <DeleteIcon onClick={() => deleteMovie(movie._id)} color="error" sx={{ cursor: 'pointer' }} />
          </>
          )
        }
      </Stack>
    </Paper>
  );
};

export default MovieItem;