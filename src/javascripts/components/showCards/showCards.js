import './showCards.scss';

const buildShowCards = (show) => {
  let domString = '';
  domString += '<div class="col-md-4 col-sm-12 mb-2">';
  domString += `<div class="card" id="${show.id}">`;
  domString += `<img src="${show.imageUrl}" class="card-img-top img-fluid show-images" alt="...">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${show.name}</h5>`;
  domString += `<p class="card-text">Time: ${show.time}</p>`;
  domString += `<p class="card-text">Stage: ${show.stage}</p>`;
  domString += `<p class="card-text">Location: ${show.location}</p>`;
  domString += '<button class="col-5 btn m-1 show-edit-btn"><i class="fas fa-feather-alt"></i> <span class="ml-2">Edit</span></button>';
  domString += '<button class="col-5 btn m-1 show-delete-btn"><i class="far fa-trash-alt"></i> <span class="ml-2">Delete</span></button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { buildShowCards };
