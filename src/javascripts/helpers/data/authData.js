import firebase from 'firebase/app';
import 'firebase/auth';
import souvenirs from '../../components/souvenirs/souvenirs';

import food from '../../components/foods/food';

import shows from '../../components/shows/shows';

const loginButton = $('#loginButton');
const logoutButton = $('#logoutButton');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      // food login
      food.viewFoodButtons();
      $('#editFoodBtn').removeClass('hide');
      $('#deleteFoodBtn').removeClass('hide');
      $('#addFoodBtn').removeClass('hide');
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      // food logout
      $('#editFoodBtn').addClass('hide');
      $('#deleteFoodBtn').addClass('hide');
      $('#addFoodBtn').addClass('hide');
    }
    food.buildAllFoods();
    shows.buildAllShows();
    souvenirs.buildAllSouvenirs();
  });
};

export default { checkLoginStatus };
