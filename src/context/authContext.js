import React, { useState, useEffect } from 'react';
import firebase from '../firebase/config';
import { writeUserData } from '../firebase/utility';

export const AuthContext = React.createContext({ currentUser: null });

const AuthContextProvider = props => {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, [])

  useEffect(() => {
    firebase.auth().getRedirectResult()
      .then(result => {
        if (result.user && result.additionalUserInfo.isNewUser) {
          const user = result.user;
          writeUserData(user.uid, user.displayName, user.email, 'unset', 'unset', 'unset');
        }
      })
      .catch(err => console.log(err))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;