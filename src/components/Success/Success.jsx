import './Success.css'
import { HashRouter as Router, Link, useHistory } from 'react-router-dom';



export default function Success() {

    const history = useHistory();
    function homePage() {
        console.log('Click');
        history.push('/');

    }
    return (
        <>
            <Router>
                <div id="image1">
                    <h2>Dare.To.Be.<span id="different" onClick={homePage} alt="HomePage">Different</span></h2>

                </div>


            </Router>
        </>

    )

};