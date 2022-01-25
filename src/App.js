import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/friendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const isLoggedIn = true;

  return (
      <Router>
        <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            { isLoggedIn && <Link to="/friends">Friends</Link> }
          </li>
          <li>
            {isLoggedIn ? <p className='welcomeMsg'>Welcome {localStorage.getItem('username')}</p> : <div></div>}
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/friends' component={FriendsList} />
          <PrivateRoute path='/logout' component={Logout}/>
          <Route path='/login' component={Login} />
          <Route path='/' component={Login} />
         </Switch>
    </div>
    </Router>
  );
}

export default App;
