import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventStaffByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventStaff.json?orderBy="eventId"&equalTo="${eventId}"`)
    .then((response) => {
      const theEventStaff = response.data;
      console.error('response data for eventStaff by eventid', theEventStaff);
      const eventStaff = [];
      Object.keys(theEventStaff).forEach((eventStaffId) => {
        theEventStaff[eventStaffId].id = eventStaffId;
        eventStaff.push(theEventStaff[eventStaffId]);
      });
      console.error('event staff members from eventStaff data file', eventStaff);
      resolve(eventStaff);
    })
    .catch((err) => reject(err));
});

export default { getEventStaffByEventId };
