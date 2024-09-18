// @mui material components
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
// D&M React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
// D&M React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/Services/MobileMapping/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "./sections/Newsletter";
import BaseLayout from "layouts/sections/components/BaseLayout";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
// Image
import bgImage from "assets/image/3DVisualization.PNG";
import bgImage1 from "assets/image/1.PNG";
import videoSrc1 from "assets/video/mmvideo.mp4";

function AboutUs() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky/>
        <BaseLayout
      // title="Design & Build with BIM"
      breadcrumb={[
        { label: "Home", route: "/" },
        { label: "Mobile Mapping" },
      ]}
    >
      {/* <MKBox
        component="video"
        controls
        width="100%"
        autoPlay
        muted
        loop
        sx={{
          borderRadius: "8px",
          boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.3)", // Black shadow effect
          outline: "none",
          pointerEvents: "none", // Disable user interactions like play/pause/fullscreen
        }}
      >
        <source src={videoSrc1} type="video/mp4" />  
        Your browser does not support the video tag.
      </MKBox> */}
      <MKBox
        sx={{
          position: "relative", // Parent is relative to position children absolutely
          // width: "100%",
          borderRadius: "8px",
          boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.3)", // Black shadow effect
          overflow: "hidden",  // Ensures the video and content stay within the box
        }}
      >
        {/* Background Video */}
        <MKBox
          component="video"
          autoPlay
          muted
          loop
          width="100%"
          sx={{
            borderRadius: "8px",
            boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.3)", // Black shadow effect
            outline: "none",
          }}
        >
          <source src={videoSrc1} type="video/mp4" />
          Your browser does not support the video tag.
        </MKBox>

        {/* Content on top of the video */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",  // Text color
            textAlign: "center",
            padding: "20px",
            zIndex: 1, // Ensure content is above the video
          }}
        >
          <Container>
            <Grid
              container
              item
              xs={12}
              lg={8}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              sx={{ mx: "auto" }}
            >
              <MKTypography
                variant="h1"
                color="white"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                Mobile Mapping
              </MKTypography>
              {/* <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                Real-Time Data Collection - Mobile Mapping - Custom Mapping - GIS Integration
              </MKTypography> */}
            </Grid>
          </Container>
        </Box>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -5,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        {/* <Team /> */}
        {/* <Featuring /> */}
        <Newsletter />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
      </BaseLayout>
    </>
  );
}

export default AboutUs;
