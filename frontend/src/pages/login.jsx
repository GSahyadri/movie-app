import { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Alert } from "@mui/material";
import apiClient from "../api/apiClient";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginHandler = async () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    setIsLoading(true);
    try {
      const response = await apiClient.post("/auth/login", {
        username: email,
        password: password,
      });
      console.log("Login response", response);
      navigate("/movies");
    } catch (error) {
      console.error("Login error", error.response.data);
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
          Login
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box>
          <TextField
            fullWidth
            label="Email"
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

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
            loading={isLoading}
            onClick={loginHandler}
          >
            Login
          </Button>
        </Box>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2 }}
        >
          Don&apos;t have an account?{" "}
          <Link to="/sign-up" style={{ textDecoration: "none" }}>
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
