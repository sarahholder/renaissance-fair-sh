import firebase from 'firebase/app';
import 'bootstrap';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import auth from './components/auth/auth';
import food from './components/foods/food';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  authData.builders();
  auth.loginPage();
  auth.logoutPage();
  food.buildAllFoods();
};

init();
