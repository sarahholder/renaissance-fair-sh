import firebase from 'firebase/app';

import './eventSingleView.scss';
import '../../../styles/main.scss';

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
  for (let i = 0; i < rowTotalsArray.length; i++) {
    souvenirTotal += rowTotalsArray[i];
  }
  // eslint-disable-next-line no-param-reassign
  singleEvent.souvenirsCosts = souvenirTotal;
  // eslint-disable-next-line no-use-before-define
};

const getEventSouvenirDetails = (singleEvent) => {
  let domString = '';
  domString += '<div id="eventSouvenirSection" class="quad col-md-4 col-sm-12">';
  domString += '<h4 class="eventSectionTitle">Souvenir Details</h4>';
  domString += '<table class="table-responsive table-dark">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Souvenir Type</th>';
  domString += '<th scope="col">Price</th>';
  domString += '<th scope="col">Qty</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.souvenirs.forEach((souvItem) => {
    domString += `<tr class="souvenirRow" id="${souvItem.parentEventId}" data-id="${souvItem.id}" data-parent="${souvItem.parentEventSouvenirId}" data-container="${souvItem.parentEventId}">`;
    domString += `<th scope="row" class="cell-width">${souvItem.type}</th>`;
    domString += `<td class="cell-width">$${souvItem.price}</td>`;
    domString += `<td class="cell-width">${souvItem.parentQuantity}</td>`;
    getSouvenirTotals(singleEvent);
    domString += `<td class="cell-width">$${souvItem.rowTotal}</td>`;
    const user = firebase.auth().currentUser;
    if (user.uid === singleEvent.uid) {
      domString += `<td class="cell-width"><button id="deleteEventSouvenirBtn" data-id="${souvItem.parentEventSouvenirId}" value="${souvItem.parentEventSouvenirId}" class="btn btn-default deleteEventSouvenirBtn deleteEventBtn"><i class="far fa-trash-alt"></i></button></td>`;
    }
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';
  getSouvenirTotals(singleEvent);
  domString += '<div class="input-group mb-4>';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">Total Event Souvenir Costs:</span>';
  // domString += '</div>';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">$</span>';
  domString += '</div>';
  domString += `<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" readonly value="${singleEvent.souvenirsCosts}">`;
  domString += '<div class="input-group-append">';
  domString += '<span class="input-group-text">.00</span>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { getEventSouvenirDetails };
