import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling.jsx'
import Understanding from '../Understanding/Understanding';
import Supported from './Supported/Supported';
import Comments from './Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import { HashRouter as Router, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
      </header>
      <main>
        <Route path='/' exact>
      <Success />
      </Route>
      <Route path='/Feeling' exact>
      <Feeling />
      </Route>
      <Route path='/Understanding' exact>
      <Understanding />
      </Route>
      <Route path='/Supported' exact>
      <Supported />
      </Route>
      <Route path='/Comments' exact>
      <Comments/>
      </Route>
      <Route path='/Review' exact>
      <Review />
      </Route>
      
      
      </main>
    </div>
    </Router>
  );
}

export default App;
