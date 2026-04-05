import React, { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./theme/ThemeProvider";
import Container from "@mui/material/Container";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Articles from "./components/Articles/Articles";
import { Box, Typography, Button } from "@mui/material";

const routeTitles: Record<string, string> = {
  "/": "Adriana de Lazzari — Frontend Engineer",
  "/about": "About | Adriana de Lazzari",
  "/experience": "Experience | Adriana de Lazzari",
  "/projects": "Projects | Adriana de Lazzari",
  "/articles": "Articles | Adriana de Lazzari",
  "/contact": "Contact | Adriana de Lazzari",
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = routeTitles[pathname] ?? "Adriana de Lazzari";
  }, [pathname]);
  return null;
}

function NotFound() {
  const navigate = useNavigate();
  return (
    <Box sx={{ textAlign: "center", py: 10 }}>
      <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
        404
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Page not found
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </Box>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            paddingTop: "64px",
          }}
        >
          <Navbar />
          <Container
            component="main"
            maxWidth="lg"
            sx={{
              flex: "1",
              paddingBottom: "20px",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
        <Analytics />
      </Router>
    </ThemeProvider>
  );
};

export default App;
