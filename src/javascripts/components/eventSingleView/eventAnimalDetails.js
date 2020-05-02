import firebase from 'firebase/app';
import animalData from '../../helpers/data/animalData';
import utils from '../../helpers/utils';

import './eventSingleView.scss';
import '../../../styles/main.scss';

const printAnimalChoices = (event) => {
  const eventId = event.parentEventId;
  animalData.getAnimals()
    .then((animals) => {
      let domString = '';
      domString += '<select class="custom-select col-11 p-2" id="inputGroupSelect04">';
      domString += '  <option>Choose animal to add to event...</option>';
      animals.forEach((animal) => {
        if (animal.isAvailable !== 'Not Available') {
          domString += `<option class="animalChoice" value="${eventId}" id="${animal.id}">${animal.name} the ${animal.type} / $${animal.cost}</option>`;
          utils.printToDom('animalChoices', domString);
        }
      });
      domString += '</select>';
    })
    .catch((err) => console.error('cannot get animal event form', err));
};


const getEventAnimalDetails = (singleEvent) => {
  let domString = '';
  const user = firebase.auth().currentUser;
  domString += '<div id="eventAnimalsSection" class="quad col-md-4 col-sm-12">';
  domString += '<h4 class="eventSectionTitle">Animal Encounter Details</h4>';
  if (user.uid === singleEvent.uid) {
    domString += '<button class="btn btn-default btn-lg d-flex ml-auto addEventItemBtn" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fas fa-plus"></i></button>';
  }
  domString += '<table class="table-responsive table-dark full-width">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Type</th>';
  domString += '<th scope="col">Cost</th>';
  domString += '<th scope="col">Availability</th>';
  domString += '</tr>';
  domString += '<tr>';
  domString += '<th colspan="4" class="p-0">';
  domString += '<div class="collapse" id="collapseExample">';
  domString += '<div class="d-flex flex-wrap">';
  domString += '  <div id="animalChoices" class="p-2"></div>';
  domString += '    <div class="input-group-append">';
  domString += '      <button class="btn btn-outline-secondary m-2" type="button" id="make-new-event-animal">Add</button>';
  domString += '    </div>';
  domString += '  </div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.animals.forEach((animalItem) => {
    // console.log('THIS IS THE ANIMAL PARENT', animalItem.parentEventAnimalId);
    domString += `<tr class="animalRow" id="${animalItem.parentEventId}" data-id="${animalItem.id}" data-parent="${animalItem.parentEventAnimalId}" data-container="${animalItem.parentEventId}">`;
    domString += `<th scope="row" class="cell-width">${animalItem.type}</th>`;
    domString += `<td class="cell-width">$${animalItem.cost}</td>`;
    domString += `<td class="cell-width">${animalItem.isAvailable}</td>`;
    printAnimalChoices(animalItem);
    if (user.uid === singleEvent.uid) {
      // eslint-disable-next-line max-len
      domString += `<td class="cell-width"><button id="${animalItem.parentEventAnimalId}" value="${animalItem.parentEventAnimalId}" class="btn btn-default deleteEventBtn deleteEventAnimalBtn"><i class="far fa-trash-alt"></i></button></td>`;
    }
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { getEventAnimalDetails, printAnimalChoices };
