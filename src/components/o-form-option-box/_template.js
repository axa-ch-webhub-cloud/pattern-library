import html from 'nanohtml';

export default ({ iconName, headline, description, buttonTitle }) => html`
  <article class="o-form-option-box__wrap">
    <div class="o-form-option-box__row o-form-option-box__row--1">
      ${iconName ? html`<axa-icon size="lg" classes="o-form-option-box__icon" icon="${iconName}"></axa-icon>` : ''}
      <div class="o-form-option-box__col">
        <span class="o-form-option-box__headline">${headline}</span>
        <span class="o-form-option-box__description">${description}</span>
      </div>
    </div>
    <div class="o-form-option-box__row">
      ${buttonTitle ? html`<axa-button classes="o-form-option-box__button" color="blue">${buttonTitle}</axa-button>` : ''}
    </div>
  </article>
`;
