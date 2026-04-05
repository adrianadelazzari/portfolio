import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Chip,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { useThemeProvider } from "../../theme/ThemeProvider";
import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    title: "Trading Dashboard",
    description:
      "A crypto trading interface featuring asset tabs for BTC and ETH, live order book, interactive depth chart, order entry form, and trade history.",
    techStack: ["React", "Material UI", "Express.js"],
    image: "/static/images/trading-dashboard.png",
    github: "https://github.com/adrianadelazzari/trading-dashboard",
  },
  {
    title: "Domino Vision 3000",
    description:
      "A React-based web app for counting and solving domino sets directly in the browser.",
    techStack: ["React", "Material UI", "TensorFlow.js"],
    image: "/static/images/domino-vision.jpg",
    imagePosition: "center",
    github: "https://github.com/evandrowcg/domino-vision-3000-ui",
    liveDemo: "https://domino-vision-3000.vercel.app/",
  },
  {
    title: "DevMeet",
    description:
      "A web application that helps users explore, bookmark, and manage tech meetups. Features include event filtering, bookmarking, and search functionality.",
    techStack: ["React", "Material UI", "Framer Motion"],
    image: "/static/images/dev-meet.png",
    github: "https://github.com/adrianadelazzari/dev-meet",
  },
  {
    title: "Smart Notes",
    description:
      "A modern note-taking application with a clean UI and essential features like editing and deleting notes.",
    techStack: ["React", "Material UI"],
    image: "/static/images/smart-notes.png",
    github: "https://github.com/adrianadelazzari/smart-notes",
  },
];

export default function Projects() {
  const { theme } = useThemeProvider();
  const prefersReducedMotion = useReducedMotion();
  const chipColor = theme.palette.mode === "dark" ? "#B085F5" : theme.palette.primary.main;
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundImage: `radial-gradient(${isDark ? "rgba(176,133,245,0.18)" : "rgba(103,58,183,0.12)"} 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
      }}
    >
      <Box sx={{ position: "absolute", top: "-10%", left: "-5%", width: { xs: "400px", md: "600px" }, height: { xs: "400px", md: "600px" }, borderRadius: "50%", background: `radial-gradient(circle, ${isDark ? "rgba(176,133,245,0.12)" : "rgba(103,58,183,0.08)"} 0%, transparent 70%)`, pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", bottom: "-10%", right: "-5%", width: { xs: "350px", md: "550px" }, height: { xs: "350px", md: "550px" }, borderRadius: "50%", background: `radial-gradient(circle, ${isDark ? "rgba(176,133,245,0.10)" : "rgba(103,58,183,0.07)"} 0%, transparent 70%)`, pointerEvents: "none" }} />
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7 }}
        style={{ width: "100%" }}
      >
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          px: { xs: 2, sm: 4 },
          maxWidth: "1000px",
          mx: "auto",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            mb: 6,
            textAlign: "center",
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          Projects
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project) => (
            <Grid item xs={12} sm={6} key={project.title}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "12px",
                  boxShadow: 4,
                  backgroundColor: theme.palette.background.paper,
                  overflow: "hidden",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  sx={{
                    width: "100%",
                    height: { xs: "200px", md: "240px" },
                    objectFit: "cover",
                    objectPosition: project.imagePosition ?? "top",
                  }}
                />

                <CardContent sx={{ flex: 1, p: { xs: 2, md: 3 } }}>
                  <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.7 }}
                  >
                    {project.description}
                  </Typography>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    useFlexGap
                    spacing={1}
                  >
                    {project.techStack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: chipColor,
                        color: chipColor,
                        backgroundColor: `${chipColor}0d`,
                        fontSize: "0.75rem",
                        letterSpacing: "0.02em",
                        transition: "background-color 0.2s",
                        "&:hover": {
                          backgroundColor: `${chipColor}20`,
                        },
                      }}
                    />
                  ))}
                  </Stack>
                </CardContent>

                <CardActions sx={{ p: { xs: 2, md: 3 }, pt: 0, gap: 1 }}>
                  {project.github && (
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                        "&:hover": { backgroundColor: theme.palette.primary.dark },
                      }}
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Button>
                  )}
                  {project.liveDemo && (
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: chipColor,
                        color: chipColor,
                        "&:hover": {
                          borderColor: chipColor,
                          backgroundColor: `${chipColor}14`,
                        },
                      }}
                      startIcon={<LanguageIcon />}
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      </motion.div>
    </Box>
  );
}
