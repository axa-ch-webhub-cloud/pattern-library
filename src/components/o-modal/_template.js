import html from 'nanohtml';

export default ({ open }, childrenFragment) => {
  return html`
    <div class="m-modal ${open ? '' : 'm-modal--hidden'}" tabindex="0">
      <div class="m-modal__content">
        <span class="m-modal__close-button"><axa-icon icon="cross-gap"></axa-icon></span>
        <div>${childrenFragment}</div>
      </div>
    </div>
  `;
};
