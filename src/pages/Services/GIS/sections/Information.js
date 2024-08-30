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
const description1 = `Building Information Modeling (BIM) is at the forefront of digital transformation in the architecture, engineering, and construction (AEC) industry. At BN-Geospatial, we leverage BIM to revolutionize how projects are designed, built, and managed. Our BIM services provide a comprehensive approach to creating, managing, and visualizing built assets throughout their lifecycle, ensuring better outcomes for both businesses and the built environment.`;
const description2 = `Building Information Modeling (BIM) is a holistic process that integrates multi-disciplinary data to create a digital representation of a building or infrastructure asset. Powered by an intelligent model and cloud-based platform, BIM facilitates the planning, design, construction, and operation of a built asset, enhancing collaboration and decision-making across the project lifecycle.`;
const description3 = `Our 3D Visualization Services enable architects and engineers to bring their designs to life with unparalleled detail and clarity. Utilizing advanced 3D architectural design and virtual tours, we help clients visualize their projects in a virtual environment, identifying potential design issues and optimizing the building's layout and features before construction begins. Our services set a new standard for presenting ideas, making a lasting impression and ensuring your designs are executed with precision`;
const description4 = `Architectural BIM is a digital platform that streamlines the planning, design, and execution of both commercial and residential construction projects. At BN-Geospatial, our architectural engineers use BIM for accurate and detailed architectural modeling, ensuring every element of the design is meticulously planned. Using tools like Revit, we create comprehensive information models that support seamless project execution and integration across all phases of construction.`;
const description5 = `Structural BIM focuses on the detailed modeling of a building's structural components, including foundations, walls, columns, beams, and roofing systems. Our structural BIM services ensure that every aspect of the building’s structure is accurately represented and integrated into the overall project model, providing a clear and coordinated view of the building's structural integrity from concept to completion.`;
const description6 = `MEP BIM (Mechanical, Electrical, and Plumbing) is a collaborative process that allows engineers to create and manage digital representations of a building’s MEP systems. By integrating MEP elements into the BIM model, we ensure that these critical systems are coordinated with the architectural and structural components, reducing conflicts and improving the overall efficiency of the construction process.`;
const description7 = `Our Façade BIM Services are designed to help architects, design engineers, and construction firms visualize and assess the building's façade in real-time. We develop detailed 2D and 3D drawings, creating BIM models that accurately represent prefabricated metal, wooden, and glass façades. These models allow for early design modifications and ensure the safety, fabrication, and installation of façades across various building types, including hotels, skyscrapers, resorts, and commercial complexes.`;
const description8 = `&nbsp;&nbsp;Partnering with architectural design firms to develop detailed BIM models for facade designs.`;
const description9 = `&nbsp;&nbsp;Delivering structural and architectural glazing details, including curtain wall designs.`;
const description10 = `&nbsp;&nbsp;Providing a complete building model view to evaluate the suitability and selection of façade materials.`;
const description11 = `Scan to BIM is a cutting-edge service that involves capturing detailed information about existing structures through laser scanning technology. This data is then used to generate accurate digital site representations, facilitating precise modeling, coordination, and quantity take-offs for both existing and new structures. Whether you're renovating, retrofitting, or constructing from scratch, our Scan to BIM services provide the accuracy and detail necessary for successful project execution.`;
const description12 = `Architectural BIM ensures seamless collaboration between architects, engineers, and contractors, reducing discrepancies and improving project efficiency.`;
function Information() {
  return (
    <MKBox component="section" py={2}>
          <MKBox display="flex" alignItems="center" mb={2}> {/* Adjust mb value as needed */}
            <MKTypography variant="h4" fontWeight="bold">
              Design & Build with BIM
            </MKTypography>
          </MKBox>
          <MKTypography variant="body1" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description12}
          </MKTypography>
          <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h4" fontWeight="bold">
            Design & Build with BIM
            </MKTypography>
          </MKBox>
              <MKTypography variant="body1" fontWeight="regular" color="secondary" mb={1} pr={2}>
              {description1}
              </MKTypography>
          <MKBox display="flex" alignItems="center" p={1}>

        <MKTypography variant="h4" fontWeight="bold">
        What is BIM?
        </MKTypography>
          </MKBox>

              <MKTypography variant="body1" fontWeight="regular" color="secondary" mb={1} pr={2}>
              <p dangerouslySetInnerHTML={{ __html: description2 }}></p>
              </MKTypography>

          <MKBox display="flex" alignItems="center" p={1}>
          
          <MKTypography variant="h4" fontWeight="bold">
          3D Virtual Modeling & Visualization
          </MKTypography>
          </MKBox>

              <MKBox pl={2}>
              </MKBox>
                <MKTypography variant="body1" fontWeight="regular" color="secondary" mb={1} pr={2}>
                <p dangerouslySetInnerHTML={{ __html: description3 }}></p>
                </MKTypography>

          <MKBox display="flex" alignItems="center" p={1}>
            <MKTypography variant="h4" fontWeight="bold">
            Architectural BIM Services
            </MKTypography>
          </MKBox>
              <MKTypography variant="body1" fontWeight="regular" color="secondary" mb={1} pr={2}>
              <p dangerouslySetInnerHTML={{ __html: description4 }}></p>
              </MKTypography>
          <MKBox display="flex" alignItems="center" p={1}>
            <MKTypography variant="h4" fontWeight="bold">
            Structural BIM Services
            </MKTypography>
          </MKBox>

              <MKBox pl={2}>
              </MKBox>
                <MKTypography variant="body1" fontWeight="regular" color="secondary" mb={1} pr={2}>
                <p dangerouslySetInnerHTML={{ __html: description5 }}></p>
                </MKTypography>

          <MKBox display="flex" alignItems="center" p={1}>
          
          <MKTypography variant="h4" fontWeight="bold">
          MEP BIM Services
          </MKTypography>
          </MKBox>

              <MKBox pl={2}>
              </MKBox>
                <MKTypography variant="body1" fontWeight="regular" color="secondary" mb={1} pr={2}>
                <p dangerouslySetInnerHTML={{ __html: description6 }}></p>
                </MKTypography>

          <MKBox display="flex" alignItems="center" p={1}>
          
          <MKTypography variant="h4" fontWeight="bold">
          Facade BIM Services
          </MKTypography>
          </MKBox>

              <MKBox pl={2}>
              </MKBox>
                <MKTypography variant="body1" fontWeight="regular" color="secondary" mb={1} pr={2}>
                <p dangerouslySetInnerHTML={{ __html: description7 }}></p>
                </MKTypography>

            <Grid container spacing={3} py={5}>
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
            <MKBox display="flex" alignItems="center" p={1}>
              <MKTypography variant="h4" fontWeight="bold">
              Our facade BIM modeling services include:
              </MKTypography>
            </MKBox>
          <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={3}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body1" color="secondary" pl={0}>
                <p dangerouslySetInnerHTML={{ __html: description8 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={5}>
                  <MKBox pl={2}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body1" color="secondary" pl={0}>
                <p dangerouslySetInnerHTML={{ __html: description9 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={5}>
                  <MKBox pl={2}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body1" color="secondary" pl={0}>
                <p dangerouslySetInnerHTML={{ __html: description10 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex" alignItems="center" p={1}>
              <MKTypography variant="h4" fontWeight="bold">
              Scan to BIM
              </MKTypography>
            </MKBox>
                <MKTypography variant="body1" fontWeight="regular" color="secondary" mb={1} pr={2}>
                <p dangerouslySetInnerHTML={{ __html: description11 }}></p>
                </MKTypography>
          <MKBox display="flex" alignItems="center" p={1}>
          
          <MKTypography variant="h4" color="secondary" pl={2} py={5}>
            Videos
          </MKTypography>
        </MKBox>
    </MKBox>
  );
}

export default Information;
