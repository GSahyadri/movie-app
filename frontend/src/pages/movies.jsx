import { useEffect } from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import MovieItem from "../components/movie-item";
import apiClient from "../api/apiClient";
import Navbar from "../components/navbar";
import Loading from "../components/loading";

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

  // movies list
  const movieList = movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ));

  return (
    <>
      <Navbar/>
      <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        px: 2,           
        mt: 3,
      }}
    >
      {isLoading ? <Loading /> : movieList}
    </Box>
    </>
  );
}

export default Movies;
