import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 2,
        mt: "auto",
        bgcolor: "background.default",
        width: "100%",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.mode === "dark" ? "grey.400" : "grey.800",
        }}
      >
        &copy; {new Date().getFullYear()} Adriana de Lazzari.
      </Typography>
    </Box>
  );
};

export default Footer;
