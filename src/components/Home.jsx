import './styles/Home.css'
import {Alert, Button, Container, TextField} from '@mui/material/';

function Home(){
    return (
        <div className="home">
            <Container className='container'>   

                <h2>placeholder</h2>

                <Alert severity='success'>{"Testing"}</Alert> 
                {/* <Alert severity="error">This is an error alert — check it out!</Alert>
                <Alert severity="warning">This is a warning alert — check it out!</Alert>
                <Alert severity="success">This is a success alert — check it out!</Alert> */}

                <TextField sx={{marginBottom:"1rem"}} id="outlined-basic" label="Enter single line code" variant="outlined" fullWidth />
                <Button variant='contained'>Tokenizer</Button>
                <Button variant='contained'>Parser</Button>
                <Button variant='contained'>Semantic Analyzer</Button>


            </Container>
        </div>
    );
}

export default Home;