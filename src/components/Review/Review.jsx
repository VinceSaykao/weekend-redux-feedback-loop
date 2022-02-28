import TextField from '@material-ui/core/TextField'
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import './Review.css';

export default function Review() {

    // useSelector to recieve all reducers from store
    const feeling = useSelector(store => store.getFeeling);
    const understanding = useSelector(store => store.getUnderstanding);
    const supported = useSelector(store => store.getSupported);
    const comments = useSelector(store => store.getComments);

    const history = useHistory();


    // axios post, sending data to database... and sends user to success page
    function postServer() {
        console.log('Clicked!');
        axios.post('/api/feedback', { feeling , understanding , supported , comments }) // why does it only send one? {getFeeling, getUnderstanding, getSupported, getComments} = null
            .then(response => {
                console.log('response', response);

                history.push('/Success');
            })
            .catch(error => {
                console.log('error in post', error);
                alert('oh sh*t');
            })
    }




    return (
        <>
            <div id="reviews">

            </div>
            <h1>Review</h1>
            <div id="results">
                <p id = "feeling-num">Feeling: {feeling}</p>

                <p id = "understanding-num">Understanding: {understanding}</p>

                <p id = "supported-num">Supported: {supported}</p>

                <p id = "comments-num">Comments: {comments}</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Button id = "next"
                    onClick={postServer}
                    variant='contained'
                    color='primary'
                    size='large'
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    NEXT
                </Button>
            </div>

        </>


    )

}
