import ownerWindow from './owner-window';

export default function scrollTo(node) {
  const window = ownerWindow(node);
  let offsetParent = node;
  let y = 0;

  if (offsetParent) {
    do {
      y += offsetParent.offsetTop;
    } while (offsetParent = offsetParent.offsetParent);
  }

  window.scrollTo(0, y);
}
