import firebase from 'firebase/app';
import eventFoodData from '../../helpers/data/eventFoodData';
import eventFoodDetails from './eventFoodDetails';
import eventStaffData from '../../helpers/data/eventStaffData';
import eventShowData from '../../helpers/data/eventShowData';
import eventAnimalData from '../../helpers/data/eventAnimalData';
import smashData from '../../helpers/data/smash';
import singleEventCharts from '../singleEventCharts/singleEventCharts';
import utils from '../../helpers/utils';

import './eventSingleView.scss';
import '../../../styles/main.scss';
import eventSouvenirData from '../../helpers/data/eventSouvenirData';


const closeSingleEvent = () => {
  utils.printToDom('single-view-event', '');
  $('#foodCards').removeClass('hide');
  $('#souvenirs').removeClass('hide');
  $('#staff-collection').removeClass('hide');
  $('#shows').removeClass('hide');
  $('#events').removeClass('hide');
  $('#single-view-event').addClass('hide');
  $('#animals').removeClass('hide');
};

const eventSouvenirDetails = (singleEvent) => {
  let domString = '';
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
    const user = firebase.auth().currentUser;
    if (user.uid === singleEvent.uid) {
      domString += `<td class="cell-width"><button id="${souvItem.parentEventSouvenirId}" value="${souvItem.parentEventSouvenirId}" class="btn btn-default deleteEventSouvenirBtn deleteEventBtn"><i class="far fa-trash-alt"></i></button></td>`;
    }
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';

  return domString;
};


const eventShowDetails = (singleEvent) => {
  let domString = '';
  domString += '<table class="table-responsive table-dark">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Show Name</th>';
  domString += '<th scope="col">Cost</th>';
  domString += '<th scope="col">Qty</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.shows.forEach((showItem) => {
    domString += `<tr class="eventShowItem showRow" data-id="${showItem.id}" data-parent="${showItem.parentEventShowId}" data-container="${showItem.parentEventId}">`;
    domString += '<tr>';
    domString += `<th scope="row" class="cell-width">${showItem.name}</th>`;
    domString += `<td class="cell-width">$${showItem.cost}</td>`;
    domString += `<td class="cell-width">${showItem.quantity}</td>`;
    const user = firebase.auth().currentUser;
    if (user.uid === singleEvent.uid) {
      domString += '<td class="cell-width"><button id="deleteEventShowBtn" class="btn btn-default deleteEventBtn deleteEventShowBtn"><i class="far fa-trash-alt"></i></button></td>';
    }
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';

  return domString;
};

