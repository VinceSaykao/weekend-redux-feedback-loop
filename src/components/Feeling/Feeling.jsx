import TextField from '@material-ui/core/TextField'
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { HashRouter as Router, Link, useHistory } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import './Feeling.css'

export default function Feeling() {
    const history = useHistory();

    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('')


    // When Next is clicked, push to reducer and then store, then move to understanding
    const handleSubmit = (event) => {
        console.log('clicked');
        console.log({ feeling });
        if (feeling > 0 && feeling < 11) {
        
            dispatch({
                type: 'GET_FEELING',
                payload: {
                    feeling: feeling,
                },
            });
            history.push('/Understanding');
        } else {
            alert('Must be between 0-10')
        }
    }; // end of handleSubmit 

    return (
        <>
            <Router>
        
                <h1>How Are You <span id="target">Feeling</span> Today?</h1>
                <br></br>
                <div id="feelings">
                    <TextField id="feelings-input"
                        variant="outlined"
                        label="Number"
                        type="number"
                        value={feeling}
                        onChange={(event) => setFeeling(event.target.value)}

                    />
                    <br></br>
                    <Button id="next"
                        onClick={handleSubmit}
                        variant='contained'
                        color='primary'
                        size='large'
                        endIcon={<KeyboardArrowRightIcon />}
                    >
                        NEXT
                    </Button>

                </div>







            </Router>
        </>
    )

}





/*
import TextField from '@material-ui/core/TextField'
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function Feeling() {

    const [feeling,setFeeling] = useState([]);

    //const dispatch=useDispatch();


    function getFeeling() {
        console.log('Getting....Feels...');
        // axios({
        //     method: 'POST',
        //     url: '/api/feedback',
        // })
        //     .then((response) => {
        //         console.log(respose.data)

                dispatch({
                    type: 'GET_FEELING',
                    payload: {
                        feeling: feeling,
                    }
                    // history.push('/understanding')
                });
            // })
            // .catch((error) => {
            //     console.log('error', error);
            // })

    }

    const handleSubmit = () => {
        event.preventDefault();
        console.log('clicked');
    }; // end of handleSubmit 

    return (
        <>
            <form>

                <h1>How Are You Feeling Today?</h1>
                <br></br>

                <TextField
                    variant="outlined"
                    label="Feelings"
                    type="number"
                    value={feeling}
                   // onChange={(event) => setFeeling(event.target.value)}
                />

                <Button
                    onClick={handleSubmit}
                    variant='contained'
                    color='primary'
                    size='large'
                // startIcon={<SaveIcon />}
                >
                    ADD
                </Button>

            </form>
        </>
    )

}



*/