import React from 'react';
import './App.css';
import Feeling from '../Feeling/Feeling.jsx'
import Understanding from '../Understanding/Understanding';
import Supported from './Supported/Supported';
import Comments from './Comments/Comments';
import Review from '../Review/Review';
import Home from '../Home/Home';
import { HashRouter as Router, Route } from 'react-router-dom';
import Success from './Success/Success';


function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
      </header>
      <main>
        <Route path='/' exact>
      <Home />
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
      <Route path='/Success' exact>
      <Success />
      </Route>
      
      
      </main>
    </div>
    </Router>
  );
}

export default App;
