import React, { Component } from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

class App extends Component {
  render() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/login" name="Login" component={Login}/>
                <Route exact path="/register" name="Login" component={Register}/>
                <Route path="/" name="Home" component={Home}/>
            </Switch>
        </HashRouter>
    );
  }
}

export default App;
