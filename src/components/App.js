import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Beers from './Beers';
import BeerDetail from './BeerDetail';
import NotFound from './NotFound';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers" exact component={Beers} />
          <Route path="/beers/:beerId" exact component={BeerDetail} />
          <Route path="/random-beer" exact component={RandomBeer} />
          <Route path="/new-beer" exact component={NewBeer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
