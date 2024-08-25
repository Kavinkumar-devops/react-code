// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// D&M React components
import MKBox from "components/MKBox";
// D&M React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// Image
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Precision
                    <br />
                    Quality in Projects
                  </>
                }
                description="Our advanced geospatial expertise guarantees top-quality service, delivering innovative solutions that meet all standards."
              />
              <RotatingCardBack
                image={bgBack}
                title="Partner with Us"
                description="Reach out to us today to discuss how we can support your project with our cutting-edge geospatial solutions."
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/contact-us",
                  label: "Contact Us :)",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Vision"
                  description="To be a global leader in geospatial services, driving innovation and setting new standards for accuracy and efficiency.."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Mission"
                  description="To empower industries with precise, data-driven geospatial solutions, enabling smarter decision-making and sustainable growth."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Values"
                  description="Integrity, Innovation, and Excellence are at the core of everything we do, guiding our commitment to our clients and the community."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Quality Control"
                  description="A high level of quality control is maintained across all our operations, ensuring compliance with both national and international standards."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
