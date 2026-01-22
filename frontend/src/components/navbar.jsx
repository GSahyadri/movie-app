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
import { Link } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
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

          <Typography
            component={Link}
            to="/search"
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
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
