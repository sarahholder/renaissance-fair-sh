import firebase from 'firebase/app';

import './eventSingleView.scss';
import '../../../styles/main.scss';

const getShowTotals = (singleEvent) => {
  singleEvent.shows.forEach((showItem) => {
    const x = showItem.cost;
    const y = showItem.parentQuantity;
    // eslint-disable-next-line no-param-reassign
    showItem.rowTotal = x * y;
    // eslint-disable-next-line no-param-reassign
    return showItem.rowTotal;
  });
  const rowTotalsArray = [];
  singleEvent.shows.forEach((showItem) => {
    rowTotalsArray.push(showItem.rowTotal);
  });
  let showTotal = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < rowTotalsArray.length; i++) {
    showTotal += rowTotalsArray[i];
  }
  // eslint-disable-next-line no-param-reassign
  singleEvent.showCosts = showTotal;
  // // eslint-disable-next-line no-use-before-define
};

const eventShowDetails = (singleEvent) => {
  let domString = '';
  domString += '<div id="eventShowSection" class="quad col-md-4 col-sm-12">';
  domString += '<h4 class="eventSectionTitle">Show Details</h4>';
  domString += '<table class="table-responsive table-dark">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Show Name</th>';
  domString += '<th scope="col">Cost</th>';
  domString += '<th scope="col">Qty</th>';
  domString += '<th scope="col"> Extended Cost</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.shows.forEach((showItem) => {
    domString += `<tr class="eventShowItem showRow" id="${showItem.parentEventId}" data-id="${showItem.id}" data-parent="${showItem.parentEventShowId}" data-container="${showItem.parentEventId}">`;
    domString += `<th scope="row" class="cell-width">${showItem.name}</th>`;
    domString += `<td class="cell-width">$${showItem.cost}</td>`;
    domString += `<td class="cell-width">${showItem.parentQuantity}</td>`;
    getShowTotals(singleEvent);
    domString += `<td class="cell-width">$${showItem.rowTotal}</td>`;
    const user = firebase.auth().currentUser;
    if (user.uid === singleEvent.uid) {
      domString += `<td class="cell-width"><button id="${showItem.parentEventShowId}" value="${showItem.parentEventShowId}" class="btn btn-default deleteEventBtn deleteEventShowBtn"><i class="far fa-trash-alt"></i></button></td>`;
    }
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';
  getShowTotals(singleEvent);
  domString += '<div class="input-group mb-3">';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">Total Event Show Costs:</span>';
  domString += '</div>';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">$</span>';
  domString += '</div>';
  domString += `<input id="showTotalCost" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" readonly value="${singleEvent.showCosts}">`;
  domString += '<div class="input-group-append">';
  domString += '<span class="input-group-text">.00</span>';
  domString += '</div>';
  domString += '</div>';

  domString += '</div>';

  return domString;
};

export default { eventShowDetails };
