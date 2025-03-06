import React from "react";
import { AppBar, Toolbar, Button, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useThemeProvider } from "../../theme/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = () => {
  const { theme, toggleDarkMode } = useThemeProvider();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#462A67" }}>
      <Toolbar sx={{ justifyContent: "end" }}>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/experience">
          Experience
        </Button>
        <Button color="inherit" component={Link} to="/projects">
          Projects
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <Tooltip
          title={
            theme.palette.mode === "dark"
              ? "Switch to Light Mode"
              : "Switch to Dark Mode"
          }
        >
          <IconButton color="inherit" onClick={toggleDarkMode} sx={{ ml: 2 }}>
            {theme.palette.mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
