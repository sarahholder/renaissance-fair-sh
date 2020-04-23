import './eventSingleView.scss';
import '../../../styles/main.scss';

import eventData from '../../helpers/data/eventData';

import utils from '../../helpers/utils';

const closeSingleEvent = () => {
  utils.printToDom('single-view-event', '');
  $('#foodCards').removeClass('hide');
  $('#souvenirs').removeClass('hide');
  $('#staff-collection').removeClass('hide');
  $('#shows').removeClass('hide');
  $('#events').removeClass('hide');
  $('#single-view-event').addClass('hide');
};

const viewSingleEvent = (eventId) => {
  eventData.getSingleEventWithDetails(eventId)
    .then((singleEvent) => {
      let domString = '';
      domString += '<div class="singleEventTitle">';
      domString += '<div class="row">';
      domString += `<h2>${singleEvent.name}</h2>`;
      domString += '<button id="closeSingleEvent" class="col-3 btn btn-default closeEventBtn ml-auto"><i class="fas fa-times"></i> Close</button>';
      domString += '</div>';
      domString += `<h5>${singleEvent.date}</h5>`;
      domString += `<h5>${singleEvent.location}</h5>`;
      domString += `<h5>${singleEvent.timeStart} - ${singleEvent.timeEnd}</h5>`;
      domString += '</div>';
      domString += '<div id="eventDetails">';
      domString += '<div id="eventFoodSection" class="quad">';
      domString += '<h4 class="eventSectionTitle">Food Details</h4>';
      domString += '<p>DETAILS HERE!!!!</p>';
      domString += '</div>';
      domString += '<div id="eventSouvenirsSection" class="quad">';
      domString += '<h4 class="eventSectionTitle">Souvenirs Details</h4>';
      domString += '<p>DETAILS HERE!!!!</p>';
      domString += '</div>';
      domString += '<div id="eventStaffSection" class="quad">';
      domString += '<h4 class="eventSectionTitle">Staff Details</h4>';
      domString += '<p>DETAILS HERE!!!!</p>';
      domString += '</div>';
      domString += '<div id="eventShowsSection" class="quad">';
      domString += '<h4 class="eventSectionTitle">Shows Details</h4>';
      domString += '<p>DETAILS HERE!!!!</p>';
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('single-view-event', domString);
      $('body').on('click', '#closeSingleEvent', closeSingleEvent);
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
  const eventId = e.target.closest('.card').id;
  viewSingleEvent(eventId);
};

export default { viewSingleEventCall };
