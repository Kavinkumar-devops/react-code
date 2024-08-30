const navbarDarkCode = `// D&M React components
import MKBox from "components/MKBox";
// D&M React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function NavbarDark() {
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.bngeospatial.com/product/material-kit-react",
        //   label: "free download",
        //   color: "info",
        // }}
        transparent
        relative
        light
        center
      />
    </MKBox>
  );
}

export default NavbarDark;`;

export default navbarDarkCode;
