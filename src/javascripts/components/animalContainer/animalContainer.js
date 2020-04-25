import firebase from 'firebase/app';
import animalData from '../../helpers/data/animalData';

import animalCard from '../animalCard/animalCard';
import animalNewForm from '../animalNewForm/animalNewForm';

import utils from '../../helpers/utils';

const makeNewAnimal = (e) => {
  e.preventDefault();
  const newAnimal = {
    name: $('#animal-name').val(),
    imageUrl: $('#animal-imageUrl').val(),
  };
  animalData.addAnimal(newAnimal)
    .then(() => {
      document.getElementById('animalForm').reset();
      $('#animalModal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildAllAnimals();
    })
    .catch((error) => console.error('could not add a new animal', error));
};

const buildAllAnimals = () => {
  let domString = '';
  animalData.getAnimals()
    .then((animals) => {
      domString += '<div class="text-center" id="animalTitle">';
      domString += '<h2 class="mt-3">Animal Rides</h2>';
      domString += '<h3>Come on the ride of your dreams!</h3>';
      const user = firebase.auth().currentUser;
      if (user !== null) {
        domString += '<button class="btn btn-lg addAnimalBtn" id="addAnimalBtn"><i class="fas fa-plus"></i> Add a new animal ride</button>';
      }
      domString += '</div>';
      domString += '<div class="container-fluid d-flex flex-wrap col-md-9 col-sm-10">';
      animals.forEach((animal) => {
        domString += animalCard.buildAnimalCard(animal);
      });
      domString += '</div>';
      utils.printToDom('animals', domString);
    })
    .catch((err) => console.error('build all animals has failed you', err));
};

const animalEvents = () => {
  $('body').on('click', '#addAnimalBtn', animalNewForm.showAddAnimalModalForm);
  $('body').on('click', '#newAnimalSubmit', makeNewAnimal);
};

export default { buildAllAnimals, animalEvents };
