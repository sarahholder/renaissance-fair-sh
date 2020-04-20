import souvenirData from '../../../helpers/data/souvenirsData';
import utils from '../../../helpers/utils';

const editSouvenirsForm = (e) => {
  const souvenirId = e.target.closest('.card').id;
  $('#souvenirs-modal').modal('show');
  souvenirData.getSingleSouvenir(souvenirId)
    .then((response) => {
      const souvenir = response.data;
      let domString = '';
      domString += `<form class="edit-souvenir-form" data-id="${souvenirId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="edit-souvenirType">Souvenir Type:</label>';
      domString += `<input type="text" class="form-control" id="edit-souvenirType" placeholder="Ocarina" value="${souvenir.type}"`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-souvenirDescription">Souvenir Description:</label>';
      domString += `<input type="text" class="form-control" id="edit-souvenirDescription" placeholder="A small wind instrument" value="${souvenir.description}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-souvenirImage">Image:</label>';
      domString += `<input type="text" class="form-control" id="edit-souvenirImage" placeholder="Image Link" value="${souvenir.imageUrl}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-souvenirPrice">Price:</label>';
      domString += `<input type="text" class="form-control" id="edit-souvenirPrice" placeholder="$20" value="${souvenir.price}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-souvenirLocation">Please Pick a Location:</label>';
      domString += '<select class="form-control" id="edit-souvenirLocation">';
      domString += '<option value="Edinson Tudor Festival">Edinson Tudor Festival</option>';
      domString += '<option value="Hopscote-by-Sea Faire">Hopscote-by-Sea Faire</option>';
      domString += '<option value="North Illinois Pleasure Faire">North Illinois Pleasure Faire</option>';
      domString += '</select>';
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-souvenirAvailability">Avaliability Of Souvenir:</label>';
      domString += '<select id="edit-souvenirAvailability" class="form-control" placeholder="">';
      domString += '<option value="">Select your option</option>';
      domString += '<option value="true">Avaliable</option>';
      domString += '<option value="false">Not Avaliable</option>';
      domString += '</select>';
      domString += '</div>';
      domString += '</div>';
      domString += '</form>';
      utils.printToDom('souvenirsModalBody', domString);
      $('#update-souvenir-btn').removeClass('hide');
      $('#save-new-souvenir-btn').addClass('hide');
    }).catch((err) => console.error('could not get single souvenir', err));
};

export default { editSouvenirsForm };
