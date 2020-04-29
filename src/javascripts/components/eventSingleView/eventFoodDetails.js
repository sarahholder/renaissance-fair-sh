import firebase from 'firebase/app';
// import eventFoodData from '../../helpers/data/eventFoodData';
// import smashData from '../../helpers/data/smash';
// import utils from '../../helpers/utils';

import './eventSingleView.scss';
import '../../../styles/main.scss';

// const getTotals = (singleEvent, foodItem) => {
//   const x = foodItem.price;
//   const y = foodItem.parentQuantity;
//   const rowTotal = x * y;
//   const foodTotal = 0;
//   singleEvent.food.forEach((foodRow) => {
//     foodTotal = foodTotal + rowTotal[i];
//   });
// };

const getFoodTotals = (singleEvent) => {
  singleEvent.food.forEach((foodItem) => {
    const x = foodItem.price;
    const y = foodItem.parentQuantity;
    const rowTotal = x * y;
    const rowTotalsArray = [];
    rowTotalsArray.push(rowTotal);
    console.error('food total per row', rowTotal);
    console.error('food row totals array', rowTotalsArray);
    let foodTotal = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rowTotalsArray.length; i++) {
      foodTotal += rowTotalsArray[i];
    }
    console.error('food details total', foodTotal);
    singleEvent.foodItem.foodTotalProperty = foodTotal;
  });
};

const getEventFoodDetails = (singleEvent) => {
  let domString = '';
  console.log('single event data used for food details', singleEvent);
  domString += '<div id="eventFoodSection" class="quad col-md-4 col-sm-12">';
  domString += '<h4 class="eventSectionTitle">Food Details</h4>';
  domString += '<table class="table-responsive table-dark table-width">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Food Type</th>';
  domString += '<th scope="col">Price</th>';
  domString += '<th scope="col">Qty</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.food.forEach((foodItem) => {
    // const x = foodItem.price;
    // const y = foodItem.parentQuantity;
    // const rowTotal = x * y;
    // const rowTotalsArray = [];
    // rowTotalsArray.push(rowTotal);
    // console.error('food total per row', rowTotal);
    // console.error('food row totals array', rowTotalsArray);
    // let foodTotal = 0;
    // // eslint-disable-next-line no-plusplus
    // for (let i = 0; i < rowTotalsArray.length; i++) {
    //   foodTotal += rowTotalsArray[i];
    // }
    // console.error('food details total', foodTotal);
    rowTotalFunction(val)
    domString += `<tr class="eventFoodItem foodRow" data-id="${foodItem.id}" data-parent="${foodItem.parentEventFoodId}" data-container="${foodItem.parentEventId}">`;
    domString += `<th scope="row" class="cell-width">${foodItem.type}</th>`;
    domString += `<td class="cell-width">$${foodItem.price}</td>`;
    domString += `<td class="cell-width">${foodItem.parentQuantity}</td>`;
    // getFoodTotals();
    domString += `<td class="cell-width">${rowTotalFunction()}</td>`;
    const user = firebase.auth().currentUser;
    if (user.uid === singleEvent.uid) {
      domString += '<td class="cell-width"><button id="deleteEventFoodBtn" class="btn btn-default deleteEventBtn deleteEventFoodBtn"><i class="far fa-trash-alt"></i></button></td>';
    }
    domString += '</tr>';
  });
  // domString += getFoodTotals(singleEvent);
  // const y = singleEvent.foodTotal;
  // domString += `<tr>${foodTotal}</tr>`;
  domString += '</tbody>';
  domString += '</table>';
  domString += '</div>';

  return domString;
};

export default { getEventFoodDetails };
