const buildSouvenirsCards = (souvenir) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class="card" id="${souvenir.id}">`;
  domString += `<div class="card-header">${souvenir.type}</div>`;
  domString += '<div class="card-body">';
  domString += `<p class="card-text">Description: ${souvenir.description}</p>`;
  domString += `<p class="card-text">Price: $ ${souvenir.price}</p>`;
  domString += `<p class="card-text">Availability: ${souvenir.isAvailable}</p>`;
  domString += `<p class="card-text">Location: ${souvenir.location}</p>`;
  domString += `<img src="${souvenir.imageUrl}" class="card-img-top">`;
  domString += '<button id="souvenirs-edit-btn" class=" col-5 btn btn-default souvenirs-edit-btn"> <i class="fas fa-feather-alt"></i>Edit </<button>';
  domString += '<button id="souvenirs-delete-btn" class="col-5 btn btn-default souvenirs-delete-btn"><i class="far fa-trash-alt"></i>Delete </button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};


export default { buildSouvenirsCards };
