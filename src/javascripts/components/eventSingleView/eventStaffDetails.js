import firebase from 'firebase/app';

import './eventSingleView.scss';
import '../../../styles/main.scss';

const getStaffTotals = (singleEvent) => {
  singleEvent.staff.forEach((staffMember) => {
    const x = staffMember.pay;
    const y = staffMember.parentQuantity;
    // eslint-disable-next-line no-param-reassign
    staffMember.rowTotal = x * y;
    // eslint-disable-next-line no-param-reassign
    return staffMember.rowTotal;
  });
  const rowTotalsArray = [];
  singleEvent.staff.forEach((staffMember) => {
    rowTotalsArray.push(staffMember.rowTotal);
  });
  let staffTotal = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < rowTotalsArray.length; i++) {
    staffTotal += rowTotalsArray[i];
  }
  // eslint-disable-next-line no-param-reassign
  singleEvent.staffCosts = staffTotal;
  // // eslint-disable-next-line no-use-before-define
};

const getEventStaffDetails = (singleEvent) => {
  let domString = '';
  domString += '<table class="table-responsive table-dark">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Staff Member</th>';
  domString += '<th scope="col">Wage</th>';
  domString += '<th scope="col">Hrs</th>';
  domString += '<th scope="col">Cost</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.staff.forEach((staffMember) => {
    domString += `<tr class="eventStaffMember staffRow"id="${staffMember.parentEventId}" data-id="${staffMember.id}" data-parent="${staffMember.parentEventStaffId}" data-container="${staffMember.parentEventId}">`;
    domString += `<th scope="row" class="cell-width">${staffMember.name}</th>`;
    domString += `<td class="cell-width">$${staffMember.pay}/hr</td>`;
    domString += `<td class="cell-width">${staffMember.parentQuantity}</td>`;
    getStaffTotals(singleEvent);
    domString += `<td class="cell-width">$${staffMember.rowTotal}</td>`;
    const user = firebase.auth().currentUser;
    if (user.uid === singleEvent.uid) {
      domString += `<td class="cell-width"><button id="${staffMember.parentEventStaffId}" value="${staffMember.parentEventStaffId}" class="btn btn-default deleteEventBtn deleteEventStaffBtn"><i class="far fa-trash-alt"></i></button></td>`;
    }
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';
  domString += '</tbody>';
  domString += '</table>';
  getStaffTotals(singleEvent);
  domString += '<div class="input-group mb-3">';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">Total Event Staff Costs:</span>';
  domString += '</div>';
  domString += '<div class="input-group-prepend">';
  domString += '<span class="input-group-text">$</span>';
  domString += '</div>';
  domString += `<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" readonly value="${singleEvent.staffCosts}">`;
  domString += '<div class="input-group-append">';
  domString += '<span class="input-group-text">.00</span>';
  domString += '</div>';
  domString += '</div>';

  domString += '</div>';

  return domString;
};


export default { getEventStaffDetails };
