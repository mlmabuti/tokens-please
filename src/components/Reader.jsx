import React, { Component } from "react";
import { Input } from "@mui/material";

class Reader extends Component {
  constructor(props) {
    super();
  }

  showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      console.log(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  render = () => {
    return <Input type="file" onChange={(e) => this.showFile(e)} />;
  };
}

export default Reader;
