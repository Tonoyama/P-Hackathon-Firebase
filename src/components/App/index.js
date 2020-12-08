import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import SignInPage from '../SignIn';
import HomePage from '../Home';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
