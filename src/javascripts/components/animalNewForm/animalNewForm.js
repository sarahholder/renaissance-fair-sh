import './animalNewForm.scss';
import utils from '../../helpers/utils';

const showAddAnimalModalForm = () => {
  $('#animalModal').modal('show');
  console.log('modal is showing');
  let domString = '';
  domString += '<form id="animalForm">';
  domString += '<div class="form-group">';
  domString += '<label for="animalName">Name of Animal</label>';
  domString += '<input type="text" class="form-control" id="animalName" placeholder="Name">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="animalType">Type of Animal</label>';
  domString += '<input type="text" class="form-control" id="animalType" placeholder="Type">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="animalDescription">Description of Animal</label>';
  domString += '<input type="text" class="form-control" id="animalDescription" placeholder="Description">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="animalImageUrl">Photo of Animal</label>';
  domString += '<input type="text" class="form-control" id="animalImageUrl" placeholder="Image Url">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="animalPrice">Price of Animal</label>';
  domString += '<input type="number" class="form-control" id="animalPrice" placeholder="Price">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="animalAvailability">Is it available?</label>';
  domString += '<input type="number" class="form-control" id="animalAvailability" placeholder="Available?">';
  domString += '</div>';
  domString += '</form>';

  $('#newAnimalSubmit').removeClass('hide');
  $('#editAnimalSubmit').addClass('hide');
  utils.printToDom('modalAnimalForm', domString);
};

export default { showAddAnimalModalForm };
