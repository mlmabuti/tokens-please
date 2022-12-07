import { React, Component } from "react";
import { Button, Input, Container, Paper, Grid } from "@mui/material/";
import ArrowRight from "@mui/icons-material/ArrowRightAlt";
import ClearIcon from "@mui/icons-material/Clear";
import BtnAnalyzer from "./BtnAnalyzer";
import TokenizerIcon from "@mui/icons-material/Toll";
import Information from "./Information";
import IOBox from "./IOBox";
import { lex, tokenize } from "../utils/tokenizer";
import ParserIcon from "@mui/icons-material/ManageSearch";
import parse from "../utils/parser";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      inputText: "",
      outputText: "",
      toggleTokenizer: "disabled",
      toggleParser: "disabled",
      toggleAnalyser: "disabled",
    };
  }

  showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      this.setState({ inputText: text, toggleTokenizer: "contained" });
    };
    reader.readAsText(e.target.files[0]);
  };

  render = () => {
    return (
      <>
        <Container>
          <Paper elevation={4} sx={{ padding: "4% 4% 4%", margin: "2% 0% 2%" }}>
            <Information />

            <Grid
              container
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Input type="file" onChange={(e) => this.showFile(e)} />
              </Grid>

              <Grid item>
                <Button
                  variant="contained"
                  color="warning"
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
                      outputText: tokenize(lex(this.state.inputText)),
                      toggleParser: "contained",
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
                  onClick={() =>
                    this.setState({
                      outputText: String(
                        parse(tokenize(lex(this.state.inputText)))
                          ? "The syntax is correct!"
                          : "The syntax is incorrect!"
                      ),
                    })
                  }
                >
                  Syntax Analysis
                </Button>
              </Grid>

              <Grid item>
                <ArrowRight sx={{ padding: "1%" }} />
              </Grid>

              <Grid item>
                <BtnAnalyzer />
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
