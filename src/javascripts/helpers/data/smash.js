import eventData from './eventData';
import eventFoodData from './eventFoodData';
import foodData from './foodData';
import eventSouvenirData from './eventSouvenirData';
import souvenirsData from './souvenirsData';

const promise1 = (eventId) => new Promise((resolve, reject) => {
  eventData.getSingleEvent(eventId)
    .then((response) => {
      const selectedEvent = response.data;
      selectedEvent.id = eventId;
      selectedEvent.souvenir = [];
      eventSouvenirData.getEventSouvenirByEventId(selectedEvent.id).then((eventSouvenir) => {
        console.log('selected Event for Souvenir', selectedEvent);
        console.log('event id', eventId);
        console.log('eventSounvenir', eventSouvenir);
        souvenirsData.getSouvenirs().then((allSouvenirs) => {
          console.log('all souvenir items', allSouvenirs);
          eventSouvenir.forEach((eventSouvenirItem) => {
            const foundEventSouvenirItem = allSouvenirs.find((x) => x.id === eventSouvenirItem.souvenirId);
            selectedEvent.souvenir.push(foundEventSouvenirItem);
          });
          resolve(selectedEvent);
        });
      });
    })
    .catch((error) => reject(error));
});

const promise2 = (eventId) => new Promise((resolve, reject) => {
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
            resolve(selectedEvent.food);
          });
        });
    })
    .catch((error) => reject(error));
});

const allPromises = Promise.all([promise1, promise2])
  .then((resolve) => {
    console.log('promise all ran', resolve);
  })
  .catch((error) => console.log('error in promise all', error));

export default { allPromises };
