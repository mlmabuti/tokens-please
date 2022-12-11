import React from "react";
import { Card, Typography } from "@mui/material";

export default function IOBox(props) {
  return (
    <>
      <center>
        <Typography variant="h5" fontWeight="600" sx={{ marginTop: "2%" }}>
          {props.title}
        </Typography>
        <Card variant="outlined" sx={{ padding: "3%", margin: "1% 0% 2%" }}>
          <Typography fontFamily="roboto" fontSize="1.5rem" className="ioBox">
            {props.text}
          </Typography>
        </Card>
      </center>
    </>
  );
}
