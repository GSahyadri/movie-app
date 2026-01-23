import * as React from "react";
import { Box, Select, MenuItem, FormControl, Typography } from "@mui/material";

export default function SortMovies() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box display={"flex"} justifyContent={"flex-end"} mb={4}>
      <Typography sx={{ alignSelf: "center", mr: 2 }}>Sort by:</Typography>
      <FormControl sx={{ minWidth: 120 }} size="small">
        <Select value={age} onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
