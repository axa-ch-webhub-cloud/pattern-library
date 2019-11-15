const _setCaretPosition = (inputElment, pos) => {
  setTimeout(() => {
    inputElment.focus();
    inputElment.setSelectionRange(pos, pos);
  });
};

export default function evaluateAndSetCaretPosition(
  inputElement,
  oldValue,
  newValue,
  lastKeyPressed,
  previousSelectorStartPosition,
  previousSelectorEndPosition
) {
  // Text was cleared
  if (newValue.length === 0) return;

  // One or more letters were added
  if (oldValue.length < newValue.length) {
    const difference = newValue.length - oldValue.length;
    const newPosition = previousSelectorStartPosition + difference;
    _setCaretPosition(inputElement, newPosition);
  }
  // One or more letters were removed
  else if (oldValue.length > newValue.length) {
    // One letter was removed
    if (previousSelectorEndPosition === previousSelectorStartPosition) {
      const difference = oldValue.length - newValue.length;
      const newPosition = previousSelectorStartPosition - difference;
      _setCaretPosition(inputElement, newPosition);
    }
    // Multiple letters were removed
    else if (lastKeyPressed === 'Backspace' || lastKeyPressed === 'Delete') {
      // They were removed without a replacement
      _setCaretPosition(inputElement, previousSelectorStartPosition);
    }
    // They were removed and replaced by one letter
    else {
      _setCaretPosition(inputElement, previousSelectorStartPosition + 1);
    }
  }
}
