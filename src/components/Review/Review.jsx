import TextField from '@material-ui/core/TextField'
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Link, useHistory } from 'react-router-dom';


export default function Review() {

    const getFeeling = useSelector((store) => store.getFeeling);
    const getUnderstanding = useSelector((store) => store.getUnderstanding);
    const getSupported = useSelector((store) => store.getSupported);
    const getComments = useSelector((store) => store.getComments);

    useEffect(() => {
        console.log('in Effect');
        getReview;
    }, []);

       const getReview = (event) => {
        console.log('Getting....Feels...');
        axios({
            method: 'GET',
            url: '/api/feedback',
        })
            .then((response) => {
                console.log(response.data)

                // dispatch({
                //     type: 'GET_FEELING',
                //     payload: {
                //         feeling: feeling,
                //     }
                //     // history.push('/understanding')
                // });
            })
            .catch((error) => {
                console.log('error', error);
            })

    }



    return (
        <>

        <h1>Review</h1>
        <br></br>
        <p>Feeling: </p>
        <br></br>
        <p>Understanding:</p>
        <br></br>
        <p>Supported:</p>
        <br></br>
        <p>Comments:</p>
        </>
    )

}
