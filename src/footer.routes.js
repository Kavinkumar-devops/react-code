/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// @mui icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Link } from 'react-router-dom';

// D&M React components
import MKTypography from "components/MKTypography";
// Image
import logoCT from "assets/images/logo1.png";

const date = new Date().getFullYear();

export default {
  brand: {
    // name: "BN- Geospatial  Pvt ltd",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <InstagramIcon />,
      link: "#",
    },
    {
      icon: <FacebookIcon />,
      link: "#",
    },
    {
      icon: <XIcon />,
      link: "https://x.com/bngeospatial",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/company/bn-geospatial-pvt-ltd/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UC7MG8RemsVap7onttnLovGA",
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
        // { 
        //   name: (
        //     <MKTypography
        //       component={Link}
        //       to="/sections/BIM2"
        //       variant="button"
        //       fontWeight="regular"
        //       textTransform="capitalize"
        //     >
        //       1. GIS
        //     </MKTypography>
        //   ),
        // },
        { 
          name: (
            <MKTypography
              component={Link}
              to="/sections/BIM"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              BIM
            </MKTypography>
          ),
        },
        { 
          name: (
            <MKTypography
              component={Link}
              to="/sections/VR"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              VR
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
              OrthoPhoto
            </MKTypography>
          ),
        },
        { 
          name: (
            <MKTypography
              component={Link}
              to="/sections/lider/features"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              Lidar
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
              Mobile Mapping
            </MKTypography>
          ),
        },
        { 
          name: (
            <MKTypography
              component={Link}
              to="/sections/photogrammetry/features"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              Photogrammetry
            </MKTypography>
          ),
        },
        { 
          name: (
            <MKTypography
              component={Link}
              to="/sections/3DModelling/features"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              3D Modelling
            </MKTypography>
          ),
        },
        { 
          name: (
            <MKTypography
              component={Link}
              to="/sections/GIS/features"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              GIS
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
             {/* <MKTypography variant="button" fontWeight="bold" textTransform="capitalize" mt={1}>
               Landmark:
               <MKTypography
                 component="span"
                 display="flex"
                 variant="button"
                 fontWeight="regular"
                 textTransform="none"
                 sx={{ ml: 3 }}
               >
                 Near Ashirwad Bakery
               </MKTypography>
             </MKTypography> */}
            </>
          ),
        },
        { 
          name: "Locate Us on Map", 
          href: "https://www.google.com/maps?q=12.956389,77.527500"
        }
      ],
    },
    {
      name: "Connect with Us",
      items: [
        // { 
        //   name: <><PhoneIcon sx={{ mr: 1 }} />6362641656</> 
        // },
        // { 
        //   name: <><WhatsAppIcon sx={{ mr: 1 }} />6362641656</>
        // },
        { 
          name: <><EmailIcon sx={{ mr: 1 }} />Info@bngeospatial.com</>
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
