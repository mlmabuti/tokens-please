import {
  Alert,
  Button,
  ButtonGroup,
  TextField,
  Stack,
  Card,
  Container,
} from "@mui/material/";
import TokenizerIcon from "@mui/icons-material/Toll";
import ParserIcon from "@mui/icons-material/ManageSearch";
import AnalyzerIcon from "@mui/icons-material/Spellcheck";

const buttons = [
  <Button color="primary" endIcon={<TokenizerIcon />}>
    Lexical Analysis
  </Button>,
  <Button color="secondary" endIcon={<ParserIcon />}>
    Syntax Analysis
  </Button>,
  <Button color="warning" endIcon={<AnalyzerIcon />}>
    Semantic Analysis
  </Button>,
];

function Home() {
  return (
    <Container sx={{ minHeight: "64vh" }}>
      <center>
        <Stack sx={{padding:"4%"}}>
          <Card variant="outlined">
            <h2 id="answer">placeholder</h2>
          </Card>

          <Alert sx={{ marginTop: "1rem" }} severity="info">
            {"Testing"}
          </Alert>

          <TextField
            sx={{ marginTop: ".5rem" }}
            id="outlined-basic"
            label="Enter single line code"
            variant="outlined"
          />
        </Stack>

        <ButtonGroup
          orientation="horizontal"
          variant="contained"
        >
          {buttons}
        </ButtonGroup>
      </center>
    </Container>
  );
}

export default Home;
