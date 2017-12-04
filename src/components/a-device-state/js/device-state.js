import on from '../../../js/on';
import ownerWindow from '../../../js/owner-window';
import throttle from '../../../js/throttle';

const reWhiteSpace = /\s/g;
const reUnquote = /^"+|"+$/g;

function deviceState(key) {
  const node = document.querySelector('.a-device-state');
  const window = ownerWindow(node);
  let lastContent;

  on(ownerWindow(node), 'resize', throttle(handleResize));

  function handleResize() {
    const content = window.getComputedStyle(node, 'after').getPropertyValue('content');

    if (content !== lastContent) {
      lastContent = content;

      console.log(content);
      const state = content.replace(reWhiteSpace, '')
        .replace(reUnquote, '')
        .split(',')
        .map(parsePair);

      console.log(state);
    }
  }
}

function parsePair(pair) {
  const [key, value] = pair.split(':');

  return {
    [key]: +value || value,
  };
}

export default deviceState;
