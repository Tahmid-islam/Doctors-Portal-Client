import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              style={{ textAlign: "left" }}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <NavLink style={{ textDecoration: "none" }} to="/">
                <Button sx={{ color: "white" }} color="inherit">
                  Doctors Portal
                </Button>
              </NavLink>
            </Typography>
            <NavLink style={{ textDecoration: "none" }} to="/appointment">
              <Button sx={{ color: "white" }} color="inherit">
                Appointment
              </Button>
            </NavLink>
            {user?.email ? (
              <Box>
                <NavLink
                  to="/Dashboard"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button color="inherit">Dashboard</Button>
                </NavLink>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button onClick={logout} color="inherit">
                    Logout
                  </Button>
                </NavLink>
              </Box>
            ) : (
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit">Login</Button>
              </NavLink>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navigation;
