import showData from '../../helpers/data/showData';

import addShow from '../newShowForm/newShowForm';
import showCards from '../showCards/showCards';

import utils from '../../helpers/utils';

const saveNewShowItem = (e) => {
  e.preventDefault();
  const newShow = {
    name: $('#new-show-name').val(),
    time: $('#new-show-time').val(),
    stage: $('#new-show-stage').val(),
    location: $('#new-show-location').val(),
    imageUrl: $('#new-show-image').val(),
    uid: utils.getMyUid(),
  };
  showData.addShow(newShow)
    .then(() => {
      $('#add-new-show-modal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildAllShows();
    })
    .catch((err) => console.error('could not add show', err));
};

const buildAllShows = () => {
  showData.getShows()
    .then((shows) => {
      let domString = '';
      domString += '<div class="show-title text-center">';
      domString += '<h2 class="mt-3">Shows</h2>';
      domString += '<h3>Fun Shows for All Ages</h3>';
      domString += '<button class="btn btn-lg mb-2 new-show-btn" id="add-new-show-btn"><i class="fas fa-plus"></i> <span class="pl-1">Add New Show</span></button>';
      domString += '</div>';
      domString += '<div class="container-fluid d-flex flex-wrap col-9">';
      shows.forEach((show) => {
        domString += showCards.buildShowCards(show);
      });
      domString += '</div>';
      utils.printToDom('shows', domString);
    })
    .catch((err) => console.error('get shows failed', err));
};

const showEvents = () => {
  $('body').on('click', '#add-new-show-btn', addShow.addShowForm);
  $('body').on('click', '#save-new-show-btn', saveNewShowItem);
};

export default { buildAllShows, showEvents };
