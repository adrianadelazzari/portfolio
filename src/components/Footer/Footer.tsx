import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

interface FooterProps {}

const Footer = () => (
  <Box
    component="footer"
    sx={{ textAlign: "center", py: 3, mt: 5, bgcolor: "background.default" }}
  >
    <Typography variant="body2">
      &copy; 2025 Adriana de Lazzari. All Rights Reserved.
    </Typography>
  </Box>
);

export default Footer;
