/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";

export default function ChristmasBanner() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", md: "1200px" },
       // mx: "auto",           // center it
        borderRadius: 3,
        overflow: "hidden",
        background: "linear-gradient(90deg, #b30000, #ff5733, #0f6848)",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        p: isMobile ? 3 : 5,
        color: "#fff",
        textAlign: isMobile ? "center" : "left",
        gap: isMobile ? 3 : 0,
      }}
    >
      {/* LEFT SECTION */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          fontWeight="bold"
          sx={{ textTransform: "uppercase" }}
        >
          Christmas Special
        </Typography>

        <Typography variant={isMobile ? "body1" : "h6"} sx={{ mt: 1 }}>
          Wishing you a Merry Christmas!
        </Typography>

        <Typography
          variant="caption"
          sx={{ display: "block", mt: 3, opacity: 0.7 }}
        >
          *Terms & Conditions apply
        </Typography>
      </Box>

      {/* Vertical Line on Desktop */}
      {!isMobile && (
        <Box
          sx={{
            width: "2px",
            height: "80px",
            backgroundColor: "rgba(255,255,255,0.4)",
            mx: 4,
          }}
        />
      )}

      {/* RIGHT SECTION */}
      <Box sx={{ flex: 1, textAlign: isMobile ? "center" : "right" }}>
        {/* <Typography variant="caption" sx={{ opacity: 0.7 }}>
          BRANDNAME
        </Typography> */}

        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="bold"
          sx={{ mt: 1, textTransform: "uppercase" }}
        >
          For Special
        </Typography>

        <Typography
          variant={isMobile ? "h4" : "h3"}
          fontWeight="bold"
          sx={{ color: "#ffeb3b", textTransform: "uppercase" }}
        >
          Discounts
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#ffcc00",
            color: "#000",
            fontWeight: "bold",
            px: isMobile ? 3 : 5,
            py: 1.2,
            borderRadius: "30px",
            fontSize: isMobile ? "0.9rem" : "1rem",
            "&:hover": {
              backgroundColor: "#ffdb4d",
            },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}
