import _appendChild from 'nanohtml/lib/append-child';


export default (function (props, childrenFragment) {
  var _mHeaderMainBox;

  return _mHeaderMainBox = document.createElement('div'), _mHeaderMainBox.setAttribute('class', 'm-header-main__box'), _appendChild(_mHeaderMainBox, [childrenFragment]), _mHeaderMainBox;
});