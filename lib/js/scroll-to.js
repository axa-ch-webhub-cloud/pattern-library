import ownerWindow from './owner-window';
import posY from './pos-y';

export default function scrollTo(node) {
  var window = ownerWindow(node);
  var y = posY(node);

  window.scrollTo(0, y);
}