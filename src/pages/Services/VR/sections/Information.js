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
import post1 from "assets/VR/VR1.jpg";
import post2 from "assets/VR/vr2.jpg";
import post3 from "assets/VR/vr31.jpg";
import post4 from "assets/VR/vr4.jpg";
// D&M React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
const description1 = `Interactive Real-Time Architectural Visualization (Arch Viz) represents a cutting-edge convergence of digital technology and architecture. Unlike traditional static renderings, Arch Viz integrates advanced 3D modeling and real-time rendering to provide immersive and interactive visual experiences. This technology enables users to explore architectural designs in a fully interactive 360° environment, offering a realistic and engaging way to experience properties before they are built.`;
const description2 = `Historically, architectural visualization began with hand-drawn sketches and static renderings, evolving to include digital tools that provided more detailed and accurate representations of designs. The introduction of 3D modeling and rendering in the late 20th century revolutionized this field, making it possible to create highly detailed and lifelike visualizations. Today, interactive real-time technologies, including virtual reality (VR) and augmented reality (AR), have further enhanced these capabilities, allowing users to interact with and explore designs dynamically.`;
const description3 = `Interactive Real-Time Architectural Visualization has transformed the way architectural projects are presented and experienced. This technology not only provides a more immersive and engaging experience but also streamlines the design and decision-making processes. By allowing clients to visualize and interact with designs in real-time, architects and developers can receive immediate feedback and make informed adjustments before construction begins.`;
const description4 = `This technology is particularly effective in real estate, where it enhances the property viewing experience. Prospective buyers and tenants can explore properties from the comfort of their own homes, interact with various design elements, and make customized modifications, all of which contribute to a more informed and efficient decision-making process.`;
const description5 = `At BN-Geospatial, we offer a comprehensive suite of Interactive Real-Time Architectural Visualization services designed to meet the diverse needs of our clients:`;
const description6 = `Experience highly detailed and realistic 3D models of architectural designs, both interior and exterior, with photo-realistic quality.`;
const description7 = `Navigate and explore properties through immersive 360° panoramas that provide a complete view of the space.`;
const description8 = `Smoothly zoom and rotate around models with our advanced orbital camera functionality.`;
const description9 = `Engage with various views including bird's-eye, walkthroughs, flythroughs, and camera-specific perspectives.`;
const description10 = `Use lists, 3D labels, and 3D volumes for intuitive navigation within the virtual environment.`;
const description11 = `Access a gallery of images and media to enhance the visualization experience.`;
const description12 = `Modify colors, patterns, flooring, furnishings, roofing, and layouts to visualize potential changes in real-time`;
const description13 = `Interact with up to 20 product variants and customize furniture, colors, and styles.`;
const description14 = `Use AR to project virtual products into real-world environments and visualize office spaces with AR and VR technologies.`;
const description15 = `Tailor visualizations for commercial spaces, including office layouts and furniture customization.`;
const description16 = `Benefit from comprehensive support, including hardware supply, server hosting, and ongoing maintenance.`;
const description17 = `At BN-Geospatial, our interactive real-time architectural visualization services provide a dynamic and detailed view of your projects. Whether you’re in real estate, commercial development, or interior design, our advanced visualization tools help you make better-informed decisions and showcase your designs with unparalleled clarity and impact.`;
function Information() {
  return (
    <MKBox component="section" py={2}>
          <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h4" fontWeight="bold">
              What is Interactive Real-Time Architectural Visualization?
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              {description1}
              </MKTypography>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description2 }}></p>
              </MKTypography>
          <MKBox display="flex" alignItems="center" mb={2}>

        <MKTypography variant="h4" fontWeight="bold">
        The Impact of Interactive Real-Time Architectural Visualization
        </MKTypography>
          </MKBox>

              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description3 }}></p>
              </MKTypography>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description4 }}></p>
              </MKTypography>

          <MKBox display="flex" alignItems="center" mb={2}>
          <MKTypography variant="h4" fontWeight="bold">
          Our Interactive Real-Time Architectural Visualization Services
          </MKTypography>
          </MKBox>

              <MKBox pl={0}>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description5 }}></p>
                </MKTypography>
          <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" fontWeight="bold">
            Photo-Realistic 3D Visualization
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description6 }}></p>
              </MKTypography>
              <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" fontWeight="bold">
            360° Panorama Viewer
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description7 }}></p>
              </MKTypography>
              <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" fontWeight="bold">
            Orbital Camera Controls
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description8 }}></p>
              </MKTypography>
              <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" fontWeight="bold">
            Interactive 3D Views
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description9 }}></p>
              </MKTypography>
              <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" fontWeight="bold">
            Navigation and Interaction
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description10 }}></p>
              </MKTypography>
              <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" fontWeight="bold">
            Built-In Media Gallery
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description11 }}></p>
              </MKTypography>
              <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" fontWeight="bold">
            Customizable Design Elements
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description12 }}></p>
              </MKTypography>
              <Grid container spacing={3} py={5}>
              <Grid item xs={12} sm={6} lg={3} >
                <TransparentBlogCard
                  image={post1}
                  action={{ }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
              <TransparentBlogCard
                  image={post2}              
                  action={{ }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
              <TransparentBlogCard
                  image={post3}
                  action={{ }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
              <TransparentBlogCard
                  image={post4}
                  action={{ }}
                />
              </Grid>
            </Grid>
              <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" fontWeight="bold">
            Product Interaction in VR
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description13 }}></p>
              </MKTypography>
              <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" fontWeight="bold">
            AR and VR Visualization Tools
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description14 }}></p>
              </MKTypography>
              <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" fontWeight="bold">
            Efficient Visualization for Commercial Properties
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description15 }}></p>
              </MKTypography>
              <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" fontWeight="bold">
            End-to-End Support
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description16 }}></p>
              </MKTypography>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description17 }}></p>
              </MKTypography>
    </MKBox>
  );
}

export default Information;
