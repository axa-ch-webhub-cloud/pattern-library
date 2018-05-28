import _appendChild from 'nanohtml/lib/append-child';


export default function (props, childrenFragment) {
  var _mFooterMainRow, _mFooterMainBox;

  return _mFooterMainBox = document.createElement('div'), _mFooterMainBox.setAttribute('class', 'm-footer-main__box'), _appendChild(_mFooterMainBox, ['\n    ', (_mFooterMainRow = document.createElement('div'), _mFooterMainRow.setAttribute('class', 'm-footer-main__row'), _appendChild(_mFooterMainRow, [childrenFragment]), _mFooterMainRow), '\n  ']), _mFooterMainBox;
}