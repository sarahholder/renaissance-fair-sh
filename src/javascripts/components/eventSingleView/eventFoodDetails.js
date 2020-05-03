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
    // if (`${foodItem.price}` < 101 && `${foodItem.price}` > 0) {
    //   domString += '<div class="from0To100">';
    // } else if (`${foodItem.price}` > 100 && `${foodItem.price}` < 201) {
    //   domString += '<div class="from101To200">';
    // } else if (`${foodItem.price}` > 200 && `${foodItem.price}` < 301) {
    //   domString += '<div class="from201To300">';
    // }
    if (`${foodItem.price}` < 101 && `${foodItem.price}` > 0) {
      domString += `<tr class="eventFoodItem foodRow from0To100" data-id="${foodItem.id}" data-parent="${foodItem.parentEventFoodId}" data-container="${foodItem.parentEventId}">`;
    } else if (`${foodItem.price}` > 100 && `${foodItem.price}` < 201) {
      domString += `<tr class="eventFoodItem foodRow from101To200" data-id="${foodItem.id}" data-parent="${foodItem.parentEventFoodId}" data-container="${foodItem.parentEventId}">`;
    } else if (`${foodItem.price}` > 200 && `${foodItem.price}` < 301) {
      domString += `<tr class="eventFoodItem foodRow from201To300" data-id="${foodItem.id}" data-parent="${foodItem.parentEventFoodId}" data-container="${foodItem.parentEventId}">`;
    } else if (`${foodItem.price}` > 300 && `${foodItem.price}` < 401) {
      domString += `<tr class="eventFoodItem foodRow from301To400" data-id="${foodItem.id}" data-parent="${foodItem.parentEventFoodId}" data-container="${foodItem.parentEventId}">`;
    } else if (`${foodItem.price}` > 400 && `${foodItem.price}` < 501) {
      domString += `<tr class="eventFoodItem foodRow from501To500" data-id="${foodItem.id}" data-parent="${foodItem.parentEventFoodId}" data-container="${foodItem.parentEventId}">`;
    } else if (`${foodItem.price}` > 500) {
      domString += `<tr class="eventFoodItem foodRow from501On" data-id="${foodItem.id}" data-parent="${foodItem.parentEventFoodId}" data-container="${foodItem.parentEventId}">`;
    }
    // Anca: INITIAL Table Row TAG WITHOUT ANY PRICE RANGE CLASSES BELOW
    // domString += `<tr class="eventFoodItem foodRow" data-id="${foodItem.id}" data-parent="${foodItem.parentEventFoodId}" data-container="${foodItem.parentEventId}">`;
    domString += `<th scope="row" class="cell-width">${foodItem.type}</th>`;
    domString += `<td class="cell-width">$${foodItem.price}</td>`;
    domString += `<td class="cell-width">${foodItem.parentQuantity}</td>`;
    domString += `<td class="cell-width">$${foodItem.rowTotal}</td>`;
    domString += '</div>';
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
  domString += `<input id="foodTotalCost" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" readonly value="${singleEvent.foodTotalAmount}">`;
  domString += '<div class="input-group-append">';
  domString += '<span class="input-group-text">.00</span>';
  domString += '</div>';
  domString += '</div>';

  domString += '</div>';

  return domString;
};

export default { getEventFoodDetails };
