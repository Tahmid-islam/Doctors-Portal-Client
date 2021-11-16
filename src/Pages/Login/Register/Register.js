import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import login from "../../../images/login.png";
import useAuth from "../../../hooks/useAuth";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const Navigate = useNavigate();
  const { user, registerUser, isLoading, authError, signInWithGoogle } =
    useAuth();

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, Navigate);
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password Did Not Match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, Navigate);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Register
          </Typography>
          {!isLoading && (
            <Box>
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  type="text"
                  label="Your Name"
                  name="name"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  type="email"
                  label="Your Email"
                  name="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  variant="standard"
                  autoComplete="current-password"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Re-type Password"
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                  variant="standard"
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  sx={{ width: "75%", m: 1 }}
                  variant="contained"
                >
                  Register
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">
                    Already Registered? Please Login
                  </Button>
                </NavLink>
              </form>

              <p>--------------------------------------</p>
              <Button onClick={handleGoogleSignIn} variant="contained">
                Google Sign In
              </Button>
              <br />
              <Link to="/">
                <Button variant="text"> Back To Home</Button>
              </Link>
            </Box>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User Created Successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
