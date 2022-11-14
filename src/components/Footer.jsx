import { Container, ButtonGroup, Button } from "@mui/material";

function Footer() {
  return (
    <Container>
      <ButtonGroup direction="row" alignContent="center" >
        <Button variant="string">GitHub</Button>
        <Button variant="string">About</Button>
      <Button variant="disabled">Powered by React</Button>
      </ButtonGroup>
    </Container>
  );
}

export default Footer;
