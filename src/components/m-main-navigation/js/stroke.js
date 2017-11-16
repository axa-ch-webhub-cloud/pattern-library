class Stroke {
  constructor(container) {
    this.container = container;
    this.init();
  }

  init() {
    this.container.style.position = 'relative';

    this.stroke = document.createElement('div');
    this.stroke.className = 'a-stroke';

    this.container.appendChild(this.stroke);
  }

  on() {

  }

  off() {

  }

  enter() {

  }

  move() {

  }

  leave() {

  }

  destroy() {
    this.off();
  }
}

export default Stroke;
