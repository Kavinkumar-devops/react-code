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
        name: "Orthophoto",
        route: "/sections/orthophoto/features",
        component: <Features5 />,
      },
      {
        name: "Lidar",
        route: "/sections/lider/features",
        component: <Features3 />,
      },
      // {
      //   name: "WORLD MAP",
      //   route: "/sections/BIM/features",
      //   component: <Presentation />,
      // },
      {
        name: "Mobile Mapping",
        route: "/sections/mapping/features",
        component: <Features4 />,
      },
      {
        name: "Photogrammetry",
        // description: "Options",
        dropdown: true,
        collapse: [
          {
            name: "CORRIDOR MAPPING",
            route: "/sections/photogrammetry/features",
            component: <Features6 />,
          },
          {
            name: "DTM MAPPING",
            route: "/sections/photogrammetry/features",
            component: <Features6 />,
          },
          {
            name: "HYDRO",
            route: "/sections/photogrammetry/features",
            component: <Features6 />,
          },
          {
            name: "PLANIMETRIC",
            route: "/sections/photogrammetry/features",
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
