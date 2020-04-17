import './staffCards.scss';

const buildStaffCards = (staff) => {
  let domString = '';
  domString += '<div class="col-4 mb-2">';
  domString += `<div class="card" id="${staff.id}">`;
  domString += `<img src="${staff.imageUrl}" class="card-img-top" alt="Photo of ${staff.name}"`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${staff.name}</h5>`;
  domString += `<p class="card-text">Character Type: ${staff.characterType}</p>`;
  domString += `<p class="card-text">Character Name: ${staff.characterName}</p>`;
  domString += `<p class="card-text">Location: ${staff.location}</p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { buildStaffCards };
