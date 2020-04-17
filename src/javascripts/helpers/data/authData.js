import firebase from 'firebase/app';
import 'firebase/auth';
import souvenirs from '../../components/souvenirs/souvenirs';
import shows from '../../components/shows/shows';

const loginButton = $('#loginButton');
const logoutButton = $('#logoutButton');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      $('#addFoodBtn').removeClass('hide');
      $('.editFoodBtn').removeClass('hide');
      $('.deleteFoodBtn').removeClass('hide');
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      $('#addFoodBtn').addClass('hide');
      $('.editFoodBtn').addClass('hide');
      $('.deleteFoodBtn').addClass('hide');
    }
    shows.buildAllShows();
    souvenirs.buildAllSouvenirs();
  });
};

export default { checkLoginStatus };
