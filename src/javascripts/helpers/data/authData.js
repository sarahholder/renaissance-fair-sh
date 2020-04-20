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
  staff.buildAllStaff();
  souvenirs.buildAllSouvenirs();
};

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      food.foodEvents();
      shows.showEvents();
      // staff buttons
      $('#addStaffBtn').removeClass('hide');
      // food buttons
      $('#addFoodBtn').removeClass('hide');
      $('.editFoodBtn').removeClass('hide');
      $('.deleteFoodBtn').removeClass('hide');
      // show buttons
      $('#add-new-show-btn').removeClass('hide');
      $('#souvenirs-add-btn').removeClass('hide');
      $('.show-delete-btn').removeClass('hide');
      $('.show-edit-btn').removeClass('hide');
      // souvenir buttons
      $('.souvenirs-delete-btn').removeClass('hide');
      $('.souvenirs-edit-btn').removeClass('hide');
      souvenirs.souvenirsEvents();
      staff.staffEvents();
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      // food logout
      // staff buttons
      $('#addStaffBtn').addClass('hide');
      // food buttons
      $('#addFoodBtn').addClass('hide');
      $('.editFoodBtn').addClass('hide');
      $('.deleteFoodBtn').addClass('hide');
      // show buttons
      $('#add-new-show-btn').addClass('hide');
      $('.show-delete-btn').addClass('hide');
      $('.show-edit-btn').addClass('hide');
      // souvenir buttons
      $('#souvenirs-add-btn').addClass('hide');
      $('.souvenirs-delete-btn').addClass('hide');
      $('.souvenirs-edit-btn').addClass('hide');
    }
  });
};

export default { checkLoginStatus, builders };
