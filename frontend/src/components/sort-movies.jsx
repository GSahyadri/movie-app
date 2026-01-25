import { useState, useContext } from "react";
import { Box, Select, MenuItem, FormControl, Typography } from "@mui/material";
import MoviesContext from "../context/movie-context";

export default function SortMovies() {
  const { getSortedMovies } = useContext(MoviesContext);
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = async (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    getSortedMovies(value);
  };

  return (
    <Box display={"flex"} justifyContent={"flex-end"} mb={4}>
      <Typography sx={{ alignSelf: "center", mr: 2 }}>Sort by:</Typography>
      <FormControl sx={{ minWidth: 120 }} size="small">
        <Select value={selectedOption} onChange={handleChange}>
          <MenuItem value={"title"}>Title</MenuItem>
          <MenuItem value={"releaseDate"}>Release Date</MenuItem>
          <MenuItem value={"rating"}>Rating</MenuItem>
          <MenuItem value={"duration"}>Duration</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
