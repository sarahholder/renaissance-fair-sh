import showData from '../../helpers/data/showData';

import utils from '../../helpers/utils';

const buildAllShows = () => {
  showData.getShows()
    .then((shows) => {
      const domString = '<h2>Shows</h2>';
      console.error(shows);
      utils.printToDom('shows', domString);
    })
    .catch((err) => console.error('get shows failed', err));
};

export default { buildAllShows };
