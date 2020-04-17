import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getFoods = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/foods.json`)
    .then((response) => {
      const allFoods = response.data;
      const foods = [];
      Object.keys(allFoods).forEach((foodId) => {
        allFoods[foodId].id = foodId;
        foods.push(allFoods[foodId]);
      });
      resolve(foods);
    })
    .catch((err) => reject(err));
});

export default { getFoods };