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
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validation rules
  const validate = () => {
    let tempErrors = {};
    tempErrors.firstname = formData.firstname ? "" : "First name is required";
    tempErrors.lastname = formData.lastname ? "" : "Last name is required";
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Email is not valid";
    tempErrors.phone = formData.phone.length === 10
      ? ""
      : "Phone number must be 10 digits";
    tempErrors.message =
      formData.message.length >= 10
        ? ""
        : "Message should be at least 10 characters long";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
     // Perform validation check
     if (!validate()) return;

     setLoading(true); // Start loading when form is submitted
 

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
      setTimeout(() => setSuccess(false), 3000);
    }
  } catch (error) {
    setFailure(true);
    setTimeout(() => setFailure(false), 3000);
  }finally {
    setLoading(false); // Set loading to false when the request completes
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
            <TextField
              variant="standard"
              label="First Name"
              name="firstname"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={formData.firstname}
              onChange={handleChange}
              error={!!errors.firstname}
              helperText={errors.firstname}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="standard"
              label="Last Name"
              name="lastname"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={formData.lastname}
              onChange={handleChange}
              error={!!errors.lastname}
              helperText={errors.lastname}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              type="email"
              variant="standard"
              label="Email"
              name="email"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="standard"
              label="Phone"
              name="phone"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              label="What can we help you with?"
              name="message"
              placeholder="Describe your problem in at least 10 characters"
              InputLabelProps={{ shrink: true }}
              multiline
              fullWidth
              rows={6}
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
            />
          </Grid>
        </Grid>
            {/* Submit button with loading spinner */}
            <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
              <MKButton type="submit" variant="gradient" color="info" disabled={loading}>
                {loading ? <CircularProgress size={24} /> : "Send Message"}
              </MKButton>
            </Grid>
              <Grid container item justifyContent="center" xs={12} mt={2} mb={1}>
                {/* Success Message */}
                {success && (
                 <MKAlert color="success">Submitted</MKAlert>  
                 )}
                {/* failure Message */}
                {failure && (
                 <MKAlert color="error">Try after sometime</MKAlert>  
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
            {/* <MapComponent lat={12.955826} lng={77.527512} /> */}
            <div style={{ width: '100%', height: '500px' }}>
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777.928340264943!2d77.5275116!3d12.9558258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e6d992b1b73%3A0x3e7b79d57c67c8a2!2s12%C2%B057&#39;21.0&#34;N%2077%C2%B031&#39;39.0&#34;E!5e0!3m2!1sen!2sin!4v1632913321932!5m2!1sen!2sin"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
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
