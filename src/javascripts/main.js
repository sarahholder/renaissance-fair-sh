import firebase from 'firebase/app';
import 'bootstrap';
import '../styles/main.scss';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import auth from './components/auth/auth';

import souvenirs from './components/souvenirs/souvenirs';
// import charts from './components/Charts/charts';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  souvenirs.buildAllSouvenirs();
  // charts.am4core.create();
  setInterval(authData.checkLoginStatus(), 8000);
  auth.loginPage();
  auth.logoutPage();
};

init();
