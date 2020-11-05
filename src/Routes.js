import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/eunjungko/Login';
// import Signup from './pages/Signup/Signup';
import Main from './pages/eunjungko/Main';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          {/* <Route exact path='/signup' component={Signup} /> */}
          <Route exact path='/Main' component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
