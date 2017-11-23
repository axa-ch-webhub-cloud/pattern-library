export default function observeAttrChange(el, callback) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes') {
        const newVal = mutation.target.getAttribute(mutation.attributeName);
        callback(mutation.attributeName, newVal);
      }
    });
  });
  observer.observe(el, { attributes: true });
  return observer;
}
