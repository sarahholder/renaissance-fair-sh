import utils from '../../helpers/utils';

const addShowForm = () => {
  let domString = '';
  domString += '<form>';
  domString += '<div class="form-group">';
  domString += '<label for="new-show-name">Show Name:</label>';
  domString += '<input type="text" class="form-control" id="new-show-name" placeholder="Robin Hood’s Grand Adventure Show">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="new-show-time">Show Time:</label>';
  domString += '<input type="text" class="form-control" id="new-show-time" placeholder="2:00">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="new-show-stage">Stage:</label>';
  domString += '<input type="text" class="form-control" id="new-show-stage" placeholder="Stage 1">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="new-show-image">Image Link:</label>';
  domString += '<input type="text" class="form-control" id="new-show-image" placeholder="Image Link">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="new-show-location">Please Pick a Location:</label>';
  domString += '<select class="form-control" id="new-show-location">';
  domString += '<option value="Edinson Tudor Festival">Edinson Tudor Festival</option>';
  domString += '<option value="Hopscote-by-Sea Faire">Hopscote-by-Sea Faire</option>';
  domString += '<option value="North Illinois Pleasure Faire">North Illinois Pleasure Faire</option>';
  domString += '</select>';
  domString += '</div>';

  $('#save-new-show-btn').removeClass('hide');
  $('#update-show-btn').addClass('hide');
  $('.edit').addClass('hide');
  $('.add').removeClass('hide');

  $('#shows-modal').modal('show');
  utils.printToDom('shows-modal-body', domString);
};

export default { addShowForm };
