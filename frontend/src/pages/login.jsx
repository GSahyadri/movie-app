import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const loginInHandler = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth", {
        username: email,
        password: password,
      });
      console.log("Login response", response);
      setSuccess(true);
      setSuccessMessage("Login Successful!");
    } catch (error) {
      console.error("Login error", error.response.data);
      setIsError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <Stack
      spacing={2}
      sx={{ width: "300px", margin: "0 auto", marginTop: "100px" }}
    >
      <h2>Login</h2>
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isError && (
        <Typography color="error" align="center">
          {errorMessage}
        </Typography>
      )}
      <Button variant="contained" onClick={loginInHandler}>
        Login
      </Button>
      {success && (
        <Typography color="primary" align="center">
          {successMessage}
        </Typography>
      )}
      <Typography align="center">or</Typography>
      <Typography align="center">
        Don't have you account ?<NavLink to="/sign-up">Sign Up</NavLink>
      </Typography>
    </Stack>
  );
};
export default Login;
