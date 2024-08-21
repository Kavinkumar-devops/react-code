/* eslint-disable no-unused-vars */
// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
//import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
//import Author from "layouts/pages/landing-pages/author";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Features1 from "layouts/sections/orthophoto/featuers";
import Features2 from "layouts/sections/photogrammetry/featuers";
import Features3 from "layouts/sections/BIM/featuers";
import Features4 from "layouts/sections/mapping/featuers";
import Features5 from "layouts/sections/modeling/featuers";
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
    icon: <Icon>dashboard</Icon>,
    route: "/",
    component: <Presentation />,
    columns: 1,
    rowsPerColumn: 2,
  },
  {
    name: "Services",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "BIM",
        route: "/sections/BIM/features",
        component: <Features3 />,
      },
      {
        name: "Orthophoto",
        route: "/sections/orthophoto/features",
        component: <Features1 />,
      },
      {
        name: "Lidar",
        route: "/sections/page-sections/features",
        component: <Features />,
      },
      {
        name: "WORLD MAP",
        route: "/sections/BIM/features",
        component: <Features3 />,
      },
      {
        name: "Mobile Mapping",
        route: "/sections/page-sections/features",
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
            component: <Features />,
          },
          {
            name: "DTM MAPPING",
            route: "/sections/BIM/features",
            component: <Features />,
          },
          {
            name: "HYDRO",
            route: "/sections/BIM/features",
            component: <Features />,
          },
          {
            name: "PLANIMETRIC",
            route: "/sections/BIM/features",
            component: <Features />,
          },
        ],
      },
      {
        name: "navigation",
        description: "See all navigations",
        dropdown: true,
        collapse: [
          {
            name: "navbars",
            route: "/sections/navigation/navbars",
            component: <Navbars />,
          },
          {
            name: "nav tabs",
            route: "/sections/navigation/nav-tabs",
            component: <NavTabs />,
          },
          {
            name: "pagination",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
        ],
      },
      {
        name: "input areas",
        description: "See all input areas",
        dropdown: true,
        collapse: [
          {
            name: "inputs",
            route: "/sections/input-areas/inputs",
            component: <Inputs />,
          },
          {
            name: "forms",
            route: "/sections/input-areas/forms",
            component: <Forms />,
          },
        ],
      },
      {
        name: "attention catchers",
        description: "See all examples",
        dropdown: true,
        collapse: [
          {
            name: "alerts",
            route: "/sections/attention-catchers/alerts",
            component: <Alerts />,
          },
          {
            name: "modals",
            route: "/sections/attention-catchers/modals",
            component: <Modals />,
          },
          {
            name: "tooltips & popovers",
            route: "/sections/attention-catchers/tooltips-popovers",
            component: <TooltipsPopovers />,
          },
        ],
      },
      {
        name: "elements",
        description: "See all 32 examples",
        dropdown: true,
        collapse: [
          {
            name: "avatars",
            route: "/sections/elements/avatars",
            component: <Avatars />,
          },
          {
            name: "badges",
            route: "/sections/elements/badges",
            component: <Badges />,
          },
          {
            name: "breadcrumbs",
            route: "/sections/elements/breadcrumbs",
            component: <BreadcrumbsEl />,
          },
          {
            name: "buttons",
            route: "/sections/elements/buttons",
            component: <Buttons />,
          },
          {
            name: "dropdowns",
            route: "/sections/elements/dropdowns",
            component: <Dropdowns />,
          },
          {
            name: "progress bars",
            route: "/sections/elements/progress-bars",
            component: <ProgressBars />,
          },
          {
            name: "toggles",
            route: "/sections/elements/toggles",
            component: <Toggles />,
          },
          {
            name: "typography",
            route: "/sections/elements/typography",
            component: <Typography />,
          },
        ],
      },
    ],
  },
  {
    name: "About Us",
    icon: <Icon>dashboard</Icon>,
    route: "/pages/landing-pages/about-us",
    component: <AboutUs />,
    columns: 1,
    rowsPerColumn: 2,
  },
  {
    name: "Contact Us",
    icon: <Icon>article</Icon>,
    route: "/pages/landing-pages/contact-us",
    component: <ContactUs />,
    columns: 1,
    rowsPerColumn: 2,
  },
];

export default routes;
