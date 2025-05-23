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
          <Stack sx={{ textAlign: "start" }}>
            <Typography
              variant="h3"
              fontWeight={600}
              sx={{
                marginBottom: "20px",
              }}
            >
              Hi, I'm Adriana de Lazzari👋
            </Typography>
            <Typography
              variant="h4"
              color="gray"
              sx={{
                marginBottom: "20px",
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
              sx={{ justifyContent: "start", marginTop: "10px" }}
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
                  border: "2px solid #462A67",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                  transition: "0.3s ease",
                  "&:hover": {
                    backgroundColor: "#5a3684",
                    boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.3)",
                  },
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
                  border: "2px solid #462A67",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                  transition: "0.3s ease",
                  "&:hover": {
                    backgroundColor: "#5a3684",
                    boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.3)",
                  },
                }}
                onClick={() => navigate("/contact")}
              >
                Let's Connect!
              </Button>
            </Stack>
          </Stack>
          <Box
            sx={{
              border: "1px solid #9C27B0",
              borderRadius: "50%",
              padding: "20px",
              display: "inline-block",
              order: { xs: -1, md: 0 },
            }}
          >
            <Avatar
              src="/static/images/profile_pic.png"
              sx={{
                width: { xs: 200, md: 280 },
                height: { xs: 200, md: 280 },
              }}
            />
          </Box>
        </Stack>
      </motion.div>
    </Box>
  );
}
