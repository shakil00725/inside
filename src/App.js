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
    	<Router>       
        	<Switch>
          		<Route path="/inside/" exact component={Home}/>
          		<Route path="/inside/articles" component={ResultsData}/>
          		<Route path="/inside/details" component={Details}/>
        	</Switch>
      </Router>
    </div>
  );
}

export default App;
