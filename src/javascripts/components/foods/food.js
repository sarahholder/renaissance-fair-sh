import firebase from 'firebase/app';
import utils from '../../helpers/utils';
import foodData from '../../helpers/data/foodData';
import foodComponent from './foodComponent';
import newFoodForm from './newFoodForm';
import editFoodForm from './editFoodForm';

import './food.scss';

const editFoodItem = (e) => {
  e.preventDefault();
  const foodId = $('.editFoodForm').data('id');
  const editFood = {
    type: $('#edit-foodType').val(),
    description: $('#edit-foodDescription').val(),
    imageUrl: $('#edit-foodImageUrl').val(),
    price: $('#edit-foodPrice').val() * 1,
    location: $('#edit-foodLocation').val(),
    isAvailable: $('#edit-availabilityOfFood').val(),
    uid: utils.getMyUid(),
  };
  foodData.updateFoods(foodId, editFood)
    .then(() => {
      document.getElementById('editFoodForm').reset();
      $('#foodModal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildAllFoods();
    })
    .catch((err) => console.error('edit food failed', err));
};

const saveNewFoodItem = (e) => {
  e.stopImmediatePropagation();
  const newFood = {
    type: $('#foodType').val(),
    description: $('#foodDescription').val(),
    imageUrl: $('#foodImageUrl').val(),
    price: $('#foodPrice').val() * 1,
    location: $('#foodLocation').val(),
    isAvailable: $('#availabilityOfFood').val(),
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
  // e.preventDefault();
  const foodId = e.target.closest('.card').id;
  foodData.deleteFoods(foodId)
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
      const user = firebase.auth().currentUser;
      if (user !== null) {
        domString += '<button class="btn btn-lg addFoodBtn" id="addFoodBtn"><i class="fas fa-plus"></i> Add new food item</button>';
      }
      domString += '</div>';
      domString += '<div class="container-fluid d-flex flex-wrap col-9">';
      foods.forEach((food) => {
        domString += foodComponent.foodDataCardInfo(food);
      });
      domString += '</div>';
      utils.printToDom('foodCards', domString);
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
