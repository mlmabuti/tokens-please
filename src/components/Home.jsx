import { Card, Container, Typography, Paper, Grid } from "@mui/material/";
import ArrowRight from "@mui/icons-material/ArrowRightAlt";
import Reader from "./Reader";
import BtnClear from "./BtnClear";
import BtnAnalyzer from "./BtnAnalyzer";
import BtnParser from "./BtnParser";
import BtnTokenizer from "./BtnTokenizer";
import Information from "./Information";

let output = "";
let input = "";

function Home() {
  return (
    <Container>
      <Paper elevation={4} sx={{ padding: "4% 4% 4%", margin: "2% 0% 2%" }}>
        <Information />

        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item>
            <Reader />
          </Grid>

          <Grid item>
            <BtnClear />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "1%" }}
        >
          <Grid item>
            <BtnTokenizer />
          </Grid>
            
          <Grid item>
            <ArrowRight sx={{padding:"1%"}} />
          </Grid>

          <Grid item>
            <BtnParser />
          </Grid>

          <Grid item>
            <ArrowRight sx={{padding:"1%"}} />
          </Grid>

          <Grid item>
            <BtnAnalyzer />
          </Grid>
        </Grid>

        <Typography variant="h5" fontWeight="600" sx={{ marginTop: "2%" }}>
          Input 🤚
        </Typography>

        <Card variant="outlined" sx={{ padding: "3%", margin: "1% 0% 2%" }}>
          <Typography fontFamily="roboto" fontSize="1rem" className="inputBox">
            {input}
          </Typography>
        </Card>

        <Typography variant="h5" fontWeight="600" sx={{ marginTop: "2%" }}>
          Output 🧾
        </Typography>

        <Card variant="outlined" sx={{ padding: "3%", margin: "1% 0% 2%" }}>
          <Typography fontFamily="roboto" fontSize="1rem">
            {output}
          </Typography>
        </Card>
      </Paper>
    </Container>
  );
}

export default Home;
