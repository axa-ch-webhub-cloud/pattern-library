import html from 'nanohtml';

export default ({ open }, childrenFragment) => {
  const closeModalByClickingOutside = event => {
    if (event.target.id === 'modal-wrapper') closeModal();
  };

  const closeModal = () => {
    var modal = document.getElementById('modal-wrapper');
    modal.style.display = 'none';
    modal.classList.add('m-modal--hidden');
  };

  return html`
    <div
      id="modal-wrapper"
      class="m-modal ${open ? '' : 'm-modal--hidden'}"
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
