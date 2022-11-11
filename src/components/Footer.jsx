import { Button } from '@mui/material';
import { Container } from '@mui/system';
import './styles/Footer.css'

function Footer(){
    return (
    <div className="footer">
        <Container>
        <Button>About</Button>
        <Button>Help</Button>
        </Container>
    </div>
    );
}

export default Footer;