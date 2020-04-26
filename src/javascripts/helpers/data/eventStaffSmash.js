import eventData from './eventData';
import eventStaffData from './eventStaffData';
import staffData from './staffData';

const getSingleEventWithStaffDetails = (eventId) => new Promise((resolve, reject) => {
  eventData.getSingleEvent(eventId)
    .then((response) => {
      const selectedEvent = response.data;
      selectedEvent.id = eventId;
      selectedEvent.staff = [];
      eventStaffData.getEventStaffByEventId(selectedEvent.id).then((eventStaff) => {
        console.error('selected Event for Staff', selectedEvent);
        console.error('event id', eventId);
        console.error('eventStaff', eventStaff);
        staffData.getStaff().then((allStaff) => {
          console.error('all staff members', allStaff);
          eventStaff.forEach((eventStaffMember) => {
            const foundEventStaffMember = allStaff.find((x) => x.id === eventStaffMember.staffId);
            selectedEvent.staff.push(foundEventStaffMember);
          });
          resolve(selectedEvent);
        });
      });
    })
    .catch((error) => reject(error));
});

export default { getSingleEventWithStaffDetails };
