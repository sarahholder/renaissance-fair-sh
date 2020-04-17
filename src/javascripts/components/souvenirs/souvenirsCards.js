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
  domString += `<img src="${souvenir.imageUrl}" class="souvenir-image w-25">`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};


export default { buildSouvenirsCards };
