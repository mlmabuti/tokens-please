import {
  Button,
  Card,
  Container,
  Typography,
  Paper,
  Grid,
  Alert,
} from "@mui/material/";
import TokenizerIcon from "@mui/icons-material/Toll";
import ParserIcon from "@mui/icons-material/ManageSearch";
import AnalyzerIcon from "@mui/icons-material/Spellcheck";
import ClearIcon from "@mui/icons-material/Clear";
import Reader from "./Reader";

let output = "";
let input = "";

function Home() {
  return (
    <Container>
      <Paper elevation={4} sx={{ padding: "4% 4% 4%", margin: "2% 0% 2%" }}>
        <Alert icon={false} severity="info" sx={{ marginBottom: "2%" }}>
          {"ℹ️ Tokens, Please! is a code analyzer based on the first three stages of the compilation process. " +
            "This program only accounts for declarations and assignment operations. Here is the list of recognized data types; " +
            "String, int, char, boolean, double, and float. ✨"}
        </Alert>

        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item>
            <Reader />
          </Grid>

          <Grid item>
            <Button variant="contained" color="error">
              <ClearIcon /> Clear
            </Button>
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
            <Button
              variant={"contained"}
              color="success"
              endIcon={<TokenizerIcon />}
            >
              Lexical Analysis
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant={"contained"}
              color="success"
              endIcon={<ParserIcon />}
            >
              Syntax Analysis
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant={"contained"}
              color="success"
              endIcon={<AnalyzerIcon />}
            >
              Semantic Analysis
            </Button>
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
