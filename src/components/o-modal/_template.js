import html from "nanohtml";

export default ({}, childrenFragment) => {
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
        <span class="close"
          ><axa-icon icon="cross-gap" onclick="${closeModal}"></axa-icon
        ></span>

        <div>${childrenFragment}</div>
      </div>
    </div>
  `;
};
