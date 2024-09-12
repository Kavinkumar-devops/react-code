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
import MapComponent from "./map";
import Container from "@mui/material/Container";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import bgImage1 from "assets/images/contactus-logo1.png";
import "leaflet/dist/leaflet.css";
import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import MKAlert from "components/MKAlert";

function ContactUs() {
  
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    const response = await axios.post("https://mail-latest.onrender.com/send-email", formData);
    
    if (response.status === 200) {
      console.log("Response:", response.data);

      // Show success message
      setSuccess(true);

      // Clear form fields after success
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });

      // Hide the success message after 5 seconds
      setTimeout(() => setSuccess(false), 3000);
    }
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Failed to send message.");
  }
};

  return (
    <>
      <DefaultNavbar
        routes={routes}
        sticky
      />
      <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                For further questions, including partnership opportunities, please email
                Info@bngeospatial.com or contact using our contact form.
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="First Name"
                    name="firstname"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Last Name"
                    name="lastname"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    type="email"
                    variant="standard"
                    label="Email"
                    name="email"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Phone"
                    name="phone"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    label="What can we help you with?"
                    name="message"
                    placeholder="Describe your problem in at least 250 characters"
                    InputLabelProps={{ shrink: true }}
                    multiline
                    fullWidth
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                <MKButton type="submit" variant="gradient" color="info">
                  Send Message
                </MKButton>
              </Grid>
              <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                {/* Success Message */}
                {success && (
                 <MKAlert color="success">Email sent successfully</MKAlert>  
                 )}
              </Grid>
           </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
        {/* <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
                   <Grid container item justifyContent="center" xs={20} md={20} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={bgImage1} alt="macbook" width="80%" />
            </MKBox>
          </Grid> 
        </Grid> */}
        <Container>
        <Grid container alignItems="center">
            <MapComponent lat={12.955826} lng={77.527512} />
        </Grid>   
        </Container>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
