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
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useThemeProvider } from "../../theme/ThemeProvider";
import { motion, useReducedMotion } from "framer-motion";

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
  cover?: string;
}

const articles: Article[] = [
  {
    title: "Frontend Architecture: Why It Matters More Than You Think",
    excerpt:
      "Frontend architecture is the structural foundation of your application. How you organize components, manage state, and structure data flow directly impacts scalability, maintainability, developer experience, and performance. Great engineers build systems, not just features.",
    date: "Mar 2026",
    readTime: "4 min read",
    tags: [
      "React",
      "Software Architecture",
      "Frontend Development",
      "Developer Experience",
    ],
    url: "https://adrianadelazzari.medium.com/frontend-architecture-why-it-matters-more-than-you-think-37d459a68985",
    cover: "https://miro.medium.com/1*Zpdmp8qoEml5Bf4jsVHMrQ.png",
  },
  {
    title: "What a Chemistry Background Taught Me About Frontend Development",
    excerpt:
      "A chemistry degree and a frontend career have more in common than you'd expect. From hypothesis-driven debugging and incremental changes to precision, documentation, and staying comfortable with uncertainty. Here's how science shaped the way I write code.",
    date: "Jan 2026",
    readTime: "3 min read",
    tags: [
      "Career Change",
      "Learning to Code",
      "Frontend Development",
      "Software Engineering",
    ],
    url: "https://adrianadelazzari.medium.com/what-a-chemistry-background-taught-me-about-frontend-development-8215c08034ca",
    cover: "https://miro.medium.com/1*Ykmu0mc7f7l_AOHO9iI7Lw.png",
  },
];

export default function Articles() {
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
            mb: 2,
            textAlign: "center",
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          Articles
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, textAlign: "center" }}
        >
          Thoughts on frontend engineering, UI architecture, and developer
          experience, published on{" "}
          <Box
            component="a"
            href="https://adrianadelazzari.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: accentColor,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Medium
          </Box>
          .
        </Typography>

        {articles.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
              Articles coming soon.
            </Typography>
            <Button
              variant="outlined"
              href="https://adrianadelazzari.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<OpenInNewIcon />}
              sx={{
                borderColor: accentColor,
                color: accentColor,
                "&:hover": {
                  borderColor: accentColor,
                  backgroundColor: `${accentColor}14`,
                },
              }}
            >
              Visit Medium Profile
            </Button>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {articles.map((article) => (
              <Grid item xs={12} sm={6} key={article.title}>
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
                  {article.cover && (
                    <Box
                      component="img"
                      src={article.cover}
                      alt={article.title}
                      sx={{
                        width: "100%",
                        height: { xs: "180px", md: "220px" },
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  )}

                  <CardContent
                    sx={{ flex: 1, p: { xs: 2, md: 3 }, pb: "8px !important" }}
                  >
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{ mb: 1, lineHeight: 1.3 }}
                    >
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, lineHeight: 1.7 }}
                    >
                      {article.excerpt}
                    </Typography>
                    <Stack
                      direction="row"
                      flexWrap="wrap"
                      useFlexGap
                      spacing={1}
                      sx={{ mb: 2 }}
                    >
                      {article.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
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
                    </Stack>
                    <Typography variant="caption" color="text.secondary">
                      {article.date} · {article.readTime}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ p: { xs: 2, md: 3 }, pt: 1 }}>
                    <Button
                      variant="contained"
                      size="small"
                      endIcon={<OpenInNewIcon />}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                        "&:hover": {
                          backgroundColor: theme.palette.primary.dark,
                        },
                      }}
                    >
                      Read Article
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      </motion.div>
    </Box>
  );
}
