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
  useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { useThemeProvider } from "../../theme/ThemeProvider";

const projects = [
  {
    title: "Domino Vision 3000",
    description:
      "A React-based web app for counting and solving domino sets directly in the browser.",
    techStack: ["React", "Material UI", "TensorFlow.js"],
    image: "/static/images/domino-vision.jpg",
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
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Box sx={{ padding: { xs: "30px", md: "50px" }, textAlign: "center" }}>
      <Typography variant="h3" sx={{ marginBottom: "40px" }}>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={10} md={8} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px",
                boxShadow: 4,
                borderRadius: "12px",
                backgroundColor: theme.palette.background.paper,
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: 6,
                },
              }}
            >
              {/* 🖼️ Project Image (Moves Above in Mobile) */}
              <Box
                component="img"
                src={project.image}
                alt={`${project.title} screenshot`}
                sx={{
                  width: isMobile ? "100%" : "250px",
                  height: "auto",
                  maxHeight: "200px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: 3,
                  marginBottom: isMobile ? "15px" : "0",
                }}
              />

              <CardContent
                sx={{
                  flex: 1,
                  textAlign: "left",
                  paddingLeft: isMobile ? "0" : "20px",
                }}
              >
                <Typography variant="h5" fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginY: "15px" }}
                >
                  {project.description}
                </Typography>

                {/* 🏷️ Tech Stack Chips */}
                <Stack
                  direction="row"
                  justifyContent={isMobile ? "center" : "flex-start"}
                  flexWrap="wrap"
                  spacing={1}
                  sx={{ marginTop: "10px" }}
                >
                  {project.techStack.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      sx={{
                        border: `1px solid ${theme.palette.primary.main}`,
                        backgroundColor: "transparent",
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                        fontWeight: "bold",
                        padding: "5px",
                      }}
                    />
                  ))}
                </Stack>

                {/* 🔗 Buttons */}
                <CardActions
                  sx={{
                    justifyContent: isMobile ? "center" : "flex-start",
                    marginTop: "15px",
                    gap: "10px",
                  }}
                >
                  {project.github && (
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                        "&:hover": {
                          backgroundColor: theme.palette.primary.dark,
                        },
                      }}
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  )}
                  {project.liveDemo && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<LanguageIcon />}
                      href={project.liveDemo}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  )}
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
