import { Card, Container } from "@mui/material";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Container sx={{marginTop:"1rem"}}>
      <Card variant="outlined">
      <Navbar />
      <Home />
      <Footer />
      </Card>
      </Container>
    </>
  );
}

export default App;
