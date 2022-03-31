import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const secondaryAppConfig = {
  apiKey: process.env.REACT_APP_SRIJAN20_DB_apiKey,
  authDomain: process.env.REACT_APP_SRIJAN20_DB_authDomain,
  databaseURL: process.env.REACT_APP_SRIJAN20_DB_databaseURL,
  projectId: process.env.REACT_APP_SRIJAN20_DB_projectId,
  storageBucket: process.env.REACT_APP_SRIJAN20_DB_storageBucket,
  messagingSenderId: process.env.REACT_APP_SRIJAN20_DB_messagingSenderId,
  appId: process.env.REACT_APP_SRIJAN20_DB_appId
};
console.log(secondaryAppConfig)
// Initialize another app with a different config
var secondary = firebase.initializeApp(secondaryAppConfig);
// Retrieve the database.
var secondaryDatabase = secondary.database();
export const database = secondaryDatabase;


const firebaseConfig = {
  apiKey: process.env.REACT_APP_SRIJAN20_apiKey,
  authDomain: process.env.REACT_APP_SRIJAN20_authDomain,
  databaseURL: process.env.REACT_APP_SRIJAN20_databaseURL,
  projectId: process.env.REACT_APP_SRIJAN20_projectId,
  storageBucket: process.env.REACT_APP_SRIJAN20_storageBucket,
  messagingSenderId: process.env.REACT_APP_SRIJAN20_messagingSenderId,
  appId: process.env.REACT_APP_SRIJAN20_appId
};


var store = firebase.initializeApp(firebaseConfig, "secondary");
export const firestore = store.firestore();

export default firebase;