import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const logout = () => {
  $('#logoutButton').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

const loginPage = () => {
  $('#loginButton').click(signMeIn);
};

const logoutPage = () => {
  $('#logoutButton').click(logout);
};

export default { loginPage, logoutPage };
