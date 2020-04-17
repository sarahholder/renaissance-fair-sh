import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import authData from './helpers/data/authData';
import auth from './components/auth/auth';

import '../styles/main.scss';
import food from './components/foods/food';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  food.buildAllFoods();
  auth.loginPage();
  auth.logoutPage();
};

init();
