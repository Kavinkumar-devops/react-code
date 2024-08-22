/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
// D&M React components
import MKTypography from "components/MKTypography";
// Image
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "bngeospatial@gmail.com",
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
      name: "company",
      items: [
        { name: "BN-Geospatial"},
        { name: "1399, Ground Floor,", href: "#" },
        { name: "3rd Cross,1st Stage 2nd Cross,", href: "#" },
        { name: "Chandra Layout,", href: "#" },
        { name: "Bengaluru 5600 40", href: "#" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "#" },
        { name: "bits & snippets", href: "#" },
        { name: "affiliate program", href: "#" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "#" },
        { name: "knowledge center", href: "#" },
        { name: "custom development", href: "#" },
        { name: "sponsorships", href: "#" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "#" },
        { name: "privacy policy", href: "#" },
        { name: "licenses (EULA)", href: "#" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} D&M by{" "}
      <MKTypography
        component="a"
        href="#"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        D&M Works
      </MKTypography>
      .
    </MKTypography>
  ),
};
