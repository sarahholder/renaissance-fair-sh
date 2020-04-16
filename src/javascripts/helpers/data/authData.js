import firebase from 'firebase/app';
import 'firebase/auth';

import shows from '../../components/shows/shows';

const loginButton = $('#loginButton');
const logoutButton = $('#logoutButton');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
    }
    shows.buildAllShows();
  });
};

export default { checkLoginStatus };
