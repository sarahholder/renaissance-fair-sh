import './eventSingleView.scss';

import eventData from '../../helpers/data/eventData';

import utils from '../../helpers/utils';

const viewSingleEvent = (eventId) => {
  eventData.getSingleEventWithDetails(eventId)
    .then((singleEvent) => {
      let domString = '';
      domString += '<div class="singleEventTitle">';
      domString += `<h2>${singleEvent.name}</h2>`;
      domString += `<h4>${singleEvent.location}</h4>`;
      domString += `<h4>${singleEvent.timeStart} - ${singleEvent.timeEnd}</h4>`;
      domString += '</div>';
      domString += '<div id="eventFoodSection">Food Details</div>';
      domString += '<div id="eventSouvenirsSection">Souvenirs Details</div>';
      domString += '<div id="eventStaffSection">Staff Details</div>';
      domString += '<div id="eventShowsSection">Shows Details</div>';
      utils.printToDom('single-view-event', domString);
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
