import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventFoodByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventFood.json?orderBy="eventId"&equalTo="${eventId}"`)
    .then((response) => {
      const allEventFoodItems = response.data;
      const eventFoodList = [];
      Object.keys(allEventFoodItems).forEach((eventFoodId) => {
        allEventFoodItems[eventFoodId].id = eventFoodId;
        eventFoodList.push(allEventFoodItems[eventFoodId]);
      });
      resolve(eventFoodList);
    })
    .catch((error) => reject(error));
});

const getEventFoods = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventFood.json`)
    .then((response) => {
      const allEventFoodItems = response.data;
      const eventFoodList = [];
      Object.keys(allEventFoodItems).forEach((eventFoodId) => {
        allEventFoodItems[eventFoodId].id = eventFoodId;
        eventFoodList.push(allEventFoodItems[eventFoodId]);
      });
      resolve(eventFoodList);
    })
    .catch((error) => reject(error));
});

const getSingleEventFood = (eventFoodId) => axios.get(`${baseUrl}/eventFood/${eventFoodId}.json`);

const deleteEventFood = (eventFoodId) => axios.delete(`${baseUrl}/eventFood/${eventFoodId}.json`);

export default {
  getEventFoodByEventId,
  deleteEventFood,
  getSingleEventFood,
  getEventFoods,
};
