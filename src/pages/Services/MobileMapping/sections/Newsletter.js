/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// D&M React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
// Image
//import macbook from "assets/images/macbook.png";
import videoSrc from "assets/video/mmvideo.mp4";
import exampleImage from "assets/image/worksticker.png"; // Import your image

function Newsletter() {
  return (
    <MKBox component="section" pt={0} my={0}>
      <Container>
        <Grid container alignItems="center">
        <Grid item xs={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
          <MKBox>
          {/* <MKTypography variant="h5">Image Title</MKTypography>
          <MKTypography variant="body2" color="text" mb={3}>
            Description related to the image can be placed here.
          </MKTypography> */}
            <MKBox
              component="img"
              src={exampleImage}
              alt="Example Image"
              sx={{
                width: '100%', // Adjust width as needed
                maxWidth: '350px', // Optional: Set a maximum width
                height: 'auto', // Maintain aspect ratio
                display: 'block', // Optional: Center image if needed
                margin: '0 auto', // Optional: Center image horizontally
              }}
            />
          </MKBox>
        </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox
                component="video"
                controls
                width="100%"
                sx={{
                  borderRadius: "8px",
                  boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.7)", // Black shadow effect
                  outline: "none",
                }}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
