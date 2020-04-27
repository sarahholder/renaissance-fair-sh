import './eventCard.scss';

const buildEventCard = (event) => {
  let domString = '';
  domString += '<div class="col-md-4 col-sm-12 mb-2">';
  domString += `<div class="card" id="${event.id}">`;
  domString += `<img src="${event.imageUrl}" class="eventImg card-img-top" alt="...">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title text-center">${event.name}</h5>`;
  domString += `<p class="card-text">Location: ${event.location}</p>`;
  domString += `<p class="card-text">Date: ${event.date}</p>`;
  domString += `<p class="card-text">Time: ${event.timeStart} - ${event.timeEnd}</p>`;
  domString += '<div class="d-flex justify-content-around">';
  domString += `<button id="viewEventBtn" class="col-4 btn btn-default viewEventBtn" data-id="${event.id}"><i class="fas fa-eye"></i> View</<button>`;
  domString += '<button id="editEventBtn" class="col-4 btn btn-default editEventBtn"><i class="fas fa-feather-alt"></i> Edit</<button>';
  domString += '<button id="deleteEventBtn" class="col-4 btn btn-default deleteEventBtn"><i class="far fa-trash-alt"></i> Delete</button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildEventCard };
