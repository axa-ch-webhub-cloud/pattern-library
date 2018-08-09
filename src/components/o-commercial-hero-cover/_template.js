import html from 'nanohtml';

export default ({
  src,
  alt = 'Commercial Hero cover',
  gradient = 'white',
  contentAlign = 'left',
}, childrenFragment) => html`
  <header class="o-commercial-hero-cover__header ${gradient === 'white' ? 'gradient-white' : 'gradient-black'}">
    <picture class="m-picture o-commercial-hero-cover__picture">
      <img class="m-picture__image o-commercial-hero-cover__picture__image a-focal-point a-focal-point--center"
      src="${src}" alt="${alt}" data-object-fit="cover"
      data-object-position="center">
    </picture>
    <axa-container class="o-commercial-hero-cover__info">
      <axa-row>
        <axa-col size="sm-12 lg-6" order="${contentAlign === 'left' ? '0' : '1'}">
          ${childrenFragment.querySelector('.js-commercial-hero-cover__first') || childrenFragment}
        </axa-col> 
        <axa-col size="sm-12 lg-6">
          ${childrenFragment.querySelector('.js-commercial-hero-cover__second') || ''}
        </axa-col>
      </axa-row>
    </axa-container>
  </header>
`;
