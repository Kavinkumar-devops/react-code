/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// @mui material components

// @mui icons
//import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
//import Author from "layouts/pages/landing-pages/author";

import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import RoofingIcon from '@mui/icons-material/Roofing';
import { MdOutlineConnectWithoutContact, MdOutlineContactSupport } from "react-icons/md";
// Sections

import Presentation from "layouts/pages/presentation";
import Features2 from "pages/Services/BIM";
import Features7 from "pages/Services/VR";
import Features3 from "pages/Services/Lidar";
import Features4 from "pages/Services/MobileMapping";
import Features5 from "pages/Services/OrthoPhoto";
import Features6 from "pages/Services/Photogrammetry";

const routes = [
  {
    name: "Home",
    icon: <RoofingIcon fontSize="medium" sx={{ fontWeight: 'bold' }} color="black"/>,
    route: "/",
    component: <Presentation />,
    columns: 1,
    rowsPerColumn: 2,
  },
  {
    name: "Services",
    icon: <ProductionQuantityLimitsIcon fontSize="medium" sx={{ fontWeight: 'bold' }} color="black"/>,
    collapse: [
      {
        name: "BIM",
        route: "/sections/BIM",
        component: <Features2 />,
      },
      {
        name: "VR",
        route: "/sections/VR",
        component: <Features7 />,
      },
      {
        name: "OrthoPhoto",
        route: "/sections/orthophoto/features",
        component: <Features5 />,
      },
      {
        name: "LiDAR",
        route: "/sections/lider/features",
        component: <Features3 />,
      },
 
      {
        name: "Mobile Mapping",
        route: "/sections/mapping/features",
        component: <Features4 />,
      },
      {
        name: "Photogrammetry",
        route: "/sections/photogrammetry/features",
        component: <Features6 />,
      },
      // {
      //   name: "Photogrammetry",
      //   // description: "Options",
      //   dropdown: true,
      //   collapse: [
      //     {
      //       name: "CORRIDOR MAPPING",
      //       route: "/sections/photogrammetry/features",
      //       component: <Features6 />,
      //     },
      //     {
      //       name: "DTM MAPPING",
      //       route: "/sections/photogrammetry/features",
      //       component: <Features6 />,
      //     },
      //     {
      //       name: "HYDRO",
      //       route: "/sections/photogrammetry/features",
      //       component: <Features6 />,
      //     },
      //     {
      //       name: "PLANIMETRIC",
      //       route: "/sections/photogrammetry/features",
      //       component: <Features6 />,
      //     },
      //   ],
      // },
    ],
  },
  {
    name: "About Us",
    icon: <MdOutlineContactSupport size="23px" sx={{ fontWeight: 'bold' }} color="black"/>,
    route: "/pages/landing-pages/about-us",
    component: <AboutUs />,
    // component: <UnderDevelopment fontSize="medium" sx={{ fontWeight: 'bold' }} color="black" />,
    columns: 1,
    rowsPerColumn: 2,
  },
  {
    name: "Contact Us",
    icon: <MdOutlineConnectWithoutContact size="23px" sx={{ fontWeight: 'bold' }} color="black"/>,
    route: "/pages/landing-pages/contact-us",
    component: <ContactUs />,
    columns: 1,
    rowsPerColumn: 2,
  },
];

export default routes;
