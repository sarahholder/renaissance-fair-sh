import foodData from './foodData';
// import souvenirData from './souvenirsData';
import eventFoodData from './eventFoodData';
import eventData from './eventData';

const getAllEventDetails = () => Promise.all([eventData.getEvents(), foodData.getFoods(), eventFoodData.getEventFoods()]);

const getCompleteEvent = () => {
  getAllEventDetails()
    .then((response) => {
      const events = response[0];
      const foods = response[1];
      const eventFoods = response[2];
      const eventList = [];
      console.log('response', events, foods, eventFoods, eventList);
      events.forEach((event) => {
        const theEventList = {};
        const evFood = foods.find((x) => x.id === event.foodId);
        theEventList.foodId = evFood.id;
        console.log(theEventList);
      });
    });
};

export default { getCompleteEvent };
