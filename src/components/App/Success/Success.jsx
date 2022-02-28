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
    // when feedback is clicked, alert this
    function handleFeedback() {
        console.log('clicked');
        alert('HAHA... Click on "Amazing"')
    }
    return (
        <>
            <Router>

                <h2>You.Are: <span id="different" onClick={homePage} alt="HomePage">Amazing</span></h2>
                <br></br>
                <Button id="feedback-button"
                    onClick={handleFeedback}
                    variant='contained'
                    endIcon = {<KeyboardArrowRightIcon />}
                    >Feedback</Button>







            </Router>
        </>

    )

};
