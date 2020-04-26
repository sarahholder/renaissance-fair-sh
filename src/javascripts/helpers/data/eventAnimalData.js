import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventAnimalByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventAnimal.json?orderBy="eventId"&equalTo="${eventId}"`)
    .then((response) => {
      const allEventAnimalItems = response.data;
      console.log('allEventAnimalItems', allEventAnimalItems);
      const eventAnimalList = [];
      Object.keys(allEventAnimalItems).forEach((eventAnimalId) => {
        allEventAnimalItems[eventAnimalId].id = eventAnimalId;
        eventAnimalList.push(allEventAnimalItems[eventAnimalId]);
      });
      console.log('Animals per event', eventAnimalList);
      resolve(eventAnimalList);
    })
    .catch((error) => reject(error));
});

export default { getEventAnimalByEventId };
