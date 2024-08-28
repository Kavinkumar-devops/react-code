/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Link } from 'react-router-dom';

// D&M React components
import MKTypography from "components/MKTypography";
// Image
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "BN- Geospatial  Pvt ltd",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "#",
    },
    {
      icon: <TwitterIcon />,
      link: "#",
    },
    {
      icon: <GitHubIcon />,
      link: "#",
    },
    {
      icon: <YouTubeIcon />,
      link: "#",
    },
  ],
  menus: [
    {
      name: "Quick links",
      items: [
        { 
          name: (
            <MKTypography
              component={Link}
              to="/pages/landing-pages/about-us"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              About Us
            </MKTypography>
          ),
        },
        { 
          name: (
            <MKTypography
              component={Link}
              to="/pages/landing-pages/about-us"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              Vision & Mission
            </MKTypography>
          ),
        },
        { 
          name: (
            <MKTypography
              component={Link}
              to="/pages/landing-pages/about-us"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              Why Choose us
            </MKTypography>
          ),
        },
        { 
          name: (
            <MKTypography
              component={Link}
              to="/pages/landing-pages/contact-us"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              Contact Us
            </MKTypography>
          ),
        },
      ],
    },
    {
      name: "Our Solutions",
      items: [
        { 
          name: (
            <MKTypography
              component={Link}
              to="/sections/BIM2"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              1. GIS
            </MKTypography>
          ),
        },
        { 
          name: (
            <MKTypography
              component={Link}
              to="/sections/BIM2"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              2. BIM
            </MKTypography>
          ),
        },
        { 
          name: (
            <MKTypography
              component={Link}
              to="/sections/page-sections/features"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              3. Lidar
            </MKTypography>
          ),
        },
        { 
          name: (
            <MKTypography
              component={Link}
              to="/pages/landing-pages/contact-us"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              4. Photogrammetry
            </MKTypography>
          ),
        },
        { 
          name: (
            <MKTypography
              component={Link}
              to="/sections/mapping/features"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              5. Mobile Mapping
            </MKTypography>
          ),
        },
        { 
          name: (
            <MKTypography
              component={Link}
              to="/sections/orthophoto/features"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              6. OrthoPhoto
            </MKTypography>
          ),
        },
      ],
    },
    {
      name: "Visit Us",
      items: [
        { 
          name: (
            <>
            <MKTypography
              display="flex"
              // alignItems="center"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              <LocationOnIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              #1399, Ground Floor, 3rd Cross, 1st Stage 2nd Cross, Chandra Layout, Bengaluru 5600 40
            </MKTypography>
             <MKTypography variant="button" fontWeight="bold" textTransform="capitalize" mt={1}>
               Landmark:
               <MKTypography
                 component="span"
                 display="flex"
                 variant="button"
                 fontWeight="regular"
                 textTransform="none"
                 sx={{ ml: 3 }}
               >
                 Near Ashirwad Bekary
               </MKTypography>
             </MKTypography>
            </>
          ),
        },
        { name: "Locate Us on Map", href: "https://www.google.com/maps?q=12.956389,77.527500",style:"color: 'blue', textDecoration: 'underline'" },
      ],
    },
    {
      name: "Connect with Us",
      items: [
        { 
          name: <><PhoneIcon sx={{ mr: 1 }} />6362641656</> 
        },
        { 
          name: <><WhatsAppIcon sx={{ mr: 1 }} />6362641656</>
        },
        { 
          name: <><EmailIcon sx={{ mr: 1 }} />info@bngeospacial.com</>
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Copyright © 2024 BN-GeoSpacial. All Right Reserved.
      {/* <MKTypography
        component="a"
        href="#"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        BN-GeoSpacial 
      </MKTypography> */}
      
    </MKTypography>
  ),
};
