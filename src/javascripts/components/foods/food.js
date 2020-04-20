import utils from '../../helpers/utils';
import foodData from '../../helpers/data/foodData';
import foodComponent from './foodComponent';
import newFoodForm from './newFoodForm';
import editFoodForm from './editFoodForm';

import './food.scss';

const editFoodItem = (e) => {
  e.preventDefault();
  const foodId = $('.foodForm').data('id');
  const editFood = {
    type: $('#foodType').val(),
    description: $('#foodDescription').val(),
    imageUrl: $('#foodImageUrl').val(),
    price: $('#foodPrice').val() * 1,
    location: $('#foodLocation').val(),
    isAvaliable: $('#avaliabilityOfFood').val(),
    uid: utils.getMyUid(),
  };
  foodData.updateFoods(foodId, editFood)
    .then(() => {
      document.getElementById('foodForm').reset();
      $('#foodModal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildAllFoods();
    })
    .catch((err) => console.error('edit food failed', err));
};

const saveNewFoodItem = (e) => {
  e.preventDefault();
  const newFood = {
    type: $('#foodType').val(),
    description: $('#foodDescription').val(),
    imageUrl: $('#foodImageUrl').val(),
    price: $('#foodPrice').val() * 1,
    location: $('#foodLocation').val(),
    isAvaliable: $('#avaliabilityOfFood').val(),
    uid: utils.getMyUid(),
  };
  foodData.addFoods(newFood)
    .then(() => {
      document.getElementById('foodForm').reset();
      $('#foodModal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildAllFoods();
    })
    .catch((err) => console.error('Save New Food Item failed', err));
};

const removeFoodCards = (e) => {
  e.preventDefault();
  const foodId = e.target.closest('.card').id;
  foodData.deleteFoods(foodId)
  // eslint-disable-next-line no-use-before-define
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildAllFoods();
    })
    .catch((err) => console.error('delete foods failed', err));
};

const buildAllFoods = () => {
  let domString = '';
  foodData.getFoods()
    .then((foods) => {
      domString += '<div class="text-center" id="foodTitle">';
      domString += '<h2 class="mt-3">Foods</h2>';
      domString += '<h3>Delicious foods and beverages</h3>';
      domString += '<button class="btn btn-lg addFoodBtn" id="addFoodBtn"><i class="fas fa-plus"></i> Add new food item</button>';
      domString += '</div>';
      domString += '<div class="container-fluid d-flex flex-wrap col-9">';
      foods.forEach((food) => {
        domString += foodComponent.foodDataCardInfo(food);
      });
      domString += '</div>';
      utils.printToDom('foodCards', domString);
      // eslint-disable-next-line no-use-before-define
    })
    .catch((err) => console.error('build all foods has failed you', err));
};

const foodEvents = () => {
  $('body').on('click', '#deleteFoodBtn', removeFoodCards);
  $('body').on('click', '#newFoodSubmit', saveNewFoodItem);
  $('body').on('click', '#editFoodSubmit', editFoodItem);
  $('body').on('click', '#addFoodBtn', newFoodForm.newFoodForm);
  $('body').on('click', '#editFoodBtn', editFoodForm.editFoodForm);
};

export default { buildAllFoods, foodEvents };
