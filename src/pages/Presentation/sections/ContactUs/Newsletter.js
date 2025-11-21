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
import MKAlert from "components/MKAlert";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";

function Newsletter() {
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

    // Phone number: 10 to 20 digits allowed
    // if (formData.phone.length < 8) {
    //   tempErrors.phone = "Phone number must be at least 8 digits";
    // } else if (formData.phone.length > 20) {
    //   tempErrors.phone = "Phone number cannot exceed 20 digits";
    // } else {
    //   tempErrors.phone = "";
    // }

    // Message validation
    // tempErrors.message =
    //   formData.message.length >= 10
    //     ? ""
    //     : "Message should be at least 10 characters long";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
     // Perform validation check
     if (!validate()) return;

     setLoading(true); // Start loading when form is submitted
 

    try {
      const form = new FormData();
      form.append("firstname", formData.firstname);
      form.append("lastname", formData.lastname);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("message", formData.message);

      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbxhFgVZ9CkdTgUgHwWp8KiejeSwS1-9hVbHHFpNCVfReF6nTQOf9FYElA1RjLi34DXl/exec",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data"   // <-- important
          }
        }
      );

      console.log("Response:", response.data);

      if (response.data === "success") {
        setSuccess(true);
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => setSuccess(false), 3000);
      } else {
        setFailure(true);
        setTimeout(() => setFailure(false), 3000);
      }

    } catch (error) {
      console.error("Error:", error);
      setFailure(true);
      setTimeout(() => setFailure(false), 3000);

    } finally {
      setLoading(false);
    }
};

  return (
    <>
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
