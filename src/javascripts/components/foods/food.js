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

const buildAllFoods = (login) => {
  let domString = '';
  foodData.getFoods()
    .then((foods) => {
      domString += '<div id="foodTitle">';
      domString += '<h2 class="text-center p-3">FOODS</h2>';
      domString += login ? '<button id="addFoodBtn">' : '<button class="hide" id="addFoodBtn">';
      domString += 'Add New Food Item <i class="fas fa-plus"></i></i></button>';
      domString += '</div>';
      domString += '<div class="d-flex flex-wrap">';
      foods.forEach((food) => {
        domString += foodComponent.foodDataCardInfo(food);
      });
      domString += '</div>';
      utils.printToDom('foodCards', domString);
      $('body').on('click', '#deleteFoodBtn', removeFoodCards);
    })
    .catch((err) => console.error('build all foods has failed you', err));
};

// const viewFoodButtons = () => {
//   $('#editFoodBtn').removeClass('hide');
//   $('#deleteFoodBtn').removeClass('hide');
//   $('#addFoodBtn').removeClass('hide');
// };

export default { buildAllFoods };
