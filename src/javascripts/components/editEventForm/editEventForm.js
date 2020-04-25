import utils from '../../helpers/utils';
import eventData from '../../helpers/data/eventData';

const showEditEventForm = (eventId) => {
  eventData.getSingleEvent(eventId)
    .then((response) => {
      const selectedEvent = response.data;
      let domString = '';
      domString += `<form id="modalForm" class="edit-event-form-tag" data-id="${eventId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="edit-event-name">Name</label>';
      domString += `<input type="text" class="form-control" id="edit-event-name" aria-describedby="name" placeholder="Enter Event Name" value="${selectedEvent.name}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-event-location">Location</label>';
      domString += `<input type="text" class="form-control" id="edit-event-location" aria-describedby="location" placeholder="Enter Location" value="${selectedEvent.location}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-event-timeStart">Country</label>';
      domString += `<input type="text" class="form-control" id="edit-event-timeStart" aria-describedby="timeStart" placeholder="Enter Start Time" value="${selectedEvent.timeStart}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-event-timeEnd">End Time</label>';
      domString += `<input type="text" class="form-control" id="edit-event-timeEnd" aria-describedby="timeEnd" placeholder="End Time" value="${selectedEvent.timeEnd}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-event-date">Photo</label>';
      domString += `<input type="text" class="form-control" id="edit-event-date" aria-describedby="date" placeholder="Enter a Date" value="${selectedEvent.date}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-event-cost">Cost</label>';
      domString += `<input type="text" class="form-control" id="edit-event-cost" aria-describedby="cost" placeholder="Enter a Cost" value="${selectedEvent.cost}">`;
      domString += '</div>';
      domString += '</form>';
      utils.printToDom('modalBodyEditEvent', domString);
    })
    .catch((error) => console.error('could not edit the selected event', error));
};

export default { showEditEventForm };
