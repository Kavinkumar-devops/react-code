/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// D&M React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Icon from "@mui/material/Icon";
// Icon
import DoubleArrowTwoToneIcon from '@mui/icons-material/DoubleArrowTwoTone';
import StarIcon from '@mui/icons-material/Star';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

import TransparentBlogCard from "./TransparentBlogCard/index";
// Image
import post1 from "assets/photog/photog7.JPG";
import post2 from "assets/photog/photog2.JPG";
import post3 from "assets/photog/photog6.JPG";
import post4 from "assets/photog/photog8.JPG";
// D&M React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
const description1 = `At BN-Geospatial, we provide innovative 3D modeling and laser scanning solutions that enhance project outcomes. Our skilled team employs state-of-the-art technology to deliver accurate and detailed models, forming a strong foundation for effective decision-making in design and construction`;
const description2 = `Terrestrial Photogrammetry involves capturing high-resolution images from elevated ground-based stations. Unlike traditional photogrammetry, where the camera may move or adjust angles, this method ensures the camera remains stationary during image capture. This approach allows for precise modeling of small-scale areas, making it ideal for detailed analysis of structures, terrains, and other specific features.`;
const description3 = `BN-Geospatial offers a comprehensive suite of 3D Modelling services designed to meet the diverse needs of our clients, including:`;
const description4 = `&nbsp;&nbsp;As-Built 3D Models: Accurately capture the characteristics of existing structures, ensuring reliability in renovations and modifications`;
const description5 = `&nbsp;&nbsp;3D Models from 2D Drawings: Transform your 2D plans into dynamic 3D visuals for improved understanding and analysis.`;
const description6 = `&nbsp;&nbsp;2D Plan Extraction: Streamline your processes by converting existing plans into digital formats.`;
const description7 = `&nbsp;&nbsp;Laser Scanning: Leverage advanced laser technology for rapid, precise data collection, capturing intricate details.`;
const description8 = `&nbsp;&nbsp;PDMS: Develop sophisticated 3D models for complex industrial and commercial applications.`;
const description9 = `&nbsp;&nbsp;Sculpture Models: Realize artistic projects with high-detail 3D representations that bring your ideas to life.`;
function Information() {
  return (
    <MKBox component="section" py={2}>
          <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h4" fontWeight="bold">
            3D Modelling and Laser Scanning Services
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              {description1}
              </MKTypography>
            {/* <Grid container spacing={3} py={6}>
              <Grid item xs={12} sm={6} lg={3} >
                <TransparentBlogCard
                  image={post1}
                //  title="Building Information Modeling"
                  action={{ }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
              <TransparentBlogCard
                  image={post2}
              //   title="Building Information Modeling"
                  action={{ }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
              <TransparentBlogCard
                  image={post3}
                // title="Building Information Modeling"
                  action={{ }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
              <TransparentBlogCard
                  image={post4}
                //  title="Building Information Modeling"
                  action={{ }}
                />
              </Grid>
            </Grid> */}
            <MKBox display="flex" alignItems="center"  mb={2}>
          <MKTypography variant="h4" fontWeight="bold">
          Our Services
          </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description3 }}></p>
              </MKTypography>
                <MKBox display="flex"  p={1}>
                <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">bolt</Icon>
                  </MKBox>
                </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description4 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">bolt</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description5 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">bolt</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description6 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">bolt</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description7 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">bolt</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description8 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">bolt</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description9 }}></p>
                </MKTypography>
            </MKBox>
    </MKBox>
  );
}

export default Information;
