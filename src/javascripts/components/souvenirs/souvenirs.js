import souvenirsData from '../../helpers/data/souvenirsData';
import souvenirComponent from './souvenirsCards';
import utils from '../../helpers/utils';

const buildAllSouvenirs = () => {
  souvenirsData.getSouvenirs()
    .then((souvenirs) => {
      let domString = '<h2> Souvenirs </h2>';
      domString += '<div class="d-flex flex-wrap">';
      souvenirs.forEach((souvenir) => {
        domString += souvenirComponent.buildSouvenirsCards(souvenir);
      });
      domString += '</div>';
      utils.printToDom('souvenirsRead', domString);
    })
    .catch((err) => console.error('no souvenirs for you', err));
};

export default { buildAllSouvenirs };
