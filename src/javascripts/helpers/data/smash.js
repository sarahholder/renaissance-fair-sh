import eventData from './eventData';
import eventFoodData from './eventFoodData';
import foodData from './foodData';
import eventSouvenirData from './eventSouvenirData';
import souvenirsData from './souvenirsData';
import animalData from './animalData';
import eventAnimalData from './eventAnimalData';
import eventStaffData from './eventStaffData';
import staffData from './staffData';

const getEventFood = (eventId) => new Promise((resolve, reject) => {
  eventFoodData.getEventFoodByEventId(eventId)
    .then((eventFoods) => {
      foodData.getFoods().then((allFoods) => {
        const selectedEventFoodItems = [];
        eventFoods.forEach((eventFoodItem) => {
          const foundEventFoodItem = allFoods.find((x) => x.id === eventFoodItem.foodId);
          console.log(foundEventFoodItem);
          selectedEventFoodItems.push(foundEventFoodItem);
        });
        resolve(selectedEventFoodItems);
      });
    })
    .catch((error) => reject(error));
});

const getEventSouvenirs = (eventId) => new Promise((resolve, reject) => {
  eventSouvenirData.getEventSouvenirByEventId(eventId)
    .then((eventSouvenir) => {
      console.log('event id', eventId);
      console.log('eventSouvenir', eventSouvenir);
      souvenirsData.getSouvenirs().then((allSouvenirs) => {
        const selectedEventSouvenirItems = [];
        console.log('all souvenir items', allSouvenirs);
        eventSouvenir.forEach((eventSouvenirItem) => {
          const foundEventSouvenirItem = allSouvenirs.find((x) => x.id === eventSouvenirItem.souvenirId);
          selectedEventSouvenirItems.push(foundEventSouvenirItem);
        });
        resolve(selectedEventSouvenirItems);
      });
    })
    .catch((error) => reject(error));
});

const getEventStaff = (eventId) => new Promise((resolve, reject) => {
  console.log('event id', eventId);
  eventStaffData.getEventStaffByEventId(eventId)
    .then((eventStaff) => {
      console.log('selected event staff', eventStaff);
      staffData.getStaff().then((allStaff) => {
        const selectedEventStaffMembers = [];
        console.log('all staff items', allStaff);
        eventStaff.forEach((eventStaffPerson) => {
          const foundEventStaffPerson = allStaff.find((x) => x.id === eventStaffPerson.staffId);
          console.log(foundEventStaffPerson);
          selectedEventStaffMembers.push(foundEventStaffPerson);
        });
        resolve(selectedEventStaffMembers);
      });
    })
    .catch((error) => reject(error));
});

const getEventAnimals = (eventId) => new Promise((resolve, reject) => {
  eventAnimalData.getEventAnimalByEventId(eventId)
    .then((eventAnimals) => {
      animalData.getAnimals().then((allAnimals) => {
        const selectedEventAnimalItems = [];
        eventAnimals.forEach((eventAnimalItem) => {
          const foundEventAnimalItem = allAnimals.find((x) => x.id === eventAnimalItem.animalId);
          console.log(foundEventAnimalItem);
          selectedEventAnimalItems.push(foundEventAnimalItem);
        });
        resolve(selectedEventAnimalItems);
      });
    })
    .catch((error) => reject(error));
});

const getCompleteEvent = (eventId) => new Promise((resolve, reject) => {
  eventData.getEventById(eventId)
    .then((event) => {
      getEventFood(eventId).then((eventFood) => {
        getEventSouvenirs(eventId).then((eventSouvenirs) => {
          getEventStaff(eventId).then((eventStaff) => {
            getEventAnimals(eventId).then((eventAnimals) => {
              const finalEvent = { ...event };
              finalEvent.food = eventFood;
              finalEvent.souvenirs = eventSouvenirs;
              finalEvent.staff = eventStaff;
              finalEvent.animals = eventAnimals;
              resolve(finalEvent);
            });
          });
        });
      })
        .catch((error) => reject(error));
    });
});

export default {
  getEventFood,
  getCompleteEvent,
  getEventStaff,
  getEventAnimals,
};
