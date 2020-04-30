import firebase from 'firebase/app';

// const eventShowRowTotal = (showItem) => {
//   const xValue = showItem.cost;
//   const yValue = showItem.parentQuantity;
//   const rowTotal = xValue * yValue;
//   return rowTotal;
// };

// const rowTotal = eventShowRowTotal;

// const getShowTotals = (singleEvent) => {
//   singleEvent.shows.forEach((showItem) => {
//     const x = showItem.cost;
//     const y = showItem.parentQuantity;
//     const rowTotal = x * y;
//     const rowTotalsArray = [];
//     rowTotalsArray.push(rowTotal);
//     console.error('food total per row', rowTotal);
//     console.error('food row totals array', rowTotalsArray);
//     let foodTotal = 0;
//     // eslint-disable-next-line no-plusplus
//     for (let i = 0; i < rowTotalsArray.length; i++) {
//       foodTotal += rowTotalsArray[i];
//     }
//     foodTotal = showItem.Total;
//     console.error('food details total', foodTotal);
//     // // eslint-disable-next-line no-use-before-define
//     // getEventFoodDetails(singleEvent, foodTotal);
//   });
// };

// getShowTotals();

const eventShowDetails = (singleEvent) => {
  let domString = '';
  domString += '<table class="table-responsive table-dark">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Show Name</th>';
  domString += '<th scope="col">Cost</th>';
  domString += '<th scope="col">Qty</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.shows.forEach((showItem) => {
    domString += `<tr class="eventShowItem showRow" data-id="${showItem.id}" data-parent="${showItem.parentEventShowId}" data-container="${showItem.parentEventId}">`;
    domString += '<tr>';
    domString += `<th scope="row" class="cell-width">${showItem.name}</th>`;
    domString += `<td class="cell-width" id="showItemCost">$${showItem.cost}</td>`;
    singleEvent.eventShow.forEach((eventShowItem) => {
      domString += `<td class="cell-width" id="showItemQuantity">${eventShowItem.quantity}</td>`;
      const user = firebase.auth().currentUser;
      if (user.uid === singleEvent.uid) {
        domString += '<td class="cell-width"><button id="deleteEventShowBtn" class="btn btn-default deleteEventBtn deleteEventShowBtn"><i class="far fa-trash-alt"></i></button></td>';
      }
      domString += '</tr>';
    });
    domString += '</tbody>';
    domString += '</table>';
    domString += '<footer>';
    domString += '<div class="input-group mb-3">';
    domString += '<div class="input-group-prepend">';
    domString += '<span class="input-group-text">Total: $</span>';
    domString += `<input type="text" class="form-control" aria-label="${showItem.rowTotal}">`;
    domString += '<div class="input-group-append">';
    domString += '<span class="input-group-text">.00</span>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    domString += '</footer>';

    return domString;
  });
};
export default { eventShowDetails };
