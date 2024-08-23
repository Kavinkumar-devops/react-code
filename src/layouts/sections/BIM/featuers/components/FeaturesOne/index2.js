/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// @mui material components
import React from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import bgImage1 from "assets/images/Drone3.jpg";

const description1 = `Building Information Modeling (BIM) is at the forefront of digital transformation in the architecture, engineering, and construction (AEC) industry. At BN-Geospatial, we leverage BIM to revolutionize how projects are designed, built, and managed. Our BIM services provide a comprehensive approach to creating, managing, and visualizing built assets throughout their lifecycle, ensuring better outcomes for both businesses and the built environment.`;
const description2 = `Building Information Modeling (BIM) is a holistic process that integrates multi-disciplinary data to create a digital representation of a building or infrastructure asset. Powered by an intelligent model and cloud-based platform, BIM facilitates the planning, design, construction, and operation of a built asset, enhancing collaboration and decision-making across the project lifecycle.`;
const description3 = `Our 3D Visualization Services enable architects and engineers to bring their designs to life with unparalleled detail and clarity. Utilizing advanced 3D architectural design and virtual tours, we help clients visualize their projects in a virtual environment, identifying potential design issues and optimizing the building&apos;s layout and features before construction begins. Our services set a new standard for presenting ideas, making a lasting impression and ensuring your designs are executed with precision.`;

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Stack
              sx={{
                overflow: "visible", // Ensures the stack expands with its content
                flexWrap: "nowrap",  // Prevents wrapping and scrolling
              }}
            >
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="2rem"
                  height="2rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">mediation</Icon>
                </MKBox>
                <MKTypography variant="body1" color="text" pl={2}>
                  Design & Build with BIM
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body2" color="text" pl={2}>
                  <p>{description1}</p>
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body1" color="text" pl={2}>
                  What is BIM?
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body2" color="text" pl={2}>
                  <p>{description2}</p>
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body1" color="text" pl={2}>
                  3D Virtual Modeling & Visualization
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body2" color="text" pl={2}>
                  <p>{description3}</p>
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;