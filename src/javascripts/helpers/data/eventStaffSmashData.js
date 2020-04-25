import eventData from './eventData';
import eventStaffData from './eventStaffData';
import staffData from './staffData';

const getSingleEventWithStaffInfo = (eventId) => new Promise((resolve, reject) => {
  eventStaffData.getEventStaffByEventId(eventId)
    .then((response) => {
      const selectedStaff = response.data;
      selectedStaff.id = eventId;
      selectedStaff.staff = [];
      staffData.getStaff()
        .then((staff) => {
          console.error('selected event', selectedEvent);
          console.error('event id', eventId);
          console.error('eventStaff', eventStaff);
          staffData.getStaff()
            .then((allStaff) => {
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


export default { getSingleEventWithStaffInfo };
