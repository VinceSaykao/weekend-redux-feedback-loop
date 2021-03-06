import TextField from '@material-ui/core/TextField'
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { HashRouter as Router, useHistory } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import './Comments.css'



export default function Comments() {
    const history = useHistory();

    const dispatch = useDispatch();
    const [comments, setComments] = useState('')



    const handleSubmit = (event) => {
        console.log('clicked');
        console.log({ comments });

        dispatch({
            type: 'GET_COMMENTS',
            payload: {
                comments: comments,
            },

        });
        history.push('/Review');
    }; // end of handleSubmit 




    return (
        <>
            <Router>


                <h1>Any Comments?</h1>
                <br></br>
                <div id="footer">
                    <TextField
                        id="comments-input"
                        variant="outlined"
                        label="Comments"
                        type="text"
                        value={comments}
                        onChange={(event) => setComments(event.target.value)}

                    />
                    <br></br>

                    <Button id = "next"
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
