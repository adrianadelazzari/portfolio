import { Box, Typography, Button, Avatar, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useThemeProvider } from "../../theme/ThemeProvider";

export default function Home() {
  const navigate = useNavigate();
  const { theme, toggleDarkMode } = useThemeProvider();

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Stack direction="row" spacing={8}>
          <Stack>
            <Typography
              variant="h2"
              fontWeight={600}
              sx={{ marginBottom: "30px" }}
            >
              Hi👋, I'm Adriana de Lazzari
            </Typography>
            <Typography variant="h5" color="gray" sx={{ marginBottom: "30px" }}>
              Frontend Engineer | UI/UX Enthusiast
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "40px" }}>
              I build seamless, scalable, and beautiful web experiences using
              modern technologies.
            </Typography>
            <Stack
              direction="row"
              spacing={4}
              sx={{ justifyContent: "center", marginTop: "15px" }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  padding: "10px 20px",
                  fontSize: "18px",
                  marginTop: "50px",
                }}
                onClick={() => navigate("/projects")}
              >
                View my work
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  padding: "10px 20px",
                  fontSize: "18px",
                  marginTop: "50px",
                }}
                onClick={() => navigate("/contact")}
              >
                Let's connect!
              </Button>
            </Stack>
          </Stack>
          <Avatar
            src="/static/images/profile_pic.png"
            sx={{ width: 200, height: 200 }}
          />
        </Stack>
      </motion.div>
    </Box>
  );
}
