import firebase from 'firebase/app';
import 'firebase/auth';

import food from '../../components/foods/food';

const loginButton = $('#loginButton');
const logoutButton = $('#logoutButton');
// food buttons
const editFoodBtn = $('#editFoodBtn');
const deleteFoodBtn = $('#deleteFoodBtn');
const addFoodBtn = $('#addFoodBtn');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      // food login
      editFoodBtn.removeClass('hide');
      deleteFoodBtn.removeClass('hide');
      addFoodBtn.removeClass('hide');
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      // food logout
      editFoodBtn.addClass('hide');
      deleteFoodBtn.addClass('hide');
      addFoodBtn.addClass('hide');
    }
    food.buildAllFoods();
  });
};

export default { checkLoginStatus };
