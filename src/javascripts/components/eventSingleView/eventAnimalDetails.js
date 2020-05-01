import firebase from 'firebase/app';
import animalData from '../../helpers/data/animalData';
import utils from '../../helpers/utils';

import './eventSingleView.scss';
import '../../../styles/main.scss';

const printAnimalChoices = () => {
  animalData.getAnimals()
    .then((animals) => {
      let domString = '';
      domString += '<div class="input-group">';
      domString += '<select class="custom-select col-11" id="inputGroupSelect04">';
      domString += '  <option selected>Choose animal to add to event...</option>';
      animals.forEach((animal) => {
        domString += `<option value="${animal.id}">${animal.name} the ${animal.type} / $${animal.cost}</option>`;
        // console.log('THIS IS THE ANIMAL', animal);
        // console.log('THIS IS THE ANIMAL ID', animal.id);
        utils.printToDom('animalChoices', domString);
      });
      domString += '</select>';
    })
    .catch((err) => console.error('cannot get animal event form', err));
};

const getEventAnimalDetails = (singleEvent) => {
  printAnimalChoices();
  let domString = '';
  domString += '<table class="table-responsive table-dark table-width">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Type</th>';
  domString += '<th scope="col">Cost</th>';
  domString += '<th scope="col">Availability</th>';
  domString += '</tr>';
  domString += '<tr>';
  domString += '<th colspan="4">';
  domString += '<div class="collapse d-flex flex-wrap" id="collapseExample">';
  domString += '<div id="animalChoices"></div>';
  domString += '<div class="input-group-append">';
  domString += '  <button class="btn btn-outline-secondary" type="button">Add</button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div></th></tr>';
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
    domString += '</>';
  });
  domString += '</tbody>';
  domString += '</table>';

  return domString;
};

export default { getEventAnimalDetails, printAnimalChoices };
