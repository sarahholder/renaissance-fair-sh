import firebase from 'firebase/app';

import './eventSingleView.scss';
import '../../../styles/main.scss';

const getEventAnimalDetails = (singleEvent) => {
  let domString = '';
  domString += '<table class="table-responsive table-dark table-width">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Type</th>';
  domString += '<th scope="col">Cost</th>';
  domString += '<th scope="col">Availability</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.animals.forEach((animalItem) => {
    // console.log('THIS IS THE ANIMAL PARENT', animalItem.parentEventAnimalId);
    domString += `<tr class="animalRow" id="${animalItem.parentEventId}" data-id="${animalItem.id}" data-parent="${animalItem.parentEventAnimalId}" data-container="${animalItem.parentEventId}">`;
    domString += `<th scope="row" class="cell-width">${animalItem.type}</th>`;
    domString += `<td class="cell-width">$${animalItem.cost}</td>`;
    domString += `<td class="cell-width">${animalItem.isAvailable}</td>`;
    const user = firebase.auth().currentUser;
    if (user.uid === singleEvent.uid) {
      // eslint-disable-next-line max-len
      domString += `<td class="cell-width"><button id="${animalItem.parentEventAnimalId}" value="${animalItem.parentEventAnimalId}" class="btn btn-default deleteEventBtn deleteEventAnimalBtn"><i class="far fa-trash-alt"></i></button></td>`;
    }
    domString += '</tr>';
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';

  return domString;
};

export default { getEventAnimalDetails };
