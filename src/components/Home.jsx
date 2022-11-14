import {
  Alert,
  Button,
  TextField,
  Card,
  Container,
  Typography,
  Paper,
  Grid,
} from "@mui/material/";
import TokenizerIcon from "@mui/icons-material/Toll";
import ParserIcon from "@mui/icons-material/ManageSearch";
import AnalyzerIcon from "@mui/icons-material/Spellcheck";

let output = "❓❓❓";

function Home() {
  return (
    <Container>
      <Paper elevation={4} sx={{ padding: "4% 4% 4%", margin: "2% 0% 2%" }}>
        <Typography variant="h5" fontWeight="600">
          {"Let me see your tokens 🪙"} 
        </Typography>

        <Alert severity="info" sx={{ marginTop: "2%", padding: ".4%" }}>
          {"Information"}
        </Alert>

        <TextField
          variant="outlined"
          placeholder={'String str = "Hello World !";'}
          fullWidth
          label="Enter single line code"
          sx={{ marginTop: "1%" }}
        />

        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "1%" }}
        >
          <Grid item>
            <Button variant="contained" endIcon={<TokenizerIcon />}>
              Lexical Analysis
            </Button>
          </Grid>

          <Grid item>
            <Button variant="contained" endIcon={<ParserIcon />}>
              Syntax Analysis
            </Button>
          </Grid>

          <Grid item>
            <Button variant="contained" endIcon={<AnalyzerIcon />}>
              Semantic Analysis
            </Button>
          </Grid>
        </Grid>

        <Typography variant="h5" fontWeight="600" sx={{ marginTop: "2%" }}>
        Output 🧾
        </Typography>

        <Card variant="outlined" sx={{ padding: "3%", margin: "1% 0% 2%" }}>
          <Typography variant="string" fontFamily="roboto" fontSize="1rem">
            {output}
          </Typography>
        </Card>
      </Paper>
    </Container>
  );
}

export default Home;
