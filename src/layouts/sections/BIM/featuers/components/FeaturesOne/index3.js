/* eslint-disable no-unused-vars */
// prettier-ignore
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
// D&M React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage1 from "assets/images/Drone3.jpg";

const description1 = `Our 3D Visualization Services enable architects and engineers to bring their designs to life with unparalleled detail and clarity. Utilizing advanced 3D architectural design and virtual tours, we help clients visualize their projects in a virtual environment, identifying potential design issues and optimizing the building's layout and features before construction begins. Our services set a new standard for presenting ideas, making a lasting impression and ensuring your designs are executed with precision.`;
const description2 = `Architectural BIM is a digital platform that streamlines the planning, design, and execution of both commercial and residential construction projects. At BN-Geospatial, our architectural engineers use BIM for accurate and detailed architectural modeling, ensuring every element of the design is meticulously planned. Using tools like Revit, we create comprehensive information models that support seamless project execution and integration across all phases of construction`;
const description3 = `Structural BIM focuses on the detailed modeling of a building's structural components, including foundations, walls, columns, beams, and roofing systems. Our structural BIM services ensure that every aspect of the building’s structure is accurately represented and integrated into the overall project model, providing a clear and coordinated view of the building's structural integrity from concept to completion.`;

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          {/* prettier-ignore */}
          <Grid >
          <Stack>
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
                  3D Virtual Modeling & Visualization
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body2" color="text" pl={2}>
                  <p>{description1}</p>
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body1" color="text" pl={2}>
                  Architectural BIM Services
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body2" color="text" pl={2}>
                  <p>{description2}</p>
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body1" color="text" pl={2}>
                  Structural BIM Services
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
