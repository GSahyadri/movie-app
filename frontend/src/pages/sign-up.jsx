import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  MenuItem,
  Alert,
} from "@mui/material";
import { Link } from "react-router";
import apiClient from "../api/apiClient";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const signUpHandler = async () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    setIsLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await apiClient.post("/register", {
        username: email,
        password: password,
        role: role,
      });
      console.log("Sign Up response", response);
      setSuccess("Registration Successful! Please login.");
      setEmail("");
      setPassword("");
      setRole("");
    } catch (error) {
      console.error("Sign Up error", error.response.data.message);
        setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper sx={{ p: 4, width: 320 }}>
        <Typography variant="h6" mb={2}>
          Sign Up
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        <Box>
          <TextField
            fullWidth
            label="Username"
            size="small"
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            size="small"
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            fullWidth
            select
            label="Role"
            size="small"
            margin="normal"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </TextField>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
            onClick={signUpHandler}
            loading={isLoading}
          >
            Sign Up
          </Button>
        </Box>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2 }}
        >
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUp;