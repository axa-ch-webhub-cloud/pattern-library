import _appendChild from 'nanohtml/lib/append-child';


export default function (props, childrenFragment) {
  var _mFooterSubRow, _mFooterSubBox;

  return _mFooterSubBox = document.createElement('div'), _mFooterSubBox.setAttribute('class', 'm-footer-sub__box'), _appendChild(_mFooterSubBox, ['\n    ', (_mFooterSubRow = document.createElement('div'), _mFooterSubRow.setAttribute('class', 'm-footer-sub__row'), _appendChild(_mFooterSubRow, [childrenFragment]), _mFooterSubRow), '\n  ']), _mFooterSubBox;
}