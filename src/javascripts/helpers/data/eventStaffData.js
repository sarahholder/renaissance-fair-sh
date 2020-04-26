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

export default { getEventStaffByEventId };
