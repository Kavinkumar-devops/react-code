// @mui material components
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
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
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";
import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
// Image
// import bgImage from "assets/images/bg-about-us.jpg";
import bgImage from "assets/images/aboutus.jpg";


function AboutUs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.bngeospatial.com/product/material-kit-react",
        //   label: "free download",
        //   color: "default",
        // }}
        // transparent
        // light
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
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
              About Company
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Welcome to BN-GeoSpacial
            </MKTypography>
            {/* <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              create account
            </MKButton> */}
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        {/* <Team />
        <Featuring />
        <Newsletter /> */}
      </Card>
      <ScrollToTopButton/>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
