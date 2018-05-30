import _appendChild from 'nanohtml/lib/append-child';


export default (function (props, childrenFragment) {
  var _mHeaderMetaRow, _mHeaderMetaBox;

  return _mHeaderMetaBox = document.createElement('div'), _mHeaderMetaBox.setAttribute('class', 'm-header-meta__box'), _appendChild(_mHeaderMetaBox, ['\n    ', (_mHeaderMetaRow = document.createElement('div'), _mHeaderMetaRow.setAttribute('class', 'm-header-meta__row'), _appendChild(_mHeaderMetaRow, ['\n      ', childrenFragment, '\n    ']), _mHeaderMetaRow), '\n  ']), _mHeaderMetaBox;
});