import { Container } from '@mui/system';
import './styles/Navbar.css'

function Navbar(){
    return (
        <div className='navbar'>
            <Container>
                <img className="logo" src="Logo.png" alt="logo" />
            </Container>
        </div>
    );
}

export default Navbar;