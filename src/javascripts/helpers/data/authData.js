import firebase from 'firebase/app';
import 'firebase/auth';
import souvenirs from '../../components/souvenirs/souvenirs';
import food from '../../components/foods/food';
import shows from '../../components/shows/shows';

const loginButton = $('#loginButton');
const logoutButton = $('#logoutButton');

const buildFoodCards = () => {
  shows.buildAllShows();
  souvenirs.buildAllSouvenirs();
  food.buildAllFoods();
};

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      $('#addFoodBtn').removeClass('hide');
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      $('#addFoodBtn').addClass('hide');
    }
  });
};

export default { checkLoginStatus, buildFoodCards };
