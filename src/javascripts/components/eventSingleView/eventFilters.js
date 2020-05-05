
const eventFilters = (eventId) => {
  let domString = '';
  domString += '<div id="eventFiltersDiv">';
  domString += '<div class="row">';
  domString += '<div class="filterBlock mr-5">';
  domString += '<div class="accordion" id="accordionExample">';
  domString += '<div class="card">';
  domString += '<div class="card-header" id="headingOne">';
  domString += '<h2 class="mb-0">';
  domString += '<button class="btn filterTitle" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Filter Event Data by Module</button>';
  domString += '</h2>';
  domString += '</div>';
  domString += '<div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">';
  domString += '<div class="card-body">';
  // Anca: DEFAULT BOOTSTRAP SELECT TAG BELOW - LIST OF OPTIONS NEED TO BE UPDATED
  domString += '<select id="moduleSelected" class="filterField" name="moduleRange">';
  domString += '<option selected name="moduleRange">Open this select menu</option>';
  domString += '<option value="animalModule" name="moduleRange">Animals</option>';
  domString += '<option value="foodModule" name="moduleRange">Food</option>';
  domString += '<option value="showModule" name="moduleRange">Shows</option>';
  domString += '<option value="souvenirModule" name="moduleRange">Souvenirs</option>';
  domString += '<option value="staffModule" name="moduleRange">Staff</option>';
  domString += '</select>';
  domString += '<div class="m-3">';
  // Anca: Added the buttons I used and gave them unique ids and the dataset id attribute needed for refreshing the event view. Have not done the click event, etc. for these buttons.
  domString += `<button id="btnFilterModuleClear" type="button" class="btn btn-secondary m-3 deleteEventBtn" data-id="${eventId}">Clear Filter</button>`;
  domString += '<button id="btnFilterModuleSave" type="button" class="btn btn-primary m-3 blueButton">Apply Filter</button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="filterBlock ml-5">';
  domString += '<div class="accordion" id="accordionFilterPrice">';
  domString += '<div class="card">';
  domString += '<div class="card-header" id="headingFilterPrice">';
  domString += '<h2 class="mb-0">';
  domString += '<button class="btn filterTitle" type="button" data-toggle="collapse" data-target="#collapseFilterPrice" aria-expanded="true" aria-controls="collapseFilterPrice">Filter Event Data by Price Range</button>';
  domString += '</h2>';
  domString += '</div>';
  domString += '<div id="collapseFilterPrice" class="collapse" aria-labelledby="headingFilterPrice" data-parent="#accordionFilterPrice">';
  domString += '<div class="card-body">';
  domString += '<select id="priceRangeSelected" class="filterField" name="priceRange">';
  domString += '<option selected name="priceRange">Open this select menu</option>';
  domString += '<option value="Under $100" name="priceRange">Under $100</option>';
  domString += '<option value="$101-$200" name="priceRange">$101-$200</option>';
  domString += '<option value="$201-$300" name="priceRange">$201-$300</option>';
  domString += '<option value="$301-$400" name="priceRange">$301-$400</option>';
  domString += '<option value="$401-$500" name="priceRange">$401-$500</option>';
  domString += '<option value="Over $500" name="priceRange">Over $500</option>';
  domString += '</select>';
  domString += '<div class="m-3">';
  domString += `<button id="btnFilterPriceRangeClear" type="button" class="btn btn-secondary m-3 deleteEventBtn" data-id="${eventId}">Clear Filter</button>`;
  domString += '<button id="btnFilterPriceRangeSave" type="button" class="btn btn-primary m-3 blueButton">Apply Filter</button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { eventFilters };
