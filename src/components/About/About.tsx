import { Box, Typography, Avatar, Stack, Divider } from "@mui/material";

const skills = [
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Material-UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Testing",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  },
  {
    name: "CI/CD",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
  },
  {
    name: "GIT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <Avatar
          src="/static/images/profile_pic.png"
          sx={{ width: 150, height: 150 }}
        />
      </Box>
      <Typography variant="h3" fontWeight="bold">
        About Me
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ marginTop: "10px", maxWidth: "650px" }}
      >
        I'm a passionate Software Engineer specializing in frontend technologies
        such as React.js, Angular, TypeScript, and Material UI. I thrive on
        building scalable and user-friendly applications that enhance user
        experience and business efficiency. With a strong foundation in
        performance optimization, API integrations, and UI modernization, I'm
        always eager to tackle new challenges and improve legacy applications.
      </Typography>

      <Divider sx={{ marginY: "35px", width: "60%" }}>My Skills</Divider>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        spacing={4}
        sx={{ maxWidth: "700px" }}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: "30px",
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              style={{ width: "50px", height: "50px", marginBottom: "5px" }}
            />
            <Typography variant="body1">{skill.name}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
