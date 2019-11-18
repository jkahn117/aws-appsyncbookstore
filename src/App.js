import React from 'react';
import './App.css';

import { Segment, Container, Grid } from 'semantic-ui-react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Authenticator from './pages/Authenticator';

import useAmplifyAuth from './helpers/useAmplifyAuth';

// @see https://github.com/dabit3/aws-amplify-auth-starters-archive/blob/master/react/src/Router.js
// function PrivateRoute(props) {
//   const [ isLoaded, setIsLoaded ] = useState(false);
//   const [ isLoggedIn, setIsLoggedIn ] = useState(false);

//   useEffect(() => {
//     console.log(!!props.currentUser);
//     setIsLoggedIn(!!props.currentUser);
//   }, [props.currentUser]);

//   function render() {
//     const { component: Component, ...rest } = this.props;

//     if (!isLoaded) { return null; }
//     return (
//       <Route
//         { ...rest }
//         render={props => {
//           return isLoggedIn ? (
//             <Component { ... props } />
//           ) : (
//             <Redirect to={{ pathname: '/auth' }} />
//           )
//         }}
//       />
//     );
//   };
// }

function Footer(props) {
  return (
    <footer>
      <Segment inverted>
        <Container textAlign='center'>
          <Grid stackable divided inverted>
            <Grid.Column width={6}>
              <p>&copy; 2019</p>
            </Grid.Column>

            <Grid.Column width={6}>
              
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </footer>
  );
}

export const CurrentUserContext = React.createContext();

function App() {
  const {
    state: { user: currentUser },
    onSignOut
  } = useAmplifyAuth();

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className='App'>
        <Router>
          <NavBar currentUser={ currentUser } signOut={ onSignOut }/>

          <div className='main'>
            <Switch>
              <Route path='/auth' component={ Authenticator } currentUser={ currentUser } />
              <Route path='/orders' component={ Orders } currentUser={ currentUser } />
              <Route path='/cart' component={ Cart } />
              <Route exact path='/' component={ Home } />
            </Switch>
          </div>
        </Router>

        <Footer/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
