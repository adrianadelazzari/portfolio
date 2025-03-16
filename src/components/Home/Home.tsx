import { Box, Typography, Button, Avatar, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 8 }}
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            src="/static/images/profile_pic.png"
            sx={{
              width: { xs: 180, md: 250 },
              height: { xs: 180, md: 250 },
              order: { xs: -1, md: 0 },
            }}
          />
          <Stack sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{
                marginBottom: "20px",
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Hi👋, I'm Adriana de Lazzari
            </Typography>
            <Typography
              variant="h6"
              color="gray"
              sx={{
                marginBottom: "20px",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              Frontend Engineer | UI/UX Enthusiast
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "30px",
                fontSize: { xs: "1rem", md: "1.15rem" },
              }}
            >
              I build seamless, scalable, and beautiful web experiences using
              modern technologies.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ justifyContent: "center", marginTop: "10px" }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#462A67",
                  color: "white",
                  padding: { xs: "8px 16px", md: "10px 20px" },
                  fontSize: { xs: "16px", md: "18px" },
                  width: { xs: "100%", sm: "auto" },
                }}
                onClick={() => navigate("/projects")}
              >
                View My Work
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#462A67",
                  color: "white",
                  padding: { xs: "8px 16px", md: "10px 20px" },
                  fontSize: { xs: "16px", md: "18px" },
                  width: { xs: "100%", sm: "auto" },
                }}
                onClick={() => navigate("/contact")}
              >
                Let's Connect!
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </motion.div>
    </Box>
  );
}
