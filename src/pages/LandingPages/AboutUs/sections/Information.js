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

import TransparentBlogCard from "../TransparentBlogCard/index";
// Image
import post1 from "assets/image/mobile_mapping.png";
import post2 from "assets/image/mobile_mapping.jpg";
import post3 from "assets/image/mm1.jpeg";
import post4 from "assets/f_images/mobilemapping.PNG";
// D&M React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
const description1 = `At BN-GeoSpacial, we specialize in delivering advanced Geospatial, Engineering, and BIM solutions tailored to a wide range of industries, including Infrastructure, GIS, Civil Engineering, Urban Planning, Utilities, Geomatics , mining and Oil & Gas.`;
const description2 = `Our expertise includes cutting-edge techniques such as Digital Photogrammetry, UAV data analysis, LiDAR Mapping (both airborne and terrestrial), Orthophoto Production, and GIS applications. We use these tools to solve complex problems and provide significant value to our clients.`;
const description3 = `Our Scan to BIM services offer high-precision 3D models based on detailed point cloud data captured by static or mobile LiDAR systems. These models support various sectors, including Infrastructure and Architectural Engineering and Construction (AEC), as well as Oil & Gas.`;
const description4 = `Additionally, our Scan to CAD services convert point cloud data into accurate 2D drawings and 3D models, suitable for documentation and pre-fabrication. Our projects span multiple industries, including Heritage, Oil & Gas, Water Management, and Residential Development.`;
const description5 = `Our team has tackled numerous high-profile projects globally. We are committed to delivering exceptional geospatial solutions that are both effective and cost-efficient.`;
const description6 = `Our goal is to be a leading provider of Geospatial and BIM services, focusing on innovation and customer satisfaction to drive progress in the Infrastructure sector.`;
const description7 = `To be a global leader in Geospatial,Building Information Modeling and GIS services setting the standard for excellence and innovation in the industry.`;
const description8 = `To deliver high-quality services that are cost-effective and transparent, fostering clear communication and a deep understanding of our clients' needs. We build lasting relationships based on our core values.`;
const description9 = `These values form the foundation of our business. They guide our actions, shape our culture, and underpin the trust and relationships we build with our clients.`;
const description10 = `We excel in delivering exactly what our clients need to achieve success. Our long-standing presence in the industry speaks to our commitment and capability.`;
const description11 = `Our team collectively boasts over 15 years of industry experience. This deep reservoir of knowledge and skills allows us to tackle projects effectively and provide superior client support.`;
const description12 = `We prioritize communication as a key to success. We guarantee responses to queries within an hour, or up to 12 hours at the latest, and ensure timely project delivery, adhering strictly to schedules.`;
const description13 = `Our rigorous QC and QA processes include a four-eye check quality management system. We adhere to top standards as per the industry.`;
const description14 = `Recognizing that data is a crucial asset, we implement stringent data management protocols led by our IT team. Our strict data confidentiality and backup systems, supported by the BN-GeoSpacial ISMS protocol, ensure the highest level of data protection.`;
const description15 = `Innovation is at the heart of our operations. We stay abreast of the latest trends and technologies, and our R&D team thrives on tackling new challenges, driving us to offer cutting-edge solutions and maintain peak service standards.`;
const description16 = `Through partnerships with top HR consultants and our robust in-house HR policies, we effectively manage resource scaling and skill development. Whether your project is large or small, we’re prepared to meet your needs efficiently.`;
function Information() {
  return (
    <MKBox component="section" py={2}>
          <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h4" fontWeight="bold">
            Welcome to BN-GeoSpacial
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              {description1}
              </MKTypography>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              {description2}
              </MKTypography>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              {description3}
              </MKTypography>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              {description4}
              </MKTypography>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              {description5}
              </MKTypography>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              {description6}
              </MKTypography>
          <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h4" fontWeight="bold">
            Our Vision
            </MKTypography>
          </MKBox>

              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description7 }}></p>
              </MKTypography>
          <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h4" fontWeight="bold">
            Our Mission
            </MKTypography>
          </MKBox>

              <MKBox pl={0}>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description8 }}></p>
                </MKTypography>
            <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h4" fontWeight="bold">
            Our Values
            </MKTypography>
          </MKBox>
          <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" >
            Client-Centricity, Transparency, Integrity, Innovation, People, and Team Spirit
            </MKTypography>
          </MKBox>
              <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
              <p dangerouslySetInnerHTML={{ __html: description9 }}></p>
              </MKTypography>
          <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h4" fontWeight="bold">
            Why BN-GeoSpacial?
            </MKTypography>
          </MKBox>
          <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" >
            Decades of Expertise
            </MKTypography>
          </MKBox>
              <MKBox pl={0}>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description10 }}></p>
                </MKTypography>
                <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" >
            Unmatched Experience
            </MKTypography>
          </MKBox>
              <MKBox pl={0}>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description11 }}></p>
                </MKTypography>
                <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" >
            Prompt Customer Service
            </MKTypography>
          </MKBox>
              <MKBox pl={0}>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description12 }}></p>
                </MKTypography>
                <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" >
            Precision and Quality
            </MKTypography>
          </MKBox>
              <MKBox pl={0}>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description13 }}></p>
                </MKTypography>
                <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" >
            Robust Data Security
            </MKTypography>
          </MKBox>
              <MKBox pl={0}>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description14 }}></p>
                </MKTypography>
                <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" >
            Commitment to Innovation
            </MKTypography>
          </MKBox>
              <MKBox pl={0}>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description15 }}></p>
                </MKTypography>
                <MKBox display="flex" alignItems="center" mb={2}>
            <MKTypography variant="h6" >
            Scalable Resources
            </MKTypography>
          </MKBox>
              <MKBox pl={0}>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description16 }}></p>
                </MKTypography>
              
          {/* <MKBox display="flex" alignItems="center" p={1}>
          
          <MKTypography variant="h4" fontWeight="bold">
          Facade BIM Services
          </MKTypography>
          </MKBox>

              <MKBox pl={0}>
              </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
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
            <MKBox display="flex" alignItems="center" p={1}>
              <MKTypography variant="h4" fontWeight="bold">
              Scan to BIM
              </MKTypography>
            </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={2} pr={1}>
                <p dangerouslySetInnerHTML={{ __html: description11 }}></p>
                </MKTypography>
          <MKBox display="flex" alignItems="center" p={1}>
          
          <MKTypography variant="h4" color="secondary" pl={2} py={5}>
            Videos
          </MKTypography>
        </MKBox> */}
    </MKBox>
  );
}

export default Information;
