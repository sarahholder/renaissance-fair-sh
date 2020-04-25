import eventData from './eventData';
import eventStaffData from './eventStaffData';
import staffData from './staffData';

const getSingleEventWithInfo = (eventId) => new Promise((resolve, reject) => {
  eventData.getSingleEvent(eventId)
    .then((response) => {
      const selectedEvent = response.data;
      selectedEvent.id = eventId;
      selectedEvent.staff = [];
      eventStaffData.getEventStaffByEventId(selectedEvent.id).then((eventStaff) => {
        console.error('selected event', selectedEvent);
        console.error('event id', eventId);
        console.error('eventStaff', eventStaff);
        staffData.getStaff().then((allStaff) => {
          console.error('all staff info', allStaff);
          eventStaff.forEach((eventStaffInfo) => {
            const foundEventStaffInfo = allStaff.find((x) => x.id === eventStaffInfo.staffId);
            selectedEvent.staff.push(foundEventStaffInfo);
          });
          resolve(selectedEvent);
        });
      });
    })
    .catch((error) => reject(error));
});


export default { getSingleEventWithInfo };
