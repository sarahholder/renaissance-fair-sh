const foodDataCardInfo = (food) => {
  let domString = '';
  domString += '<div class="card">';
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += `<img class="card-img-top" src="${food.imageUrl}" alt="${food.description}">`;
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { foodDataCardInfo }
