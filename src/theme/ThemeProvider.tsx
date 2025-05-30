import {
  createTheme,
  Theme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { useState, useMemo, createContext, useContext, ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";

interface ThemeContextProps {
  theme: Theme;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);

  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: "#673AB7",
            light: "#673AB7",
            dark: "#331A4F",
          },
          secondary: {
            main: "#B0BEC5",
            light: "#CFD8DC",
            dark: "#78909C",
          },
          background: {
            default: darkMode ? "#121212" : "#ffffff",
            paper: darkMode ? "#1e1e1e" : "#f5f5f5",
          },
        },
        typography: {
          fontFamily: "Roboto, sans-serif",
          h1: { fontSize: "2rem", fontWeight: 700 },
          h2: { fontSize: "1.5rem", fontWeight: 600 },
          body1: { fontSize: "1rem" },
          body2: { fontSize: "0.875rem", color: "#B0BEC5" },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
              },
            },
          },
        },
      }),
    [darkMode]
  );

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeProvider = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeProvider must be used within a ThemeProvider");
  }
  return context;
};
