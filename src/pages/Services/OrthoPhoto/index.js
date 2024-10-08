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
import Information from "./sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "./sections/Newsletter";
import BaseLayout from "layouts/sections/components/BaseLayout";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';
// Image
import bgImage1 from "assets/ortho/slide/slide2.JPG";
import bgImage2 from "assets/ortho/slide/slide3.JPG";
import bgImage3 from "assets/ortho/slide/slide4.JPG";
import bgImage4 from "assets/ortho/slide/slide1.JPG";

const bgImages = [
  bgImage1,
  bgImage2,
  bgImage3,
  bgImage4
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
      title="Ortho Photo"
      breadcrumb={[
        { label: "Home", route: "/" },
        { label: "Ortho Photo" },
      ]}
    >
    <MKBox
      minHeight="75vh"
      width="100%"
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.2), // Reduced opacity to make the image clearer
            rgba(gradients.dark.state, 0.2)
          )}, url(${bgImages[currentImage]})`,
        backgroundSize: "cover", // Ensures the image covers the entire area
        backgroundPosition: "center", // Centers the image
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
            Ortho Photo
          </MKTypography>
          {/* <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
          Orthoimagery Creation - DTM - Image Format Versatility - Advanced Orthorectification
          </MKTypography> */}
            {/* <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              Start Reading
            </MKButton>
          <MKTypography variant="h6" color="white" mt={8} mb={1}>
            Find us on
          </MKTypography>
          <MKBox display="flex" justifyContent="center" alignItems="center">
            <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
              <i className="fab fa-facebook" />
            </MKTypography>
            <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
              <i className="fab fa-instagram" />
            </MKTypography>
            <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
              <i className="fab fa-twitter" />
            </MKTypography>
            <MKTypography component="a" variant="body1" color="white" href="#">
              <i className="fab fa-google-plus" />
            </MKTypography>
          </MKBox> */}
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
