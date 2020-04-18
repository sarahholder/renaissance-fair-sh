import staffData from '../../helpers/data/staffData';
import staffCards from './staffCards';
import utils from '../../helpers/utils';

const buildAllStaff = () => {
  staffData.getStaff()
    .then((allStaff) => {
      let domString = '<h2 class="text-center mt-3">Staff</h2>';
      domString += '<div class="container-fluid d-flex flex-wrap col-9">';
      allStaff.forEach((staff) => {
        domString += staffCards.buildStaffCards(staff);
      });
      domString += '</div>';
      utils.printToDom('staff-collection', domString);
    })
    .catch((err) => console.error('get staff failed', err));
};

export default { buildAllStaff };
