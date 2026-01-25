
import { useContext } from "react";
import { Box } from "@mui/material";
import MovieList from "../components/movie-list";
import SortMovies from "../components/sort-movies";
import MoviesContext from "../context/movie-context";

function Movies() {
  const { movies } = useContext(MoviesContext);

  return (
    <>
      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          px: 2,
          mt: 3,
        }}
      >
        <SortMovies />
        <MovieList movies={movies} />
      </Box>
    </>
  );
}

export default Movies;
