import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getStaff = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/staff.json`)
    .then((response) => {
      const allStaff = response.data;
      const staff = [];
      if (allStaff) {
        Object.keys(allStaff).forEach((staffId) => {
          allStaff[staffId].id = staffId;
          staff.push(allStaff[staffId]);
        });
      }
      resolve(staff);
    })
    .catch((err) => reject(err));
});

const addStaff = (newStaff) => axios.post(`${baseUrl}/staff.json`, newStaff);

export default { getStaff, addStaff };
