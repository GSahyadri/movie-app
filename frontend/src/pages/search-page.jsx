import { useState } from "react";
import { Box } from "@mui/material";
import apiClient from "../api/apiClient";
import MovieList from "../components/movie-list";
import SearchFilter from "../components/searchFilter";

function SearchMovies() {
  const [movies, setMovies] = useState([]);

    const getSearchMovies = async (value, option) => {
    // search using title or description option and input value
    try {
      const res = await apiClient.get(`/movies/search?input=${value}&option=${option}`);
      const data = res.data;
      console.log("Search movies", data);
      setMovies(data);
    } catch (error) {
      console.error("Search error", error.response.data);
    }
  };

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
        <SearchFilter getSearchMovies={getSearchMovies} />
        <MovieList movies={movies} />
      </Box>
    </>
  );
}

export default SearchMovies;
