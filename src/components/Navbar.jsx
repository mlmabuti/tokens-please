import { Container, Typography } from "@mui/material";

function Navbar() {
  return (
    <Container sx={{ margin: "2%" }}>
      <Typography variant="h2" fontWeight="600">
        {"🪙 Tokens, Please! 🪙"}
      </Typography>
    </Container>
  );
}

export default Navbar;
