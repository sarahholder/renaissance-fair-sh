import firebase from 'firebase/app';

import './eventSingleView.scss';
import '../../../styles/main.scss';

const eventShowDetails = (singleEvent) => {
  let domString = '';
  const user = firebase.auth().currentUser;
  domString += '<div id="eventShowSection" class="quad col-md-4 col-sm-12">';
  domString += '<h4 class="eventSectionTitle">Show Details</h4>';
  if (user.uid === singleEvent.uid) {
    domString += '<button class="btn btn-default btn-lg d-flex ml-auto addEventItemBtn" id="add-eventShow"><i class="fas fa-plus"></i></button>';
  }
  domString += '<table class="table-responsive table-dark table-width">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Show Name</th>';
  domString += '<th scope="col">Cost</th>';
  domString += '<th scope="col">Qty</th>';
  domString += '<th scope="col"> Extended Cost</th>';
  domString += '</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.shows.forEach((showItem) => {
    if (`${showItem.cost}` < 101 && `${showItem.cost}` > 0) {
      domString += `<tr class="eventShowItem showRow from0To100" id="${showItem.parentEventId}" data-id="${showItem.id}" data-parent="${showItem.parentEventStaffId}" data-container="${showItem.parentEventId}">`;
    } else if (`${showItem.cost}` > 100 && `${showItem.cost}` < 201) {
      domString += `<tr class="eventShowItem showRow from101To200" id="${showItem.parentEventId}" data-id="${showItem.id}" data-parent="${showItem.parentEventStaffId}" data-container="${showItem.parentEventId}">`;
    } else if (`${showItem.cost}` > 200 && `${showItem.cost}` < 301) {
      domString += `<tr class="eventShowItem showRow from201To300" id="${showItem.parentEventId}" data-id="${showItem.id}" data-parent="${showItem.parentEventStaffId}" data-container="${showItem.parentEventId}">`;
    } else if (`${showItem.cost}` > 300 && `${showItem.cost}` < 401) {
      domString += `<tr class="eventShowItem showRow from301To400" id="${showItem.parentEventId}" data-id="${showItem.id}" data-parent="${showItem.parentEventStaffId}" data-container="${showItem.parentEventId}">`;
    } else if (`${showItem.cost}` > 400 && `${showItem.cost}` < 501) {
      domString += `<tr class="eventShowItem showRow from401To500" id="${showItem.parentEventId}" data-id="${showItem.id}" data-parent="${showItem.parentEventStaffId}" data-container="${showItem.parentEventId}">`;
    } else if (`${showItem.cost}` > 500) {
      domString += `<tr class="eventShowItem showRow from501On" id="${showItem.parentEventId}" data-id="${showItem.id}" data-parent="${showItem.parentEventShowId}" data-container="${showItem.parentEventId}">`;
    }
    domString += `<th scope="row" class="cell-width">${showItem.name}</th>`;
    domString += `<td class="cell-width">$${showItem.cost}</td>`;
    domString += `<td class="cell-width">${showItem.parentQuantity}</td>`;
    domString += `<td class="cell-width">$${showItem.rowTotal}</td>`;
    domString += '</div>';
    if (user.uid === singleEvent.uid) {
      domString += `<td class="cell-width"><button id="${showItem.parentEventShowId}" value="${showItem.parentEventShowId}" class="btn btn-default deleteEventBtn deleteEventShowBtn"><i class="far fa-trash-alt"></i></button></td>`;
    }
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';
  domString += '<div class="input-group mb-3">';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">Total Event Show Costs:</span>';
  domString += '</div>';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">$</span>';
  domString += '</div>';
  domString += `<input id="showTotalCost" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" readonly value="${singleEvent.showTotalAmount}">`;
  domString += '<div class="input-group-append">';
  domString += '<span class="input-group-text">.00</span>';
  domString += '</div>';
  domString += '</div>';

  domString += '</div>';

  return domString;
};

export default { eventShowDetails };
