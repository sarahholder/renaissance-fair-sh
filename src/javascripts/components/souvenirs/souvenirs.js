import souvenirsData from '../../helpers/data/souvenirsData';
import souvenirComponent from './souvenirsCards';
import utils from '../../helpers/utils';

const removeSouvenirCard = (e) => {
  const souvenirsId = e.target.closest('.card').id;
  souvenirsData.deleteSouvenirs(souvenirsId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildAllSouvenirs();
    })
    .catch((err) => console.error('cannot delete souvenir', err));
};
const buildAllSouvenirs = () => {
  souvenirsData.getSouvenirs()
    .then((souvenirs) => {
      let domString = '<h2> Souvenirs </h2>';
      domString += '<h3 class="text-center">Make the memories last forever</h3>';
      domString += '<button class="btn btn-default btn-lg id="add-new-souvenir-btn"> <i class="fas fa-dragon"></i> Add New Souvenir </button>';
      domString += '<div class="container-fluid d-flex flex-wrap col-9">';
      souvenirs.forEach((souvenir) => {
        domString += souvenirComponent.buildSouvenirsCards(souvenir);
      });
      domString += '</div>';
      utils.printToDom('souvenirs', domString);
    })
    .catch((err) => console.error('no souvenirs for you', err));
};
const souvenirsEvents = () => {
  $('body').on('click', '.souvenirs-delete-btn', removeSouvenirCard);
};
export default { buildAllSouvenirs, souvenirsEvents };
