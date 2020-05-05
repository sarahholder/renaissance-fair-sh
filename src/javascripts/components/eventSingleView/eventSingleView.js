/* eslint-disable no-use-before-define */
import eventFoodData from '../../helpers/data/eventFoodData';
import eventFoodDetails from './eventFoodDetails';
import eventStaffData from '../../helpers/data/eventStaffData';
import eventStaffDetails from './eventStaffDetails';
import eventShowData from '../../helpers/data/eventShowData';
import eventAnimalData from '../../helpers/data/eventAnimalData';
import eventAnimalDetails from './eventAnimalDetails';
import eventSouvenirDetails from './eventSouvenirDetails';
import eventSouvenirData from '../../helpers/data/eventSouvenirData';
import showDetails from './eventShowDetails';
import smashData from '../../helpers/data/smash';
import singleEventCharts from '../singleEventCharts/singleEventCharts';
import eventFilterFields from './eventFilters';


import utils from '../../helpers/utils';

import './eventSingleView.scss';
import '../../../styles/main.scss';
// import eventData from '../../helpers/data/eventData';

const singleEventClickEvents = () => {
  $('body').on('click', '#closeSingleEvent', closeSingleEvent);
  $('body').on('click', '.deleteEventFoodBtn', removeEventFood);
  $('body').on('click', '.deleteEventStaffBtn', removeEventStaff);
  $('body').on('click', '.deleteEventShowBtn', removeEventShow);
  $('body').on('click', '.deleteEventAnimalBtn', removeEventAnimal);
  $('body').on('click', '.deleteEventSouvenirBtn', removeEventSouvenir);
};


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

const getGrandTotal = () => {
  // eventSouvenirDetails.getSouvenirTotals(completeEvent);
  const souvenirTotal = $('#souvTotalCost').val() * 1;
  const showTotal = $('#showTotalCost').val() * 1;
  const foodTotal = $('#foodTotalCost').val() * 1;
  const staffTotal = $('#staffTotalCost').val() * 1;
  const animalTotal = $('#animalTotalCost').val() * 1;
  const fullTotal = souvenirTotal + showTotal + foodTotal + staffTotal + animalTotal;
  utils.printToDom('theGrandDaddyTotal', fullTotal);
};

const grandTotalBuilder = () => {
  let domString = '';
  domString += '<div class="grandTotalSection">';
  domString += '<div id="grandTotalSection">';
  domString += '<h4 class="eventSectionTitle"> Grand Total</h4>';
  domString += '<table class="table-responsive table-dark">';
  domString += '<thread>';
  domString += '<tr>';
  domString += '<th scope="col">$</th>';
  domString += '<th scope="col">';
  domString += '<div id="theGrandDaddyTotal">';
  domString += '</div>';
  domString += '</th>';
  domString += '</tr>';
  domString += '</thread>';
  domString += '</table>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

// FUNCTIONS FOR THE BUTTONS IN THE ACCORDION SECTION WITH FILTERS ARE BELOW
const applyFilterByPriceRange = () => {
  const selectedPriceRange = $('#priceRangeSelected').val();
  if (selectedPriceRange === 'Under $100') {
    $('.from0To100').removeClass('hide');
    $('.from101To200').addClass('hide');
    $('.from201To300').addClass('hide');
    $('.from301To400').addClass('hide');
    $('.from401To500').addClass('hide');
    $('.from501On').addClass('hide');
  } else if (selectedPriceRange === '$101-$200') {
    $('.from0To100').addClass('hide');
    $('.from101To200').removeClass('hide');
    $('.from201To300').addClass('hide');
    $('.from301To400').addClass('hide');
    $('.from401To500').addClass('hide');
    $('.from501On').addClass('hide');
  } else if (selectedPriceRange === '$201-$300') {
    $('.from0To100').addClass('hide');
    $('.from101To200').addClass('hide');
    $('.from201To300').removeClass('hide');
    $('.from301To400').addClass('hide');
    $('.from401To500').addClass('hide');
    $('.from501On').addClass('hide');
  } else if (selectedPriceRange === '$301-$400') {
    $('.from0To100').addClass('hide');
    $('.from101To200').addClass('hide');
    $('.from201To300').addClass('hide');
    $('.from301To400').removeClass('hide');
    $('.from401To500').addClass('hide');
    $('.from501On').addClass('hide');
  } else if (selectedPriceRange === '$401-$500') {
    $('.from0To100').addClass('hide');
    $('.from101To200').addClass('hide');
    $('.from201To300').addClass('hide');
    $('.from301To400').addClass('hide');
    $('.from401To500').removeClass('hide');
    $('.from501On').addClass('hide');
  } else if (selectedPriceRange === 'Over $500') {
    $('.from0To100').addClass('hide');
    $('.from101To200').addClass('hide');
    $('.from201To300').addClass('hide');
    $('.from301To400').addClass('hide');
    $('.from401To500').addClass('hide');
    $('.from501On').removeClass('hide');
  }
};

const clearFilterByPriceRange = (e) => {
  const eventId = e.target.dataset.id;
  // eslint-disable-next-line no-use-before-define
  viewSingleEvent(eventId);
};

const filterEvents = () => {
  $('body').on('click', '#btnFilterPriceRangeSave', applyFilterByPriceRange);
  $('body').on('click', '#btnFilterPriceRangeClear', clearFilterByPriceRange);
};
// Anca: Functions for filter buttons end here.

const viewSingleEvent = (eventId) => {
  smashData.getCompleteEvent(eventId)
    .then((singleEvent) => {
      let domString = '';
      domString += '<div class="singleEventTitle">';
      domString += `<h2>${singleEvent.name}</h2>`;
      domString += `<h5>${singleEvent.location}</h5>`;
      domString += `<h5>${singleEvent.date}</h5>`;
      domString += `<h5>${singleEvent.timeStart} - ${singleEvent.timeEnd}</h5>`;
      domString += '<button id="closeSingleEvent" class="btn btn-lg closeEventBtn"><i class="fas fa-times"></i> Close Event Details</button>';
      domString += '</div>';
      domString += eventFilterFields.eventFilters(eventId);
      domString += grandTotalBuilder(singleEvent);
      domString += '<div id="eventDetails" class="container-fluid d-flex flex-wrap">';
      domString += eventFoodDetails.getEventFoodDetails(singleEvent);
      domString += eventSouvenirDetails.getEventSouvenirDetails(singleEvent);
      domString += eventStaffDetails.getEventStaffDetails(singleEvent);
      domString += showDetails.eventShowDetails(singleEvent);
      domString += eventAnimalDetails.getEventAnimalDetails(singleEvent);
      domString += '</div>';
      domString += '<div id="chartDiv"></div>';
      utils.printToDom('single-view-event', domString);
      singleEventCharts.buildSingleEventChart();
      singleEventClickEvents();
      getGrandTotal(singleEvent);
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

export default { viewSingleEventCall, removeEventAnimal, filterEvents };
