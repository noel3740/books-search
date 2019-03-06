import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />

          <Jumbotron
            mainText="Book Search"
            detailText="Search for and save books of interest"
          />

          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={Search} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
