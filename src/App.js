import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from 'react-redux';

import RestaurantsList from './modules/restaurantsList/RestaurantsList';
import Login from './modules/login/Login';

function App(props) {

  const {
    userInfo
  } = props;

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          {userInfo == null &&
            <Login/>
          }
          {userInfo != null &&
           <Redirect
            to={{
              pathname: '/home'
            }}
          />
          }
        </Route>
        <Route path="/home">
              <RestaurantsList />
            </Route>
      </Switch>
    </Router>
  );
}

export default connect(
  store => ({
      userInfo: store.login.userInfo,
  }),
  null
)(App);
