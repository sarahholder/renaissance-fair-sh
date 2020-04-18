import showData from '../../helpers/data/showData';

import addShow from '../newShowForm/newShowForm';
import showCards from '../showCards/showCards';

import utils from '../../helpers/utils';

const buildAllShows = () => {
  showData.getShows()
    .then((shows) => {
      let domString = '<h2 class="text-center mt-3">Shows</h2>';
      domString += '<div class="text-center">';
      domString += '<button class="btn btn-default mb-3 hide" id="add-new-show-btn"><i class="fas fa-plus"></i> <span class="pl-1">Add New Show</span></button>';
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
  $('#add-new-show-btn').on('click', addShow.addShowForm);
};

export default { buildAllShows, showEvents };
