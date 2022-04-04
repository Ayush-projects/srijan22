import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Switch, Route, withRouter, Redirect, } from 'react-router-dom';
import './App.css';
import firebase from './firebase/config';
import { AuthContext } from './context/authContext';
import { LastLocationContext } from './context/lastLocationContext';
import { getUsernameFromDatabase } from './firebase/utility';
import { notification } from 'antd';
import PrivateRoute from './hoc/PrivateRoute';
import LandingPage from './pages/Landing/Landing';
import AppLayout from './layout/AppLayout';
import Merchandise22 from './pages/Merchandise/Merchandise22';

const App = props => {
  const { history } = props;
  const { currentUser } = useContext(AuthContext);
  const { lastLocation } = useContext(LastLocationContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
  
    if (currentUser) {
      getUsernameFromDatabase(currentUser.uid)
        .then(usr => {
          setUserName(usr);
          setIsAuthenticated(true);
          if (lastLocation) {
            history.push(lastLocation);
          }
          notification['success']({
            message: `Logged in as ${usr}`,
            duration: 2
          })
        })
        .catch(err => console.log(err));
    } else {
      // console.log('user not signed in');
    }
  }, [currentUser, history, lastLocation]);

  const handleSignOut = useCallback(async () => {
    try {
      await firebase.auth().signOut();
      setIsAuthenticated(false);
      setUserName('');
      alert('Signed out successfully!');
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  }, [history]);

  return (
    <Switch>
      <Route path='/' exact render={props => <LandingPage isAuthenticated={isAuthenticated} username={userName} />} />
      {/* <Route path='/merchandise' exact render={props => <Merchandise22 />} /> */}
      <PrivateRoute
        component={AppLayout}
        path='/app'
        username={userName}
        handleSignOut={handleSignOut}  />
      <Redirect from='*' to='/' />
    </Switch>
  );
}

export default withRouter(App);
