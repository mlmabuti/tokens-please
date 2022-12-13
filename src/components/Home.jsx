import { React, Component } from "react";
import {
  Button,
  Input,
  Container,
  Paper,
  Grid,
  TextField,
} from "@mui/material/";
import ArrowRight from "@mui/icons-material/ArrowRightAlt";
import ClearIcon from "@mui/icons-material/Clear";
import AnalyzerIcon from "@mui/icons-material/Spellcheck";
import TokenizerIcon from "@mui/icons-material/Toll";
import Information from "./Information";
import IOBox from "./IOBox";
import { lex, tokenize } from "../utils/tokenizer";
import ParserIcon from "@mui/icons-material/ManageSearch";
import parse from "../utils/parser";
import analyze from "../utils/analyze";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      inputText: "",
      outputText: "",
      toggleTokenizer: "disabled",
      toggleParser: "disabled",
      toggleAnalyzer: "disabled",
      toggleInput: true,
      toggleClear: "disabled",
      isFile: false,
      toggleTextField: false,
    };
  }

  readFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      this.setState({
        inputText: text,
        toggleTokenizer: "contained",
        toggleInput: false,
        toggleClear: "contained",
        isFile: true,
        toggleTextField: true,
      });
    };
    reader.readAsText(e.target.files[0]);
  };

  render = () => {
    return (
      <>
        <Container>
          <Paper elevation={10} sx={{ padding: "6%", margin: "2% 0% 2%" }}>
            <Information />
            <TextField
              variant="outlined"
              placeholder={'String str = "Hello World !";'}
              disabled={this.state.toggleTextField}
              fullWidth
              label="Enter single line code"
              margin="normal"
              onChange={(e) => {
                this.setState({
                  inputText: e.target.value,
                  toggleTokenizer: "contained",
                  toggleClear: "contained",
                  toggleInput: false,
                  toggleParser: "disabled",
                  toggleAnalyzer: "disabled",
                });
              }}
            />

            <Grid
              container
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                {this.state.toggleInput ? (
                  <Input type="file" onChange={(e) => this.readFile(e)} />
                ) : (
                  <Input type="file" disabled />
                )}
              </Grid>

              <Grid item>
                <Button
                  variant={this.state.toggleClear}
                  color="error"
                  onClick={() => window.location.reload()}
                >
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
                  variant={this.state.toggleTokenizer}
                  endIcon={<TokenizerIcon />}
                  onClick={() =>
                    this.setState({
                      outputText: tokenize(
                        lex(this.state.inputText, this.state.isFile)
                      ),
                      toggleParser: "contained",
                      toggleTokenizer: "disabled",
                    })
                  }
                >
                  Lexical Analysis
                </Button>
              </Grid>

              <Grid item>
                <ArrowRight sx={{ padding: "1%" }} />
              </Grid>

              <Grid item>
                <Button
                  variant={this.state.toggleParser}
                  endIcon={<ParserIcon />}
                  onClick={() => {
                    this.setState({
                      outputText: String(
                        parse(
                          tokenize(lex(this.state.inputText, this.state.isFile))
                        )
                          ? "The syntax is correct!"
                          : "The syntax is incorrect!"
                      ),
                    });
                    parse(
                      tokenize(lex(this.state.inputText, this.state.isFile))
                    ) === true
                      ? this.setState({
                          toggleAnalyzer: "contained",
                          toggleParser: "disabled",
                        })
                      : this.setState({ toggleAnalyzer: "disabled" });
                  }}
                >
                  Syntax Analysis
                </Button>
              </Grid>

              <Grid item>
                <ArrowRight sx={{ padding: "1%" }} />
              </Grid>

              <Grid item>
                <Button
                  variant={this.state.toggleAnalyzer}
                  endIcon={<AnalyzerIcon />}
                  onClick={() => {
                    this.setState({
                      outputText: analyze(
                        this.state.inputText,
                        this.state.isFile
                      )
                        ? "This is semantically correct!"
                        : "This is semantically incorrect!",
                      toggleAnalyzer: analyze(
                        this.state.inputText,
                        this.state.isFile
                      )
                        ? "disabled"
                        : "contained",
                    });
                  }}
                >
                  Semantic Analysis
                </Button>
              </Grid>
            </Grid>

            <IOBox title="Input ✋" text={this.state.inputText} />
            <IOBox title="Output 🧾" text={this.state.outputText} />
          </Paper>
        </Container>
      </>
    );
  };
}

export default Home;
