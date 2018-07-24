import React, { Component } from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" name="Home" component={Home}/>
            </Switch>
        </HashRouter>
    );
  }
}

export default App;
