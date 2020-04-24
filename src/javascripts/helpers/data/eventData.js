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

const getSingleEvent = (eventId) => axios.get(`${baseURL}/events/${eventId}.json`);

const getSingleEventWithDetails = (eventId) => new Promise((resolve, reject) => {
  getSingleEvent(eventId)
    .then((response) => {
      const selectedEvent = response.data;
      // event.id = eventId;
      resolve(selectedEvent);
    })
    .catch((error) => reject(error));
});

const deleteEvent = (eventId) => axios.delete(`${baseURL}/events/${eventId}.json`);

export default { getEvents, getSingleEventWithDetails, deleteEvent };
