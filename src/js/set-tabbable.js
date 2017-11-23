function setTabbable(el, fn) {
  el.setAttribute('tabindex', '0');
  el.addEventListener('keypress', (event) => {
    if (event.keyCode === 32 || event.keyCode === 13) {
      fn && fn();
      event.preventDefault();
    }
  });
}

export default setTabbable;
