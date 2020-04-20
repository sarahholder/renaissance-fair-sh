import firebase from 'firebase/app';
import 'bootstrap';
import '../styles/main.scss';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import auth from './components/auth/auth';

import shows from './components/shows/shows';
import souvenirs from './components/souvenirs/souvenirs';
import staff from './components/staff/staff';
import food from './components/foods/food';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  food.buildAllFoods();
  souvenirs.buildAllSouvenirs();
  staff.buildAllStaff();
  shows.buildAllShows();
  setInterval(authData.checkLoginStatus(), 8000);
  auth.loginPage();
  auth.logoutPage();
};

init();
