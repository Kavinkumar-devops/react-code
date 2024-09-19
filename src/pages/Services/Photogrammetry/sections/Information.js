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
const description1 = `At BN-Geospatial, our Photogrammetry team utilizes state-of-the-art digital imaging technology, coupled with precise ground control data, to accurately reconstruct the geometry of specific earth regions in a virtual environment. This powerful combination allows us to produce highly detailed and accurate geospatial data that can be seamlessly integrated into CAD systems, enabling precise horizontal and vertical measurements. Our photogrammetry services provide invaluable insights for a wide range of applications, from topographical mapping to urban planning.`;
const description2 = `Terrestrial Photogrammetry involves capturing high-resolution images from elevated ground-based stations. Unlike traditional photogrammetry, where the camera may move or adjust angles, this method ensures the camera remains stationary during image capture. This approach allows for precise modeling of small-scale areas, making it ideal for detailed analysis of structures, terrains, and other specific features.`;
const description3 = `BN-Geospatial offers a comprehensive suite of photogrammetry services designed to meet the diverse needs of our clients, including:`;
const description4 = `&nbsp;&nbsp;Triangulation and Adjustment: Ensuring high accuracy in the spatial positioning of images, critical for creating precise maps and models.`;
const description5 = `&nbsp;&nbsp;Stereo-compilation: Leveraging stereo images to create 3D models, providing depth and detail for complex terrains.`;
const description6 = `&nbsp;&nbsp;Digital Elevation Model (DEM) and Digital Surface Model (DSM) Generation: Creating accurate elevation models that reflect the terrain's surface or the actual ground elevation.`;
const description7 = `&nbsp;&nbsp;Contour Mapping and Cross-Sections: Producing detailed contour maps and cross-sections for civil engineering, environmental studies, and land development projects.`;
const description8 = `&nbsp;&nbsp;Topographic and Cadastral Mapping: Generating precise topographic maps for land surveying, urban planning, and property boundary delineation.`;
const description9 = `&nbsp;&nbsp;High-Resolution Topographical Mapping (1:500 Scale): Providing detailed mapping services at a scale that captures intricate details, ideal for urban development and infrastructure projects.`;
const description10 = `&nbsp;&nbsp;3D Building and Structure Modeling: Creating detailed 3D models of buildings, infrastructure, and other structures for use in planning, design, and analysis.`;
const description11 = `&nbsp;&nbsp;Airport Mapping: Specialized mapping services for airport planning, including runway analysis and infrastructure management.`;
const description12 = `&nbsp;&nbsp;3D Planimetric Feature Extraction: Extracting precise 3D features such as roads, rivers, and man-made structures from photogrammetric data.`;
const description13 = `&nbsp;&nbsp;Land Use and Parcel Mapping: Detailed mapping of land use patterns and parcel boundaries for zoning, development, and resource management.`;
const description14 = `&nbsp;&nbsp;Orthorectification: Correcting aerial or satellite images to remove distortions, ensuring accurate representation of the Earth's surface.`;
const description15 = `&nbsp;&nbsp;QA/QC Analysis: Implementing rigorous Quality Assurance and Quality Control processes to ensure the highest accuracy and reliability in all deliverables.`;
const description16 = `At BN-Geospatial, we are dedicated to delivering photogrammetry services that meet the highest standards of precision and quality. Whether your project requires detailed urban mapping, infrastructure planning, or environmental analysis, our team has the expertise and technology to provide exceptional results. Let us help you transform raw data into actionable insights with our advanced photogrammetry solutions.`;
function Information() {
  return (
    <MKBox component="section" py={2}>
          <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h4" fontWeight="bold">
            Advanced Photogrammetry Services
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              {description1}
              </MKTypography>
          <MKBox display="flex" alignItems="center" mb={2} >
            <MKTypography variant="h4" fontWeight="bold">
            Terrestrial Photogrammetry
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description2 }}></p>
              </MKTypography>
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
                <p dangerouslySetInnerHTML={{ __html: description14 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">bolt</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description15 }}></p>
                </MKTypography>
            </MKBox>
            <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description16 }}></p>
              </MKTypography>
          {/* <MKBox display="flex" alignItems="center" mb={2}>
          <MKTypography variant="h4" fontWeight="bold">
          Videoes
          </MKTypography>
        </MKBox> */}
    </MKBox>
  );
}

export default Information;
