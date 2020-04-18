import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import authData from './helpers/data/authData';
import auth from './components/auth/auth';

import shows from './components/shows/shows';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  shows.buildAllShows();
  auth.loginPage();
  auth.logoutPage();
};

init();
