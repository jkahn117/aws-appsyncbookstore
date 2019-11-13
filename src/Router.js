// @see https://github.com/dabit3/aws-amplify-auth-starters-archive/blob/master/react/src/Router.js

import React, { useEffect, useState } from 'react';
import { withRouter, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

function PrivateRoute(props) {
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    console.log(!!props.currentUser);
    setIsLoggedIn(!!props.currentUser);
  }, [props.currentUser]);

  function render() {
    const { component: Component, ...rest } = this.props;

    if (!isLoaded) { return null; }
    return (
      <Route
        { ...rest }
        render={props => {
          return isLoggedIn ? (
            <Component { ... props } />
          ) : (
            <Redirect to={{ pathname: '/auth' }} />
          )
        }}
      />
    );
  };
}

PrivateRoute = withRouter(PrivateRoute);

const Routes = () => (
    <Router>

      <Switch>
        <Route path='/' component={ Home } />
        <Route path='/auth' component={ Authenticator } />

      </Switch>
    </Router>
);

export default Routes;
