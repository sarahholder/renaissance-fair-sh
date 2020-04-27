import eventData from './eventData';
import eventShowData from './eventShowData';
import showData from './showData';

const getSingleEventWithShowDetails = (eventId) => new Promise((resolve, reject) => {
  eventData.getSingleEvent(eventId)
    .then((response) => {
      const selectedEvent = response.data;
      selectedEvent.id = eventId;
      selectedEvent.show = [];
      eventShowData.getEventShowByEventId(selectedEvent.id).then((eventShow) => {
        console.log('selected event', selectedEvent);
        console.log('event id', eventId);
        console.log('eventShow', eventShow);
        showData.getShows().then((allShows) => {
          console.log('all show items', allShows);
          eventShow.forEach((eventShowItem) => {
            const foundEventShowItem = allShows.find((x) => x.id === eventShowItem.showId);
            selectedEvent.food.push(foundEventShowItem);
          });
          resolve(selectedEvent);
        });
      });
    })
    .catch((error) => reject(error));
});

export default { getSingleEventWithShowDetails };
