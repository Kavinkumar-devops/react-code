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
import post2 from "assets/f_images/ortho1.jpg";
import post3 from "assets/f_images/Lider3.jpg";
import post4 from "assets/images/examples/blog2.jpg";
import post5 from "assets/f_images/map.jpg";
import post6 from "assets/f_images/mobilemapping.PNG";
import post7 from "assets/f_images/photo1.jpg";
import post8 from "assets/f_images/corridor.jpg";
import post9 from "assets/f_images/dtm.jpg";
import post10 from "assets/f_images/hydro.jpg";
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
                route: "/sections/BIM2",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Ortho Photo Services"
              description="At BN-Geospatial, we specialize in creating high-precision orthoimages through advanced orthorectification processes. Orthorectification is essential for correcting geometric distortions..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Lidar"
              description="At BN-Geospatial, we specialize in delivering cutting-edge LiDAR (Light Detection and Ranging) services, providing our clients with precise and actionable geospatial data...."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post5}
              title="World Map"
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
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
                route: "/pages/blogs/author",
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
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post8}
              title="Corridor Mapping"
              description="Corridors are important geographic features for biological conservation and biodiversity assessment. The identification and mapping of corridors is usually based on visual interpretations..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post9}
              title="DTM Mapping"
              description="Digital Terrain Models (DTMs) are commonly regarded as synonymous with bare-earth DEMs, emphasizing their focus on representing the geodesic surface without..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post10}
              title="Hydro"
              description="FLOW-3D HYDRO is the complete 3D CFD modeling solution for the civil and environmental engineering industry. Powered by the industry-leading FLOW-3D solver engine..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post11}
              title="Planimetric"
              description="Planimetric mapping is a method of creating a 2-dimensional representation of the features and objects on the Earth's surface. It typically shows the location of man-made features..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
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
