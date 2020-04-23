import firebase from 'firebase/app';
import 'firebase/auth';

import souvenirs from '../../components/souvenirs/souvenirs';
import food from '../../components/foods/food';
import shows from '../../components/shows/shows';
import staff from '../../components/staff/staff';
import eventsContainer from '../../components/eventsContainer/eventsContainer';

const loginButton = $('#loginButton');
const logoutButton = $('#logoutButton');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      // events
      shows.showEvents();
      // staff buttons
      $('#addStaffBtn').removeClass('hide');
      $('.delete-staff-btn').removeClass('hide');
      $('.editStaffBtn').removeClass('hide');
      // show buttons
      $('#add-new-show-btn').removeClass('hide');
      $('.show-delete-btn').removeClass('hide');
      $('.show-edit-btn').removeClass('hide');
      // souvenir buttons
      $('#souvenirs-add-btn').removeClass('hide');
      $('.souvenirs-delete-btn').removeClass('hide');
      $('.souvenirs-edit-btn').removeClass('hide');
      souvenirs.souvenirsEvents();
      staff.staffEvents();
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      // staff buttons
      $('#addStaffBtn').addClass('hide');
      $('.delete-staff-btn').addClass('hide');
      $('.editStaffBtn').addClass('hide');
      // show buttons
      $('#add-new-show-btn').addClass('hide');
      $('.show-delete-btn').addClass('hide');
      $('.show-edit-btn').addClass('hide');
      // souvenir buttons
      $('#souvenirs-add-btn').addClass('hide');
      $('.souvenirs-delete-btn').addClass('hide');
      $('.souvenirs-edit-btn').addClass('hide');
    }
    food.foodEvents();
    food.buildAllFoods();
    eventsContainer.buildAllEvents();
  });
};

export default { checkLoginStatus };
