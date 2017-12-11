import ownerWindow from './owner-window';
import posY from './pos-y';

export default function scrollTo(node) {
  const window = ownerWindow(node);
  const y = posY(node);

  window.scrollTo(0, y);
}
