import eventData from './eventData';
// import eventFoodData from './eventFoodData';
import eventFoodSmash from './eventFoodSmash';

const getSingleEventWithDetails = (eventId) => new Promise((resolve, reject) => {
  eventData.getSingleEvent(eventId)
    .then((singleEventResponse) => {
      const selectedEvent = singleEventResponse.data;
      console.log('selected event', selectedEvent);
      selectedEvent.id = eventId;
      // eventFoodData.getEventFoodByEventId(selectedEvent.id);
      eventFoodSmash.getEventFood
      // eventFoodData.getEventFoodByEventId(selectedEvent.id)
        .then((eventFoodResponse) => {
          console.log('inside event!', eventFoodResponse);
          selectedEvent.food = [];
          resolve(selectedEvent);
        });
    })
    .catch((error) => reject(error));
});

export default { getSingleEventWithDetails };
