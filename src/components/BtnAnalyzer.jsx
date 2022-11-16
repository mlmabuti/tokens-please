import AnalyzerIcon from "@mui/icons-material/Spellcheck";
import { Button } from "@mui/material";

function BtnAnalyzer() {
  return (
    <Button variant={"contained"} endIcon={<AnalyzerIcon />}>
      Semantic Analysis
    </Button>
  );
}

export default BtnAnalyzer;
