import { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router";
import apiClient from "../api/apiClient";
import MoviesContext from "../context/movie-context";

const Navbar = () => {
  const { isAdmin } = useContext(MoviesContext);

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      const response = await apiClient.post("/auth/logout");
      console.log("Logout response", response);
      // Redirect to login page
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "white",
            fontWeight: 600,
            mr: 4,
          }}
        >
          MovieTales
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography
            component={Link}
            to="/"
            sx={{ color: "white", textDecoration: "none" }}
          >
            Home
          </Typography>
          {isAdmin && (
            <Typography
              component={Link}
              to="/add-movie"
              sx={{ color: "white", textDecoration: "none" }}
            >
              Add Movie
            </Typography>
          )}
          <Typography
            component={Link}
            to="/search-page"
            sx={{ color: "white", textDecoration: "none" }}
          >
            Search
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" onClick={handleOpen}>
          <AccountCircleIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
