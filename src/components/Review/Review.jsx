import TextField from '@material-ui/core/TextField'
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

export default function Review() {

    const getFeeling = useSelector(store => store.getFeeling);
    const getUnderstanding = useSelector(store => store.getUnderstanding);
    const getSupported = useSelector(store => store.getSupported);
    const getComments = useSelector(store => store.getComments);

    const history = useHistory();

    function postServer() {
        console.log('Clicked!');
        axios.post('/api/feedback', {getFeeling}, {getUnderstanding}, {getSupported}, {getComments})
        .then(response => {
            console.log('response', response);

            history.push('/success');
        })
        .catch(error => {
            console.log('error in post', error);
            alert('oh sh*t');
        })
    }


    console.log({getFeeling})

    return (
        <>

        <h1>Review</h1>
        <br></br>
        <p>Feeling: {getFeeling.feeling}</p>
        <br></br>
        <p>Understanding: {getUnderstanding.understanding}</p>
        <br></br>
        <p>Supported: {getSupported.supported}</p>
        <br></br>
        <p>Comments: {getComments.comments}</p>

        <Button
                    onClick={postServer}
                    variant='contained'
                    color='primary'
                    size='large'
                    endIcon = {<KeyboardArrowRightIcon />}
                >
                    NEXT
                </Button>

        </>

        
    )

}
