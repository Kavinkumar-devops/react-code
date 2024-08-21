/* eslint-disable no-unused-vars */
/* prettier-ignore */
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
// D&M React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage1 from "assets/images/Drone3.jpg";

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          {/* prettier-ignore */}
          <Grid>
            <MKBox display="flex" flexDirection="column" alignItems="center" p={2}>
                <MKBox mb={2}>
                  <img src={bgImage1} alt="Drone" style={{ maxWidth: "100%", height: "100%" }} />
                </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;
