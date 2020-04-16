// import utils from '../../helpers/utils';
import foodData from '../../helpers/data/foodData';

const buildAllFoods = () => {
  foodData.getFoods()
    .then((foods) => {
      foods.forEach((foodInformation) => {
        console.error(foodInformation.type);
      });
    })
    .catch((err) => console.error('build all foods has failed you', err));
};

export default { buildAllFoods };
