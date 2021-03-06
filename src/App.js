import React from 'react';
import { Router, Route, Switch } from 'react-router';
import history from './helpers/History/History';
import Home from './pages/Home/Home';
import Randomizer from './pages/Randomizer/Randomizer';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/randomizer" component={Randomizer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
