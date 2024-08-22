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

<<<<<<< HEAD
const description1 = `Building Information Modeling (BIM) is at the forefront of digital transformation in the architecture, engineering, and construction (AEC) industry. At BN-Geospatial, we leverage BIM to revolutionize how projects are designed, built, and managed. Our BIM services provide a comprehensive approach to creating, managing, and visualizing built assets throughout their lifecycle, ensuring better outcomes for both businesses and the built environment.`;
const description2 = `Building Information Modeling (BIM) is a holistic process that integrates multi-disciplinary data to create a digital representation of a building or infrastructure asset. Powered by an intelligent model and cloud-based platform, BIM facilitates the planning, design, construction, and operation of a built asset, enhancing collaboration and decision-making across the project lifecycle.`;
const description3 = `Our 3D Visualization Services enable architects and engineers to bring their designs to life with unparalleled detail and clarity. Utilizing advanced 3D architectural design and virtual tours, we help clients visualize their projects in a virtual environment, identifying potential design issues and optimizing the building&apos;s layout and features before construction begins. Our services set a new standard for presenting ideas, making a lasting impression and ensuring your designs are executed with precision.`;

=======
>>>>>>> origin/main
function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          {/* prettier-ignore */}
<<<<<<< HEAD
          <Grid >
          <Stack>
              <MKBox display="flex" alignItems="center" p={2}>
              <MKBox
                  width="2rem"
                  height="2rem"
=======
          <Grid item xs={12} lg={5}>
          <MKBox display="flex" alignItems="center" p={2}>
            <MKBox>
              <img src={bgImage1} alt="Drone" style={{ maxWidth: "100%", height: "100%" }} />
            </MKBox>
          </MKBox>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
>>>>>>> origin/main
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
<<<<<<< HEAD
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
=======
                <MKTypography variant="body2" color="text" pl={2}>
                  It becomes harder for us to give others a hand.
                  <br />
                  We get our heart broken by people we love.
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">settings_overscan</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  As we live, our hearts turn colder.
                  <br />
                  Cause pain is what we go through as we become older.
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">token</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  When we lose family over time.
                  <br />
                  What else could rust the heart more over time? Blackgold.
>>>>>>> origin/main
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
