import firebase from 'firebase/app';
import 'firebase/auth';
import souvenirs from '../../components/souvenirs/souvenirs';

import food from '../../components/foods/food';
import shows from '../../components/shows/shows';
import staff from '../../components/staff/staff';

const loginButton = $('#loginButton');
const logoutButton = $('#logoutButton');

const builders = () => {
  food.buildAllFoods();
  shows.buildAllShows();
};

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      food.foodEvents();
      shows.showEvents();
      $('#addFoodBtn').removeClass('hide');
      $('.editFoodBtn').removeClass('hide');
      $('.deleteFoodBtn').removeClass('hide');
      $('#add-new-show-btn').removeClass('hide');
      $('.show-delete-btn').removeClass('hide');
      $('.show-edit-btn').removeClass('hide');
      // souvenirs login
      $('.souvenirs-delete-btn').removeClass('hide');
      $('.souvenirs-edit-btn').removeClass('hide');
      souvenirs.souvenirsEvents();
      staff.staffEvents();
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      // food logout
      $('#addFoodBtn').addClass('hide');
      $('.editFoodBtn').addClass('hide');
      $('.deleteFoodBtn').addClass('hide');
      $('#add-new-show-btn').addClass('hide');
      $('.show-delete-btn').addClass('hide');
      $('.show-edit-btn').addClass('hide');
      // souvenirs logout
      $('.souvenirs-delete-btn').addClass('hide');
      $('.souvenirs-edit-btn').addClass('hide');
    }
    souvenirs.buildAllSouvenirs();
    staff.buildAllStaff();
  });
};

export default { checkLoginStatus, builders };
