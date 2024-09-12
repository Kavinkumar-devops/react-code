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
import macbook from "assets/images/GIT.png";
import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";

function Newsletter() {
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

      // Validation: Ensure all fields are filled and the message has at least 10 characters
  if (
    !formData.firstname.trim() ||
    !formData.lastname.trim() ||
    !formData.email.trim() ||
    !formData.phone.trim() ||
    formData.message.length < 10
  ) {
    alert("Please fill in all fields and ensure the message is at least 10 characters long.");
    return;
  }

  try {
    const response = await axios.post("https://mail-latest.onrender.com/send-email", formData);
    
    if (response.status === 200) {
      console.log("Response:", response.data);

      // Show success alert
      setSuccess(true);

      // Clear form fields after success
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });

      // Hide the success alert after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Failed to send message.");
  }
};

  return (
    <>
      {/* Success alert */}
      {success && (
        <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
          Message sent successfully!
        </Alert>
      )}
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sx={12} md={4.5} sx={{ ml: { xs: 0, lg: 2 }, mb: { xs: 12, md: 0 } }}>
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 1, sm: 18, md: 0 }}
            mx={1}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-30}
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
           </MKBox>
            </MKBox>
          </MKBox>
          </Grid>
          <Grid container item justifyContent="center" xs={10} md={4} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={macbook} alt="macbook" width="80%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
    </>
  );
}

export default Newsletter;
