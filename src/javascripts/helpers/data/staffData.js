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

const deleteStaffMember = (staffId) => axios.delete(`${baseUrl}/staff/${staffId}.json`);

const updateStaffMember = (staffId, modifiedStaffMember) => axios.put(`${baseUrl}/staff/${staffId}.json`, modifiedStaffMember);

const getStaffInfo = (staffId) => axios.get(`${baseUrl}/staff/${staffId}.json`);

export default {
  getStaff,
  addStaff,
  deleteStaffMember,
  getStaffInfo,
  updateStaffMember,
};
