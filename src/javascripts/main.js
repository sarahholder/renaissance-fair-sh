import firebase from 'firebase/app';
import 'bootstrap';
import '../styles/main.scss';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import auth from './components/auth/auth';
import newSmash from './helpers/data/newSmash';

import souvenirs from './components/souvenirs/souvenirs';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  souvenirs.buildAllSouvenirs();
  // staff.buildAllStaff();
  setInterval(authData.checkLoginStatus(), 8000);
  auth.loginPage();
  auth.logoutPage();
  newSmash.getCompleteEvent();
};

init();
