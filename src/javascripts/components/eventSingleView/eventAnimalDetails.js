import firebase from 'firebase/app';
import animalData from '../../helpers/data/animalData';
import utils from '../../helpers/utils';
import smash from '../../helpers/data/smash';

import './eventSingleView.scss';
import '../../../styles/main.scss';

const printAnimalChoices = (event) => {
  const eventId = event.parentEventId;
  smash.getAnimalsNotInEvent(eventId)
    .then((animals) => {
      let domString = '';
      domString += '<select class="custom-select col-11 p-2" id="inputGroupSelect04">';
      domString += '  <option disabled selected>Choose animal to add to event...</option>';
      animals.forEach((animal) => {
        if (animal.isAvailable === 'Available') {
          domString += `<option class="animalChoice"  value="${eventId}" id="${animal.id}">${animal.name} the ${animal.type} / $${animal.cost}</option>`;
          utils.printToDom('animalChoices', domString);
        } else {
          domString += `<option class="animalChoice"  value="${eventId}" id="${animal.id}" disabled>${animal.name} the ${animal.type} / $${animal.cost}</option>`;
        }
      });
    })
    .catch((err) => console.error('cannot get animal event form', err));
};

const noSelectedAnimals = (eventId) => {
  const eventNumber = eventId;
  animalData.getAnimals()
    .then((animals) => {
      let domString = '';
      domString += '<select class="custom-select col-11 p-2" id="inputGroupSelect04">';
      domString += ' <option disabled>Choose animal to add to event...</option>';
      animals.forEach((animal) => {
        if (animal.isAvailable === 'Available') {
          domString += `<option class="animalChoice optclick" value="${eventNumber}" id="${animal.id}">${animal.name} the ${animal.type} / $${animal.cost}</option>`;
          utils.printToDom('animalChoices', domString);
        } else {
          domString += `<option class="animalChoice"  value="${eventId}" id="${animal.id}" disabled>${animal.name} the ${animal.type} / $${animal.cost}</option>`;
        }
      });
    })
    .catch((err) => console.error('cannot get animal event form', err));
};

const getEventAnimalDetails = (singleEvent) => {
  let domString = '';
  const animalsFound = singleEvent.animals;
  const eventId = singleEvent.id;
  const user = firebase.auth().currentUser;
  domString += '<div id="eventAnimalsSection" class="quad col-md-4 col-sm-12">';
  domString += '<h4 class="eventSectionTitle">Animal Encounter Details</h4>';
  if (user.uid === singleEvent.uid) {
    domString += '<button class="btn btn-default btn-lg d-flex ml-auto addEventItemBtn" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fas fa-plus"></i></button>';
  }
  domString += '<table class="table-responsive table-dark full-width">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th class="fix" scope="col">Name</th>';
  domString += '<th class="fix" scope="col">Type</th>';
  domString += '<th class="fix" scope="col">Cost</th>';
  domString += '<th class="fix" scope="col"></th>';
  domString += '</tr>';
  domString += '<tr>';
  domString += '<th colspan="4" class="p-0">';
  domString += '<div class="collapse" id="collapseExample">';
  domString += '<div class="d-flex flex-wrap row">';
  domString += '  <div id="animalChoices" class="col-9 m-2 text-center"></div>';
  domString += '</select>';
  domString += '    <div class="input-group-append">';
  domString += '      <button class="btn btn-outline-secondary add-button" type="button" id="make-new-event-animal"><i class="fas fa-plus"></i>Add</button>';
  domString += '    </div>';
  domString += '  <div id="alert"></div>';
  domString += '  </div>';
  domString += '</div>';
  domString += '</div>';
  if (animalsFound.length !== 0) {
    singleEvent.animals.forEach((animalItem) => {
      console.log('This is the animal printing', animalItem);
      domString += `<tr class="animalRow" id="${animalItem.parentEventId}" data-id="${animalItem.id}" data-parent="${animalItem.parentEventAnimalId}" data-container="${animalItem.parentEventId}">`;
      domString += `<th scope="row" class="cell-width">${animalItem.name}</th>`;
      domString += `<td class="cell-width">${animalItem.type}</td>`;
      domString += `<td class="cell-width">$${animalItem.cost}</td>`;
      if (user.uid === singleEvent.uid) {
        domString += `<td class="cell-width"><button id="${animalItem.parentEventAnimalId}" value="${animalItem.parentEventAnimalId}" class="btn btn-default deleteEventBtn deleteEventAnimalBtn"><i class="far fa-trash-alt"></i></button></td>`;
      }
      printAnimalChoices(animalItem);
    });
  } else {
    noSelectedAnimals(eventId);
  }
  domString += '</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  domString += '</tr>';
  domString += '</tbody>';
  domString += '</table>';
  domString += '</div>';
  domString += '</div>';
  // eslint-disable-next-line no-use-before-define
  return domString;
};

export default { getEventAnimalDetails, printAnimalChoices };
