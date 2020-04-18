import utils from '../../helpers/utils';

const addShowForm = () => {
  let domString = '';
  domString += '<form>';
  domString += '<div class="form-group">';
  domString += '<label for="new-show-name">Show Name:</label>';
  domString += '<input type="text" class="form-control" id="new-show-name">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="new-show-time">Show Time:</label>';
  domString += '<input type="text" class="form-control" id="new-show-time">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="new-show-stage">Stage:</label>';
  domString += '<input type="text" class="form-control" id="new-show-stage">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="new-show-image">Image Link:</label>';
  domString += '<input type="text" class="form-control" id="new-show-image">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="new-show-location">Please Pick a Location:</label>';
  domString += '<select class="form-control" id="new-show-location">';
  domString += '<option value="Edinson Tudor Festival">Edinson Tudor Festival</option>';
  domString += '<option value="Hopscote-by-Sea Faire">Hopscote-by-Sea Faire</option>';
  domString += '<option value="North Illinois Pleasure Faire">North Illinois Pleasure Faire</option>';
  domString += '</select>';
  domString += '</div>';
  $('#add-new-show-modal').modal('show');
  utils.printToDom('add-new-show-modal-body', domString);
};

export default { addShowForm };
