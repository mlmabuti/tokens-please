import Help from "./Help";
import About from "./About"
import { Stack } from "@mui/system";

function Footer() {
  return (
    <>
      <center>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Help />
          <About/>
        </Stack>
      </center>
    </>
  );
}

export default Footer;
