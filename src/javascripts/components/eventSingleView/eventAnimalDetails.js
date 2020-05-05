import firebase from 'firebase/app';

import './eventSingleView.scss';
import '../../../styles/main.scss';

const getEventAnimalDetails = (singleEvent) => {
  let domString = '';
  const user = firebase.auth().currentUser;
  domString += '<div id="eventAnimalsSection" class="quad col-md-4 col-sm-12">';
  domString += '<h4 class="eventSectionTitle">Animal Encounter Details</h4>';
  if (user.uid === singleEvent.uid) {
    domString += '<button class="btn btn-default btn-lg d-flex ml-auto addEventItemBtn" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fas fa-plus"></i></button>';
  }
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
    if (`${animalItem.cost}` < 101 && `${animalItem.cost}` > 0) {
      domString += `<tr class="eventAnimalItem animalRow from0To100" data-id="${animalItem.id}" data-parent="${animalItem.parentEventAnimalId}" data-container="${animalItem.parentEventId}">`;
    } else if (`${animalItem.cost}` > 100 && `${animalItem.cost}` < 201) {
      domString += `<tr class="eventAnimalItem animalRow from101To200" data-id="${animalItem.id}" data-parent="${animalItem.parentEventAnimalId}" data-container="${animalItem.parentEventId}">`;
    } else if (`${animalItem.cost}` > 200 && `${animalItem.cost}` < 301) {
      domString += `<tr class="eventAnimalItem animalRow from201To300" data-id="${animalItem.id}" data-parent="${animalItem.parentEventAnimalId}" data-container="${animalItem.parentEventId}">`;
    } else if (`${animalItem.cost}` > 300 && `${animalItem.cost}` < 401) {
      domString += `<tr class="eventAnimalItem animalRow from301To400" data-id="${animalItem.id}" data-parent="${animalItem.parentEventAnimalId}" data-container="${animalItem.parentEventId}">`;
    } else if (`${animalItem.cost}` > 400 && `${animalItem.cost}` < 501) {
      domString += `<tr class="eventAnimalItem animalRow from501To500" data-id="${animalItem.id}" data-parent="${animalItem.parentEventAnimalId}" data-container="${animalItem.parentEventId}">`;
    } else if (`${animalItem.cost}` > 500) {
      domString += `<tr class="eventAnimalItem animalRow from501On" data-id="${animalItem.id}" data-parent="${animalItem.parentEventAnimalId}" data-container="${animalItem.parentEventId}">`;
    }
    // console.log('THIS IS THE ANIMAL PARENT', animalItem.parentEventAnimalId);
    domString += `<th scope="row" class="cell-width">${animalItem.type}</th>`;
    domString += `<td class="cell-width">$${animalItem.cost}</td>`;
    domString += `<td class="cell-width">${animalItem.isAvailable}</td>`;
    if (user.uid === singleEvent.uid) {
      // eslint-disable-next-line max-len
      domString += `<td class="cell-width"><button id="${animalItem.parentEventAnimalId}" value="${animalItem.parentEventAnimalId}" class="btn btn-default deleteEventBtn deleteEventAnimalBtn"><i class="far fa-trash-alt"></i></button></td>`;
    }
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';

  domString += '<div class="input-group mb-3">';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">Total Event Animal Costs:</span>';
  domString += '</div>';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">$</span>';
  domString += '</div>';
  domString += `<input id="animalTotalCost" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" readonly value="${singleEvent.animalsTotalAmount}">`;
  domString += '<div class="input-group-append">';
  domString += '<span class="input-group-text">.00</span>';
  domString += '</div>';
  domString += '</div>';

  domString += '</div>';

  return domString;
};

export default { getEventAnimalDetails };
