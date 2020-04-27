import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventAnimalByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventAnimal.json?orderBy="eventId"&equalTo="${eventId}"`)
    .then((response) => {
      const eventAnimals = response.data;
      const animals = [];
      Object.keys(eventAnimals).forEach((eventAnimalId) => {
        eventAnimals[eventAnimalId].id = eventAnimalId;
        animals.push(eventAnimals[eventAnimalId]);
      });
      resolve(animals);
    })
    .catch((error) => reject(error));
});

const getSingleEventAnimal = (eventAnimalId) => axios.get(`${baseUrl}/eventAnimal/${eventAnimalId}.json`);

export default { getEventAnimalByEventId, getSingleEventAnimal };
