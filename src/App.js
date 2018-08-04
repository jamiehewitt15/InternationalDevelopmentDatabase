import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/Button';
import Card from '@material-ui/core/Button';
import './App.css';
import 'typeface-roboto'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar color="#000000"/>
        <p className="App-intro">
          Welcome to Jamie's website!
        </p>
        <Card />
          <Button variant="contained" color="primary">
      Hello World
    </Button>
      </div>
    );
  }
}

export default App;
