import TextField from '@material-ui/core/TextField'
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { HashRouter as Router, Link, useHistory } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Supported.css'



export default function Supported() {
    const history = useHistory();

    const dispatch = useDispatch();
    const [supported, setSupported] = useState('')



    const handleSubmit = (event) => {
        console.log('clicked');
        console.log({ Supported });

        dispatch({
            type: 'GET_SUPPORTED',
            payload: {
                supported: supported,
            },

        });
        history.push('/Comments');
    }; // end of handleSubmit 

    return (
        <>
            <Router>


                <h1>How <span id="target">Supported</span> Did You Feel?</h1>
                <br></br>
                <div id="footer">
                <TextField id="supported-input"
                    variant="outlined"
                    label="Supported"
                    type="number"
                    value={supported}
                    onChange={(event) => setSupported(event.target.value)}

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
