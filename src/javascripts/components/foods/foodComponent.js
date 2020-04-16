import './food.scss';

const foodDataCardInfo = (food) => {
  let domString = '';
  domString += '<div class="col-4 d-flex align-items-stretch">';
  domString += '<div id="allFoodCards" class="card">';
  domString += `<h2 class="text-center">${food.type}</h2>`;
  domString += `<img id="foodImages" class="card-img-top p-4" src="${food.imageUrl}" alt="${food.description}">`;
  domString += '<div class="card-body">';
  domString += `<h3>${food.description}</h3>`;
  domString += `<p>Price: $${food.price}</p>`;
  domString += `<p>Where: ${food.location}</p>`;
  domString += `<p>Currently Avaliable: ${food.isAvaliable}</p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { foodDataCardInfo };
