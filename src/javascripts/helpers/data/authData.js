import firebase from 'firebase/app';
import 'firebase/auth';
import souvenirs from '../../components/souvenirs/souvenirs';

import shows from '../../components/shows/shows';
import staff from '../../components/staff/staff';
import food from '../../components/foods/food';

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
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      $('#addFoodBtn').addClass('hide');
      $('.editFoodBtn').addClass('hide');
      $('.deleteFoodBtn').addClass('hide');
      $('#add-new-show-btn').addClass('hide');
    }
    souvenirs.buildAllSouvenirs();
    staff.buildAllStaff();
  });
};

export default { checkLoginStatus, builders };
