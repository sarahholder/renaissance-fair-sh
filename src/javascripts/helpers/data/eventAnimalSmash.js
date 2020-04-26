import animalData from './animalData';
import eventAnimalData from './eventAnimalData';
import eventData from './eventData';

const getSingleEventWithAnimalDetails = (eventId) => new Promise((resolve, reject) => {
  eventData.getSingleEvent(eventId)
    .then((response) => {
      const selectedEvent = response.data;
      selectedEvent.id = eventId;
      selectedEvent.animal = [];
      eventAnimalData.getEventAnimalByEventId(selectedEvent.id).then((eventAnimal) => {
        console.log('Animal: selected event', selectedEvent);
        console.log('event id', eventId);
        console.log('eventAnimal', eventAnimal);
        animalData.getAnimals().then((allAnimals) => {
          console.log('all animal items', allAnimals);
          eventAnimal.forEach((eventAnimalItem) => {
            const foundEventAnimalItem = allAnimals.find((x) => x.id === eventAnimalItem.animalId);
            selectedEvent.animal.push(foundEventAnimalItem);
          });
          resolve(selectedEvent);
        });
      });
    })
    .catch((error) => reject(error));
});

export default { getSingleEventWithAnimalDetails };
