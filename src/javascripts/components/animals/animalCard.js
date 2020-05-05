import firebase from 'firebase/app';

import './animals.scss';

const buildAnimalCard = (animal) => {
  let domString = '';
  domString += '<div class="col-md-4 col-sm-12 mb-2">';
  domString += `<div class="card" id="${animal.id}">`;
  domString += `<img src="${animal.imageUrl}" class="animalImg card-img-top" alt="image of "${animal.name}">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title text-center">Meet ${animal.name}!</h5>`;
  domString += `<p class="card-text">Type of Animal: ${animal.type}</p>`;
  domString += `<p class="card-text">Price: $${animal.cost}</p>`;
  domString += `<p class="card-text">Description: ${animal.description}</p>`;
  if (`${animal.isAvailable}` === 'Available') {
    domString += '<p class="card-text">Now Available!</p>';
  } else {
    domString += '<p class="card-text">Animal is UNAVAILABLE, please check back after a well-deserved vacation.</p>';
  }
  domString += '<div class="d-flex justify-content-around">';
  const user = firebase.auth().currentUser;
  if (user !== null) {
    domString += '<button id="editAnimalBtn" class="col-5 btn btn-default editAnimalBtn"><i class="fas fa-feather-alt"></i> Edit</<button>';
    domString += '<button id="deleteAnimalBtn" class="col-5 btn btn-default deleteAnimalBtn"><i class="far fa-trash-alt"></i> Delete</button>';
  }
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildAnimalCard };
