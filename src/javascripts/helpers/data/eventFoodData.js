import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventFoodByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventFood.json?orderBy="eventId"&equalTo="${eventId}"`)
    .then((response) => {
      const allEventFoodItems = response.data;
      console.log('response data for eventfood by eventid', allEventFoodItems);
      const eventFoodList = [];
      Object.keys(allEventFoodItems).forEach((eventFoodId) => {
        allEventFoodItems[eventFoodId].id = eventFoodId;
        eventFoodList.push(allEventFoodItems[eventFoodId]);
      });
      console.log('event food list from eventfood data file', eventFoodList);
      resolve(eventFoodList);
    })
    .catch((error) => reject(error));
});

export default { getEventFoodByEventId };
