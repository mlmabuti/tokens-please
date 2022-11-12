import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    mode: 'light'
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={Theme}>
      <center>
        <Navbar />
        <Home />
        <Footer />
      </center>
    </ThemeProvider>
    </>
  );
}

export default App;
