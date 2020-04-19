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
      // events
      food.foodEvents();
      shows.showEvents();
      souvenirs.souvenirsEvents();
      // food login
      $('#addFoodBtn').removeClass('hide');
      $('.editFoodBtn').removeClass('hide');
      $('.deleteFoodBtn').removeClass('hide');
      // show login
      $('#add-new-show-btn').removeClass('hide');
      $('.show-delete-btn').removeClass('hide');
      $('.show-edit-btn').removeClass('hide');
      // souvenirs login
      $('.souvenirs-delete-btn').removeClass('hide');
      $('.souvenirs-edit-btn').removeClass('hide');
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      // food logout
      $('#addFoodBtn').addClass('hide');
      $('.editFoodBtn').addClass('hide');
      $('.deleteFoodBtn').addClass('hide');
      // show logout
      $('#add-new-show-btn').addClass('hide');
      $('.show-delete-btn').addClass('hide');
      $('.show-edit-btn').addClass('hide');
      // souvenirs logout
      $('.souvenirs-delete-btn').addClass('hide');
      $('.souvenirs-edit-btn').addClass('hide');
    }
  });
};

export default { checkLoginStatus };
