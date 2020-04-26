import eventData from './eventData';
import foodData from './foodData';
import staffData from './staffData';
import showData from './showData';
import souvenirData from './souvenirsData';
import eventStaffData from './eventStaffData';
import eventFoodData from './eventFoodData';
// import eventShowData from './eventShowData';
import eventSouvenirData from './eventSouvenirData';

const staffForEvent = (eventId) => new Promise((resolve, reject) => {
  eventStaffData.getEventStaffByEventId(eventId)
    .then((eventStaff) => {
      staffData.getStaff().then((staff) => {
        const finalStaff = [];
        eventStaff.forEach((eStaff) => {
          const newStaff = staff.find((x) => x.id === eStaff.staffId);
          newStaff.eventStaffId = eStaff.id;
          finalStaff.push(newStaff);
        });
        resolve(finalStaff);
      });
    })
    .catch((error) => reject(error));
});

const foodForEvent = (eventId) => new Promise((resolve, reject) => {
  eventFoodData.getEventFoodByEventId(eventId)
    .then((eventFood) => {
      foodData.getFoods().then((food) => {
        const finalFood = [];
        eventFood.forEach((eFood) => {
          const newFood = food.find((x) => x.id === eFood.foodId);
          newFood.eventFoodId = eFood.id;
          finalFood.push(newFood);
        });
        resolve(finalFood);
      });
    })
    .catch((error) => reject(error));
});

// const showForEvent = (eventId) => new Promise((resolve, reject) => {
//   eventShowData.getEventShowByEventId(eventId)
//     .then((eventShow) => {
//       showData.getAllShows().then((show) => {
//         const finalShow = [];
//         eventShow.forEach((eShow) => {
//           const newShow = show.find((x) => x.id === eShow.showId);
//           newShow.eventShowId = eShow.id;
//           finalShow.push(newShow);
//         });
//         resolve(finalShow);
//       });
//     })
//     .catch((error) => reject(error));
// });

const souvenirForEvent = (eventId) => new Promise((resolve, reject) => {
  eventSouvenirData.getEventSouvenirByEventId(eventId)
    .then((eventSouvenir) => {
      souvenirData.getSouvenirData().then((souvenir) => {
        const finalSouvenir = [];
        eventSouvenir.forEach((eSouvenir) => {
          const newSouvenir = souvenir.find((x) => x.id === eSouvenir.souvenirId);
          newSouvenir.eventSouvenirId = eSouvenir.id;
          finalSouvenir.push(newSouvenir);
        });
        resolve(finalSouvenir);
      });
    })
    .catch((error) => reject(error));
});

const completeSingleEvent = (eventId) => new Promise((resolve, reject) => {
  eventData.getEventById(eventId)
    .then((event) => {
      staffForEvent(eventId).then((eventStaff) => {
        foodForEvent(eventId).then((eventFood) => {
          // showForEvent(eventId).then((eventShows) => {
            souvenirForEvent(eventId).then((eventSouvenirs) => {
              const finalEvent = { ...event };
              finalEvent.id = eventId;
              finalEvent.staffs = eventStaff;
              finalEvent.foods = eventFood;
              // finalEvent.shows = eventShows;
              finalEvent.souvenirs = eventSouvenirs;
              resolve(finalEvent);
            });
          });
        });
      });
    })
    .catch((error) => reject(error));
});

export default { completeSingleEvent };
