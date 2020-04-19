
const newSouvenirForm = () => {
  <div class="modal" id="addSouvenirsModal" data-target="#myModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add New Souvenir </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id="souvenirModalBody" class="modal-body">
        <form id="souvenirForm">
          <div class="form-group">
            <label for="souvenirType">Type of Souvenir</label>
            <input type="text" class="form-control" id="souvenirType" placeholder="Type">
          </div>
          <div class="form-group">
            <label for="souvenirDescription">Description of Souvenir</label>
            <input type="text" class="form-control" id="souvenirDescription" placeholder="Description">
          </div>
          <div class="form-group">
            <label for="souvenirImageUrl">Image Url of Souvenir</label>
            <input type="text" class="form-control" id="souvenirImageUrl" placeholder="image Url">
          </div>
          <div class="form-group">
            <label for="souvenirPrice">Price of Souvenir</label>
            <input type="number" class="form-control" id="souvenirPrice" placeholder="Price">
          </div>
          <div class="form-group">
            <label for="souvenirLocation">Locations Of Souvenir:</label>
            <select id="souvenirLocation" class="form-control" placeholder="">
              <option value="">Select your option</option>
              <option value="Edinson Tudor Festival">Edinson Tudor Festival</option>
              <option value="North Illinois Pleasure Faire">North Illinois Pleasure Faire</option>
              <option value="Hopscote-by-Sea Faire">Edinson Tudor Festival</option>
            </select>
          </div>
          <div class="form-group">
            <label for="avaliabilityOfSouvenir">Avaliability Of Souvenir:</label>
            <select id="avaliabilityOfSouvenir" class="form-control" placeholder="">
              <option value="">Select your option</option>
              <option value="true">Avaliable</option>
              <option value="false">Not Avaliable</option>
            </select>
          </div>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>  
      <button type="submit" id="newSouvenirSubmit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  </div>
</div>  
  console.error('new souvenir form button not working');
  $('#addSouvenirModal').modal('show');
};

export default { newSouvenirForm };
