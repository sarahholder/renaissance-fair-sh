import firebase from 'firebase/app';

import smash from '../../helpers/data/smash';

import './eventSingleView.scss';
import '../../../styles/main.scss';

import utils from '../../helpers/utils';

const printFoodChoices = (event) => {
  const eventId = event.parentEventId;
  smash.getFoodNotInEvent(eventId)
    .then((foods) => {
      let domString = '';
      domString += '<select class="custom-select col-11 p-2" id="inputGroupFoodChoices">';
      console.log('list of foods', foods);
      domString += '  <option>Choose food to add to event...</option>';
      foods.forEach((food) => {
        if (food.isAvailable === 'Available') {
          domString += `<option class="foodChoice" value="${eventId}" id="${food.id}">${food.name} the ${food.type} / $${food.price}</option>`;
          utils.printToDom('foodChoices', domString);
        }
      });
      domString += '</select>';
    })
    .catch((err) => console.error('cannot add new food item to event', err));
};

const getEventFoodDetails = (singleEvent) => {
  const user = firebase.auth().currentUser;
  let domString = '';
  domString += '<div id="eventFoodSection" class="quad col-md-4 col-sm-12">';
  domString += '<h4 class="eventSectionTitle">Food Details</h4>';
  if (user.uid === singleEvent.uid) {
    domString += '<button class="btn btn-default btn-lg d-flex ml-auto addEventItemBtn" data-toggle="collapse" data-target="#collapseFoodList" aria-expanded="false" aria-controls="collapseExample"><i class="fas fa-plus"></i></button>';
  }
  domString += '<table class="table-responsive table-dark table-width">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Food Type</th>';
  domString += '<th scope="col">Price</th>';
  domString += '<th scope="col">Qty</th>';
  domString += '<th scope="col">Cost</th>';
  domString += '</tr>';

  domString += '<tr>';
  domString += '<th colspan="4" class="p-0">';
  domString += '<div class="collapse" id="collapseFoodList">';
  domString += '<div class="d-flex flex-wrap row">';
  domString += '  <div id="foodChoices" class="col-9 m-2 p-2"></div>';
  domString += '    <div class="input-group-append">';
  domString += '      <button class="btn btn-outline-secondary m-2" type="button" id="make-new-event-food">Add</button>';
  domString += '    </div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</th>';
  domString += '</tr>';

  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.food.forEach((foodItem) => {
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
    domString += `<th scope="row" class="cell-width">${foodItem.type}</th>`;
    domString += `<td class="cell-width">$${foodItem.price}</td>`;
    domString += `<td class="cell-width">${foodItem.parentQuantity}</td>`;
    domString += `<td class="cell-width">$${foodItem.rowTotal}</td>`;
    printFoodChoices(foodItem);
    domString += '</div>';
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
  smash.getFoodNotInEvent();
  return domString;
};

export default { getEventFoodDetails, printFoodChoices };
