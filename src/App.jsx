import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './homepage';
import Headers from './header';
import Footer from './footer';
import MovieDetailsPage from './movieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Headers/>
        <HomePage /> */}
        <Switch>
          <Route exact path = '/'>
            <Headers/>
            <HomePage/>
            <Footer />
          </Route>
          <Route path = '/movies/:id'>
            <MovieDetailsPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
