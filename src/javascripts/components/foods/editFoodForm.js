import utils from '../../helpers/utils';

const editFoodForm = () => {
  console.error('This button will let you edit food');
  $('#foodModal').modal('show');
  let domString = '';
  domString += '<h1>TESTING</h1>';
  domString += '<form id="foodForm">';
  domString += '<div class="form-group">';
  domString += '<label for="foodType">Type of Food</label>';
  domString += '<input type="text" class="form-control" id="foodType" placeholder="Type">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="foodDescription">Description of Food</label>';
  domString += '<input type="text" class="form-control" id="foodDescription" placeholder="Description">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="foodImageUrl">Image Url of Food</label>';
  domString += '<input type="text" class="form-control" id="foodImageUrl" placeholder="image Url">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="foodPrice">Price of Food</label>';
  domString += '<input type="number" class="form-control" id="foodPrice" placeholder="Price">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="foodLocation">Locations Of Food:</label>';
  domString += '<select id="foodLocation" class="form-control" placeholder="">';
  domString += '<option value="">Select your option</option>';
  domString += '<option value="Edinson Tudor Festival">Edinson Tudor Festival</option>';
  domString += '<option value="North Illinois Pleasure Faire">North Illinois Pleasure Faire</option>';
  domString += '<option value="Hopscote-by-Sea Faire">Edinson Tudor Festival</option>';
  domString += '</select>';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="avaliabilityOfFood">Avaliability Of Food:</label>';
  domString += '<select id="avaliabilityOfFood" class="form-control" placeholder="">';
  domString += '<option value="">Select your option</option>';
  domString += '<option value="true">Avaliable</option>';
  domString += '<option value="false">Not Avaliable</option>';
  domString += '</select>';
  domString += '</div>';
  domString += '</div>';
  domString += '</form>';

  $('#editFoodSubmit').removeClass('hide');
  $('#newFoodSubmit').addClass('hide');

  utils.printToDom('modalFoodForm', domString);
};

export default { editFoodForm };
