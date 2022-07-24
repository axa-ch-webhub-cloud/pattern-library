import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

const axaBlue = 'rgb(0, 0, 143)';
const primRedFlamingo = 'rgb(240, 118, 98)';
const primWhite = 'rgb(255, 255, 255)';
const linkText = 'This is a simple link';

fixture('Link').page(
  `${host}/iframe.html?id=components-link--link&viewMode=story`
);

test('should display correctly', async t => {
  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(axaBlue);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${axaBlue}`);

  const linkTextElement = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkTextElement.textContent).eql('Data protection statement');
});

fixture('Link - External').page(
  `${host}/iframe.html?args=slot:This%20is%20a%20simple%20link;external:true&id=components-link--link&viewMode=story`
);

test('should display correctly', async t => {
  const axaLink = Selector('axa-link');
  await t.expect(axaLink.hasAttribute('external')).ok();

  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(axaBlue);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${axaBlue}`);

  const linkTextElement = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkTextElement.textContent).eql(linkText);
});

fixture('Link - Simple Link - Icon').page(
  `${host}/iframe.html?args=slot:This%20is%20a%20simple%20link;variant:icon;icon:download&id=components-link--link&viewMode=story`
);

test('should display correctly', async t => {
  const linkElement = Selector(
    () => document.querySelector('axa-link').shadowRoot
  ).find('a');

  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(axaBlue);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${axaBlue}`);

  const arrowIcon = linkElement.find('.js-icon');
  await t.expect(arrowIcon.hasClass('a-link__icon')).ok();
  await t.expect(arrowIcon.getAttribute('icon')).eql('download');
  const linkTextElement = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkTextElement.textContent).eql(linkText);
});

fixture('Link - Simple Link - Static Arrow Right').page(
  `${host}/iframe.html?args=slot:This%20is%20a%20simple%20link;variant:arrowright&id=components-link--link&viewMode=story`
);

test('should display correctly', async t => {
  const linkElement = Selector(
    () => document.querySelector('axa-link').shadowRoot
  ).find('a');
  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(axaBlue);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${axaBlue}`);

  const arrowIcon = linkElement.find('.js-icon');
  await t.expect(arrowIcon.hasClass('a-link__icon')).ok();
  await t.expect(arrowIcon.getAttribute('icon')).eql('arrow-right');
  const linkTextElement = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkTextElement.textContent).eql(linkText);
});

fixture('Link - Simple Link - Static Arrow Left').page(
  `${host}/iframe.html?args=slot:This%20is%20a%20simple%20link;variant:arrowleft&id=components-link--link&viewMode=story`
);

test('should display correctly', async t => {
  const linkElement = Selector(
    () => document.querySelector('axa-link').shadowRoot
  ).find('a');
  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(axaBlue);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${axaBlue}`);

  const arrowIcon = linkElement.find('.js-icon');
  await t.expect(arrowIcon.hasClass('a-link__icon')).ok();
  await t.expect(arrowIcon.getAttribute('icon')).eql('arrow-right');
  const linkTextElement = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkTextElement.textContent).eql(linkText);
});

fixture('Link - Simple Link - Animated Arrow Right').page(
  `${host}/iframe.html?args=slot:This%20is%20a%20simple%20link;variant:arrowright-animated&id=components-link--link&viewMode=story`
);

test('should display correctly', async t => {
  const axaLink = Selector('axa-link');
  await t.expect(axaLink.getAttribute('variant')).contains('animated');

  const linkElement = Selector(
    () => document.querySelector('axa-link').shadowRoot
  ).find('a');
  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(axaBlue);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${axaBlue}`);

  const arrowIcon = linkElement.find('.js-icon');
  await t.expect(arrowIcon.hasClass('a-link__icon')).ok();
  await t.expect(arrowIcon.getAttribute('icon')).eql('arrow-right');
  const linkTextElement = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkTextElement.textContent).eql(linkText);
});

fixture('Link - Simple Link - Animated Arrow Left').page(
  `${host}/iframe.html?args=slot:This%20is%20a%20simple%20link;variant:arrowleft-animated&id=components-link--link&viewMode=story`
);

test('should display correctly', async t => {
  const axaLink = Selector('axa-link');
  await t.expect(axaLink.getAttribute('variant')).contains('animated');

  const linkElement = Selector(
    () => document.querySelector('axa-link').shadowRoot
  ).find('a');

  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(axaBlue);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${axaBlue}`);

  const arrowIcon = linkElement.find('.js-icon');
  await t.expect(arrowIcon.hasClass('a-link__icon')).ok();
  await t.expect(arrowIcon.getAttribute('icon')).eql('arrow-right');
  const linkTextElement = Selector(
    () =>
      document
        .querySelector('axa-link')
        .shadowRoot.querySelector('slot')
        .assignedNodes()[0]
  );
  await t.expect(linkTextElement.textContent).eql(linkText);
});

fixture('Link - Simple Link - Red Color').page(
  `${host}/iframe.html?args=variant:icon-red&id=components-link--link&viewMode=story`
);

test('should display correctly', async t => {
  const axaLink = Selector('axa-link');
  await t.expect(axaLink.getAttribute('variant')).eql('icon-red');

  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(primRedFlamingo);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${primRedFlamingo}`);
});

fixture('Link - Simple Link - White Color').page(
  `${host}/iframe.html?args=variant:icon-white&id=components-link--link&viewMode=story`
);

test('should display correctly', async t => {
  const axaLink = Selector('axa-link');
  await t.expect(axaLink.getAttribute('variant')).eql('icon-white');

  const link = Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );
  await t.expect(link.exists).ok();
  await t.expect(link.getStyleProperty('color')).eql(primWhite);
  await t
    .expect(link.getStyleProperty('text-decoration'))
    .eql(`none solid ${primWhite}`);
});

fixture('Link - Reactified, dynamic icons').page(
  `${host}/iframe.html?id=examples-link-react--link-variable-icons&viewMode=story`
);

test('should correctly update text', async t => {
  const axaLink = await Selector(() => document.querySelector('axa-link'));
  const axaLinkEmbedded = await Selector(() =>
    document.querySelector('axa-link').shadowRoot.querySelector('a')
  );

  await t.expect(axaLink.textContent).eql('Mehr Filter');

  await t.click(axaLinkEmbedded);
  await t.expect(axaLink.textContent).eql('Weniger Filter');
});
