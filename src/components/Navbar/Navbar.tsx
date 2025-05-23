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
      position="fixed"
      elevation={0}
      sx={{
        paddingX: 4,
        paddingY: 2,
        width: "100%",
        backgroundColor: "background.default",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Mobile menu icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setMobileOpen(true)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* Centered navigation buttons */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color:
                  location.pathname === item.path
                    ? theme.palette.mode === "light"
                      ? "#462A67"
                      : "#BFA2DB"
                    : theme.palette.mode === "light"
                    ? "black"
                    : "white",
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                backgroundColor:
                  location.pathname === item.path
                    ? theme.palette.mode === "light"
                      ? "rgba(70, 42, 103, 0.1)"
                      : "rgba(191, 162, 219, 0.15)"
                    : "transparent",
                borderBottom:
                  location.pathname === item.path
                    ? `2px solid ${
                        theme.palette.mode === "light" ? "#462A67" : "#BFA2DB"
                      }`
                    : "none",
                borderRadius: "8px",
                padding: "6px 12px",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor:
                    location.pathname === item.path
                      ? theme.palette.mode === "light"
                        ? "rgba(70, 42, 103, 0.15)"
                        : "rgba(191, 162, 219, 0.25)"
                      : theme.palette.mode === "light"
                      ? "rgba(0, 0, 0, 0.05)"
                      : "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Dark mode toggle */}
        <IconButton
          color="inherit"
          onClick={toggleDarkMode}
          sx={{
            display: { xs: "none", md: "block" },
            color: theme.palette.mode === "light" ? "#000" : "#fff",
          }}
        >
          {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {/* Drawer for mobile menu */}
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
