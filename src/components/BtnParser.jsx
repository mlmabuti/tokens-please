import ParserIcon from "@mui/icons-material/ManageSearch";
import { Button } from "@mui/material";

function BtnParser() {
  return (
    <Button variant={"disabled"} disableElevation endIcon={<ParserIcon />}>
      Syntax Analysis
    </Button>
  );
}

export default BtnParser;
