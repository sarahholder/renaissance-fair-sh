import utils from '../../helpers/utils';

const editFoodForm = () => {
  console.error('This button will let you edit food');
  $('#foodModal').modal('show');
  let domString = '';
  domString += '<h1>TESTING</h1>';
  $('#editFoodSubmit').removeClass('hide');
  $('#newFoodSubmit').addClass('hide');

  utils.printToDom('modal-test', domString);
};

export default { editFoodForm };
