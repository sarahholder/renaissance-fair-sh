import utils from '../../helpers/utils';
import foodData from '../../helpers/data/foodData';
import foodComponent from './foodComponent';
import newFoodForm from './newFoodForm';

import './food.scss';

const saveNewFoodItem = (e) => {
  e.preventDefault();
  console.error('submit button is in fact working!');
  const newFood = {
    type: $('#foodType').val,
    description: $('#foodDescription').val,
    imageUrl: $('#foodImageUrl').val,
    price: $('#foodPrice').val * 1,
    // location: $().val,
    // isAvaliable: $().val,
  };
  foodData.addFoods(newFood)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildAllFoods())
    .catch((err) => console.error('Save New Food Item failed', err));
};

const removeFoodCards = (e) => {
  const foodId = e.target.closest('.card').id;
  foodData.deleteFoods(foodId)
  // eslint-disable-next-line no-use-before-define
    .then(() => buildAllFoods())
    .catch((err) => console.error('delete foods failed', err));
};

const buildAllFoods = () => {
  let domString = '';
  foodData.getFoods()
    .then((foods) => {
      domString += '<div id="foodTitle">';
      domString += '<h2 class="text-center mt-3">Foods</h2>';
      domString += '<h3 class="text-center">Delicious foods and beverages</h3>';
      domString += '<button class="addFoodBtn btn btn-default btn-lg" id="addFoodBtn">Add New Food Item <i class="fas fa-utensils"></i></button>';
      domString += '</div>';
      domString += '<div class="container-fluid d-flex flex-wrap col-9">';
      foods.forEach((food) => {
        domString += foodComponent.foodDataCardInfo(food);
      });
      domString += '</div>';
      utils.printToDom('foodCards', domString);
      // needs to populate modal somehow RIP
      $('body').on('click', '#newFoodSubmit', saveNewFoodItem);
      $('body').on('click', '#deleteFoodBtn', removeFoodCards);
      $('body').on('click', '#addFoodBtn', newFoodForm.newFoodForm);
    })
    .catch((err) => console.error('build all foods has failed you', err));
};

export default { buildAllFoods };
