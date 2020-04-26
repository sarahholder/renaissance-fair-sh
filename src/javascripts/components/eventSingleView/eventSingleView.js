import eventFoodData from '../../helpers/data/eventFoodData';
import smashData from '../../helpers/data/smash';
// import eventSouvenirSmash from '../../helpers/data/eventSouvenirSmash';

import utils from '../../helpers/utils';

import './eventSingleView.scss';
import '../../../styles/main.scss';

const closeSingleEvent = () => {
  utils.printToDom('single-view-event', '');
  $('#foodCards').removeClass('hide');
  $('#souvenirs').removeClass('hide');
  $('#staff-collection').removeClass('hide');
  $('#shows').removeClass('hide');
  $('#events').removeClass('hide');
  $('#single-view-event').addClass('hide');
};

const eventFoodDetails = (singleEvent) => {
  let domString = '';
  domString += `<table class="table-responsive table-dark foodTable" data-id=${singleEvent.id}>`;
  console.log('event id for food details table', singleEvent.id);
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Food Type</th>';
  domString += '<th scope="col">Price</th>';
  domString += '<th scope="col">Qty</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  console.log('foods on event', singleEvent.food);
  singleEvent.food.forEach((foodItem) => {
    domString += `<tr class="eventFoodItem" data-id="${foodItem.id}">`;
    console.log('indiv food item for a row', foodItem);
    domString += `<th scope="row">${foodItem.type}</th>`;
    domString += `<td>$${foodItem.price}</td>`;
    domString += `<td>${foodItem.quantity}</td>`;
    domString += '<td><button id="deleteEventFoodBtn" class="btn btn-default deleteEventBtn deleteEventFoodBtn"><i class="far fa-trash-alt"></i></button></td>';
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';

//   return domString;
// };

// const eventSouvenirDetails = (singleEvent) => {
//   let domString = '';
//   domString += '<table class="table-responsive table-dark">';
//   domString += '<thead>';
//   domString += '<tr>';
//   domString += '<th scope="col">Souvenir Type</th>';
//   domString += '<th scope="col">Price</th>';
//   domString += '<th scope="col">Qty</th>';
//   domString += '</tr>';
//   domString += '</thead>';
//   domString += '<tbody>';
//   singleEvent.souvenir.forEach((souvItem) => {
//     domString += '<tr>';
//     domString += `<th scope="row">${souvItem.type}</th>`;
//     domString += `<td>$${souvItem.price}</td>`;
//     domString += `<td>${souvItem.isAvailable}</td>`;
//     domString += '<td><button id="deleteEventFoodBtn" class="btn btn-default deleteEventBtn"><i class="far fa-trash-alt"></i></button></td>';
//     domString += '</tr>';
//   });
//   domString += '</tbody>';
//   domString += '</table>';

const removeEventFood = () => {
  const eventId = $('.foodTable').data('id');
  console.log('event from which to delete food', eventId);
  const foodItemId = $('.eventFoodItem').data('id');
  const eventFoodItem = eventFoodData.find((x, y) => x.id === eventId && y === foodItemId);
  console.log('event food item id selected for deletion', foodItemId);
  const eventFoodId = eventFoodItem.id;
  eventFoodData.getSingleEventFood()
  // smashData.getSingleEventWithDetails(eventId)
    .then(() => {
      eventFoodData.deleteEventFood(eventFoodId)
        .then((resolve) => {
          resolve(eventFoodId);
          // eslint-disable-next-line no-use-before-define
          viewSingleEvent(eventId);
        });
    })
    .catch((error) => console.error('could not delete food item from event', error));
};

const eventSouvenirDetails = (singleEvent) => {
  let domString = '';
  domString += '<table class="table-responsive table-dark">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Staff Member</th>';
  domString += '<th scope="col">Wage</th>';
  domString += '<th scope="col">Character</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.souvenirs.forEach((souvItem) => {
    domString += '<tr>';
    domString += `<th scope="row">${staffMember.name}</th>`;
    domString += `<td>$${staffMember.pay}/hr.</td>`;
    domString += `<td>${staffMember.characterType}</td>`;
    domString += '<td><button id="deleteEventFoodBtn" class="btn btn-default deleteEventBtn"><i class="far fa-trash-alt"></i></button></td>';
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';

  return domString;
};

const viewSingleEvent = (eventId) => {
  smashData.getCompleteEvent(eventId)
  // smashData.allPromises()
  // eventFoodSmash.getSingleEventWithDetails(eventId);
  // eventSouvenirSmash.getSingleEventWithSouvenirDetails(eventId)
    .then((singleEvent) => {
      console.error('SINGLE EVENT', singleEvent);
      let domString = '';
      domString += '<div class="singleEventTitle">';
      domString += `<h2>${singleEvent.name}</h2>`;
      domString += `<h5>${singleEvent.location}</h5>`;
      domString += `<h5>${singleEvent.date}</h5>`;
      domString += `<h5>${singleEvent.timeStart} - ${singleEvent.timeEnd}</h5>`;
      domString += '<button id="closeSingleEvent" class="btn btn-lg closeEventBtn"><i class="fas fa-times"></i> Close event details</button>';
      domString += '</div>';
      domString += '<div id="eventDetails" class="container-fluid d-flex flex-wrap">';
      domString += '<div id="eventFoodSection" class="quad col-md-4 col-sm-12">';
      domString += '<h4 class="eventSectionTitle">Food Details</h4>';
      domString += eventFoodDetails(singleEvent);
      domString += '</div>';
      domString += '<div id="eventSouvenirsSection" class="quad">';
      domString += '<h4 class="eventSectionTitle">Souvenirs Details</h4>';
      domString += eventSouvenirDetails(singleEvent);
      // console.log('souvenir details', eventSouvenirDetails(singleEvent));
      domString += '</div>';
      domString += '<div id="eventStaffSection" class="quad">';
      domString += '<h4 class="eventSectionTitle">Staff Details</h4>';
      domString += eventStaffDetails(singleEvent);
      domString += '</div>';
      domString += '<div id="eventShowsSection" class="quad">';
      domString += '<h4 class="eventSectionTitle">Shows Details</h4>';
      domString += '<p>DETAILS HERE!!!!</p>';
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('single-view-event', domString);
      $('body').on('click', '#closeSingleEvent', closeSingleEvent);
      $('body').on('click', '.deleteEventFoodBtn', removeEventFood);
      $('#foodCards').addClass('hide');
      $('#souvenirs').addClass('hide');
      $('#staff-collection').addClass('hide');
      $('#shows').addClass('hide');
      $('#events').addClass('hide');
      $('#single-view-event').removeClass('hide');
    })
    .catch((error) => console.error('problem with single event', error));
};

const viewSingleEventCall = (e) => {
  const eventId = e.target.dataset.id;
  console.log('eventid on view button', eventId);
  viewSingleEvent(eventId);
};

export default { viewSingleEventCall };
