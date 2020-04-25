// import eventData from './eventData';
import eventFoodData from './eventFoodData';
import foodData from './foodData';

const getEventFood = () => new Promise((resolve, reject) => {
  eventFoodData.getEventFoodByEventId()
    .then((response) => {
      const eventFood = response.data;
      console.log('event food', eventFood);
      // event.id = eventId;
      // selectedEvent.food = [];
      // console.log('selected event', selectedEvent);
      // console.log('event id', eventId);
      console.log('eventFood', eventFood);
      foodData.getFoods().then((allFoods) => {
        console.log('all food items', allFoods);
        eventFood.forEach((eventFoodItem) => {
          const foundEventFoodItem = allFoods.find((x) => x.id === eventFoodItem.foodId);
          console.log(foundEventFoodItem);
          // selectedEvent.food.push(foundEventFoodItem);
        });
        resolve(eventFood);
      });
    })
    .catch((error) => reject(error));
});

export default { getEventFood };
