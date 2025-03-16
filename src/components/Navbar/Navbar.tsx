import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Switch,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link, useLocation } from "react-router-dom";
import { useThemeProvider } from "../../theme/ThemeProvider";

const Navbar = () => {
  const { theme, toggleDarkMode } = useThemeProvider();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setMobileOpen(true)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Toolbar sx={{ display: { xs: "none", md: "flex" }, gap: "10px" }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color:
                  location.pathname === item.path
                    ? theme.palette.secondary.light
                    : "white",
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                backgroundColor:
                  location.pathname === item.path
                    ? "rgba(255, 255, 255, 0.2)"
                    : "transparent",
                borderRadius: "8px",
                padding: "6px 12px",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Toolbar>
        <IconButton
          color="inherit"
          onClick={toggleDarkMode}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          PaperProps={{
            sx: {
              width: 250,
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
            },
          }}
        >
          <Box sx={{ padding: "20px" }}>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.path} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      color:
                        location.pathname === item.path
                          ? theme.palette.primary.main
                          : "inherit",
                      fontWeight:
                        location.pathname === item.path ? "bold" : "normal",
                      padding: "10px",
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <DarkModeIcon />
              <Switch
                checked={theme.palette.mode === "dark"}
                onChange={toggleDarkMode}
              />
              <LightModeIcon />
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
