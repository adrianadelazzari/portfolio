import { Box, Typography, Card, Grid, SvgIcon } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useThemeProvider } from "../../theme/ThemeProvider";
import { motion, useReducedMotion } from "framer-motion";

function MediumIcon() {
  return (
    <SvgIcon sx={{ fontSize: 36 }} viewBox="0 0 24 24">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </SvgIcon>
  );
}

const contacts = [
  {
    name: "LinkedIn",
    handle: "@adrianadelazzari",
    url: "https://www.linkedin.com/in/adrianadelazzari",
    icon: <LinkedInIcon sx={{ fontSize: 36 }} />,
  },
  {
    name: "GitHub",
    handle: "@adrianadelazzari",
    url: "https://github.com/adrianadelazzari",
    icon: <GitHubIcon sx={{ fontSize: 36 }} />,
  },
  {
    name: "Medium",
    handle: "@adrianadelazzari",
    url: "https://adrianadelazzari.medium.com",
    icon: <MediumIcon />,
  },
];

export default function Contact() {
  const { theme } = useThemeProvider();
  const prefersReducedMotion = useReducedMotion();
  const accentColor =
    theme.palette.mode === "dark" ? "#B085F5" : theme.palette.primary.main;

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
          py: { xs: 6, md: 8 },
          px: { xs: 2, sm: 4 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `radial-gradient(${isDark ? "rgba(176,133,245,0.18)" : "rgba(103,58,183,0.12)"} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      >
        <Box sx={{ position: "absolute", top: "-10%", left: "-5%", width: { xs: "400px", md: "600px" }, height: { xs: "400px", md: "600px" }, borderRadius: "50%", background: `radial-gradient(circle, ${isDark ? "rgba(176,133,245,0.12)" : "rgba(103,58,183,0.08)"} 0%, transparent 70%)`, pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", bottom: "-10%", right: "-5%", width: { xs: "350px", md: "550px" }, height: { xs: "350px", md: "550px" }, borderRadius: "50%", background: `radial-gradient(circle, ${isDark ? "rgba(176,133,245,0.10)" : "rgba(103,58,183,0.07)"} 0%, transparent 70%)`, pointerEvents: "none" }} />
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ mb: 2, fontSize: { xs: "2rem", md: "2.5rem" } }}
        >
          Let's Connect!
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: "480px" }}
        >
          I'm always open to new opportunities and collaborations. Feel free to
          reach out on any of these platforms.
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ maxWidth: "680px", width: "100%" }}
        >
          {contacts.map((contact) => (
            <Grid item xs={12} sm={4} key={contact.name}>
              <Card
                component="a"
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: { xs: 3, md: 4 },
                  borderRadius: "16px",
                  textDecoration: "none",
                  boxShadow: 3,
                  backgroundColor: theme.palette.background.paper,
                  border: "1px solid transparent",
                  transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                    borderColor: accentColor,
                  },
                }}
              >
                <Box
                  sx={{
                    color: accentColor,
                    width: 64,
                    height: 64,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: `${accentColor}14`,
                    mb: 2,
                  }}
                >
                  {contact.icon}
                </Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="text.primary"
                >
                  {contact.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  {contact.handle}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
}
