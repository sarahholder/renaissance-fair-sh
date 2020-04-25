import eventData from './eventData';
import eventStaffData from './eventStaffData';
import staffData from './staffData';

const getSingleEventWithStaff = (eventId) => new Promise((resolve, reject) => {
  eventData.getSingleEvent(eventId)
    .then((response) => {
      const event = response.data;
      console.error('event info', response);
      event.id = eventId;
      event.staff = [];
      eventStaffData.getEventStaffByEventId()
        .then((eventStaff) => {
          console.error('eventStaff info', eventStaff);
          staffData.getStaff()
            .then((allStaff) => {
              console.error('all staff info', allStaff);
              eventStaff.forEach((eventStaffInfo) => {
                const foundEventStaffInfo = allStaff.find((x) => x.id === eventStaffInfo.staffId);
                event.staff.push(foundEventStaffInfo);
              });
              resolve(event);
            });
        });
    })
    .catch((error) => reject(error));
});


export default { getSingleEventWithStaff };
