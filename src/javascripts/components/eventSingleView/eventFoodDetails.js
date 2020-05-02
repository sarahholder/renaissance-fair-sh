import firebase from 'firebase/app';

import './eventSingleView.scss';
import '../../../styles/main.scss';

const getEventFoodDetails = (singleEvent) => {
  let domString = '';
  domString += '<div id="eventFoodSection" class="quad col-md-4 col-sm-12">';
  domString += '<h4 class="eventSectionTitle">Food Details</h4>';
  domString += '<table class="table-responsive table-dark table-width">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Food Type</th>';
  domString += '<th scope="col">Price</th>';
  domString += '<th scope="col">Qty</th>';
  domString += '<th scope="col">Cost</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.food.forEach((foodItem) => {
    domString += `<tr class="eventFoodItem foodRow" data-id="${foodItem.id}" data-parent="${foodItem.parentEventFoodId}" data-container="${foodItem.parentEventId}">`;
    domString += `<th scope="row" class="cell-width">${foodItem.type}</th>`;
    domString += `<td class="cell-width">$${foodItem.price}</td>`;
    domString += `<td class="cell-width">${foodItem.parentQuantity}</td>`;
    domString += `<td class="cell-width">$${foodItem.rowTotal}</td>`;
    const user = firebase.auth().currentUser;
    if (user.uid === singleEvent.uid) {
      domString += `<td class="cell-width"><button id="deleteEventFoodBtn" class="btn btn-default deleteEventBtn deleteEventFoodBtn" data-id="${foodItem.parentEventFoodId}"><i class="far fa-trash-alt"></i></button></td>`;
    }
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';
  domString += '<div class="input-group mb-3">';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">Total Event Food Costs:</span>';
  domString += '</div>';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">$</span>';
  domString += '</div>';
  domString += `<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" readonly value="${singleEvent.foodTotalAmount}">`;
  domString += '<div class="input-group-append">';
  domString += '<span class="input-group-text">.00</span>';
  domString += '</div>';
  domString += '</div>';

  domString += '</div>';

  return domString;
};

export default { getEventFoodDetails };
