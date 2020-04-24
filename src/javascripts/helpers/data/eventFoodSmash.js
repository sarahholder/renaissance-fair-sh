import eventData from './eventData';
import eventFoodData from './eventFoodData';

const getSingleEventWithDetails = (eventId) => new Promise((resolve, reject) => {
  eventData.getSingleEvent(eventId)
    .then((response) => {
      const selectedEvent = response.data;
      selectedEvent.id = eventId;
      selectedEvent.food = [];
      eventFoodData.getEventFoodByEventId(selectedEvent.id).then((eventFood) => {
        console.log('selected event', selectedEvent);
        console.log('event id', eventId);
        console.log('eventFood', eventFood);

        resolve(selectedEvent);
      });
    })
    .catch((error) => reject(error));
});

export default { getSingleEventWithDetails };
