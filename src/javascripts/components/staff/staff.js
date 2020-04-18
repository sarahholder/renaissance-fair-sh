import staffData from '../../helpers/data/staffData';
import staffCards from './staffCards';
import utils from '../../helpers/utils';
import newStaffForm from './newStaffForm';
import './staffCards.scss';

const saveNewStaffItem = (e) => {
  e.preventDefault();
  console.error('submit button is working');
  const newStaff = {
    name: $('#staffName').val(),
    characterType: $('#characterType').val(),
    imageUrl: $('#staffImageUrl').val(),
    characterName: $('#characterName').val(),
    location: $('.form-check-input:checked').val(),
  };
  console.error('new staff', newStaff);
  staffData.addStaff(newStaff)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildAllStaff())
    .catch((err) => console.error('Save new staff member failed', err));
};

const buildAllStaff = () => {
  let domString = '';
  staffData.getStaff()
    .then((allStaff) => {
      domString += '<div class="text-center" id="staff-title">';
      domString += '<h2 class="text-center mt-3">Staff</h2>';
      domString += '<button class="btn btn-lg addStaffBtn" id="addStaffBtn"><i class="fas fa-plus"></i> Add a new staff member</button>';
      domString += '</div>';
      domString += '<div class="container-fluid d-flex flex-wrap col-9">';
      allStaff.forEach((staff) => {
        domString += staffCards.buildStaffCards(staff);
      });
      domString += '</div>';
      utils.printToDom('staff-collection', domString);
    })
    .catch((err) => console.error('get staff failed', err));
};

const staffEvents = () => {
  $('body').on('click', '#addStaffBtn', newStaffForm.newStaffForm);
  $('body').on('click', '#newStaffSubmit', saveNewStaffItem);
};

export default { buildAllStaff, staffEvents };
