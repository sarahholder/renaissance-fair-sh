import './food.scss';

const newFoodForm = () => {
  $('#foodModal').modal('show');
  $('#newFoodSubmit').removeClass('hide');
  $('#editFoodSubmit').addClass('hide');
};

export default { newFoodForm };
