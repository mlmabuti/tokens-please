import React from "react";
import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

function BtnClear() {
  return (
    <Button variant="contained" color="warning" disableElevation>
      <ClearIcon /> Clear
    </Button>
  );
}

export default BtnClear;
