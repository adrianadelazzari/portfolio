import { Box, Typography, Avatar, Stack, Divider } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import { useThemeProvider } from "../../theme/ThemeProvider";

const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
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
    name: "Material UI",
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
    name: "Storybook",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "Jest",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  },
  {
    name: "Vitest",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
  },
  {
    name: "Karma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/karma/karma-original.svg",
  },
  {
    name: "Jasmine",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jasmine/jasmine-original.svg",
  },
  {
    name: "Azure DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
  },
  {
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
  },
  {
    name: "GitHub Actions",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  },
  {
    name: "GIT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();
  const { theme } = useThemeProvider();
  const isDark = theme.palette.mode === "dark";

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7 }}
      style={{ width: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 64px)",
          textAlign: "center",
          py: { xs: 6, md: 8 },
          px: { xs: 2, sm: 4 },
          mx: "auto",
          maxWidth: "800px",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `radial-gradient(${isDark ? "rgba(176,133,245,0.18)" : "rgba(103,58,183,0.12)"} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      >
        <Box sx={{ position: "absolute", top: "-10%", left: "-5%", width: { xs: "400px", md: "600px" }, height: { xs: "400px", md: "600px" }, borderRadius: "50%", background: `radial-gradient(circle, ${isDark ? "rgba(176,133,245,0.12)" : "rgba(103,58,183,0.08)"} 0%, transparent 70%)`, pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", bottom: "-10%", right: "-5%", width: { xs: "350px", md: "550px" }, height: { xs: "350px", md: "550px" }, borderRadius: "50%", background: `radial-gradient(circle, ${isDark ? "rgba(176,133,245,0.10)" : "rgba(103,58,183,0.07)"} 0%, transparent 70%)`, pointerEvents: "none" }} />
        <Avatar
          src="/static/images/profile_pic.png"
          alt="Adriana de Lazzari"
          sx={{
            width: { xs: 120, md: 150 },
            height: { xs: 120, md: 150 },
            mb: 3,
          }}
        />
        <Typography variant="h3" fontWeight="bold">
          About Me
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 2, maxWidth: "650px" }}
        >
          I'm a passionate Software Engineer specializing in frontend
          technologies such as React, Angular, TypeScript, and Material UI. I
          thrive on building scalable and user-friendly applications that
          enhance user experience and business efficiency. With a strong
          foundation in performance optimization, API integrations, and UI
          modernization, I'm always eager to tackle new challenges and improve
          legacy applications.
        </Typography>

        <Divider sx={{ marginY: "35px", width: { xs: "80%", md: "60%" } }}>
          My Skills
        </Divider>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          useFlexGap
          spacing={4}
          sx={{ maxWidth: "700px", width: "100%" }}
        >
          {skills.map((skill) => (
            <Box
              key={skill.name}
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
    </motion.div>
  );
}
