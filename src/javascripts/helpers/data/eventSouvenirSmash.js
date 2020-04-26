import eventData from './eventData';
import eventSouvenirData from './eventSouvenirData';
import souvenirsData from './souvenirsData';

const getSingleEventWithSouvenirDetails = (eventId) => new Promise((resolve, reject) => {
  eventData.getSingleEvent(eventId)
    .then((response) => {
      const selectedEvent = response.data;
      selectedEvent.id = eventId;
      selectedEvent.souvenir = [];
      eventSouvenirData.getEventSouvenirByEventId(selectedEvent.id).then((eventSouvenir) => {
        console.log('selected Event for Souvenir', selectedEvent);
        console.log('event id', eventId);
        console.log('eventSounvenir', eventSouvenir);
        souvenirsData.getSouvenirs().then((allSouvenirs) => {
          console.log('all souvenir items', allSouvenirs);
          eventSouvenir.forEach((eventSouvenirItem) => {
            const foundEventSouvenirItem = allSouvenirs.find((x) => x.id === eventSouvenirItem.souvenirId);
            selectedEvent.souvenir.push(foundEventSouvenirItem);
          });
          resolve(selectedEvent);
        });
      });
    })
    .catch((error) => reject(error));
});

export default { getSingleEventWithSouvenirDetails };
