import './styles/Home.css'
import {Alert, Button, Container, TextField} from '@mui/material/';

function Home(){
    return (
        <div className="home">
            <Container className='container'>   
                <h2>TEST</h2>
                <Alert severity='success'>{"Testing"}</Alert> 
                <TextField sx={{marginBottom:"1rem"}} id="outlined-basic" label="Enter single line code" variant="outlined" fullWidth />
                <Button variant='contained'>Tokenizer</Button>
                <Button variant='contained'>Parser</Button>
                <Button variant='contained'>Semantic Analyzer</Button>
            </Container>
        </div>
    );
}

export default Home;