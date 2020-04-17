import firebase from 'firebase/app';
import 'firebase/auth';
import souvenirs from '../../components/souvenirs/souvenirs';

import food from '../../components/foods/food';

const loginButton = $('#loginButton');
const logoutButton = $('#logoutButton');
// food buttons
const editBtn = $('#editBtn');
const deleteBtn = $('#deleteBtn');
const addFoodBtn = $('#addFoodBtn');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      // food login
      food.buildAllFoods();
      editBtn.removeClass('hide');
      deleteBtn.removeClass('hide');
      addFoodBtn.removeClass('hide');
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      // food logout
      food.buildAllFoods();
      editBtn.addClass('hide');
      deleteBtn.addClass('hide');
      addFoodBtn.addClass('hide');
    }
    souvenirs.buildAllSouvenirs();
  });
};

export default { checkLoginStatus };