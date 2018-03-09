/**
 * Feature detect passive event support.
 *
 * @link https://github.com/rafrex/detect-passive-events
 */
const hasPassive = (function hasPassive() {
  let passive = false;

  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    const options = Object.defineProperty({}, 'passive', {
      // eslint-disable-next-line getter-return
      get() { passive = true; },
    });
    // note: have to set and remove a no-op listener instead of null
    // (which was used previously), becasue Edge v15 throws an error
    // when providing a null callback.
    // https://github.com/rafrex/detect-passive-events/pull/3
    const noop = () => {};
    window.addEventListener('testPassiveEventSupport', noop, options);
    window.removeEventListener('testPassiveEventSupport', noop, options);
  }

  return passive;
}());

export default hasPassive;
