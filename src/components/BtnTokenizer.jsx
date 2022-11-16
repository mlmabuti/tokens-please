import TokenizerIcon from "@mui/icons-material/Toll";
import { Button } from "@mui/material";

function BtnTokenizer() {
  return (
    <Button variant={"contained"} endIcon={<TokenizerIcon />}>
      Lexical Analysis
    </Button>
  );
}

export default BtnTokenizer;
