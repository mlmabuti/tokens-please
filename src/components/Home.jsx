import './styles/Home.css'
import {Alert, Button, Container, TextField, Stack} from '@mui/material/';
import TokenizerIcon from '@mui/icons-material/Toll';
import ArrowDown from '@mui/icons-material/ArrowDownwardSharp';
import ParserIcon from '@mui/icons-material/ManageSearch';
import AnalyzerIcon from '@mui/icons-material/Spellcheck';

const buttonAttributes = {
    alignSelf: "center",
    margin: ".5rem"
}


function Home(){
    return (
        <div className="home">
            <Container className='container'>   
                <Stack>
                <h2>TEST</h2>
                
                <Alert severity='info'>{"Testing"}</Alert> 

                <TextField sx={{marginTop: "1rem", marginBottom:"1rem"}} id="outlined-basic" label="Enter single line code" variant="outlined" />

                <Button sx={buttonAttributes} variant='contained' startIcon={<TokenizerIcon/>}>Tokenizer</Button>

                <ArrowDown sx={{alignSelf:"center"}}/>

                <Button sx={buttonAttributes} variant='contained' startIcon={<ParserIcon/>}>Parser</Button>

                <ArrowDown sx={{alignSelf:"center"}}/>

                <Button sx={buttonAttributes} variant='contained' startIcon={<AnalyzerIcon/>}>Semantic Analyzer</Button>

                </Stack>
            </Container>
        </div>
    );
}

export default Home;