import { useState, useContext } from "react";
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import MoviesContext from "../context/movie-context";

function SearchFilter() {
  const { getSearchMovies } = useContext(MoviesContext);
  const [selectedOption, setSelectedOption] = useState("title");
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchValue, "by", selectedOption);
    getSearchMovies(searchValue, selectedOption);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" mb={4}>
        <FormControl sx={{ minWidth: 140 }} size="medium">
          <Select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="description">Description</MenuItem>
          </Select>
        </FormControl>
        <TextField
          placeholder="search movies..."
          variant="outlined"
          sx={{ minWidth: 550 }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ minWidth: 100 }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </>
  );
}

export default SearchFilter;
