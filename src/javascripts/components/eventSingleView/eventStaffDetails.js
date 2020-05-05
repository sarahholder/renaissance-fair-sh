import firebase from 'firebase/app';
import staffData from '../../helpers/data/staffData';
import utils from '../../helpers/utils';
import smash from '../../helpers/data/smash';

import './eventSingleView.scss';
import '../../../styles/main.scss';

const printStaffChoices = (event) => {
  const eventId = event.parentEventId;
  smash.getStaffNotInEvent(eventId)
    .then((staff) => {
      let domString = '';
      domString += '<select class="custom-select col-11 p-2" id="inputGroupSelect04">';
      domString += '  <option disabled selected>Choose animal to add to event...</option>';
      staff.forEach((staffMember) => {
        domString += `<option class="animalChoice"  value="${eventId}" id="${staffMember.id}">${staffMember.name} the ${staffMember.characterType} / $${staffMember.pay}</option>`;
        utils.printToDom('staffChoices', domString);
      });
    })

    .catch((err) => console.error('cannot get staff event form', err));
};

const noSelectedStaff = (eventId) => {
  const eventNumber = eventId;
  staffData.getStaff()
    .then((staff) => {
      let domString = '';
      domString += '<select class="custom-select col-11 p-2" id="inputGroupSelect04">';
      domString += ' <option disabled>Choose staff to add to event...</option>';
      staff.forEach((staffMember) => {
        domString += `<option class="staffChoice" value="${eventNumber}" id="${staffMember.id}">${staffMember.name} the ${staffMember.characterType} / $${staffMember.pay}</option>`;
        utils.printToDom('staffChoices', domString);
      });
    })
    .catch((err) => console.error('cannot get staff event form', err));
};

const getEventStaffDetails = (singleEvent) => {
  let domString = '';
  const staffFound = singleEvent.staff;
  const eventId = singleEvent.id;
  const user = firebase.auth().currentUser;
  domString += '<div id="eventStaffSection" class="quad col-md-4 col-sm-12">';
  domString += '<h4 class="eventSectionTitle">Staff Details</h4>';
  if (user.uid === singleEvent.uid) {
    domString += '<button class="btn btn-default btn-lg d-flex ml-auto addEventItemBtn" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fas fa-plus"></i></button>';
  }
  domString += '<table class="table-responsive table-dark table-width">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th class="fix" scope="col">Staff Member Name</th>';
  domString += '<th class="fix" scope="col">Character Type</th>';
  domString += '<th class="fix" scope="col">Cost</th>';
  domString += '<th class="fix" scope="col"></th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  domString += '<tr>';
  domString += '<th colspan="4" class="p-0">';
  domString += '<div class="d-flex flex-wrap row">';
  domString += '<div id="staffChoices" class="col-9 m-2 text-center">';
  domString += '</div>';
  domString += '</div>';
  singleEvent.staff.forEach((staffMember) => {
    if (`${staffMember.pay}` < 101 && `${staffMember.pay}` > 0) {
      domString += `<tr class="eventStaffMember staffRow from0To100" id="${staffMember.parentEventId}" data-id="${staffMember.id}" data-parent="${staffMember.parentEventStaffId}" data-container="${staffMember.parentEventId}">`;
    } else if (`${staffMember.pay}` > 100 && `${staffMember.pay}` < 201) {
      domString += `<tr class="eventStaffMember staffRow from101To200" id="${staffMember.parentEventId}" data-id="${staffMember.id}" data-parent="${staffMember.parentEventStaffId}" data-container="${staffMember.parentEventId}">`;
    } else if (`${staffMember.pay}` > 200 && `${staffMember.pay}` < 301) {
      domString += `<tr class="eventStaffMember staffRow from201To300" id="${staffMember.parentEventId}" data-id="${staffMember.id}" data-parent="${staffMember.parentEventStaffId}" data-container="${staffMember.parentEventId}">`;
    } else if (`${staffMember.pay}` > 300 && `${staffMember.pay}` < 401) {
      domString += `<tr class="eventStaffMember staffRow from301To400" id="${staffMember.parentEventId}" data-id="${staffMember.id}" data-parent="${staffMember.parentEventStaffId}" data-container="${staffMember.parentEventId}">`;
    } else if (`${staffMember.pay}` > 400 && `${staffMember.pay}` < 501) {
      domString += `<tr class="eventStaffMember staffRow from401To500" id="${staffMember.parentEventId}" data-id="${staffMember.id}" data-parent="${staffMember.parentEventStaffId}" data-container="${staffMember.parentEventId}">`;
    } else if (`${staffMember.pay}` > 500) {
      domString += `<tr class="eventStaffMember staffRow from501On" id="${staffMember.parentEventId}" data-id="${staffMember.id}" data-parent="${staffMember.parentEventStaffId}" data-container="${staffMember.parentEventId}">`;
    }
    domString += `<th scope="row" class="cell-width">${staffMember.name}</th>`;
    domString += `<td class="cell-width">$${staffMember.pay}/hr</td>`;
    domString += `<td class="cell-width">${staffMember.parentQuantity}</td>`;
    domString += `<td class="cell-width">$${staffMember.rowTotal}</td>`;
    domString += '</div>';
    if (user.uid === singleEvent.uid) {
      domString += `<td class="cell-width"><button id="${staffMember.parentEventStaffId}" value="${staffMember.parentEventStaffId}" class="btn btn-default deleteEventBtn deleteEventStaffBtn"><i class="far fa-trash-alt"></i></button></td>`;
    }
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';
  domString += '</tbody>';
  domString += '</table>';
  domString += '<div class="input-group mb-3">';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">Total Event Staff Costs:</span>';
  domString += '</div>';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">$</span>';
  domString += '</div>';
  domString += `<input id="staffTotalCost" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" readonly value="${singleEvent.staffTotalAmount}">`;
  domString += '<div class="input-group-append">';
  domString += '<span class="input-group-text">.00</span>';
  domString += '</div>';
  domString += '</div>';

  domString += '</div>';

  return domString;
};


export default { getEventStaffDetails };
