import { Box, Typography, Card, CardContent, Chip, Divider } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { useThemeProvider } from "../../theme/ThemeProvider";
import { motion, useReducedMotion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Angular", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Redux", "Tailwind CSS", "Material UI"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "REST APIs", "API Integration", "Firebase"],
  },
  {
    category: "AI-Assisted Development",
    items: ["GitHub Copilot", "Claude", "Codex"],
  },
  {
    category: "UI/UX & Design Systems",
    items: ["Responsive Design", "Accessibility (WCAG)", "Storybook", "Figma"],
  },
  {
    category: "Architecture",
    items: ["Micro-frontends", "Component Libraries", "Performance Optimization"],
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library", "Cypress", "Jasmine", "Karma"],
  },
  {
    category: "Build & Bundling",
    items: ["Webpack", "Vite", "Babel"],
  },
  {
    category: "Version Control",
    items: ["Git"],
  },
  {
    category: "CI/CD & Deployment",
    items: ["GitHub Actions", "Azure DevOps", "Vercel"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "MS SQL Server", "Elasticsearch"],
  },
];

const experiences = [
  {
    title: "Frontend Engineer",
    company: "AIG",
    location: "Kitchener, ON, Canada (Remote)",
    duration: "Nov 2023 - Present",
    achievements: [
      "Develop and modernize enterprise risk and underwriting platforms used by global underwriting teams to evaluate large volumes of policy and financial risk data.",
      "Architect and implement scalable micro-frontend architectures using React, TypeScript, Redux, Material UI, Webpack, and Single-SPA to support modular development across large enterprise web applications.",
      "Build reusable UI component libraries with Storybook, reducing duplicate UI development by ~40% and accelerating feature delivery.",
      "Lead modernization initiatives to migrate legacy UI modules into a scalable Angular-based framework, improving maintainability, consistency, and long-term platform sustainability.",
      "Integrate RESTful APIs and manage complex client-side application state using Redux to support dynamic financial workflows and reliable data synchronization.",
      "Implement responsive and accessible React interfaces from Figma designs while ensuring cross-browser compatibility and WCAG accessibility standards.",
      "Own frontend features end-to-end, from technical design and architecture to implementation, testing, and production deployment.",
      "Collaborate closely with product managers, designers, and backend engineers to deliver complex features while maintaining high engineering and code quality standards.",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Validus Research Inc.",
    location: "Waterloo, ON, Canada (Hybrid)",
    duration: "Feb 2023 - Nov 2023",
    achievements: [
      "Built and modernized frontend applications for financial analytics platforms using React.js, Angular, and Vue.js, supporting large-scale underwriting and portfolio analysis workflows.",
      "Rebuilt the frontend of a legacy internal platform using Angular and TypeScript, enabling real-time updates for operational data, including clients, contracts, and portfolio metrics.",
      "Integrated frontend modules with REST APIs and backend services, ensuring reliable data synchronization for complex underwriting workflows.",
      "Developed reusable UI components and implemented modern component architecture patterns, improving maintainability and scalability across the platform.",
      "Created and maintained a Storybook component library, enabling reusable UI components and consistent design patterns across multiple internal applications.",
      "Collaborated with product managers, designers, and backend engineers in Agile teams to deliver features and improve user experience for internal analytics platforms used by 500+ users.",
      "Diagnosed and resolved performance bottlenecks in production systems, ensuring responsive interfaces for data-intensive financial workflows.",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "RadicalX",
    location: "Kitchener, ON, Canada (Remote)",
    duration: "Nov 2022 - Feb 2023",
    achievements: [
      "Developed frontend features for a developer education platform, building interactive tools and dashboards that supported online courses and hands-on learning experiences for interns.",
      "Built scalable UI components using React and TypeScript, improving maintainability and consistency across course interfaces and learning modules.",
      "Integrated frontend features with Firebase authentication and real-time data services, enabling dynamic user experiences and live updates across the platform.",
      "Designed modular UI components and reusable patterns to support scalable frontend development across multiple course environments.",
      "Mentored interns through code reviews, technical guidance, and frontend best practices while contributing to collaborative development workshops.",
    ],
  },
  {
    title: "Frontend Engineer Intern",
    company: "RadicalX",
    location: "Kitchener, ON, Canada (Remote)",
    duration: "Sep 2022 - Nov 2022",
    achievements: [
      "Developed reusable UI components using React, TypeScript, JavaScript, HTML5, and CSS3 to support consistent interface patterns.",
      "Assisted engineering teams with task organization and project coordination to improve development workflow efficiency.",
    ],
  },
  {
    title: "Technical Support Specialist",
    company: "3sHealth",
    location: "Kitchener, ON, Canada (Remote)",
    duration: "Oct 2022 - Nov 2022",
    achievements: [
      "Assisted in the migration of 80+ legacy systems to a modern healthcare platform used by the Government of Saskatchewan, supporting workforce operations including shift management and payment processing.",
      "Delivered training and technical support through ServiceNow, ensuring smooth system adoption and minimizing operational disruptions.",
    ],
  },
];

export default function Experience() {
  const { theme } = useThemeProvider();
  const prefersReducedMotion = useReducedMotion();
  const accentColor =
    theme.palette.mode === "dark" ? "#B085F5" : theme.palette.primary.main;
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
          Work Experience
        </Typography>

        {experiences.map((job, index) => {
          const isCurrentRole = index === 0;
          const isLast = index === experiences.length - 1;

          return (
            <Box
              key={`${job.company}-${job.title}`}
              sx={{ display: "flex", gap: { xs: 2, md: 3 } }}
            >
              {/* Timeline column: dot + connector line */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 36, md: 44 },
                    height: { xs: 36, md: 44 },
                    borderRadius: "50%",
                    backgroundColor: isCurrentRole
                      ? theme.palette.primary.main
                      : theme.palette.background.paper,
                    border: `2px solid ${theme.palette.primary.main}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    zIndex: 1,
                  }}
                >
                  <WorkIcon
                    sx={{
                      fontSize: { xs: 16, md: 20 },
                      color: isCurrentRole
                        ? "white"
                        : theme.palette.primary.main,
                    }}
                  />
                </Box>
                {!isLast && (
                  <Box
                    sx={{
                      width: "2px",
                      flex: 1,
                      minHeight: "32px",
                      backgroundColor: theme.palette.divider,
                      my: 1,
                    }}
                  />
                )}
              </Box>

              {/* Content card */}
              <Box sx={{ flex: 1, pb: isLast ? 0 : 5 }}>
                <Card
                  sx={{
                    borderRadius: "12px",
                    boxShadow: 3,
                    backgroundColor: theme.palette.background.paper,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 2, md: 3 },
                      "&:last-child": { pb: { xs: 2, md: 3 } },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <Box>
                        <Typography variant="h5" fontWeight="bold">
                          {job.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {job.company} · {job.location}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: { xs: "flex-start", sm: "flex-end" },
                          gap: 0.5,
                        }}
                      >
                        {isCurrentRole && (
                          <Chip
                            label="Current"
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: accentColor,
                              color: accentColor,
                              fontWeight: "bold",
                              borderRadius: "6px",
                            }}
                          />
                        )}
                        <Typography variant="caption" color="text.secondary">
                          {job.duration}
                        </Typography>
                      </Box>
                    </Box>

                    <Box component="ul" sx={{ mt: 2, pl: "1.25rem", mb: 0 }}>
                      {job.achievements.map((achievement) => (
                        <Typography
                          component="li"
                          key={achievement}
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: "0.9rem", md: "1rem" },
                            mb: 0.5,
                          }}
                        >
                          {achievement}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          );
        })}

        <Divider sx={{ my: 6 }}>Technical Skills</Divider>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          {skills.map(({ category, items }) => (
            <Box
              key={category}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 1, md: 2 },
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{
                  minWidth: { md: "200px" },
                  color: "text.primary",
                  pt: 0.4,
                  flexShrink: 0,
                }}
              >
                {category}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {items.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: accentColor,
                      color: accentColor,
                      backgroundColor: `${accentColor}0d`,
                      fontSize: "0.75rem",
                      letterSpacing: "0.02em",
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      </motion.div>
    </Box>
  );
}
