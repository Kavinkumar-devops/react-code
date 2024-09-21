/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// D&M React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// D&M React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
// Image
import post1 from "assets/f_images/BIM2.jpg";
// import post2 from "assets/f_images/ortho1.jpg";
import post2 from "assets/ortho/mainortho1.JPG";
import post3 from "assets/f_images/Lider31.jpg";
import post4 from "assets/images/examples/blog2.jpg";
import post5 from "assets/f_images/map.jpg";
import post6 from "assets/f_images/mobilemapping1.PNG";
import post7 from "assets/photog/post1.JPG";
import post8 from "assets/3dmodelling/3D21.jpg";
import post9 from "assets/image/GIS5.jpeg";
import post10 from "assets/VR/post1.jpg";
import post11 from "assets/f_images/planimetric.jpg";
import MKBadge from "components/MKBadge";
const description1 = `BN-GeoSpacial specializes in delivering cutting-edge Geospatial, Engineering, and BIM solutions with a team of highly skilled professionals and industry experts.`;
function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Precision in Every Dimension"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Our Services
          </MKTypography>
          <MKTypography variant="body1" color="text">
            {description1}
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Building Information Modeling"
              description="Building Information Modeling (BIM) is a holistic process that integrates multi-disciplinary data to create a digital representation of a building or infrastructure asset..."
              action={{
                type: "internal",
                route: "/sections/BIM",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post10}
              title="VR"
              description="Interactive Real-Time Architectural Visualization (Arch Viz) represents a cutting-edge convergence of digital technology and architecture. Unlike traditional static..."
              action={{
                type: "internal",
                route: "sections/VR/features",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="OrthoPhoto"
              description="At BN-Geospatial, we specialize in creating high-precision orthoimages through advanced orthorectification processes. Orthorectification is essential for correcting geometric distortions..."
              action={{
                type: "internal",
                route: "/sections/orthophoto/features",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="LiDAR"
              description="At BN-Geospatial, we specialize in delivering cutting-edge LiDAR (Light Detection and Ranging) services, providing our clients with precise and actionable geospatial data...."
              action={{
                type: "internal",
                route: "/sections/lider/features",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post6}
              title="Mobile Mapping"
              description="Mobile Mapping leverages cutting-edge digital technologies to streamline and enhance the mapping process, significantly reducing costs and logistical challenges. By integrating GPS..."
              action={{
                type: "internal",
                route: "/sections/mapping/features",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post7}
              title="Photogrammetry"
              description="At BN-Geospatial, our Photogrammetry team utilizes state-of-the-art digital imaging technology, coupled with precise ground control data, to accurately reconstruct the geometry of specific..."
              action={{
                type: "internal",
                route: "/sections/photogrammetry/features",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post8}
              title="3D Modelling"
              description="At BN-Geospatial, we provide innovative 3D modeling and laser scanning solutions that enhance project outcomes. Our skilled team employs state-of-the-art technology to deliver accurate and..."
              action={{
                type: "internal",
                route: "/sections/3DModelling/features",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post9}
              title="GIS( QGIS AND ArcGIS )"
              description="At BN-Geospatial, we offer a comprehensive suite of GIS services utilizing advanced tools like QGIS and ArcGIS. Our expertise enables us to deliver high-value solutions to local, state, and..."
              action={{
                type: "internal",
                route: "/sections/GIS/features",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
