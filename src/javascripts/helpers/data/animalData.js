import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getAnimals = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/animals.json`)
    .then((response) => {
      const allAnimals = response.data;
      console.error('all animals', allAnimals);
      const animals = [];
      if (animals) {
        Object.keys(allAnimals).forEach((animalId) => {
          allAnimals[animalId].id = animalId;
          animals.push(allAnimals[animalId]);
        });
      }
      resolve(animals);
    })
    .catch((err) => reject(err));
});

const deleteAnimal = (animalId) => axios.delete(`${baseURL}/animals/${animalId}.json`);

export default { getAnimals };
