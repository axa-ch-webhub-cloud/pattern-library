import _appendChild from 'nanohtml/lib/append-child';


export default function sticky(props, childrenFragment) {
  var _oStickyPlaceholder, _oStickyBox;

  return [(_oStickyPlaceholder = document.createElement('div'), _oStickyPlaceholder.setAttribute('class', 'o-sticky__placeholder js-sticky__placeholder'), _oStickyPlaceholder), (_oStickyBox = document.createElement('div'), _oStickyBox.setAttribute('class', 'o-sticky__box js-sticky__box'), _appendChild(_oStickyBox, [childrenFragment]), _oStickyBox)];
}