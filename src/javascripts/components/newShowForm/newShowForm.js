import utils from '../../helpers/utils';

const addShowForm = () => {
  let domString = '';
  domString += '<h3>Add A New Show</h3>';

  utils.printToDom('add-new-show-modal', domString);
};

export default { addShowForm };
