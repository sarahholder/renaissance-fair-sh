import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getEvents = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/events.json`)
    .then((response) => {
      const allEvents = response.data;
      const events = [];
      if (events) {
        Object.keys(allEvents).forEach((eventId) => {
          allEvents[eventId].id = eventId;
          events.push(allEvents[eventId]);
        });
      }
      resolve(events);
    })
    .catch((error) => reject(error));
});

export default { getEvents };
