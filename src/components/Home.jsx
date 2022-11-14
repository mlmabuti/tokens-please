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
    
        <Alert icon={false} severity="info" sx={{ marginTop: "2%"}}>
          {"Tokens, Please! is a single line code analyzer based on the first three stages of the compilation process. "+
          "This program only accounts for declarations and assignment operations. Here is the list of recognized data types; " +
          "String, int, char, boolean, double, and float."}
        </Alert>

        <TextField
          variant="outlined"
          placeholder={'String str = "Hello World !";'}
          fullWidth
          label="Enter single line code"
          margin="normal"
        />

        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
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
