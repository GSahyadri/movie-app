import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import apiClient from "../api/apiClient";
import Loading from "../components/loading";
import MovieList from "../components/movie-list";
import SortMovies from "../components/sort-movies";

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from backend API
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await apiClient.get("/movies");
        const data = response.data;
        setMovies(data);
      } catch (error) {
        console.error("movies error", error.response.data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

    const getSortedMovies = async (value) => {
      // Implement sorting logic here
      try {
        const res = await apiClient.get(`/movies/sorted?sortBy=${value}`);
        const data = res.data;
        console.log("Sorted movies", data);
        setMovies(data);
      } catch (error) {
        console.error("Sorting error", error.response.data);
      }
    };

  if (isLoading) {
    return <Loading />;
  }

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
        <SortMovies getSortedMovies={getSortedMovies} />
        <MovieList movies={movies} />
      </Box>
    </>
  );
}

export default Movies;
