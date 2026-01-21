import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router";
import { useState } from "react";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const signInHandler = async () => {
    try {
      const response = await axios.post("http://localhost:3000/register", {
        username: email,
        password: password,
        role: role,
      });
      console.log("Sign Up response", response);
      setSuccess(true);
      setSuccessMessage("Registration Successful! Please login.");
    } catch (error) {
      console.error("Sign Up error", error.response.data.message);
      setIsError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <Stack
      spacing={2}
      sx={{ width: "300px", margin: "0 auto", marginTop: "100px" }}
    >
      <h2>Create New Account</h2>
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
      <InputLabel id="role" label="Role" variant="outlined">
        Role
      </InputLabel>
      <Select
        labelId="role"
        id="demo-simple-select"
        value={role}
        label="Role"
        onChange={(e) => setRole(e.target.value)}
      >
        <MenuItem value={"admin"}>admin</MenuItem>
        <MenuItem value={"user"}>user</MenuItem>
      </Select>
      {isError && (
        <Typography color="error" align="center">
          {errorMessage}
        </Typography>
      )}
      <Button variant="contained" onClick={signInHandler}>
        Sign Up
      </Button>
      {success && (
        <Typography color="primary" align="center">
          {successMessage}
        </Typography>
      )}
      <Typography align="center">or</Typography>
      <Typography align="center">
        Already have an account ?<NavLink to="/login">Login</NavLink>
      </Typography>
    </Stack>
  );
};
export default SignUp;
