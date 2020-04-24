import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventStaffByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventStaff.json?orderBy="eventId"&equalTo="${eventId}"`)
    .then((response) => {
      const theEventStaff = response.data;
      const eventStaff = [];
      Object.keys(theEventStaff).forEach((eventStaffId) => {
        theEventStaff[eventStaffId].id = eventStaffId;
        eventStaff.push(theEventStaff[eventStaffId]);
      });
      resolve(eventStaff);
    })
    .catch((err) => reject(err));
});

export default { getEventStaffByEventId };
