import eventStaffData from './eventStaffData';
import staffData from './staffData';

const getSingleEventWithStaff = (eventId) => new Promise((resolve, reject) => {
  eventStaffData.getEventStaffByEventId()
    .then((response) => {
      const eventStaff = response.data;
      console.error('event info', eventStaff);
      eventStaff.id = eventId;
      eventStaff.staff = [];
      staffData.getStaff()
        .then((allStaff) => {
          console.error('all staff info', allStaff);
          eventStaff.forEach((eventStaffInfo) => {
            const foundEventStaffInfo = allStaff.find((x) => x.id === eventStaffInfo.staffId);
            eventStaff.staff.push(foundEventStaffInfo);
          });
          resolve(eventStaff);
        });
    })
    .catch((error) => reject(error));
});


export default { getSingleEventWithStaff };
