import eventData from './eventData';
import eventFoodData from './eventFoodData';
import foodData from './foodData';

const getSingleEventWithDetails = (eventId) => new Promise((resolve, reject) => {
  eventData.getSingleEvent(eventId)
    .then((response) => {
      const selectedEvent = response.data;
      console.log('selected event', selectedEvent);
      selectedEvent.id = eventId;
      selectedEvent.food = [];
      eventFoodData.getEventFoodByEventId(selectedEvent.id)
        .then((eventFood) => {
          console.log('event food', eventFood);
          console.log('selected event', selectedEvent);
          console.log('event id', eventId);
          foodData.getFoods().then((allFoods) => {
            console.log('all food items', allFoods);
            eventFood.forEach((eventFoodItem) => {
              const foundEventFoodItem = allFoods.find((x) => x.id === eventFoodItem.foodId);
              console.log(foundEventFoodItem);
              selectedEvent.food.push(foundEventFoodItem);
            });
            resolve(selectedEvent);
          });
        });
    })
    .catch((error) => reject(error));
});

export default { getSingleEventWithDetails };
