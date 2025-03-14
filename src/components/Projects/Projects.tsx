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

  return (
    <Box sx={{ padding: "40px", textAlign: "center" }}>
      <Typography variant="h3" sx={{ marginBottom: "50px" }}>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={10} md={8} key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingY: "20px",
                paddingX: "10px",
                width: "100%",
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginY: "20px" }}
                >
                  {project.description}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="center"
                  spacing={1}
                  sx={{
                    marginTop: "25px",
                  }}
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
                <CardActions
                  sx={{
                    justifyContent: "center",
                    marginTop: "20px",
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
              <Box
                component="img"
                src={project.image}
                alt={`${project.title} screenshot`}
                sx={{
                  maxWidth: "280px",
                  height: "220px",
                  objectFit: "contain",
                  borderRadius: "10px",
                  boxShadow: 3,
                  flexShrink: 0,
                  marginRight: "20px",
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
