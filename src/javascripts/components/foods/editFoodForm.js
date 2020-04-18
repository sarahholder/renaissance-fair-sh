const editFoodForm = () => {
  console.error('This button will let you edit food');
  $('#foodModal').modal('show');
  $('#editFoodSubmit').removeClass('hide');
};

export default { editFoodForm };
