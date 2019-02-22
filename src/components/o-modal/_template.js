import html from 'nanohtml';

export default ({ open }, childrenFragment) => {
  const closeModal = () => {
    const modal = document.getElementById('modal-wrapper');
    modal.style.display = 'none';
    modal.classList.add('m-modal--hidden');
  };

  const closeModalByClickingOutside = (event) => {
    if (event.target.id === 'modal-wrapper') closeModal();
  };

  return html`
    <div id="modal-wrapper" class="m-modal ${open ? '' : 'm-modal--hidden'}" onclick="${closeModalByClickingOutside}">
      <div class="m-modal__content">
        <span class="m-modal__close-button"><axa-icon icon="cross-gap" onclick="${closeModal}"></axa-icon></span>

        <div>${childrenFragment}</div>
      </div>
    </div>
  `;
};
