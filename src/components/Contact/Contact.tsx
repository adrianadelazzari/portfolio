import {
  Box,
  Typography,
  Link,
  Stack,
  Card,
  CardContent,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useThemeProvider } from "../../theme/ThemeProvider";

const contacts = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adrianalazzari",
    icon: <LinkedInIcon fontSize="large" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/adrianadelazzari",
    icon: <GitHubIcon fontSize="large" />,
  },
];

export default function Contact() {
  const { theme } = useThemeProvider();
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        padding: { xs: "20px", md: "40px" },
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "30px" }}>
        Let's Connect!
      </Typography>
      <Typography variant="h6" color="gray" sx={{ marginBottom: "20px" }}>
        Feel free to reach out to me via:
      </Typography>

      <Stack spacing={3} sx={{ width: "100%", maxWidth: "450px" }}>
        {contacts.map((contact, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "space-between",
              padding: "15px 20px",
              borderRadius: "12px",
              boxShadow: 4,
              textAlign: isMobile ? "center" : "left",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: 6,
              },
            }}
          >
            <IconButton
              href={contact.url}
              target="_blank"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: "white",
                width: "50px",
                height: "50px",
                marginBottom: isMobile ? "10px" : "0",
                marginRight: isMobile ? "0" : "15px",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              {contact.icon}
            </IconButton>

            <CardContent sx={{ flex: 1, minWidth: "0" }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ marginBottom: "10px", whiteSpace: "nowrap" }}
              >
                {contact.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Link
                  href={contact.url}
                  target="_blank"
                  underline="hover"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    color: theme.palette.secondary.main,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "inline-block",
                    maxWidth: "100%",
                  }}
                >
                  {contact.url}
                </Link>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
