import foodData from '../../helpers/data/foodData';
// import utils from '../../helpers/utils';

const buildAllFoods = () => {
  foodData.getFoods()
    .then((foods) => {
      // let domString = '';
      foods.forEach((foodInformation) => {
        console.error(foodInformation.type);
      });
    })
    .catch((err) => console.error('build all foods has failed you', err));
};

export default { buildAllFoods };
