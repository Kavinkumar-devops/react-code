/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// @mui material components
import Grid from "@mui/material/Grid";
// D&M React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
// D&M React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function UnderDevelopment() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        sticky
      />
      <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        textAlign="center"
      >
        <ConstructionIcon style={{ fontSize: 100, color: '#f57c00' }} />
        <Typography variant="h4" gutterBottom>
          Page Under Development
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          We re working hard to bring you this page. Please check back later!
        </Typography>
        <Button variant="contained" color="primary" href="/">
          Go to Homepage
        </Button>
      </Box>
    </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default UnderDevelopment;
