/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
//import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
//import Author from "layouts/pages/landing-pages/author";

import RoofingIcon from '@mui/icons-material/Roofing';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';
import { FcAbout } from "react-icons/fc";
import { MdOutlineContactSupport } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdOutlineContactMail } from "react-icons/md";
// Sections

import Features1 from "pages/Services/GIS";
import Features2 from "pages/Services/BIM";
import Features3 from "pages/Services/Lidar";
import Features4 from "pages/Services/MobileMapping";
import Features5 from "pages/Services/OrthoPhoto";
import Features6 from "pages/Services/Photogrammetry";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";
import Presentation from "layouts/pages/presentation";

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
        name: "Orthophoto",
        route: "/sections/orthophoto/features",
        component: <Features5 />,
      },
      {
        name: "Lidar",
        route: "/sections/page-sections/features",
        component: <Features3 />,
      },
      {
        name: "WORLD MAP",
        route: "/sections/BIM/features",
        component: <Features1 />,
      },
      {
        name: "Mobile Mapping",
        route: "/sections/mapping/features",
        component: <Features4 />,
      },
      {
        name: "Photogrammetry",
        description: "Options",
        dropdown: true,
        collapse: [
          {
            name: "CORRIDOR MAPPING",
            route: "/sections/BIM/features",
            component: <Features6 />,
          },
          {
            name: "DTM MAPPING",
            route: "/sections/BIM/features",
            component: <Features6 />,
          },
          {
            name: "HYDRO",
            route: "/sections/BIM/features",
            component: <Features6 />,
          },
          {
            name: "PLANIMETRIC",
            route: "/sections/BIM/features",
            component: <Features6 />,
          },
        ],
      },
      // {
      //   name: "navigation",
      //   description: "See all navigations",
      //   dropdown: true,
      //   collapse: [
      //     {
      //       name: "navbars",
      //       route: "/sections/navigation/navbars",
      //       component: <Navbars />,
      //     },
      //     {
      //       name: "nav tabs",
      //       route: "/sections/navigation/nav-tabs",
      //       component: <NavTabs />,
      //     },
      //     {
      //       name: "pagination",
      //       route: "/sections/navigation/pagination",
      //       component: <Pagination />,
      //     },
      //   ],
      // },
      // {
      //   name: "input areas",
      //   description: "See all input areas",
      //   dropdown: true,
      //   collapse: [
      //     {
      //       name: "inputs",
      //       route: "/sections/input-areas/inputs",
      //       component: <Inputs />,
      //     },
      //     {
      //       name: "forms",
      //       route: "/sections/input-areas/forms",
      //       component: <Forms />,
      //     },
      //   ],
      // },
      // {
      //   name: "attention catchers",
      //   description: "See all examples",
      //   dropdown: true,
      //   collapse: [
      //     {
      //       name: "alerts",
      //       route: "/sections/attention-catchers/alerts",
      //       component: <Alerts />,
      //     },
      //     {
      //       name: "modals",
      //       route: "/sections/attention-catchers/modals",
      //       component: <Modals />,
      //     },
      //     {
      //       name: "tooltips & popovers",
      //       route: "/sections/attention-catchers/tooltips-popovers",
      //       component: <TooltipsPopovers />,
      //     },
      //   ],
      // },
      // {
      //   name: "elements",
      //   description: "See all 32 examples",
      //   dropdown: true,
      //   collapse: [
      //     {
      //       name: "avatars",
      //       route: "/sections/elements/avatars",
      //       component: <Avatars />,
      //     },
      //     {
      //       name: "badges",
      //       route: "/sections/elements/badges",
      //       component: <Badges />,
      //     },
      //     {
      //       name: "breadcrumbs",
      //       route: "/sections/elements/breadcrumbs",
      //       component: <BreadcrumbsEl />,
      //     },
      //     {
      //       name: "buttons",
      //       route: "/sections/elements/buttons",
      //       component: <Buttons />,
      //     },
      //     {
      //       name: "dropdowns",
      //       route: "/sections/elements/dropdowns",
      //       component: <Dropdowns />,
      //     },
      //     {
      //       name: "progress bars",
      //       route: "/sections/elements/progress-bars",
      //       component: <ProgressBars />,
      //     },
      //     {
      //       name: "toggles",
      //       route: "/sections/elements/toggles",
      //       component: <Toggles />,
      //     },
      //     {
      //       name: "typography",
      //       route: "/sections/elements/typography",
      //       component: <Typography />,
      //     },
      //   ],
      // },
    ],
  },
  {
    name: "About Us",
    icon: <MdOutlineContactSupport size="23px" sx={{ fontWeight: 'bold' }} color="black"/>,
    route: "/pages/landing-pages/about-us",
    component: <AboutUs fontSize="medium" sx={{ fontWeight: 'bold' }} color="black" />,
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
