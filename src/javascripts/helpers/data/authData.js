import firebase from 'firebase/app';
import 'firebase/auth';
import souvenirs from '../../components/souvenirs/souvenirs';

import food from '../../components/foods/food';

import shows from '../../components/shows/shows';

const loginButton = $('#loginButton');
const logoutButton = $('#logoutButton');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    let login = false;
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      login = true;
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
    }
    food.buildAllFoods(login);
    shows.buildAllShows();
    souvenirs.buildAllSouvenirs();
  });
};

export default { checkLoginStatus };
