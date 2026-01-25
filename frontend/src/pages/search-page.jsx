import { useEffect, useContext } from "react";
import { Box } from "@mui/material";
import MovieList from "../components/movie-list";
import SearchFilter from "../components/searchFilter";
import MoviesContext from "../context/movie-context";

function SearchMovies() {
  const { filteredMovies, setFilteredMovies } = useContext(MoviesContext);

  useEffect(() => {
    // Clear filters when component unmounts
    return () => {
      setFilteredMovies([]);
    }
  }, [setFilteredMovies]);
  

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
        <SearchFilter />
        <MovieList movies={filteredMovies} />
      </Box>
    </>
  );
}

export default SearchMovies;
