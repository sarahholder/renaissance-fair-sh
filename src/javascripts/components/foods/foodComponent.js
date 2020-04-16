import './food.scss';

const foodDataCardInfo = (food) => {
  let domString = '';
  domString += '<div class="col-3 p-2 d-flex align-items-stretch">';
  domString += '<div id="allFoodCards" class="card">';
  domString += `<h3 id="foodType" class="text-center p-4">${food.type}</h3>`;
  domString += `<img id="foodImages" class="card-img-top pr-4 pl-4" src="${food.imageUrl}" alt="${food.description}">`;
  domString += '<div id="foodCardBody" class="card-body">';
  domString += `<h4 class="text-center font-weight-bold">${food.description}</h4>`;
  domString += '<div class="text-center p-2 m-2">';
  domString += `<h5>Price: $${food.price}</h5>`;
  domString += `<h5>Where: ${food.location}</h5>`;
  domString += `<h5>Currently Avaliable: ${food.isAvailable}</h5>`;
  domString += '</div>';
  domString += '</div>';
  domString += '<button id="editFoodBtn" class="hide">Edit <i class="fas fa-feather-alt"></i></button>';
  domString += '<button id="deleteFoodBtn" class="hide">Delete <i class="far fa-trash-alt"></i></button>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { foodDataCardInfo };
