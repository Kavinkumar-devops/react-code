/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

// prop-types is a library for type checking of props
import PropTypes from "prop-types";

// react-copy-to-clipboard components
import { CopyToClipboard } from "react-copy-to-clipboard";

// react-syntax-highlighter components
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Slide from "@mui/material/Slide";
// D&M React components
import MKBox from "components/MKBox";
import MKAlert from "components/MKAlert";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
// D&M React base styles
import colors from "assets/theme/base/colors";

function View({ children, code, title, height, ...rest }) {
  const { grey } = colors;

  const [activeTab, setActiveTab] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  useEffect(() => {
    setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  return (
    <MKBox
      width="100%"
      position="relative"
      borderRadius="xl"
      shadow="lg"
      mb={12}
      sx={{ overflow: "hidden" }}
      {...rest}
    >
      <MKBox
        px={3}
        sx={{
          borderBottom: ({ borders: { borderWidth, borderColor } }) =>
            `${borderWidth[1]} solid ${borderColor}`,
        }}
      >
        <Grid container spacing={2} justifyContent="space-between" py={1}>
          <Grid item xs={12} lg={3}>
            <MKTypography variant="body1" pt={0.5}>
              {title}
            </MKTypography>
          </Grid>
          {/* <Grid item xs={12} lg={3}>
            <AppBar position="static">
              <Tabs value={activeTab} onChange={handleTabType}>
                <Tab
                  icon={
                    <MKBox
                      component="i"
                      color="dark"
                      mr={1.25}
                      sx={{ fontSize: ({ typography: { size } }) => size.sm }}
                      className="fas fa-desktop"
                    />
                  }
                  label="Contents"
                />
              </Tabs>
            </AppBar>
          </Grid> */}
        </Grid>
      </MKBox>
      <MKBox display={activeTab === 0 ? "block" : "none"}>
        <MKBox width="100%" p={3}>
          <MKBox
            bgColor="grey-100"
            width="100%"
            height={height}
            maxHeight="40rem"
            borderRadius="xl"
            sx={{ overflowX: "hidden", overflowY: "scroll" }}
          >
            {children}
          </MKBox>
        </MKBox>
      </MKBox>
      {/* prettier-ignore */}
      <MKBox display={activeTab === 1 ? "block" : "none"} p={3}>
        <MKBox
          bgColor="grey-100"
          position="relative"
          width="100%"
          borderRadius="xl"
          sx={{ overflow: "hidden" }}
        >
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the View
View.defaultProps = {
  height: "auto",
};

// Typechecking props for the View
View.propTypes = {
  children: PropTypes.node.isRequired,
  code: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default View;
