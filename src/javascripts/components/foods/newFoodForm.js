import './food.scss';

const newFoodForm = () => {
  $('#foodModal').modal('show');
  $('#newFoodSubmit').removeClass('hide');
};

export default { newFoodForm };
