/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// D&M React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
// D&M React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import ReadMore from "pages/Presentation/sections/Readmore"
import Newsletter from "./sections/ContactUs/Newsletter";
// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";
import React, { useState, useEffect, useRef } from "react";
// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
//import './styles.css'; // Import the CSS file
// Image
import bgImage1 from "assets/image/BIM3.jpg";
import bgImage2 from "assets/image/drone_mapping3.png";
import bgImage3 from "assets/image/photogramettry2.jpg";
// import bgImage4 from "assets/image/GIS4.jpeg";
// import bgImage5 from "assets/image/GIS1.png";
import Posts from "pages/LandingPages/Author/sections/Posts";
import { keyframes } from "@mui/system";

// Define the keyframes for sliding the background from right to left
const slideBackground = keyframes`
  0% {
    background-position: left center;
  }
  100% {
    background-position: right center;
  }
`;
const contentArray = [
  "Scan to BIM - As built model - BIM services",
  "3D Modelling - Planimetric Mapping",
  "DTM Mapping - Corridor Mapping - Hydro Mapping",
];

const imageArray = [bgImage1, bgImage2, bgImage3];

function Presentation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const clearSlideInterval = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const startSlideInterval = () => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 5000);
  };

  const handleNext = () => {
    clearSlideInterval();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    startSlideInterval();
  };

  const handlePrev = () => {
    clearSlideInterval();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
    );
    startSlideInterval();
  };

  useEffect(() => {
    startSlideInterval();

    return () => clearSlideInterval(); // Clean up on component unmount
  }, []);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        // transparent
        // dark
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${imageArray[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center", // Centered background position
          display: "grid",
          placeItems: "center",
          transition: "background-image 1s ease-in-out", // Smooth transition for the background image
          animation: `${slideBackground} 1s ease-in-out`, // Optional fade-in effect
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
      <Container
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark background
          borderRadius: "8px", // Rounded corners
          padding: "24px", // Padding around the content
          marginTop: "16px", // Space between the title and content
          textAlign: "center", // Center-align the content
          maxWidth: "800px", // Limit the width of the container
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)", // Shadow effect for elevation
        }}
      >
        <MKTypography variant="body1" color="white">
          {contentArray[currentIndex]}
        </MKTypography>
      </Container>
          </Grid>
        </Container>
      {/* Previous Button */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: "16px",
          top: "30%", // Lift the button up
          transform: "translateY(-50%)",
          color: "lightblue", // Change button color
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a background color
          '&:hover': {
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker background on hover
          },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* Next Button */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: "16px",
          top: "30%", // Lift the button up
          transform: "translateY(-50%)",
          color: "lightblue", // Change button color
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a background color
          '&:hover': {
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker background on hover
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Posts />
        <Information />
        {/* <Testimonials /> */}
        {/* <Download /> */}
        <ReadMore/>
        <Newsletter />
        {/* <Pages/> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
