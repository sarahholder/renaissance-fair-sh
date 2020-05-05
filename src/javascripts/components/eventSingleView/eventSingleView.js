import firebase from 'firebase/app';
import eventFoodData from '../../helpers/data/eventFoodData';
import eventFoodDetails from './eventFoodDetails';
import eventStaffData from '../../helpers/data/eventStaffData';
import eventStaffDetails from './eventStaffDetails';
import eventShowData from '../../helpers/data/eventShowData';
import eventAnimalData from '../../helpers/data/eventAnimalData';
import eventAnimalDetails from './eventAnimalDetails';
import smashData from '../../helpers/data/smash';
import singleEventCharts from '../singleEventCharts/singleEventCharts';
import utils from '../../helpers/utils';

import showDetails from './eventShowDetails';

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

const removeEventFood = (e) => {
  const eventFoodId = e.target.closest('button').dataset.id;
  const eventId = $('.foodRow').data('container');
  eventFoodData.getSingleEventFood(eventFoodId)
    .then(() => {
      eventFoodData.deleteEventFood(eventFoodId)
        .then(() => {
          // eslint-disable-next-line no-use-before-define
          viewSingleEvent(eventId);
        });
    })
    .catch((error) => console.error('could not delete food item from event', error));
};

const removeEventShow = (e) => {
  e.preventDefault();
  const eventShowId = e.target.closest('button').id;
  const eventId = e.target.closest('.showRow').id;
  eventShowData.getSingleEventShow(eventShowId)
    .then(() => {
      eventShowData.deleteEventShow(eventShowId)
        .then(() => {
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
  const eventId = e.target.closest('.animalRow').id;
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

const makeNewEventAnimal = (e) => {
  console.log('FREAKING BUTTON CLICKED');
  $('.alert').alert('close');
  e.preventDefault();
  const animal = $('#inputGroupSelect04 option:selected').attr('id');
  const thisEventId = $('#inputGroupSelect04 option:selected').attr('value');
  console.log('CHECKING EMPTY ANIMAL', animal);
  if (animal !== undefined) {
    const newEventAnimal = {
      eventId: thisEventId,
      animalId: animal,
    };
    eventAnimalData.addEventAnimal(newEventAnimal);
    // eslint-disable-next-line no-use-before-define
    viewSingleEvent(thisEventId);
  } else {
    let domString = '';
    domString += `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>I Cry Your Mercy!</strong> Prithee choose an item from the dropdown ere clicking the +Add button. 
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
    utils.printToDom('alert', domString);
  }
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
      domString += eventStaffDetails.getEventStaffDetails(singleEvent);
      domString += '<div id="eventShowsSection" class="quad col-md-4 col-sm-12">';
      domString += '<h4 class="eventSectionTitle">Shows Details</h4>';
      domString += showDetails.eventShowDetails(singleEvent);
      domString += eventAnimalDetails.getEventAnimalDetails(singleEvent);
      domString += '<div id="chartDiv"></div>';
      utils.printToDom('single-view-event', domString);
      singleEventCharts.buildSingleEventChart();

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

const closeAlert = () => {
  $('.alert').addClass('close');
};

const eventSingleViewClickEvents = () => {
  $('body').on('click', '#closeSingleEvent', closeSingleEvent);
  $('body').on('click', '.deleteEventFoodBtn', removeEventFood);
  $('body').on('click', '.deleteEventStaffBtn', removeEventStaff);
  $('body').on('click', '.deleteEventShowBtn', removeEventShow);
  $('body').on('click', '.deleteEventAnimalBtn', removeEventAnimal);
  $('body').on('click', '.deleteEventSouvenirBtn', removeEventSouvenir);
  $('body').on('click', '#make-new-event-animal', makeNewEventAnimal);
  $().on('click', '.alert', closeAlert);
};

export default {
  viewSingleEventCall,
  removeEventAnimal,
  eventSingleViewClickEvents,
  makeNewEventAnimal,
};
