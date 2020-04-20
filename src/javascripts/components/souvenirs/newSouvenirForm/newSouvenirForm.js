import utils from '../../../helpers/utils';

const newSouvenirForm = () => {
  $('#souvenirs-modal').modal('show');
  let domString = '';
  domString += '<form>';
  domString += '<div class="form-group">';
  domString += '<label for="souvenirType">Souvenir Type:</label>';
  domString += '<input type="text" class="form-control" id="souvenirType" placeholder="Ocarina">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="souvenirDescription">Souvenir Description:</label>';
  domString += '<input type="text" class="form-control" id="souvenirDescription" placeholder="A small wind instrument">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="souvenirImage">Image:</label>';
  domString += '<input type="text" class="form-control" id="souvenirImage" placeholder="Image Link">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="souvenirPrice">Price:</label>';
  domString += '<input type="text" class="form-control" id="souvenirPrice" placeholder="$20">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="souvenirLocation">Please Pick a Location:</label>';
  domString += '<select class="form-control" id="souvenirLocation">';
  domString += '<option value="Edinson Tudor Festival">Edinson Tudor Festival</option>';
  domString += '<option value="Hopscote-by-Sea Faire">Hopscote-by-Sea Faire</option>';
  domString += '<option value="North Illinois Pleasure Faire">North Illinois Pleasure Faire</option>';
  domString += '</select>';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="souvenirAvailability">Avaliability Of Souvenir:</label>';
  domString += '<select id="souvenirAvailability" class="form-control" placeholder="">';
  domString += '<option value="">Select your option</option>';
  domString += '<option value="true">Avaliable</option>';
  domString += '<option value="false">Not Avaliable</option>';
  domString += '</select>';
  domString += '</div>';
  domString += '</div>';
  domString += '</form>';

  $('#save-new-souvenir-btn').removeClass('hide');
  utils.printToDom('souvenirsModalBody', domString);
};

export default { newSouvenirForm };
