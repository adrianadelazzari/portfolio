import { Box, Typography, Button, Avatar, Stack, Chip } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useThemeProvider } from "../../theme/ThemeProvider";

const technologies = ["React", "Angular", "Vue.js", "TypeScript", "Storybook"];

export default function Home() {
  const { theme } = useThemeProvider();
  const prefersReducedMotion = useReducedMotion();

  const accentColor =
    theme.palette.mode === "dark" ? "#B085F5" : theme.palette.primary.main;

  const primaryButtonStyles = {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    px: { xs: 2.5, md: 3 },
    py: 1.25,
    fontSize: { xs: "16px", md: "18px" },
    width: { xs: "100%", sm: "auto" },
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    transition: "0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.3)",
    },
  };

  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 64px)",
        py: { xs: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
        // Dot grid pattern
        backgroundImage: `radial-gradient(${isDark ? "rgba(176,133,245,0.18)" : "rgba(103,58,183,0.12)"} 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
      }}
    >
      {/* Radial glow — top left behind text */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: { xs: "400px", md: "600px" },
          height: { xs: "400px", md: "600px" },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${isDark ? "rgba(176,133,245,0.12)" : "rgba(103,58,183,0.08)"} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      {/* Radial glow — bottom right behind avatar */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: { xs: "350px", md: "550px" },
          height: { xs: "350px", md: "550px" },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${isDark ? "rgba(176,133,245,0.1)" : "rgba(103,58,183,0.07)"} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7 }}
        style={{ width: "100%" }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, md: 8 }}
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: "560px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
              Hi, I'm Adriana 👋
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: "text.secondary",
                maxWidth: "100%",
                mx: { xs: "auto", md: 0 },
                lineHeight: 1.4,
              }}
            >
              Frontend Engineer specializing in React, Angular, TypeScript, and
              scalable UI systems
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: { xs: "1rem", md: "1.15rem" },
                maxWidth: "100%",
                mx: { xs: "auto", md: 0 },
                lineHeight: 1.8,
              }}
            >
              I create responsive, accessible interfaces with clean architecture
              and a strong focus on performance and user experience.
            </Typography>

            <Stack
              direction="row"
              spacing={1.25}
              useFlexGap
              flexWrap="wrap"
              sx={{
                mb: 4,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  variant="outlined"
                  sx={{
                    borderColor: accentColor,
                    color: accentColor,
                    backgroundColor: `${accentColor}14`,
                    fontSize: "0.95rem",
                    height: "36px",
                  }}
                />
              ))}
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
              }}
            >
              <Button
                component={Link}
                to="/projects"
                variant="contained"
                size="large"
                sx={primaryButtonStyles}
              >
                Explore Projects
              </Button>

              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                size="large"
                sx={{
                  ...primaryButtonStyles,
                  backgroundColor: "transparent",
                  color: accentColor,
                  border: `2px solid ${accentColor}`,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: `${accentColor}14`,
                    boxShadow: "none",
                    border: `2px solid ${accentColor}`,
                  },
                }}
              >
                Contact Me
              </Button>
            </Stack>
          </Box>

          <Box
            sx={{
              flexShrink: 0,
              order: { xs: -1, md: 0 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                p: "14px",
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                boxShadow: `0px 10px 35px ${theme.palette.primary.main}38`,
                display: "inline-flex",
              }}
            >
              <Avatar
                src="/static/images/profile_pic.png"
                alt="Adriana de Lazzari"
                sx={{
                  width: { xs: 220, md: 290 },
                  height: { xs: 220, md: 290 },
                }}
              />
            </Box>
          </Box>
        </Stack>
      </motion.div>
    </Box>
  );
}
