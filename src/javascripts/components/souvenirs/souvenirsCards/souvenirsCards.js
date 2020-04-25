
import './souvenirsCards.scss';

const buildSouvenirsCards = (souvenir) => {
  let domString = '';
  domString += '<div class="col-md-4 col-sm-12 mb-2 souvenir-card">';
  domString += `<div class="card" id="${souvenir.id}">`;
  domString += `<img src="${souvenir.imageUrl}" class="card-img-top img-fluid souvenirs-image">`;
  domString += '<div class="card-body">';
  domString += `<div class="text-center card-title">${souvenir.type}</div>`;
  domString += `<p class="card-text">Description: ${souvenir.description}</p>`;
  domString += `<p class="card-text">Price: $ ${souvenir.price}</p>`;
  domString += `<p class="card-text">Location: ${souvenir.location}</p>`;
  domString += '<button id="souvenirs-edit-btn" class="col-5 btn  souvenirs-edit-btn"> <i class="fas fa-feather-alt"></i> Edit </button>';
  domString += '<button id="souvenirs-delete-btn" class="col-5 btn souvenirs-delete-btn"> <i class="far fa-trash-alt"></i> Delete </button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};


export default { buildSouvenirsCards };
