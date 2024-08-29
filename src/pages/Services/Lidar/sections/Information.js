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
const description1 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mobile mapping represents a technological frontier where various digital tools and techniques converge to improve specific mapping tasks. Unlike traditional mapping methods that relied on theodolites and solar observations to determine fixed points, modern mobile mapping integrates GPS technology to provide precise, real-time data collection. This evolution has revolutionized the way maps are created, enabling the production of highly accurate and up-to-date maps with greater efficiency.`;
const description2 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Historically, the first modern maps were constructed in the late eighteenth century using theodolites to determine absolute positions of fixed points, often on high ground. Surveyors then mapped out large triangles over the landscape to establish a network of points, which was refined into a detailed landscape model featuring topography and urban structures. This process, known as 'primary triangulation,' laid the foundation for national surveys throughout the nineteenth century.`;
const description3 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the advent of aerial photography in the early twentieth century, map revision became more efficient, combining aerial images with ground surveys using modern theodolites and, later, GPS technology. Today, mobile mapping technologies have further streamlined these processes, making it possible to update and create maps with unprecedented speed and accuracy.`;
const description4 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The integration of digital technologies into mapping has not only reduced costs and logistical burdens but has also democratized the mapping process. While national surveys continue to produce framework maps, the accessibility of mobile mapping tools has empowered individuals and organizations to create maps for a variety of purposes—from urban planning and infrastructure development to environmental monitoring and community-driven initiatives.`;
const description5 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Participatory mapping, in particular, has benefited from mobile mapping technologies. Groups and communities can now generate copyright-free maps by capturing GPS tracks from numerous contributors, enabling collaborative mapping efforts that serve local needs and advocate for social causes.`;
const description6 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At BN-Geospatial, we offer a comprehensive range of mobile mapping services designed to meet the diverse needs of our clients:`;
const description7 = `&nbsp;&nbsp;Real-Time Data Collection: Using GPS-enabled devices and advanced sensors, we capture high-precision geospatial data in real-time, ensuring that your maps are accurate and up-to-date.`;
const description8 = `&nbsp;&nbsp;Custom Mapping Solutions: We tailor our mobile mapping services to suit specific project requirements, whether you're planning a new infrastructure project, conducting an environmental survey, or engaging in participatory mapping.`;
const description9 = `&nbsp;&nbsp;Integration with GIS: Our mobile mapping data seamlessly integrates with GIS platforms, allowing for enhanced analysis, visualization, and decision-making.`;
const description10 = `&nbsp;&nbsp;Cost-Effective Mapping: By leveraging the latest digital technologies, we reduce the cost and complexity of mapping projects, delivering high-quality results within your budget and timeframe.`;
const description11 = `At BN-Geospatial, our mobile mapping services provide you with the tools and expertise needed to navigate the complexities of modern cartography. Whether you're working on a large-scale national survey or a localized community project, we help you achieve your mapping goals with precision and efficiency.`;
const description12 = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Architectural BIM ensures seamless collaboration between architects, engineers, and contractors, reducing discrepancies and improving project efficiency.`;
function Information() {
  return (
    <MKBox component="section" py={2}>
      <MKBox display="flex" alignItems="center" p={1}>
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
        <MKTypography variant="h4" color="text" pl={1}>
        What is Mobile Mapping?
        </MKTypography>
      </MKBox>
          <Container>
            <MKBox display="flex"  p={0}>
            <MKBox pl={2}>
            </MKBox>
              <MKTypography variant="body1" color="text" pl={2}>
              <p dangerouslySetInnerHTML={{ __html: description1 }}></p>
              </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
            <MKBox pl={2}>
            </MKBox>
              <MKTypography variant="body1" color="text" pl={2}>
              <p dangerouslySetInnerHTML={{ __html: description2 }}></p>
              </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
            <MKBox pl={2}>
            </MKBox>
              <MKTypography variant="body1" color="text" pl={2}>
              <p dangerouslySetInnerHTML={{ __html: description3 }}></p>
              </MKTypography>
            </MKBox>
          </Container>
      <MKBox display="flex" alignItems="center" p={1}>
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
          <MKTypography variant="h4" color="text" pl={2}>
          The Impact of Mobile Mapping
          </MKTypography>
        </MKBox>
            <Container>
              <MKBox display="flex"  p={0}>
              <MKBox pl={2}>
              </MKBox>
                <MKTypography variant="body1" color="text" pl={2}>
                <p dangerouslySetInnerHTML={{ __html: description4 }}></p>
                </MKTypography>
              </MKBox>
              <MKBox display="flex"  p={1}>
              <MKBox pl={2}>
              </MKBox>
                <MKTypography variant="body1" color="text" pl={2}>
                <p dangerouslySetInnerHTML={{ __html: description5 }}></p>
                </MKTypography>
              </MKBox>
            </Container>
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
            <MKBox display="flex" alignItems="center" p={1} py={1}>
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
              <MKTypography variant="h4" color="text" pl={2}>
              Our Mobile Mapping Services
              </MKTypography>
            </MKBox>
          <Container>
          <MKBox display="flex"  p={0}>
            <MKBox pl={2}>
            </MKBox>
            <MKTypography variant="body1" color="text" pl={2}>
              <p dangerouslySetInnerHTML={{ __html: description6 }}></p>
            </MKTypography>
            </MKBox>
          <MKBox display="flex"  p={1}>
              <MKBox pl={4}>
                  <MKBox pl={2}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body1" color="text" pl={0}>
                <p dangerouslySetInnerHTML={{ __html: description7 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={5}>
                  <MKBox pl={2}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body1" color="text" pl={0}>
                <p dangerouslySetInnerHTML={{ __html: description8 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={5}>
                  <MKBox pl={2}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body1" color="text" pl={0}>
                <p dangerouslySetInnerHTML={{ __html: description9 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={1}>
              <MKBox pl={5}>
                  <MKBox pl={2}>
                    <Icon fontSize="small">mediation</Icon>
                  </MKBox>
              </MKBox>
                <MKTypography variant="body1" color="text" pl={0}>
                <p dangerouslySetInnerHTML={{ __html: description10 }}></p>
                </MKTypography>
            </MKBox>
            <MKBox display="flex"  p={0}>
            <MKBox pl={2}>
            </MKBox>
              <MKTypography variant="body1" color="text" pl={2}>
              <p dangerouslySetInnerHTML={{ __html: description11 }}></p>
              </MKTypography>
            </MKBox>
          </Container>
          <MKBox display="flex" alignItems="center" p={1}>
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
          <MKTypography variant="h4" color="text" pl={2} py={5}>
            Videos
          </MKTypography>
        </MKBox>
    </MKBox>
  );
}

export default Information;
