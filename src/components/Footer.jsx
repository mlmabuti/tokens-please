import { Stack, Link, Container, Button, Typography } from "@mui/material";

function Footer() {
  return (
    <Container>
        <Stack direction="row" justifyContent="center">
        <Button variant="string"> 
        <Link href="https://github.com/axojolotl/tokens-please" color="inherit" underline="hover">
         {"GitHub"}
        </Link>
        </Button>

      <Typography color="gray" sx={{margin:"1%"}}>Powered by React</Typography>

          </Stack>        

    </Container>
  );
}

export default Footer;
