// @mui material components
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// D&M React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
// D&M React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/Services/GIS/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "./sections/Newsletter";
import BaseLayout from "layouts/sections/components/BaseLayout";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
// Image
import bgImage from "assets/image/GIS4.jpeg";
import bgImage1 from "assets/image/GIS1.png";
import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';
const bgImages = [
  bgImage
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
        { label: "Home", route: "/sections/GIS/features" },
        { label: "GIS" },
      ]}
    >
    <MKBox
      minHeight="75vh"
      width="100%"
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.6),
            rgba(gradients.dark.state, 0.6)
          )}, url(${bgImages[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
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
          sx={{ mx: "auto", textAlign: "center" }}
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
            GIS ( QGIS AND ArcGIS )
          </MKTypography>
          {/* <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
            We&apos;re constantly trying to express ourselves and actualize our dreams. If you
            have the opportunity to play this game
          </MKTypography> */}
        </Grid>
      </Container>
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
        {/* <Newsletter /> */}
      </Card>
      <ScrollToTopButton/>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
      </BaseLayout>
    </>
  );
}

export default AboutUs;
