import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventShowByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventShows.json?orderBy="eventId"&equalTo="${eventId}"`)
    .then((response) => {
      const allEventShowItems = response.data;
      const eventShowList = [];
      Object.keys(allEventShowItems).forEach((eventShowId) => {
        allEventShowItems[eventShowId].id = eventShowId;
        eventShowList.push(allEventShowItems[eventShowId]);
      });
      resolve(eventShowList);
    })
    .catch((error) => reject(error));
});
const getEventShows = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventShows.json`)
    .then((response) => {
      const allEventShowItems = response.data;
      const eventShowList = [];
      Object.keys(allEventShowItems).forEach((eventShowId) => {
        allEventShowItems[eventShowId].id = eventShowId;
        eventShowList.push(allEventShowItems[eventShowId]);
      });
      resolve(eventShowList);
    })
    .catch((error) => reject(error));
});

const getSingleEventShow = (eventShowId) => axios.get(`${baseUrl}/eventShows/${eventShowId}.json`);

const deleteEventShow = (eventShowId) => axios.delete(`${baseUrl}/eventShows/${eventShowId}.json`);

export default {
  getEventShowByEventId,
  deleteEventShow,
  getSingleEventShow,
  getEventShows,
};