const eventStaffDetails = (singleEvent) => {
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
  singleEvent.staff.forEach((staffMember) => {
    domString += `<tr class="staffRow" id="${staffMember.parentEventId}" data-id="${staffMember.id}" data-parent="${staffMember.parentEventStaffId}" data-container="${staffMember.parentEventId}">`;
    domString += `<th scope="row" class="cell-width">${staffMember.name}</th>`;
    domString += `<td class="cell-width">$${staffMember.pay}</td>`;
    domString += `<td class="cell-width">${staffMember.characterType}</td>`;
    const user = firebase.auth().currentUser;
    if (user.uid === singleEvent.uid) {
      domString += `<td class="cell-width"><button id="${staffMember.parentEventStaffId}"
      value="${staffMember.parentEventStaffId}" class="btn btn-default deleteEventBtn deleteEventStaffBtn"><i class="far fa-trash-alt"></i></button></td>`;
    }
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';

  return domString;
};

const eventAnimalDetails = (singleEvent) => {
  let domString = '';
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
    // console.log('THIS IS THE ANIMAL PARENT', animalItem.parentEventAnimalId);
    domString += `<tr class="animalRow" id="${animalItem.parentEventId}" data-id="${animalItem.id}" data-parent="${animalItem.parentEventAnimalId}" data-container="${animalItem.parentEventId}">`;
    domString += `<th scope="row" class="cell-width">${animalItem.type}</th>`;
    domString += `<td class="cell-width">$${animalItem.cost}</td>`;
    domString += `<td class="cell-width">${animalItem.isAvailable}</td>`;
    const user = firebase.auth().currentUser;
    if (user.uid === singleEvent.uid) {
      // eslint-disable-next-line max-len
      domString += `<td class="cell-width"><button id="${animalItem.parentEventAnimalId}" value="${animalItem.parentEventAnimalId}" class="btn btn-default deleteEventBtn deleteEventAnimalBtn"><i class="far fa-trash-alt"></i></button></td>`;
    }
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';

  return domString;
};

const removeEventFood = (e) => {
  const eventFoodId = e.target.closest('button').dataset.id;
  const eventId = $('.foodRow').data('container');
  eventFoodData.getSingleEventFood(eventFoodId)
    .then(() => {
      eventFoodData.deleteEventFood(eventFoodId)
        .then(() => {
          console.log('deleted event food', eventFoodId);
          // eslint-disable-next-line no-use-before-define
          viewSingleEvent(eventId);
        });
    })
    .catch((error) => console.error('could not delete food item from event', error));
};

const removeEventShow = () => {
  const eventShowId = $('.showRow').data('parent');
  const eventId = $('.showRow').data('container');
  eventShowData.getSingleEventShow()
    .then(() => {
      eventShowData.deleteEventShow(eventShowId)
        .then(() => {
          console.error('triggered delete show', eventId);
          console.error('triggered twice delete show', eventShowId);
          // eslint-disable-next-line no-use-before-define
          viewSingleEvent(eventId);
        });
    })
    .catch((error) => console.error('could not delete show from event', error));
};


const removeEventStaff = (e) => {
  e.preventDefault();
  const eventStaffId = e.target.closest('button').id;
  const eventId = e.target.closest('.staffRow').id;
  eventStaffData.getSingleEventStaff(eventStaffId)
    .then(() => {
      eventStaffData.deleteEventStaff(eventStaffId)
        .then(() => {
          // eslint-disable-next-line no-use-before-define
          viewSingleEvent(eventId);
        });
    })
    .catch((error) => console.error('could not delete staff member from event', error));
};

const removeEventAnimal = (e) => {
  e.preventDefault();
  const eventAnimalId = e.target.closest('button').id;
  // console.log('INSIDE FUNCTION RESULT EVENT ANIMAL', eventAnimalId);
  const eventId = e.target.closest('.animalRow').id;
  // console.log('INSIDE FUNCTION EVENT ID', eventId);
  eventAnimalData.getSingleEventAnimal(eventAnimalId)
    .then(() => {
      eventAnimalData.deleteEventAnimal(eventAnimalId)
        .then(() => {
          // eslint-disable-next-line no-use-before-define
          viewSingleEvent(eventId);
        });
    })
    .catch((error) => console.error('could not delete animal item from event', error));
};

const removeEventSouvenir = (e) => {
  e.preventDefault();
  const eventSouvenirId = e.target.closest('button').id;
  const eventId = e.target.closest('.souvenirRow').id;
  eventSouvenirData.getSingleEventSouvenir(eventSouvenirId)
    .then(() => {
      eventSouvenirData.deleteEventSouvenir(eventSouvenirId)
        .then(() => {
          // eslint-disable-next-line no-use-before-define
          viewSingleEvent(eventId);
        });
    })
    .catch((error) => console.error('could not delete souvenir item from event', error));
};

const viewSingleEvent = (eventId) => {
  smashData.getCompleteEvent(eventId)
    .then((singleEvent) => {
      let domString = '';
      domString += '<div class="singleEventTitle">';
      domString += `<h2>${singleEvent.name}</h2>`;
      domString += `<h5>${singleEvent.location}</h5>`;
      domString += `<h5>${singleEvent.date}</h5>`;
      domString += `<h5>${singleEvent.timeStart} - ${singleEvent.timeEnd}</h5>`;
      domString += '<button id="closeSingleEvent" class="btn btn-lg closeEventBtn"><i class="fas fa-times"></i> Close event details</button>';
      domString += '</div>';
      domString += '<div id="eventDetails" class="container-fluid d-flex flex-wrap">';
      domString += eventFoodDetails.getEventFoodDetails(singleEvent);
      domString += '<div id="eventSouvenirsSection" class="quad col-md-4 col-sm-12">';
      domString += '<h4 class="eventSectionTitle">Souvenirs Details</h4>';
      domString += eventSouvenirDetails(singleEvent);
      domString += '</div>';
      domString += '<div id="eventStaffSection" class="quad col-md-4 col-sm-12">';
      domString += '<h4 class="eventSectionTitle">Staff Details</h4>';
      domString += eventStaffDetails(singleEvent);
      domString += '</div>';
      domString += '<div id="eventShowsSection" class="quad col-md-4 col-sm-12">';
      domString += '<h4 class="eventSectionTitle">Shows Details</h4>';
      domString += eventShowDetails(singleEvent);
      domString += '</div>';
      domString += '<div id="eventAnimalsSection" class="quad col-md-4 col-sm-12">';
      domString += '<h4 class="eventSectionTitle">Animal Encounter Details</h4>';
      domString += eventAnimalDetails(singleEvent);
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
      domString += '<div id="chartdiv">';
      // domString += chart();
      domString += '</div>';
      domString += '<div id="chartDiv"></div>';
      utils.printToDom('single-view-event', domString);
      singleEventCharts.buildSingleEventChart();
      $('body').on('click', '#closeSingleEvent', closeSingleEvent);
      $('body').on('click', '.deleteEventFoodBtn', removeEventFood);
      $('body').on('click', '.deleteEventStaffBtn', removeEventStaff);
      $('body').on('click', '.deleteEventShowBtn', removeEventShow);
      $('body').on('click', '.deleteEventanimalBtn', removeEventAnimal);
      $('body').on('click', '.deleteEventSouvenirBtn', removeEventSouvenir);
      $('#foodCards').addClass('hide');
      $('#souvenirs').addClass('hide');
      $('#staff-collection').addClass('hide');
      $('#shows').addClass('hide');
      $('#events').addClass('hide');
      $('#animals').addClass('hide');
      $('#single-view-event').removeClass('hide');
    })
    .catch((error) => console.error('problem with single event', error));
};

const viewSingleEventCall = (e) => {
  const eventId = e.target.dataset.id;
  viewSingleEvent(eventId);
};

export default { viewSingleEventCall, removeEventAnimal };
