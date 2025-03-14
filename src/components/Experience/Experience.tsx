import { Box, Typography, Card, CardContent } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
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
    <Box sx={{ padding: "40px", textAlign: "center" }}>
      <Typography variant="h3" sx={{ marginBottom: "20px" }}>
        Work Experience
      </Typography>
      <Timeline position="alternate">
        {experiences.map((job, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: theme.palette.primary.main }}>
                <WorkIcon />
              </TimelineDot>
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Card
                sx={{
                  marginBottom: "30px",
                  textAlign: "left",
                  padding: "30px",
                  maxWidth: "700px",
                  boxShadow: 3,
                  borderRadius: "12px",
                }}
              >
                <CardContent>
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
                  <ul style={{ paddingLeft: "20px" }}>
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>
                        <Typography variant="body1">{achievement}</Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
