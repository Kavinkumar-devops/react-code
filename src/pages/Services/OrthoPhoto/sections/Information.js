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
const description1 = `At BN-Geospatial, we specialize in creating high-precision orthoimages through advanced orthorectification processes. Orthorectification is essential for correcting geometric distortions in remotely sensed imagery, ensuring that the resulting orthoimage is map-accurate and reliable. Our orthoimages are expertly merged and color-balanced to produce seamless orthomosaics that meet the specified map scale, making them ideal for precise measurements and the generation or updating of GIS feature class layers.`;
const description2 = `Our ortho photo process begins with the careful selection and preparation of the following key inputs:`;
const description3 = `&nbsp;&nbsp;Our 3D Visualization Services enable architects and engineers to bring their designs to life with unparalleled detail and clarity. Utilizing advanced 3D architectural design and virtual tours, we help clients visualize their projects in a virtual environment, identifying potential design issues and optimizing the building's layout and features before construction begins. Our services set a new standard for presenting ideas, making a lasting impression and ensuring your designs are executed with precision`;
const description4 = `&nbsp;&nbsp;Aerial Triangulation Files: These files are crucial for establishing accurate geospatial alignment, providing the foundation for precise orthoimage generation.`;
const description5 = `&nbsp;&nbsp;Digital Terrain Model (DTM): The DTM represents the bare earth elevation, free from objects or structures, and is essential for producing accurate orthoimages and orthomosaics.`;
const description6 = `&nbsp;&nbsp;Area of Interest, Tile Boundary, and Output GSD (Ground Sample Distance): These parameters define the specific region and resolution of the ortho photo, ensuring that the final product meets the exact needs of your project.`;
const description7 = `Upon completion of the orthorectification process, we deliver high-quality orthoimagery that meets your project specifications. Our deliverables include:`;
const description8 = `&nbsp;&nbsp;Orthoimagery: Available in both 4-band (RGB + NIR) and 3-band (RGB) formats, our orthoimages provide comprehensive visual data for a wide range of applications, from environmental monitoring to urban planning.`;
const description9 = `&nbsp;&nbsp;Image Formats: We deliver orthoimages in multiple formats, including GeoTIFF, ECW (Enhanced Compression Wavelength), and MrSID, ensuring compatibility with standard mapping and GIS software.`;
const description10 = `At BN-Geospatial, our commitment to precision and quality ensures that every orthoimage we produce is of the highest standard, ready to support your GIS and mapping needs. Whether you're updating existing GIS layers or creating new ones, our ortho photo services provide the accuracy and detail required to drive successful outcomes for your projects.`;
const description11 = `Scan to BIM is a cutting-edge service that involves capturing detailed information about existing structures through laser scanning technology. This data is then used to generate accurate digital site representations, facilitating precise modeling, coordination, and quantity take-offs for both existing and new structures. Whether you're renovating, retrofitting, or constructing from scratch, our Scan to BIM services provide the accuracy and detail necessary for successful project execution.`;
const description12 = `Architectural BIM ensures seamless collaboration between architects, engineers, and contractors, reducing discrepancies and improving project efficiency.`;
function Information() {
  return (
    <MKBox component="section" py={2}>
          <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h4" fontWeight="bold">
            Precision Ortho Photo Services
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              {description1}
              </MKTypography>
          <MKBox display="flex" alignItems="center" mb={2} >
            <MKTypography variant="h4" fontWeight="bold">
            Ortho Photo Inputs
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description2 }}></p>
              </MKTypography>
          <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={0}>
                    <Icon fontSize="small">bolt</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description3 }}></p>
                </MKTypography>
            </MKBox>
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
          Final Deliverables
          </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description7 }}></p>
              </MKTypography>
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
            <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description10 }}></p>
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
