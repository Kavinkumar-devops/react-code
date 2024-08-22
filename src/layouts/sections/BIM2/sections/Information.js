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

// D&M React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
const description1 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Building Information Modeling (BIM) integrates multi-disciplinary data to create a holistic digital model of a building or infrastructure asset, covering every phase from design to operation.`;
const description2 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Powered by intelligent models and cloud-based platforms, BIM facilitates collaboration across all stakeholders, ensuring seamless communication and decision-making throughout the project lifecycle.`;
const description3 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BIM supports the entire lifecycle of a built asset, from initial planning and design through construction, maintenance, and eventual decommissioning, ensuring the project remains aligned with its objectives.`;
const description4 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By providing a centralized repository of all project-related data, BIM allows for informed decision-making, minimizing errors and optimizing resource allocation.`;
const description5 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our 3D Visualization Services allow architects and engineers to create detailed and lifelike representations of their designs, enhancing understanding and stakeholder buy-in.`;
const description6 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Virtual tours and 3D architectural design help identify potential design issues early, allowing for layout and feature optimization before construction begins.`;
const description7 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High-quality 3D models set a new standard for presenting design concepts, ensuring that ideas are communicated effectively and executed with precision.`;
const description8 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clients can interact with virtual models, exploring different design options and making adjustments in real-time, leading to better design outcomes.`;
const description9 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our architectural BIM services provide detailed modeling for both commercial and residential projects, ensuring every design element is meticulously planned.`;
const description10 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Using platforms like Revit, we create comprehensive information models that support smooth integration and execution across all construction phases.`;
const description11 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BIM streamlines the architectural planning process, enabling detailed and accurate modeling that aligns with the project’s vision.`;
const description12 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Architectural BIM ensures seamless collaboration between architects, engineers, and contractors, reducing discrepancies and improving project efficiency.`;
function Information() {
  return (
    <MKBox component="section" py={2}>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox
            width="3rem"
            height="3rem"
            variant="gradient"
            bgColor="info"
            color="white"
            coloredShadow="info"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="xl"
          >
            <StarIcon fontSize="small">mediation</StarIcon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          What is BIM?
          </MKTypography>
        </MKBox>
      <Container>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox>
            <DoubleArrowTwoToneIcon fontSize="small"></DoubleArrowTwoToneIcon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          Comprehensive Digital Representation
          </MKTypography>
        </MKBox>
        <MKBox display="flex"  p={2}>
          <MKTypography variant="body2" color="text" pl={2}>
          <p dangerouslySetInnerHTML={{ __html: description1 }}></p>
          </MKTypography>
        </MKBox>
      </Container>
      <Container>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox>
            <Icon fontSize="small">mediation</Icon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          Enhanced Collaboration
          </MKTypography>
        </MKBox>
        <MKBox display="flex"  p={2}>
          <MKTypography variant="body2" color="text" pl={2}>
          <p dangerouslySetInnerHTML={{ __html: description2 }}></p>
          </MKTypography>
        </MKBox>
      </Container>
      {/* <MKTypography variant="body1" color="text" pl={1} fontWeight="bold">
          Our BIM Services
        </MKTypography>       */}
      <Container>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox>
            <Icon fontSize="small">mediation</Icon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          Lifecycle Management
          </MKTypography>
        </MKBox>
        <MKBox display="flex"  p={2}>
          <MKTypography variant="body2" color="text" pl={2}>
          <p dangerouslySetInnerHTML={{ __html: description3 }}></p>
          </MKTypography>
        </MKBox>
      </Container>
      <Container>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox>
            <Icon fontSize="small">mediation</Icon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          Data-Driven Decision Making
          </MKTypography>
        </MKBox>
        <MKBox display="flex"  p={2}>
          <MKTypography variant="body2" color="text" pl={2}>
          <p dangerouslySetInnerHTML={{ __html: description4 }}></p>
          </MKTypography>
        </MKBox>
      </Container>
      <MKBox display="flex" alignItems="center" p={2}>
          <MKBox
            width="3rem"
            height="3rem"
            variant="gradient"
            bgColor="info"
            color="white"
            coloredShadow="info"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="xl"
          >
            <AutoFixHighIcon fontSize="small">mediation</AutoFixHighIcon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          Our BIM Services (3D Virtual Modeling & Visualization)
          </MKTypography>
      </MKBox>
      <Container>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox>
            <Icon fontSize="small">mediation</Icon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          Immersive Visualization
          </MKTypography>
        </MKBox>
        <MKBox display="flex"  p={2}>
          <MKTypography variant="body2" color="text" pl={2}>
          <p dangerouslySetInnerHTML={{ __html: description5 }}></p>
          </MKTypography>
        </MKBox>
      </Container>
      <Container>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox>
            <Icon fontSize="small">mediation</Icon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          Design Optimization
          </MKTypography>
        </MKBox>
        <MKBox display="flex"  p={2}>
          <MKTypography variant="body2" color="text" pl={2}>
          <p dangerouslySetInnerHTML={{ __html: description6 }}></p>
          </MKTypography>
        </MKBox>
      </Container>
      <Container>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox>
            <Icon fontSize="small">mediation</Icon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          Presentation Excellence
          </MKTypography>
        </MKBox>
        <MKBox display="flex"  p={2}>
          <MKTypography variant="body2" color="text" pl={2}>
          <p dangerouslySetInnerHTML={{ __html: description7 }}></p>
          </MKTypography>
        </MKBox>
      </Container>
      <Container>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox>
            <Icon fontSize="small">mediation</Icon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          Interactive Exploration
          </MKTypography>
        </MKBox>
        <MKBox display="flex"  p={2}>
          <MKTypography variant="body2" color="text" pl={2}>
          <p dangerouslySetInnerHTML={{ __html: description8 }}></p>
          </MKTypography>
        </MKBox>
      </Container>
      <MKBox display="flex" alignItems="center" p={2}>
          <MKBox
            width="3rem"
            height="3rem"
            variant="gradient"
            bgColor="info"
            color="white"
            coloredShadow="info"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="xl"
          >
            <Icon fontSize="small">mediation</Icon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          Architectural BIM Services
          </MKTypography>
      </MKBox>
      <Container>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox>
            <Icon fontSize="small">mediation</Icon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          Accurate Architectural Modeling
          </MKTypography>
        </MKBox>
        <MKBox display="flex"  p={2}>
          <MKTypography variant="body2" color="text" pl={2}>
          <p dangerouslySetInnerHTML={{ __html: description9 }}></p>
          </MKTypography>
        </MKBox>
      </Container>
      <Container>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox>
            <Icon fontSize="small">mediation</Icon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          Seamless Project Execution
          </MKTypography>
        </MKBox>
        <MKBox display="flex"  p={2}>
          <MKTypography variant="body2" color="text" pl={2}>
          <p dangerouslySetInnerHTML={{ __html: description10 }}></p>
          </MKTypography>
        </MKBox>
      </Container>
      <Container>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox>
            <Icon fontSize="small">mediation</Icon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          Streamlined Planning and Design
          </MKTypography>
        </MKBox>
        <MKBox display="flex"  p={2}>
          <MKTypography variant="body2" color="text" pl={2}>
          <p dangerouslySetInnerHTML={{ __html: description11 }}></p>
          </MKTypography>
        </MKBox>
      </Container>
      <Container>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox>
            <Icon fontSize="small">mediation</Icon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          Integration Across Disciplines
          </MKTypography>
        </MKBox>
        <MKBox display="flex"  p={2}>
          <MKTypography variant="body2" color="text" pl={2}>
          <p dangerouslySetInnerHTML={{ __html: description12 }}></p>
          </MKTypography>
        </MKBox>
      </Container>
      {/* <Container>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox>
            <Icon fontSize="small">mediation</Icon>
          </MKBox>
          <MKTypography variant="body1" color="text" pl={2}>
          Presentation Excellence
          </MKTypography>
        </MKBox>
        <MKBox display="flex"  p={2}>
          <MKTypography variant="body2" color="text" pl={10}>
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
              <li style={{ display: "flex", alignItems: "flex-start" }}>
                <span style={{ color: "gold", marginRight: "8px" }}>★</span>
                <p dangerouslySetInnerHTML={{ __html: description8 }}></p>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start" }}>
                <span style={{ color: "gold", marginRight: "8px" }}>★</span>
                <p dangerouslySetInnerHTML={{ __html: description9 }}></p>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start" }}>
                <span style={{ color: "gold", marginRight: "8px" }}>★</span>
                <p dangerouslySetInnerHTML={{ __html: description10 }}></p>
              </li>
            </ul>
          </MKTypography>
        </MKBox>
      </Container> */}
    </MKBox>
  );
}

export default Information;
