import TextField from '@material-ui/core/TextField'
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { HashRouter as Router, Link, useHistory } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Understanding.css';


export default function Understanding() {
    const history = useHistory();

    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState('')



    const handleSubmit = (event) => {
        console.log('clicked');
        console.log({ understanding });

        dispatch({
            type: 'GET_UNDERSTANDING',
            payload: {
                understanding: understanding,
            },

        });
        history.push('/Supported');
    }; // end of handleSubmit 

    return (
        <>
            <Router>


                <h1>Did You <span id="target">Understand</span> Things Today?</h1>
                <br></br>
        <div id="footer">
                <TextField id="understanding-input"
                    variant="outlined"
                    label="Understanding"
                    type="number"
                    value={understanding}
                    onChange={(event) => setUnderstanding(event.target.value)}

                />
                <br></br>

                <Button id = "next"
                    onClick={handleSubmit}
                    variant='contained'
                    color='primary'
                    size='large'
                    endIcon = {<KeyboardArrowRightIcon />}
                >
                    NEXT
                </Button>

                </div>







            </Router>
        </>
    )

}
