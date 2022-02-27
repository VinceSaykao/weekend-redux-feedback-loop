import './Success.css'
import { HashRouter as Router, Link, useHistory } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material';



export default function Success() {

    const history = useHistory();
    function homePage() {
        console.log('Click');
        history.push('/');

    }

    function handleFeedback() {
        console.log('clicked');
    }
    return (
        <>
            <Router>
                <div id="image1">
                    <h2>Dare.To.Be.<span id="different" onClick={homePage} alt="HomePage">Different</span></h2>
                    <br></br>
                    <Button id="feedback-button"
                    onClick={handleFeedback}
                    variant='contained'>Feedback</Button>
                    

    
                </div>
              
              

            </Router>
        </>

    )

};
/*
<Button id = "next"
onClick={handleSubmit}
variant='contained'
color='primary'
size='large'
endIcon = {<KeyboardArrowRightIcon />}
>
NEXT
</Button>
*/