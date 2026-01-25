import { useState, useEffect } from "react";
import MoviesContext from "./movie-context";
import apiClient from "../api/apiClient";
import Loading from "../components/loading";
import { useNavigate } from "react-router";

const MoviesProvider = ({ children }) => {
  const isAdmin = JSON.parse(localStorage.getItem("user"))?.role === 'admin';

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const errorHandler = (error) => {
    console.error("movies error", error?.response?.data);
    // 401 unauthorized access
    if (error?.response?.status === 403) {
      alert("Unauthorized access. Please log in.");
      navigate('/login');
    } else {
        alert(`Error: ${error?.response?.data?.message}`);
    }
  }

  useEffect(() => {
    // Fetch movies from backend API
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await apiClient.get("/movies");
        const data = response.data;
        setMovies(data);
      } catch (error) {
        errorHandler(error);
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
        errorHandler(error);
    }
  };

  const getSearchMovies = async (value, option) => {
    // search using title or description option and input value
    try {
      const res = await apiClient.get(`/movies/search?input=${value}&option=${option}`);
      const data = res.data;
      // filter movies state
      console.log("Search movies", data);
      setFilteredMovies(data);
    } catch (error) {
        errorHandler(error);
    }
  };

  const deleteMovie = async (movieId) => {
    try {
      const response = await apiClient.delete(`/movies/${movieId}`);
      console.log("Delete response", response);
      setMovies(prevMovies => prevMovies.filter(item => item._id !== movieId));
      setFilteredMovies(prevMovies => prevMovies.filter(item => item._id !== movieId));
      alert("Movie deleted successfully");
    } catch (error) {
        errorHandler(error);
    }
  };

  const addMovieHandler = async (movieData) => {
    try {
      const response = await apiClient.post("/movies", movieData);
        console.log("Add Movie response", response);
        setMovies(prevMovies => [...prevMovies, response.data.movie]);
        alert("Movie added successfully");
    } catch (error) {
        errorHandler(error);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        isAdmin,
        movies,
        setMovies,
        filteredMovies,
        setFilteredMovies,
        getSortedMovies,
        getSearchMovies,
        deleteMovie,
        addMovieHandler,
      }}
    >
      {isLoading ? <Loading/> : children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
