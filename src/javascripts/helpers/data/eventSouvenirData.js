import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventSouvenirByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventSouvenir.json?orderBy="eventId"&equalTo="${eventId}"`)
    .then((response) => {
      const allEventSouvenirItems = response.data;
      console.log('response data for eventSouvenir by eventid', allEventSouvenirItems);
      const eventSouvenirList = [];
      Object.keys(allEventSouvenirItems).forEach((eventSouvenirId) => {
        allEventSouvenirItems[eventSouvenirId].id = eventSouvenirId;
        eventSouvenirList.push(allEventSouvenirItems[eventSouvenirId]);
        console.log('eventSouvenir id?', eventSouvenirId);
      });
      console.log('event souvenir list from eventsouvenir data file', eventSouvenirList);
      resolve(eventSouvenirList);
    })
    .catch((error) => reject(error));
});

export default { getEventSouvenirByEventId };
