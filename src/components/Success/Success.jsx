import './Success.css'
import { HashRouter as Router, Link, useHistory } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material';



export default function Success() {

    const history = useHistory();
    function homePage() {
        console.log('Click');
        history.push('/Feeling');

    }

    function handleFeedback() {
        console.log('clicked');
        alert('HAHA... Click on "Different"')
    }
    return (
        <>
            <Router>
                <div id="image1">
                    <h2>Dare.To.Be.<span id="different" onClick={homePage} alt="HomePage">Different</span></h2>
                    <br></br>
                    <Button id="feedback-button"
                        onClick={handleFeedback}
                        variant='contained'>Join The Experience</Button>



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