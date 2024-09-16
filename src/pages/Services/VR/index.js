// @mui material components
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
// D&M React components
import MKBox from "components/MKBox";
// D&M React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/Services/VR/sections/Information";
import BaseLayout from "layouts/sections/components/BaseLayout";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
// Image
import bgImage from "assets/image/3DVisualization.PNG";
import bgImage1 from "assets/image/1.PNG";
import gifSrc from "assets/VR/AVR_GIF.gif";

const bgImages = [
  bgImage,
  bgImage1
];

function AboutUs() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % bgImages.length);
    }, 4000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <>
          <DefaultNavbar routes={routes} sticky/>
        <BaseLayout
      // title="Design & Build with BIM"
      breadcrumb={[
        { label: "Home", route: "/" },
        { label: "VR" },
      ]}
    >
<MKBox
  sx={{
    position: "relative", // Allows child elements to be positioned absolutely
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.3)", // Black shadow effect
    overflow: "hidden",  // Ensures content stays within the box
  }}
>
  {/* Background GIF */}
  <Box
    component="img"
    src={gifSrc}  // Path to your GIF file
    alt="GIF Animation"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "cover",  // Ensures the GIF fills the box
    }}
  />

  {/* Content on top of the GIF */}
  {/* <Box
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
        <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
          Real-Time Data Collection - Mobile Mapping - Custom Mapping - GIS Integration
        </MKTypography>
      </Grid>
    </Container>
  </Box> */}
</MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -12,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        {/* <Newsletter /> */}
        </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
      </BaseLayout>
    </>
  );
}

export default AboutUs;
