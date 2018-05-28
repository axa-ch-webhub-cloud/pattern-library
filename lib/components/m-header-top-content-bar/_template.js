import _appendChild from 'nanohtml/lib/append-child';


export default function (props, childrenFragment) {
  var _mHeaderTopContentBarBox;

  return _mHeaderTopContentBarBox = document.createElement('div'), _mHeaderTopContentBarBox.setAttribute('class', 'm-header-top-content-bar__box'), _appendChild(_mHeaderTopContentBarBox, [childrenFragment]), _mHeaderTopContentBarBox;
}