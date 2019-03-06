import React, { Component } from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <Jumbotron
          mainText="Book Search"
          detailText="Search for and save books of interest"
        />
        
      </div>
    );
  }
}

export default App;
