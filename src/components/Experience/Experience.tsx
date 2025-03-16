import { Box, Typography, Card, CardContent, Grid, Stack } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { useThemeProvider } from "../../theme/ThemeProvider";

const experiences = [
  {
    title: "UI Developer",
    company: "AIG",
    location: "Waterloo, Canada (Remote)",
    duration: "Nov 2023 - Present",
    achievements: [
      "Modernized legacy UI using React, Angular, and Material-UI, improving performance and user experience.",
      "Designed and developed a microfrontend architecture to enhance scalability for enterprise applications.",
      "Optimized API integrations with backend teams, ensuring seamless communication via REST APIs.",
      "Implemented Storybook.js for reusable UI components, improving team efficiency.",
      "Debugged and optimized performance to enhance web app speed and responsiveness.",
    ],
  },
  {
    title: "UI Developer",
    company: "Validus Research Inc.",
    location: "Waterloo, Canada",
    duration: "Feb 2023 - Nov 2023",
    achievements: [
      "Engineered and maintained responsive web applications using JavaScript, TypeScript, React, Material UI, Angular, and Node.js.",
      "Spearheaded the redesign and modernization of a legacy UI using an Angular-based in-house framework, improving performance and usability.",
      "Developed a micro-frontend system from scratch using React, Material UI, and Webpack, integrating multiple enterprise applications into a cohesive, scalable architecture.",
      "Designed and built a reusable UI component library using Storybook.js, increasing UI consistency across teams.",
    ],
  },
  {
    title: "Software Engineer",
    company: "RadicalX",
    location: "Remote",
    duration: "Nov 2022 - Feb 2023",
    achievements: [
      "Developed dynamic user interfaces using React, JavaScript, HTML, and CSS.",
      "Managed a team of interns in an Agile environment, leading code reviews and workshops.",
      "Designed and implemented interactive components, improving usability and accessibility.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "RadicalX",
    location: "Remote",
    duration: "Sep 2022 - Nov 2022",
    achievements: [
      "Built and tested UI components with React & JavaScript for a SaaS platform.",
      "Assisted in front-end development tasks in a collaborative Agile team.",
    ],
  },
];

export default function Experience() {
  const { theme } = useThemeProvider();

  return (
    <Box sx={{ padding: { xs: "30px", md: "60px" }, textAlign: "center" }}>
      <Typography
        variant="h3"
        sx={{
          marginBottom: 5,
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontWeight: "bold",
        }}
      >
        Work Experience
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {experiences.map((job, index) => (
          <Grid item xs={12} sm={6} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                textAlign: "left",
                padding: "25px",
                boxShadow: 4,
                borderRadius: "12px",
                backgroundColor: theme.palette.background.paper,
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: 6,
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <WorkIcon color="primary" sx={{ fontSize: 40 }} />
                  <Box>
                    <Typography variant="h5" fontWeight="bold">
                      {job.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {job.company} - {job.location}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="gray"
                      sx={{ marginBottom: "10px" }}
                    >
                      {job.duration}
                    </Typography>
                  </Box>
                </Stack>
                <Stack spacing={1} sx={{ marginTop: 2 }}>
                  {job.achievements.map((achievement, idx) => (
                    <Typography
                      key={idx}
                      variant="body1"
                      sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                    >
                      • {achievement}
                    </Typography>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
