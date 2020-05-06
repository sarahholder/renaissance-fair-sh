import firebase from 'firebase/app';

import smash from '../../helpers/data/smash';

import './eventSingleView.scss';
import '../../../styles/main.scss';

import utils from '../../helpers/utils';
import souvenirData from '../../helpers/data/souvenirsData';
import souvenirsData from '../../helpers/data/souvenirsData';
import foodData from '../../helpers/data/foodData';

const getSouvenirTotals = (singleEvent) => {
  singleEvent.souvenirs.forEach((souvItem) => {
    const x = souvItem.price;
    const y = souvItem.parentQuantity;
    // eslint-disable-next-line no-param-reassign
    souvItem.rowTotal = x * y;
    // eslint-disable-next-line no-param-reassign
    return souvItem.rowTotal;
  });
  const rowTotalsArray = [];
  singleEvent.souvenirs.forEach((souvItem) => {
    rowTotalsArray.push(souvItem.rowTotal);
  });
  let souvenirTotal = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <select rowTotalsArray.length; i++) {
    souvenirTotal += rowTotalsArray[i];
  }
  // eslint-disable-next-line no-param-reassign
  singleEvent.souvenirsCosts = souvenirTotal;
  // eslint-disable-next-line no-use-before-define
};

const printSouvenirChoices = (souvenirObject) => {
  const eventId = souvenirObject.parentEventId;
  smash.getSouvenirsNotInEvent(eventId)
    .then((souvenirs) => {
      let domString = '';
      domString += '<select class="custom-select col-11 p-2" id="inputSouvChoices">';
      domString += '<option diabled selected>Choose a souvenir to add to this event:</option>';
      souvenirsData.forEach((souvenir) => {
        if (souvenir.isAvailable === 'Available') {
          domString += `<option class="souvenirChoice" value="${eventId}" id="${souvenir.id}">${souvenir.type} / $${souvenir.price}</option>`;
        } else {
          domString += `<option class="souvenirChoice" value="${eventId}" id="${souvenir.id}" disabled>${souvenir.tyoe} / $${souvenir.price}</option>`;
        }
      });
      domString += '</select>';
      utils.printToDom('souvenirChoices', domString);
    })
    .catch((err) => console.error('cannot add new souvenir item to event', err));
};

const noSelectedSouvenirs = (event) => {
  const eventId = event.id;
  souvenirData.getSouvenirs()
    .then((souvenirs) => {
      let domString = '';
      domString += '<select class="custom-select col-11 p-2" id="inputSouvenirChoices">';
      domString += '<option disabled selected>Choose souvenir to add to this event:</option>';
      souvenirs.forEach((souvenir) => {
        if (foodData.isAvailable === 'Available') {
          domString += `option class="souvenirChoice" value="${eventId}" id="${souvenir.id}">${souvenir.type} / $${souvenir.price}</option>`;
        } else {
          domString += `<option class="souvenirChoice" value="${eventId}" id="${souvenir.id}" disabled>${souvenir.type} / $${souvenir.price}</option>`;
        }
      });
      domString += '</select>'
      utils.printToDom('souvenirChoices', domString);
    })
    .catch((err) => console.error('cannnot add new souvenir to an empty souvenir sectio', error));
}

const getEventSouvenirDetails = (singleEvent) => {
  const user = firebase.auth().currentUser;
  const souvenirsFound = singleEvent.souvenir;
  let domString = '';
  domString += '<div id="eventSouvenirSection" class="quad col-md-4 col-sm-12">';
  domString += '<h4 class="eventSectionTitle">Souvenir Details</h4>';
  if (user.uid === singleEvent.uid) {
    domString += ' <button class="btn btn-default btn-lg d-flex ml-auto addEventItemBtn" data-toggle="collapse" data-target="#collapseSouvenirList" aria-expanded="false" aria-controls="collapseSouvenirList"><i class="fas fa-plus"></i></button>';
  }
  domString += '<table class="table-responsive table-dark">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Souvenir Type</th>';
  domString += '<th scope="col">Price</th>';
  domString += '<th scope="col">Qty</th>';
  domString += '</tr>';
  domString += '<tr class="collapse" id="collapseSouvenirList">';
  domString += '<th colspan="3" class="p-0">';
  domString += '<div id="souvenirChoices">';
  domString += '</div>';
  domString += '</th>';

  domString += '<th colspan="1" class="p-0">';
  domString += '<select id="inputSouvenirQuantity" class="custom-select">';
  domString += '<option selected disabled>Quantity:</option>';
  domString += '<option class="souvenirQuantity" value="50">50</option>';
  domString += '<option class="souvenirQuantity" value="100">100</option>';
  domString += '<option class="souvenirQuantity" value="150">150</option>';
  domString += '<option class="souvenirQuantity" value="200">200</option>';
  domstring += '<option class="souvenirQuantity" value="250">250</option>';
  domString += '<option class="souvenirQuantity" value="500">500</option>';

  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.souvenirs.forEach((souvItem) => {
    domString += `<tr class="souvenirRow" id="${souvItem.parentEventId}" data-parent="${souvItem.parentEventSouvenirId}" data-container="${souvItem.parentEventId}">`;
    domString += `<th scope="row" class="cell-width">${souvItem.type}</th>`;
    domString += `<td class="cell-width">$${souvItem.price}</td>`;
    domString += `<td class="cell-width">${souvItem.parentQuantity}</td>`;
    getSouvenirTotals(singleEvent);
    domString += `<td class="cell-width">$${souvItem.rowTotal}</td>`;
    const user = firebase.auth().currentUser;
    if (user.uid === singleEvent.uid) {
      domString += `<td class="cell-width"><button id="${souvItem.parentEventSouvenirId}" data-id="${souvItem.parentEventSouvenirId}" value="${souvItem.parentEventSouvenirId}" class="btn btn-default deleteEventSouvenirBtn deleteEventBtn"><i class="far fa-trash-alt"></i></button></td>`;
    }
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';
  getSouvenirTotals(singleEvent);
  domString += '<div class="input-group mb-4>';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">Total Event Souvenir Costs:</span>';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">$</span>';
  domString += '</div>';
  domString += `<input id="souvTotalCost" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" readonly value="${singleEvent.souvenirsCosts}">`;
  domString += '<div class="input-group-append">';
  domString += '<span class="input-group-text">.00</span>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</tfoot>';

  return domString;
};

export default { getEventSouvenirDetails };
