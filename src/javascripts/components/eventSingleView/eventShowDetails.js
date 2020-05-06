import firebase from 'firebase/app';

import smash from '../../helpers/data/smash';

import './eventSingleView.scss';
import '../../../styles/main.scss';

import utils from '../../helpers/utils';
import showData from '../../helpers/data/showData';

const printShowChoices = (showObject) => {
  const eventId = showObject.parentEventId;
  smash.getShowsNotInEvent(eventId)
    .then((shows) => {
      let domString = '';
      domString += '<select class="custom-select dol-11 p-2" "id="inputShowChoices">';
      domString += '<option disabled selected>Choose show to add to event:</option>';
      shows.forEach((show) => {
        domString += `<option class="showChoice" value="${eventId}" id="${show.id}">${show.name} / $${show.cost}</option>`;
      });
      domString += '</select>';
      utils.printToDom('showChoices', domString);
    })
    .catch((err) => console.error('cannot add new show to event', err));
};

const noSelectedShows = (event) => {
  const eventId = event.id;
  showData.getShows()
    .then((shows) => {
      let domString = '';
      domString += '<select class="custom-select col-aa p-2" id="inputShowChoices">';
      domString += '<option disabled selected>Choose show to add to event:</option>';
      shows.forEach((show) => {
        domString += `<option class="showChoice" value="${eventId}" id="${show.id}">${show.name} / $${show.cost}</option>`;
      });
      domString += '</select>';
      utils.printToDom('showChoices', domString);
    })
    .catch((error) => console.error('cannot add new show to an empty show section', error));
};

const eventShowDetails = (singleEvent) => {
  const user = firebase.auth().currentUser;
  const showsFound = singleEvent.shows;
  let domString = '';
  domString += '<div id="eventShowSection" class="quad col-md-4 col-sm-12">';
  domString += '<h4 class="eventSectionTitle">Show Details</h4>';
  if (user.uid === singleEvent.uid) {
    domString += ' <button class="btn btn-default btn-lg d-flex ml-auto addEventItemBtn" data-toggle="collapse" data-target="#collapseShowList" aria-expanded="false" aria-controls="collapseShowList"><i class="fas fa-plus"></i></button>';
  }
  domString += '<table class="table-responsive table-dark table-width">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Show Name</th>';
  domString += '<th scope="col">Cost</th>';
  domString += '<th scope="col">Qty</th>';
  domString += '<th scope="col"> Extended Cost</th>';
  domString += '</tr>';

  domString += '      <tr class="collapse" id="collapseShowList">';

  domString += '        <th colspan="3" class="p-0">';
  domString += '          <div id="showChoices">';
  domString += '          </div>';
  domString += '        </th>';

  domString += '        <th colspan="1" class="p-0">';
  domString += '          <select id="inputShowQuantity" class="custom-select">';
  domString += '<option selected disabled>Quantity:</option>';
  domString += '<option class="showQuantity" value="1">1</option>';
  domString += '<option class="showQuantity" value="2">2</option>';
  domString += '<option class="showQuantity" value="3">3</option>';
  domString += '<option class="showQuantity" value="4">4</option>';
  domString += '<option class="showQuantity" value="5">5</option>';
  domString += '<option class="showQuantity" value="6">6</option>';
  domString += '</select>';
  domString += '</th>';
  domString += '<th colspan="1" class="p-0">';
  domString += '<div class="input-group-append" colspan="1">';
  domString += '<button class="btn btn-outline-secondary add-button my-2" type="button" id="make-new-event-show"><i class="fas fa-plus"></i>Add</button>';
  domString += '</div>';
  domString += '</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  if (showsFound.length !== 0) {
    singleEvent.shows.forEach((showItem) => {
      if (`${showItem.cost}` < 101 && `${showItem.cost}` > 0) {
        domString += `<tr class="eventShowItem showRow from0To100" id="${showItem.parentEventId}" data-id="${showItem.id}" data-parent="${showItem.parentEventStaffId}" data-container="${showItem.parentEventId}">`;
      } else if (`${showItem.cost}` > 100 && `${showItem.cost}` < 201) {
        domString += `<tr class="eventShowItem showRow from101To200" id="${showItem.parentEventId}" data-id="${showItem.id}" data-parent="${showItem.parentEventStaffId}" data-container="${showItem.parentEventId}">`;
      } else if (`${showItem.cost}` > 200 && `${showItem.cost}` < 301) {
        domString += `<tr class="eventShowItem showRow from201To300" id="${showItem.parentEventId}" data-id="${showItem.id}" data-parent="${showItem.parentEventStaffId}" data-container="${showItem.parentEventId}">`;
      } else if (`${showItem.cost}` > 300 && `${showItem.cost}` < 401) {
        domString += `<tr class="eventShowItem showRow from301To400" id="${showItem.parentEventId}" data-id="${showItem.id}" data-parent="${showItem.parentEventStaffId}" data-container="${showItem.parentEventId}">`;
      } else if (`${showItem.cost}` > 400 && `${showItem.cost}` < 501) {
        domString += `<tr class="eventShowItem showRow from401To500" id="${showItem.parentEventId}" data-id="${showItem.id}" data-parent="${showItem.parentEventStaffId}" data-container="${showItem.parentEventId}">`;
      } else if (`${showItem.cost}` > 500) {
        domString += `<tr class="eventShowItem showRow from501On" id="${showItem.parentEventId}" data-id="${showItem.id}" data-parent="${showItem.parentEventShowId}" data-container="${showItem.parentEventId}">`;
      }
      domString += `<th scope="row" class="cell-width">${showItem.name}</th>`;
      domString += `<td class="cell-width">$${showItem.cost}</td>`;
      domString += `<td class="cell-width">${showItem.parentQuantity}</td>`;
      domString += `<td class="cell-width">$${showItem.rowTotal}</td>`;
      printShowChoices(showItem);
      domString += '</div>';
      if (user.uid === singleEvent.uid) {
        domString += `<td class="cell-width"><button id="${showItem.parentEventShowId}" value="${showItem.parentEventShowId}" class="btn btn-default deleteEventBtn deleteEventShowBtn"><i class="far fa-trash-alt"></i></button></td>`;
      }
      domString += '</tr>';
    });
  } else {
    noSelectedShows(singleEvent);
  }
  domString += '</tbody>';
  domString += '</table>';
  domString += '<div class="input-group mb-3">';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">Total Event Show Costs:</span>';
  domString += '</div>';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">$</span>';
  domString += '</div>';
  domString += `<input id="showTotalCost" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" readonly value="${singleEvent.showTotalAmount}">`;
  domString += '<div class="input-group-append">';
  domString += '<span class="input-group-text">.00</span>';
  domString += '</div>';
  domString += '</div>';

  domString += '</div>';

  return domString;
};

export default { eventShowDetails };
