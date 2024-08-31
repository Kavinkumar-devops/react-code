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
import post1 from "assets/image/mobile_mapping.png";
import post2 from "assets/image/mobile_mapping.jpg";
import post3 from "assets/image/mm1.jpeg";
import post4 from "assets/f_images/mobilemapping.PNG";
// D&M React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
const description1 = `At BN-Geospatial, we specialize in delivering cutting-edge LiDAR (Light Detection and Ranging) services, providing our clients with precise and actionable geospatial data. Our expert team leverages advanced 3D point cloud processing and mapping techniques to offer reliable and cost-effective solutions tailored to your specific needs. We are committed to upholding the highest industry standards through a stringent multi-stage Quality Control/Quality Assurance (QC/QA) process, ensuring that every project exceeds client expectations. Our goal is to build lasting partnerships by consistently delivering superior service.`;
const description2 = `LiDAR technology utilizes laser pulses to measure distances by timing how long it takes for the light to bounce back from a surface. This data is then processed to calculate accurate XYZ coordinates of the reflective surface, which is crucial for various mapping and surveying applications. At BN-Geospatial, we employ several LiDAR acquisition methods to suit different project requirements:`;
const description3 = `&nbsp;&nbsp;Aerial LiDAR Survey (ALS): This method involves deploying laser scanning equipment from an aircraft. The laser pulses emitted from the system interact with the Earth's surface and the reflected signals are captured by onboard sensors. Equipped with GPS and Inertial Measurement Units (IMUs), the system provides highly accurate geospatial data for large-scale mapping projects.`;
const description4 = `&nbsp;&nbsp;Mobile LiDAR Survey (MLS): By integrating LiDAR sensors with cameras and navigation systems on a mobile platform, this technique enables rapid data collection over extensive areas. It's particularly useful for surveying roadways, railways, and other linear infrastructures with high precision.`;
const description5 = `&nbsp;&nbsp;Terrestrial LiDAR Survey (TLS): This ground-based scanning method combines laser technology with differential GPS to create detailed 3D models. Ideal for projects requiring intricate detail, such as building facades, vegetation analysis, and complex topographies.`;
const description6 = `BN-Geospatial offers a broad spectrum of LiDAR services designed to meet the diverse needs of our clients, including but not limited to:`;
const description7 = `&nbsp;&nbsp;Point Cloud Classification: Accurately identifying and classifying features such as bare earth, vegetation, buildings, bridges, and more.`;
const description8 = `&nbsp;&nbsp;Digital Terrain Model (DTM) and Digital Surface Model (DSM) Generation: Creating high-resolution models for topographical mapping and analysis.`;
const description9 = `&nbsp;&nbsp;Electrical Utility Mapping: Detailed mapping and classification of power lines and electrical infrastructure.`;
const description10 = `&nbsp;&nbsp;Vegetation and Forestry Analysis: Precise mapping for forestry management, habitat studies, and environmental monitoring.`;
const description11 = `&nbsp;&nbsp;Telecommunications Asset Management: Documentation and analysis of telecom infrastructure, ensuring accurate data for planning and development.`;
const description12 = `&nbsp;&nbsp;Pipeline and Utility Project Support: Comprehensive mapping and analysis for pipeline routing and utility projects.`;
const description13 = `&nbsp;&nbsp;Flood Risk and Water Resource Management: Floodplain mapping, hydro enforcement, and water resource analysis to support environmental and civil engineering projects.`;
const description14 = `&nbsp;&nbsp;Mining and Resource Exploration: Detailed 3D modeling and spatial analysis to aid in resource extraction and site planning.`;
const description15 = `&nbsp;&nbsp;3D Modeling and Feature Extraction: Converting LiDAR data into detailed 3D models for various engineering applications.`;
const description16 = `&nbsp;&nbsp;Engineering Drawings: Generation of precise cross-sections, longitudinal sections, and other critical engineering documentation.`;
const description17 = `&nbsp;&nbsp;Topographical Mapping: High-accuracy mapping services for land development, construction planning, and environmental studies.`;
const description18 = `At BN-Geospatial pvt ltd, our mission is to empower your projects with the most accurate, high-quality geospatial data, helping you make informed decisions and achieve success. Whether your project requires aerial, mobile, or terrestrial LiDAR, our team is equipped with the expertise and technology to deliver exceptional results.`;
function Information() {
  return (
    <MKBox component="section" py={2}>
          <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h4" fontWeight="bold">
            Comprehensive LiDAR Engineering Services
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              {description1}
              </MKTypography>
          <MKBox display="flex" alignItems="center" mb={2} >
            <MKTypography variant="h4" fontWeight="bold">
            Operational Overview
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description2 }}></p>
              </MKTypography>
          <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description3 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description4 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description5 }}></p>
                </MKTypography>
            </MKBox>
            <Grid container spacing={3} py={6}>
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
            </Grid>
            <MKBox display="flex" alignItems="center"  mb={2}>
          <MKTypography variant="h4" fontWeight="bold">
          Our Expertise
          </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description6 }}></p>
              </MKTypography>
                <MKBox display="flex"  p={1}>
                  <MKBox pl={4}>
                    <MKBox pl={0}>
                      <Icon fontSize="small">mediation</Icon>
                    </MKBox>
                  </MKBox>
                  <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                  <p dangerouslySetInnerHTML={{ __html: description7 }}></p>
                  </MKTypography>
                </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description8 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description9 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description10 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description11 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description12 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description13 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description14 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description15 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description16 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description17 }}></p>
                </MKTypography>
            </MKBox>
            <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description18 }}></p>
              </MKTypography>
          <MKBox display="flex" alignItems="center" mb={2}>
          <MKTypography variant="h4" fontWeight="bold">
          Videoes
          </MKTypography>
        </MKBox>
    </MKBox>
  );
}

export default Information;
