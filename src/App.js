import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import ListBeers from './components/ListBeers';
import RandomBeers from './components/RandomBeers';
import NewBeers from './components/NewBeers';
import DetailsBeer from './components/DetailsBeer';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/list" component={ListBeers} />
      <Route exact path="/random" component={RandomBeers} />
        <Route exact path="/new" component={NewBeers} />
        <Route exact path="/beers/:id" component={DetailsBeer} /> 
      </Switch>
    </div>
  );
}

export default App;
