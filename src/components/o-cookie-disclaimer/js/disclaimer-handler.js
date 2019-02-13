import on from '../../../js/on';

const _global = window || global;

class DisclaimerHandler {
  constructor(wcNode) {
    this.wcNode = wcNode;
    this._off = null;
  }
  init() {
    this._off = on(this.wcNode.querySelector('.js-cookie-disclaimer__button'), 'click', () => {
      this.cleanupWcNode();
      const { localStorage } = _global;
      if (localStorage) {
        localStorage.setItem('axa-ch-cookie-disclaimer-accepted', new Date().getTime());
      }
    });
  }
  cleanupWcNode() {
    this.wcNode.parentNode.removeChild(this.wcNode);
  }
  // eslint-disable-next-line class-methods-use-this
  hasAccepted() {
    const { localStorage } = _global;
    return !!localStorage.getItem('axa-ch-cookie-disclaimer-accepted');
  }
  destroy() {
    if (typeof this._off === 'function') {
      this._off();
    }
    delete this.wcNode;
  }
  get off() {
    return this._off;
  }
}
export default DisclaimerHandler;
