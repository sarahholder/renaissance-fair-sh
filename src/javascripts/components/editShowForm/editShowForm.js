import showData from '../../helpers/data/showData';
import utils from '../../helpers/utils';

const editShowForm = (e) => {
  const showId = e.target.closest('.card').id;
  showData.getSingleShow(showId)
    .then((resp) => {
      const show = resp.data;
      let domString = '';
      domString += `<form class="edit-show-form" data-id="${showId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="edit-show-name">Show Name:</label>';
      domString += `<input type="text" class="form-control" id="edit-show-name" placeholder="Robin Hood’s Grand Adventure Show" value="${show.name}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-show-time">Show Time:</label>';
      domString += `<input type="text" class="form-control" id="edit-show-time" placeholder="2:00" value="${show.time}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-show-stage">Stage:</label>';
      domString += `<input type="text" class="form-control" id="edit-show-stage" placeholder="Stage 1" value="${show.stage}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-show-image">Image Link:</label>';
      domString += `<input type="text" class="form-control" id="edit-show-image" placeholder="Image Link" value="${show.imageUrl}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-show-location">Please Pick a Location:</label>';
      domString += '<select class="form-control" id="edit-show-location">';
      domString += '<option value="Edinson Tudor Festival">Edinson Tudor Festival</option>';
      domString += '<option value="Hopscote-by-Sea Faire">Hopscote-by-Sea Faire</option>';
      domString += '<option value="North Illinois Pleasure Faire">North Illinois Pleasure Faire</option>';
      domString += '</select>';
      domString += '</div>';

      $('#update-show-btn').removeClass('hide');
      $('#save-new-show-btn').addClass('hide');
      $('.edit').removeClass('hide');
      $('.add').addClass('hide');

      $('#shows-modal').modal('show');
      utils.printToDom('shows-modal-body', domString);
    })
    .catch((err) => console.error('could not get single show', err));
};

export default { editShowForm };
