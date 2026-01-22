import { Box, Typography, Paper } from "@mui/material";

const MovieItem = ({ movie }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        mb: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        {/* Image */}
        <Box
          component="img"
          src={movie.poster}
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
    </Paper>
  );
};

export default MovieItem;
