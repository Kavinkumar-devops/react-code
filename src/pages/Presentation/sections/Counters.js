// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
// D&M React components
import MKBox from "components/MKBox";
// D&M React examples
//import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import transformerImage from "./images/Transformer.jpg"; // Import the image
import png1 from "./images/1.PNG";
import png2 from "./images/2.PNG";
import png3 from "./images/3.PNG";
import png4 from "./images/4.PNG";
//import STRUCTURAL1 from "./images/STRUCTURAL1.PNG";
import interiors from "./images/interiors 1.PNG";

function Counters() {
  return (
    <MKBox component="section" py={5}>
      <Container>
        <Grid container spacing={4} item xs={12} lg={9} sx={{ mx: "auto" }}>
          {/* prettier-ignore */}
          <Grid item xs={14} md={4}>
          <MKBox
              component="img"
              src={png1} // Use the imported image
              alt="Transformer"
              width="100%"
              height="auto"
              borderRadius="8px"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <MKBox
              component="img"
              src={png2} // Use the imported image
              alt="Transformer"
              width="100%"
              height="auto"
              borderRadius="8px"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          {/* prettier-ignore */}
          <Grid item xs={12} md={4}>
          <MKBox
              component="img"
              src={png3} // Use the imported image
              alt="Transformer"
              width="100%"
              height="auto"
              borderRadius="8px"
            />
          </Grid>
          {/* prettier-ignore */}
          <Grid item xs={12} md={4}>
          <MKBox
              component="img"
              src={png4} // Use the imported image
              alt="Transformer"
              width="100%"
              height="auto"
              borderRadius="8px"
            />
          </Grid>
          {/* prettier-ignore */}
          <Grid item xs={12} md={4}>
          <MKBox
              component="img"
              src={interiors} // Use the imported image
              alt="Transformer"
              width="100%"
              height="auto"
              borderRadius="8px"
            />
          </Grid>
          {/* prettier-ignore */}
          <Grid item xs={14} md={4}>
          <MKBox
              component="img"
              src={transformerImage} // Use the imported image
              alt="Transformer"
              width="100%"
              height="auto"
              borderRadius="8px"
            />
          </Grid>
          {/* prettier-ignore */}
          {/* <Grid item xs={14} md={4}>
          <MKBox
              component="img"
              src={STRUCTURAL1} // Use the imported image
              alt="Transformer"
              width="100%"
              height="auto"
              borderRadius="8px"
            />
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
