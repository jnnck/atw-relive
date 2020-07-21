import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path={["/:partner"]} component={Home}/>
        <Route path={["/"]} component={Home}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
