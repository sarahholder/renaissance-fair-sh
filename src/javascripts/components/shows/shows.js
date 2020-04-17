import showData from '../../helpers/data/showData';

import showCards from '../showCards/showCards';

import utils from '../../helpers/utils';

const buildAllShows = () => {
  showData.getShows()
    .then((shows) => {
      let domString = '<h2 class="text-center mt-3">Shows</h2>';
      domString += '<h3 class="text-center">Fun and interactive shows for all ages</h3>';
      domString += '<div class="container-fluid d-flex flex-wrap col-9">';
      shows.forEach((show) => {
        domString += showCards.buildShowCards(show);
      });
      domString += '</div>';
      utils.printToDom('shows', domString);
    })
    .catch((err) => console.error('get shows failed', err));
};

export default { buildAllShows };
