import firebase from 'firebase/app';
import 'firebase/auth';

import food from '../../components/foods/food';

const loginButton = $('#loginButton');
const logoutButton = $('#logoutButton');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      // food login
      food.buildAllFoods();
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      // food logout
    }
  });
};

export default { checkLoginStatus };
