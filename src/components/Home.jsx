import { React, Component } from "react";
import { Input, Container, Paper, Grid } from "@mui/material/";
import ArrowRight from "@mui/icons-material/ArrowRightAlt";
import BtnClear from "./BtnClear";
import BtnAnalyzer from "./BtnAnalyzer";
import BtnParser from "./BtnParser";
import BtnTokenizer from "./BtnTokenizer";
import Information from "./Information";
import IOBox from "./IOBox";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      inputText: "",
    };
  }

  showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      this.setState({ inputText: text });
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
                <ArrowRight sx={{ padding: "1%" }} />
              </Grid>

              <Grid item>
                <BtnParser />
              </Grid>

              <Grid item>
                <ArrowRight sx={{ padding: "1%" }} />
              </Grid>

              <Grid item>
                <BtnAnalyzer />
              </Grid>
            </Grid>

            <IOBox title="Input ✋" text={this.state.inputText} />
            <IOBox title="Output 🧾" text={""} />
          </Paper>
        </Container>
      </>
    );
  };
}

export default Home;
