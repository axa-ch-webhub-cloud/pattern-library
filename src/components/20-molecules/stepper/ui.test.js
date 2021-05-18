import { ClientFunction, Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;

fixture('Stepper - basic functionality').page(`${host}/iframe.html?id=components-stepper--stepper`);

const TAG = 'axa-stepper';
const CLASS = '.m-stepper';

test('should render stepper', async t => {
  const $axaElem = Selector(TAG);
  await t.expect($axaElem.exists).ok();

  const $axaElemShadow = Selector(() => document.querySelector(TAG).shadowRoot, { dependencies: { TAG } });

  const $axaElemShadowEl = $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should render correct amount of steps', async t => {
  const amountOfSteps = ClientFunction(
    () => {
      const shadow = document.querySelector(TAG).shadowRoot;
      return shadow.querySelectorAll('.js-stepper__step').length;
    },
    { dependencies: { TAG } }
  );

  await t.expect(await amountOfSteps()).eql(4);
});

test('should display correct step number', async t => {
  const getStepNumber = ClientFunction(
    index => {
      const shadow = document.querySelector(TAG).shadowRoot;
      const step = shadow.querySelectorAll('.js-stepper__circle')[index];

      return step.textContent;
    },
    { dependencies: { TAG } }
  );

  await t.expect(await getStepNumber(0)).eql('2');
  await t.expect(await getStepNumber(1)).eql('3');
  await t.expect(await getStepNumber(2)).eql('4');
});

test('should display correct step title', async t => {
  const getStepTitle = ClientFunction(
    index => {
      const shadow = document.querySelector(TAG).shadowRoot;
      const step = shadow.querySelectorAll('.js-stepper__text')[index];

      return step.textContent;
    },
    { dependencies: { TAG } }
  );

  await t.expect(await getStepTitle(0)).eql('Angaben');
  await t.expect(await getStepTitle(1)).eql('Leistungen');
  await t.expect(await getStepTitle(2)).eql('Übersicht');
  await t.expect(await getStepTitle(3)).eql('Fertig');
});

test('should display correct step state', async t => {
  const getStepState = ClientFunction(
    index => {
      const shadow = document.querySelector(TAG).shadowRoot;
      const step = shadow.querySelectorAll('.js-stepper__step')[index];

      if (step.querySelector('svg')) {
        return 0;
      }

      const circle = step.querySelector('.js-stepper__circle');
      const circleBackground = window.getComputedStyle(circle).getPropertyValue('background-color');

      if (circleBackground === 'rgb(0, 0, 143)') {
        return 1;
      } else if (circleBackground === 'rgb(255, 255, 255)') {
        return 2;
      }

      return 3;
    },
    { dependencies: { TAG } }
  );

  await t.expect(await getStepState(0)).eql(0);
  await t.expect(await getStepState(1)).eql(1);
  await t.expect(await getStepState(2)).eql(2);
  await t.expect(await getStepState(3)).eql(2);
});

test('should display correct progress', async t => {
  const getProgress = ClientFunction(
    () => {
      const shadow = document.querySelector(TAG).shadowRoot;
      const progress = shadow.querySelector('.js-stepper__progress');

      return progress.style.width;
    },
    { dependencies: { TAG } }
  );

  await t.expect(await getProgress()).eql('37.5%');
});

test('should round stepActive down to an integer', async t => {
  const setStepActive = ClientFunction(
    value => {
      const stepper = document.querySelector(TAG);
      stepper.stepActive = value;
    },
    { dependencies: { TAG } }
  );

  const getProgress = ClientFunction(
    () => {
      const shadow = document.querySelector(TAG).shadowRoot;
      const progress = shadow.querySelector('.js-stepper__progress');

      return progress.style.width;
    },
    { dependencies: { TAG } }
  );

  await setStepActive(1.5);
  await t.expect(await getProgress()).eql('12.5%');

  await setStepActive(1);
  await t.expect(await getProgress()).eql('12.5%');

  await setStepActive(3.9);
  await t.expect(await getProgress()).eql('62.5%');

  await setStepActive(3);
  await t.expect(await getProgress()).eql('62.5%');
});

test('should treat stepActive=0 like stepActive=1', async t => {
  const setStepActive = ClientFunction(
    value => {
      const stepper = document.querySelector(TAG);
      stepper.stepActive = value;
    },
    { dependencies: { TAG } }
  );

  const getStepState = ClientFunction(
    () => {
      const shadow = document.querySelector(TAG).shadowRoot;
      const circle = shadow.querySelectorAll('.js-stepper__circle')[0];

      const circleBackground = window.getComputedStyle(circle).getPropertyValue('background-color');

      return circleBackground === 'rgb(0, 0, 143)';
    },
    { dependencies: { TAG } }
  );

  await setStepActive(0);
  await t.expect(await getStepState()).ok();

  await setStepActive(1);
  await t.expect(await getStepState()).ok();
});

test('should treat stepProgress=-1 like stepProgress=0', async t => {
  const setStepProgress = ClientFunction(
    value => {
      const stepper = document.querySelector(TAG);
      stepper.stepProgress = value;
    },
    { dependencies: { TAG } }
  );

  const getProgress = ClientFunction(
    () => {
      const shadow = document.querySelector(TAG).shadowRoot;
      const progress = shadow.querySelector('.js-stepper__progress');

      return progress.style.width;
    },
    { dependencies: { TAG } }
  );

  await setStepProgress(-1);
  await t.expect(await getProgress()).eql('25%');
});

test('should treat stepProgress=2 like stepProgress=1', async t => {
  const setStepProgress = ClientFunction(
    value => {
      const stepper = document.querySelector(TAG);
      stepper.stepProgress = value;
    },
    { dependencies: { TAG } }
  );

  const getProgress = ClientFunction(
    () => {
      const shadow = document.querySelector(TAG).shadowRoot;
      const progress = shadow.querySelector('.js-stepper__progress');

      return progress.style.width;
    },
    { dependencies: { TAG } }
  );

  await setStepProgress(2);
  await t.expect(await getProgress()).eql('50%');
});
