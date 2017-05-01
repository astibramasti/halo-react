import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Header from './containers/Header'
import Home from './components/Home'
import People from './components/People'

class App extends React.Component {
  render() {
    
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Header />
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          
          <Route exact path="/" component={Home} />
          <Route path={"/people/:name"} component={People} />
        </div>
      </Router>
    );
  }
}

export default App;