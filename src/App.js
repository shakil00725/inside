import React from 'react';
import './App.css';
import Home from './containers/Home';
import ResultsData from './containers/Results';
import Details from './containers/Details';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      {/* <Router>
        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/articles" component={ResultsData}/>
          <Route path="/details" component={Details}/>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
