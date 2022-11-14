import { Link, Container, ButtonGroup, Button } from "@mui/material";

function Footer() {
  return (
    <Container>
      <ButtonGroup >
        <Button variant="string"> 
        <Link href="https://github.com/axojolotl/tokens-please" color="inherit" underline="hover">
         {"GitHub"}
        </Link>
        </Button>
      <Button variant="disabled">Powered by React</Button>
      </ButtonGroup>
    </Container>
  );
}

export default Footer;
