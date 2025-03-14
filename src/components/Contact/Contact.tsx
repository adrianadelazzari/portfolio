import {
  Box,
  Typography,
  Link,
  Stack,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "30px" }}>
        Let's Connect!
      </Typography>
      <Typography variant="h6" color="gray" sx={{ marginBottom: "20px" }}>
        Feel free to reach out to me via:
      </Typography>

      {/* ✅ Stack to Align Cards */}
      <Stack spacing={3} sx={{ width: "100%", maxWidth: "450px" }}>
        {contacts.map((contact, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px 20px",
              borderRadius: "12px",
              boxShadow: 3,
            }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ marginBottom: "10px" }}
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
                  }}
                >
                  {contact.url}
                </Link>
              </Typography>
            </CardContent>
            <IconButton
              href={contact.url}
              target="_blank"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: "white",
              }}
            >
              {contact.icon}
            </IconButton>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
