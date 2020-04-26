import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventShowByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventShow.json?orderBy="eventId"&equalTo="${eventId}"`)
    .then((response) => {
      const allEventShowItems = response.data;
      console.log('response data for eventshow by eventid', allEventShowItems);
      const eventShowList = [];
      Object.keys(allEventShowItems).forEach((eventShowId) => {
        allEventShowItems[eventShowId].id = eventShowId;
        eventShowList.push(allEventShowItems[eventShowId]);
      });
      console.log('event food list from eventshow data file', eventShowList);
      resolve(eventShowList);
    })
    .catch((error) => reject(error));
});

export default { getEventShowByEventId };
