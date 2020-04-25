import utils from '../../helpers/utils';
import staffData from '../../helpers/data/staffData';

const editStaffMemberForm = (e) => {
  const staffId = e.target.closest('.card').id;
  $('#addStaffModal').modal('show');
  staffData.getStaffInfo(staffId)
    .then((resp) => {
      const staffPlaceholder = resp.data;
      let domString = '';
      domString += `<div class="staffForm" data-id="${staffId}" id="staffForm">`;
      domString += '<div class="form-group">';
      domString += '<label for="staffName">Edit name of staff member</label>';
      domString += `<input type="text" class="form-control" id="edit-staffName" value="${staffPlaceholder.name}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="characterType">Edit the type of character</label>';
      domString += `<input type="text" class="form-control" id="edit-characterType" value="${staffPlaceholder.characterType}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="staffImageUrl">Staff member photo</label>';
      domString += `<input type="text" class="form-control" id="edit-staffImageUrl" value="${staffPlaceholder.imageUrl}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="characterName">Character name</label>';
      domString += `<input type="text" class="form-control" id="edit-characterName" value="${staffPlaceholder.characterName}">`;
      domString += '</div>';
      domString += '<h6>Staff member location:</h6>';
      domString += '<div class="form-check">';
      domString += '<input type="checkbox" class="form-check-input" id="edit-location1" value="Edinson Tudor Festival">';
      domString += '<label class="form-check-label" for="location">Edinson Tudor Festival</label>';
      domString += '</div>';
      domString += '<div class="form-check">';
      domString += '<input type="checkbox" class="form-check-input" id="edit-location2" value="Hopscote-by-Sea Faire">';
      domString += '<label class="form-check-label" for="location">Hopscote-by-Sea Faire</label>';
      domString += '</div>';
      domString += '<div class="form-check">';
      domString += '<input type="checkbox" class="form-check-input" id="edit-location3" value="North Illinois Pleasure Faire">';
      domString += '<label class="form-check-label" for="location">North Illinois Pleasure Faire</label>';
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('modalStaffForm', domString);
      $('#newStaffSubmit').addClass('hide');
      $('#editStaffSubmit').removeClass('hide');
    })
    .catch((err) => console.error('editStaffMemberForm', err));
};

export default { editStaffMemberForm };
