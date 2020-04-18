import './food.scss';

const foodDataCardInfo = (food) => {
  let domString = '';
  domString += '<div class="col-4 mb-2">';
  domString += `<div class="card" id="${food.id}">`;
  domString += `<img src="${food.imageUrl}" class="card-img-top" alt="...">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title text-center">${food.type}</h5>`;
  domString += `<p class="card-text">${food.description}</p>`;
  domString += `<p class="card-text">Price: $${food.price}</p>`;
  domString += `<p class="card-text">Location: ${food.location}</p>`;
  domString += '<div class="d-flex justify-content-around">';
  domString += '<button id="editFoodBtn" class="hide col-5 btn btn-default editFoodBtn">Edit <i class="fas fa-feather-alt"></i></<button>';
  domString += '<button id="deleteFoodBtn" class="hide col-5 btn btn-default deleteFoodBtn">Delete <i class="far fa-trash-alt"></i></button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { foodDataCardInfo };
