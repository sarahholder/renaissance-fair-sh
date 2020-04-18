import utils from '../../helpers/utils';
import foodData from '../../helpers/data/foodData';
import foodComponent from './foodComponent';
import './food.scss';

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
      domString += '<button class="btn btn-default btn-lg" id="addFoodBtn">Add New Food Item <i class="fas fa-plus"></i></button>';
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
};

export default { buildAllFoods, foodEvents };
