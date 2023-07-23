import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import AllTrains from 'test_full_app\src\components\AllTrains.js';
import SingleTrain from 'test_full_app\src\components\SingleTrain.js';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Train Schedule</Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={AllTrains} />
          <Route path="/train/:trainId" component={SingleTrain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
