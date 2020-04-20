import firebase from 'firebase/app';
import 'firebase/auth';

const printToDom = (divId, textToPrint) => {
  $(`#${divId}`).html(textToPrint);
};

const getMyUid = () => {
  const myUid = firebase.auth().currentUser.uid;
  return myUid;
};

export default { printToDom, getMyUid };
