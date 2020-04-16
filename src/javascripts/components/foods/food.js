import utils from '../../helpers/utils';
import foodData from '../../helpers/data/foodData';
import foodComponent from './foodComponent';
import './food.scss';

const buildAllFoods = () => {
  let domString = '';
  foodData.getFoods()
    .then((foods) => {
      domString += '<h2 class="text-center p-4" id="foodTitle">FOODS</h2>';
      domString += '<div class="d-flex flex-wrap">';
      foods.forEach((food) => {
        domString += foodComponent.foodDataCardInfo(food);
      });
      domString += '</div>';
      utils.printToDom('foodCards', domString);
    })
    .catch((err) => console.error('build all foods has failed you', err));
};

export default { buildAllFoods };
