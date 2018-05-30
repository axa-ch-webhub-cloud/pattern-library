const _global = window || global;

class DisclaimerHandler {
  constructor(wcNode) {
    this.wcNode = wcNode;
  }
  init() {
    this.wcNode.querySelector('.js-cookie-disclaimer__button').addEventListener('click', () => {
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
}
export default DisclaimerHandler;
