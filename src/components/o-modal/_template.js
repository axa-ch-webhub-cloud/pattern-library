import html from "nanohtml";

export default () => {
  const openModal = () => {
    var modal = document.getElementById("modal-wrapper");
    modal.style.display = "block";
  };

  const closeModalByClickingOutside = event => {
    if (event.target.id === "modal-wrapper") closeModal();
  };

  const closeModal = () => {
    var modal = document.getElementById("modal-wrapper");
    modal.style.display = "none";
  };

  return html`
    <button id="myBtn" onclick="${openModal}">Open Modal</button>

    <div
      id="modal-wrapper"
      class="modal"
      onclick="${closeModalByClickingOutside}"
    >
      <div class="modal-content">
        <axa-icon icon="cross-gap" style="float:right;"></axa-icon>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  `;
};
