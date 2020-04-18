import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getSouvenirs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/souvenirs.json`)
    .then((response) => {
      const allSouvenirs = response.data;
      const souvenirs = [];
      if (allSouvenirs) {
        Object.keys(allSouvenirs).forEach((souvenirId) => {
          allSouvenirs[souvenirId].id = souvenirId;
          souvenirs.push(allSouvenirs[souvenirId]);
        });
      }
      resolve(souvenirs);
    })
    .catch((err) => reject(err));
});

const deleteSouvenirs = (souvenirId) => axios.delete(`${baseUrl}/souvenirs/${souvenirId}.json`);

export default { getSouvenirs, deleteSouvenirs };
