import { Box, Typography, Button, Avatar, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const technologies = [
  "React",
  "Angular",
  "TypeScript",
  "Material UI",
  "Accessibility",
  "Performance",
];

const primaryButtonStyles = {
  backgroundColor: "#9C27B0",
  color: "white",
  px: { xs: 2.5, md: 3 },
  py: 1.25,
  fontSize: { xs: "16px", md: "18px" },
  width: { xs: "100%", sm: "auto" },
  borderRadius: "12px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
  transition: "0.3s ease",
  "&:hover": {
    backgroundColor: "#5a3684",
    boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.3)",
  },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        px: { xs: 3, sm: 5, md: 8, lg: 12 },
        py: { xs: 6, md: 8 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ width: "100%" }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, md: 10 }}
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: "720px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
              Hi, I'm Adriana de Lazzari 👋
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: "text.secondary",
                maxWidth: { xs: "100%", md: "680px" },
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
                maxWidth: { xs: "100%", md: "620px" },
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
              {technologies.map(function (tech) {
                return (
                  <Chip
                    key={tech}
                    label={tech}
                    variant="outlined"
                    sx={{
                      borderColor: "rgba(156, 39, 176, 0.35)",
                      color: "text.secondary",
                      backgroundColor: "rgba(156, 39, 176, 0.08)",
                      fontSize: "0.95rem",
                      height: "36px",
                    }}
                  />
                );
              })}
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
                variant="contained"
                size="large"
                sx={primaryButtonStyles}
                onClick={() => navigate("/projects")}
              >
                Explore Projects
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  ...primaryButtonStyles,
                  backgroundColor: "transparent",
                  color: "#9C27B0",
                  border: "2px solid #9C27B0",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "rgba(156, 39, 176, 0.08)",
                    boxShadow: "none",
                    border: "2px solid #9C27B0",
                  },
                }}
                onClick={() => navigate("/contact")}
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
                background: "linear-gradient(135deg, #9C27B0, #462A67)",
                boxShadow: "0px 10px 35px rgba(156, 39, 176, 0.22)",
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
