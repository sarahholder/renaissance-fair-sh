import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getShows = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/shows.json`)
    .then((response) => {
      const allShows = response.data;
      const shows = [];
      if (allShows) {
        Object.keys(allShows).forEach((showId) => {
          allShows[showId].id = showId;
          shows.push(allShows[showId]);
        });
      }
      resolve(shows);
    })
    .catch((err) => reject(err));
});

const addShow = (newShow) => axios.post(`${baseUrl}/shows.json`, newShow);

const updateShow = (showId, editedShow) => axios.put(`${baseUrl}/shows/${showId}.json`, editedShow);

const deleteShow = (showId) => axios.delete(`${baseUrl}/shows/${showId}.json`);

export default {
  getShows,
  addShow,
  deleteShow,
  updateShow,
};
