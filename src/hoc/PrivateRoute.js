import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { LastLocationContext } from '../context/lastLocationContext';

const PrivateRoute = ({component: Component, path: Path, ...rest}) => {
  const { currentUser } = useContext(AuthContext);
  const { location } = rest;

  const { setLastLocation } = useContext(LastLocationContext);

  if (!currentUser && location.pathname.includes('/app/')) {
    setTimeout(()=>{
     
      setLastLocation(location.pathname);
    }, 1000)
    
  }

  return (
    <Route path={Path} render={props => (
          !!currentUser && !!currentUser.uid ? <Component {...props} {...rest} /> : <Redirect to="/" />
      )} />
  );
};

export default PrivateRoute;