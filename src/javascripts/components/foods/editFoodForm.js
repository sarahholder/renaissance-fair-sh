import utils from '../../helpers/utils';
import foodData from '../../helpers/data/foodData';

const editFoodForm = (e) => {
  const foodId = e.target.closest('.card').id;
  $('#foodModal').modal('show');
  foodData.getFoodInfo(foodId)
    .then((resp) => {
      const foodPlaceholder = resp.data;
      let domString = '';
      domString += `<form class="foodForm" data-id="${foodId}" id="foodForm">`;
      domString += '<div class="form-group">';
      domString += '<label for="foodType">Type of Food</label>';
      domString += `<input type="text" class="form-control" id="foodType" placeholder="${foodPlaceholder.type}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="foodDescription">Description of Food</label>';
      domString += `<input type="text" class="form-control" id="foodDescription" placeholder='${foodPlaceholder.description}'>`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="foodImageUrl">Image Url of Food</label>';
      domString += '<input type="text" class="form-control" id="foodImageUrl" placeholder="Update Image Url">';
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="foodPrice">Price of Food</label>';
      domString += `<input type="number" class="form-control" id="foodPrice" placeholder="$${foodPlaceholder.price}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="foodLocation">Locations Of Food:</label>';
      domString += '<select id="foodLocation" class="form-control" placeholder="">';
      domString += `<option value="">${foodPlaceholder.location}</option>`;
      domString += '<option value="Edinson Tudor Festival">Edinson Tudor Festival</option>';
      domString += '<option value="North Illinois Pleasure Faire">North Illinois Pleasure Faire</option>';
      domString += '<option value="Hopscote-by-Sea Faire">Edinson Tudor Festival</option>';
      domString += '</select>';
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="avaliabilityOfFood">Avaliability Of Food:</label>';
      domString += '<select id="avaliabilityOfFood" class="form-control" placeholder="">';
      domString += '<option value="">Update Avalibility</option>';
      domString += '<option value="true">Avaliable</option>';
      domString += '<option value="false">Not Avaliable</option>';
      domString += '</select>';
      domString += '</div>';
      domString += '</div>';
      domString += '</form>';
      utils.printToDom('modalFoodForm', domString);
      $('#editFoodSubmit').removeClass('hide');
      $('#newFoodSubmit').addClass('hide');
    })
    .catch((err) => console.error('editFoodForm', err));
};

export default { editFoodForm };
