import {
  Alert,
  Button,
  ButtonGroup,
  TextField,
  Card,
  Container,
  Typography,
  Paper,
} from "@mui/material/";
import TokenizerIcon from "@mui/icons-material/Toll";
import ParserIcon from "@mui/icons-material/ManageSearch";
import AnalyzerIcon from "@mui/icons-material/Spellcheck";

let output = "?";

const buttons = [
  <Button endIcon={<TokenizerIcon />}>Lexical Analysis</Button>,
  <Button endIcon={<ParserIcon />}>Syntax Analysis</Button>,
  <Button endIcon={<AnalyzerIcon />}>Semantic Analysis</Button>,
];

function Home() {
  return (
    <Container>
      <Paper elevation="4" sx={{ padding: "4% 4% 4%", margin: "2% 0% 2%" }}>
        <Typography variant="h5" fontWeight="600">
          Let me see your tokens
        </Typography>

        <Alert severity="info" sx={{ marginTop: "1%", padding: ".1%" }}>
          {"Information"}
        </Alert>

        <TextField
          variant="outlined"
          placeholder={'String str = "Hello World !";'}
          fullWidth
          label="Enter single line code"
          sx={{ marginTop: ".5%" }}
        />

        <ButtonGroup variant="contained" sx={{ marginTop: "1%" }}>
          {buttons}
        </ButtonGroup>

        <Typography variant="h5" fontWeight="600" sx={{ marginTop: "2%" }}>
          Output
        </Typography>

        <Card variant="outlined"
          sx={{ padding: "3%", margin: "1% 0% 2%" }}
        >
          <Typography variant="string" fontFamily="roboto" fontSize="1.5rem">
            {output}
          </Typography>
        </Card>
      </Paper>
    </Container>
  );
}

export default Home;
