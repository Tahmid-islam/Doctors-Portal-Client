import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
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
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button onClick={logout} color="inherit">
                  Logout
                </Button>
              </NavLink>
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
