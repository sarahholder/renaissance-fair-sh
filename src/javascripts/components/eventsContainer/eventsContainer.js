import eventData from '../../helpers/data/eventData';
import eventCard from '../eventCard/eventCard';
import eventSingleView from '../eventSingleView/eventSingleView';

import utils from '../../helpers/utils';

const buildAllEvents = () => {
  let domString = '';
  eventData.getEvents()
    .then((events) => {
      domString += '<div class="text-center" id="eventTitle">';
      domString += '<h2 class="mt-3">Events</h2>';
      domString += '<h3>Fun celebrations for the whole family!</h3>';
      domString += '<button class="btn btn-lg addEventBtn" id="addEventBtn"><i class="fas fa-plus"></i> Add a new event</button>';
      domString += '</div>';
      domString += '<div class="container-fluid d-flex flex-wrap col-9">';
      events.forEach((event) => {
        domString += eventCard.buildEventCard(event);
      });
      domString += '</div>';
      utils.printToDom('events', domString);
      $('body').on('click', '#viewEventBtn', eventSingleView.viewSingleEventCall);
    })
    .catch((error) => console.error('build all events has failed', error));
};

export default { buildAllEvents };
