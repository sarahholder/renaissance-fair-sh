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

const deleteFoods = (foodId) => axios.delete(`${baseURL}/foods/${foodId}.json`);

const addFoods = (newFood) => axios.post(`${baseURL}/foods.json`, newFood);

const updateFoods = (foodId, modifiedFood) => axios.put(`${baseURL}/foods/${foodId}.json`, modifiedFood);

const getFoodInfo = (foodId) => axios.get(`${baseURL}/foods/${foodId}.json`);

export default {
  getFoods,
  deleteFoods,
  addFoods,
  updateFoods,
  getFoodInfo,
};
