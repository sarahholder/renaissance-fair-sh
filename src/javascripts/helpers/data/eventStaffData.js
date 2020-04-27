import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventStaffByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventStaff.json?orderBy="eventId"&equalTo="${eventId}"`)
    .then((response) => {
      const allEventStaffMembers = response.data;
      console.error('response data for eventStaff by eventid', allEventStaffMembers);
      const eventStaffMembers = [];
      Object.keys(allEventStaffMembers).forEach((eventStaffId) => {
        allEventStaffMembers[eventStaffId].id = eventStaffId;
        eventStaffMembers.push(allEventStaffMembers[eventStaffId]);
        console.error('eventStaff id?', eventStaffId);
      });
      console.error('event staff members from eventstaff data file', eventStaffMembers);
      resolve(eventStaffMembers);
    })
    .catch((error) => reject(error));
});

const getEventStaffByStaffId = (staffId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventStaff.json?orderBy="cowId"&equalTo="${staffId}"`)
    .then((response) => {
      const demEventStaff = response.data;
      const eventStaff = [];
      Object.keys(demEventStaff).forEach((eventStaffId) => {
        demEventStaff[eventStaffId].id = eventStaffId;
        eventStaff.push(demEventStaff[eventStaffId]);
      });
      resolve(eventStaff);
    })
    .catch((err) => reject(err));
});

const getEventStaff = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventStaff.json`)
    .then((response) => {
      const allEventStaffMembers = response.data;
      const eventStaffList = [];
      Object.keys(allEventStaffMembers).forEach((eventStaffId) => {
        allEventStaffMembers[eventStaffId].id = eventStaffId;
        eventStaffList.push(allEventStaffMembers[eventStaffId]);
      });
      resolve(eventStaffList);
    })
    .catch((error) => reject(error));
});

const deleteEventStaff = (eStaffId) => axios.delete(`${baseUrl}/eventStaff/${eStaffId}.json`);

export default {
  getEventStaffByEventId,
  getEventStaff,
  deleteEventStaff,
  getEventStaffByStaffId,
};
