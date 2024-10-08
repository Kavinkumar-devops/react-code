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
const description1 = `At BN-Geospatial, we offer a comprehensive suite of GIS services utilizing advanced tools like QGIS and ArcGIS. Our expertise enables us to deliver high-value solutions to local, state, and federal agencies, town planners, architects, and utility companies.`;
const description3 = `BN-Geospatial offers a comprehensive suite of GIS services designed to meet the diverse needs of our clients, including:`;
const description4 = `&nbsp;&nbsp;Vector Georeferencing: Align vector data accurately to real-world coordinates for precise mapping using QGIS and ArcGIS.`;
const description5 = `&nbsp;&nbsp;Parcel Mapping: Create detailed parcel maps that aid in land management and planning.`;
const description6 = `&nbsp;&nbsp;Utility Mapping: Identify and document utility infrastructure for efficient resource management.`;
const description7 = `&nbsp;&nbsp;Cadastral Mapping: Develop comprehensive maps that reflect property boundaries and ownership.`;
const description8 = `&nbsp;&nbsp;Digitization/Drafting: Transform paper maps and drawings into digital formats for improved accessibility.`;
const description9 = `&nbsp;&nbsp;Land Use & Land Cover Mapping: Analyze and visualize land usage patterns for informed planning using both QGIS and ArcGIS tools.`;
const description10 = `&nbsp;&nbsp;Thematic Mapping: Generate maps that highlight specific themes or attributes for targeted analysis.`;
const description11 = `&nbsp;&nbsp;Data Collection/Data Entry: Efficiently gather and input data to maintain up-to-date GIS databases.`;
const description12 = `&nbsp;&nbsp;GIS Conversion/Migration/Maintenance: Transition and maintain GIS data seamlessly across different platforms.`;
const description13 = `&nbsp;&nbsp;Taxation Mapping: Support taxation assessments with accurate mapping of property values and boundaries.`;
function Information() {
  return (
    <MKBox component="section" py={2}>
          <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h4" fontWeight="bold">
            GIS Services with QGIS and ArcGIS
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
          Our Offerings
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
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">bolt</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description10 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">bolt</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description11 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">bolt</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description12 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">bolt</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description13 }}></p>
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
