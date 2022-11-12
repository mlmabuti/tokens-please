import { Card, Container } from "@mui/material";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <center>
      <Container sx={{margin:"2%"}}>
      <Card variant="outlined">
      <Navbar />
      <Home />
      <Footer />
      </Card>
      </Container>
      </center>
    </>
  );
}

export default App;
