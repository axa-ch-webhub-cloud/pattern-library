import html from "nanohtml";

export default () => {
  const openModal = () => {
    var modal = document.getElementById("modal-wrapper");
    modal.style.display = "block";
  };

  const closeModalByClickingOutside = event => {
    var modal = document.getElementById("modal-wrapper");
    if (event.target.id == "modal-wrapper") closeModal();
  };

  const closeModal = () => {
    var modal = document.getElementById("modal-wrapper");
    modal.style.display = "none";
  };

  const close = () => {
    var span = document.getElementsByClassName("close")[0];
    var modal = document.getElementById("modal-wrapper");
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };

  return html`
    <button id="myBtn" onclick="${openModal}">Open Modal</button>

    <div
      id="modal-wrapper"
      class="modal"
      onclick="${closeModalByClickingOutside}"
    >
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  `;
};
