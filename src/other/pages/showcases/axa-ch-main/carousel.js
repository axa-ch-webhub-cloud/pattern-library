import { html } from 'lit-html';

// Code for lazy-loading <img> tags under <axa-picture>. Note that <img> tags are deliberately left intact for SEO reasons.
// This is a simple Custom-Element variant of the technique described in https://ivopetkov.com/b/lazy-load-responsive-images/.
// Remark: In production, the following ES6 code would go into a minified inline <script type="module"> in the document <head>
(w => {
  const dpr = 1; // w.devicePixelRatio;
  const thresholds = [];
  const images = { '0': [] };
  const wa = w.addEventListener;

  /* eslint-disable no-continue */
  const largest = width => {
    for (let i = 0, n = thresholds.length; i < n; i++) {
      if (width < thresholds[i]) continue;
      return thresholds[i];
    }
    return 0;
  };

  const loadMatchingImages = focussedImage => {
    const width = document.body.clientWidth;
    const matchingThreshold = largest(width);
    const _images = images[matchingThreshold] || [];
    for (let i = 0, n = _images.length, image; i < n; i++) {
      image = _images[i];
      const { img } = image;
      if (img.hasAttribute('srcset')) {
        if (img !== focussedImage) continue;
        const tmp = new Image();
        tmp.onload = () => {
          img.removeAttribute('srcset');
          delete tmp.onload;
          tmp.remove();
        };
        tmp.src = image.src;
      }
      img.setAttribute('src', image.src);
    }
  };

  const loadImage = img => loadMatchingImages(img);

  // monitor page load and resizes
  wa('load', loadMatchingImages);
  wa('resize', loadMatchingImages);

  // observe an <img>'s visibility:
  const imgVisibilityObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // not visible?
      if (!entry.isIntersecting) return; // no, so early exit
      // <img> visible, remove srcset attribute from <img> to make it load
      const img = entry.target;
      loadImage(img);
      // and unobserve it
      imgVisibilityObserver.unobserve(img);
    });
  });
  // lazy-loading <axa-picture> definition
  class AXAPicture extends HTMLElement {
    connectedCallback() {
      // get <img> child and make its 'src' the default
      const img = this.querySelector('img');
      images[0].push({ src: img.src, img });
      // parse 'srcset'
      const specs = (this.getAttribute('srcset') || '').split(',');
      specs.forEach(spec => {
        const parts = spec.trim().split(/\s+/);
        const width = dpr * (parseInt(parts[1], 10) || 0);
        thresholds.push(width);
        images[width] = images[width] || [];
        images[width].push({ src: parts[0], img });
      });
      // sort width thresholds in descending order
      thresholds.sort().reverse();
      // start observing <img> child
      imgVisibilityObserver.observe(img);
    }
  }
  customElements.define('axa-picture', AXAPicture);

  loadMatchingImages();
})(window);
// End Remark

// these tiny data URIs are used to suppress <img> loading despite functional 'src' value!
// (but see also https://css-tricks.com/preventing-content-reflow-from-lazy-loaded-images/).
// Additionally, here they provide a blurry preview of the image, for better UX under bad network conditions!
const preview0 = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsNDQsPDwsSDxgVDBIOFCUXHhURGSIzFyUlHiohMy8pLBUcNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoMCgoKDAsLCwoREBAPEhQLExQWIgwaGBoYEi0gJSAgJRAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//AABEIAAYADgMBIgACEQEDEQH/xABcAAEBAQAAAAAAAAAAAAAAAAAABAYQAAIBBQEBAAAAAAAAAAAAAAECAwAEBREhBkEBAQAAAAAAAAAAAAAAAAAAAAQRAAMAAgMAAAAAAAAAAAAAAAECAwAEERIh/9oADAMBAAIRAxEAPwC71EWYxmLa5kz11OmwhjCLF1vu49Vh7jz7AJK9yzGQBtklj3vd0pSNdVo5DDnwYDed4wRpsQe7Z//Z`;
const preview1 = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//AABEIAAYADgMBIgACEQEDEQH/xABaAAEBAQAAAAAAAAAAAAAAAAAABQYQAAIBBAMBAAAAAAAAAAAAAAECAwAEBREGEiExAQEAAAAAAAAAAAAAAAAAAAACEQADAQEAAAAAAAAAAAAAAAAAAQJRUv/aAAwDAQACEQMRAD8Al5fDQ4OSzaILOSSxaf0gp80F1W54zZwZbFpeTdo3M0y9YdIvjUpQUzg3ddM//9k=`;
const preview2 = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//AABEIAAYADgMBIgACEQEDEQH/xABaAAEBAQAAAAAAAAAAAAAAAAAABQYQAAEEAgMAAAAAAAAAAAAAABEAAQIDBAUGQcEBAQEAAAAAAAAAAAAAAAAAAAMEEQEAAwEAAAAAAAAAAAAAAAABAAIRIf/aAAwDAQACEQMRAD8A0rcjypho00xPYKj37XcTvtGe9ZDiEG9KIg1Q1ZRatR4E/9k=`;
const preview3 = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//AABEIAAYADgMBIgACEQEDEQH/xABfAAEBAQAAAAAAAAAAAAAAAAAABAYQAAICAgIDAAAAAAAAAAAAAAECBBEAAwUSEzFBAQEBAAAAAAAAAAAAAAAAAAAEBREBAAIBBQAAAAAAAAAAAAAAAQIDABESISKh/9oADAMBAAIRAxEAPwDZy5U6RtZNHjXqAzFmIoG/VA5PDj8tN1jYJaIlX9Y2cYwNFFSEmArlG1Y09eNNvuf/2Q==`;
/* generic transparent 1x1 GIF - useful if above preview data URIs cannot be (server-)generated
const placeHolderImage = (width = 480, height = 376) =>
  `data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==`;
  */

export default html`
  <style>
    .m-related-content__item__link {
      display: block;
      width: auto;
      text-decoration: none;
      cursor: pointer;
      touch-action: manipulation;
      margin-bottom: 48px;
    }
    .m-related-content__item__link:hover .m-related-content__caption,
    .m-related-content__item__link:hover .m-related-content__text,
    .m-related-content__item__link:focus .m-related-content__caption,
    .m-related-content__item__link:focus .m-related-content__text {
      color: #00008f;
    }

    .m-related-content__image {
      display: block;
      width: 100vw;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      object-position: top center;
      vertical-align: middle;
      border-style: none;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transform: translateZ(0) scale(1, 1);
      transform: translateZ(0) scale(1, 1);
      transition: -webkit-transform 0.3s ease-in-out;
      transition: transform 0.3s ease-in-out;
      transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
    }
    .m-related-content__item__link:hover .m-related-content__image {
      -webkit-transform: translateZ(0) scale(1.05, 1.05);
      transform: translateZ(0) scale(1.05, 1.05);
    }
    @media (min-width: 992px) {
      .m-related-content__picture {
        height: 480px;
      }
    }
    .m-related-content__picture {
      display: block;
      position: relative;
      height: 350px;
      overflow: hidden;
    }
    .m-related-content__item__link:hover .m-related-content__picture::after {
      width: 100%;
    }
    .m-related-content__picture::after {
      display: block;
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 120px;
      height: 5px;
      background: #f07662;
      transition: width 0.3s ease;
    }
    .m-related-content__content {
      padding: 15px 15px 0;
      text-align: center;
    }
    .m-related-content__caption {
      -webkit-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
      overflow-wrap: break-word;
      word-wrap: break-word;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: 0.02em;
      margin: 0;
      color: #7f7f7f;
    }
    @media (min-width: 576px) {
      .m-related-content__caption {
        font-size: 14px;
        line-height: 1.21;
      }
    }
    .m-related-content__text {
      -webkit-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
      overflow-wrap: break-word;
      word-wrap: break-word;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      letter-spacing: 0.01em;
      margin: 5px 0 0;
      color: #000;
    }
    @media (min-width: 992px) {
      .m-related-content__text {
        margin-top: 10px;
      }
    }
    @media (min-width: 576px) {
      .m-related-content__text {
        font-size: 20px;
      }
    }
    @media (min-width: 992px) {
      .m-related-content__image {
        width: 100%;
      }
    }
  </style>
  <axa-carousel
    mode="all"
    overlay
    autorotatedisabled
    keysenabled
    arrowstyle="color: #fff; height: calc(100% - 90px); top:0"
  >
    <a
      class="m-related-content__item__link"
      target="_self"
      href="javascript:void(0)"
      ><axa-picture
        class="m-related-content__picture"
        srcset="https://picsum.photos/id/1011/360/480 980w, https://picsum.photos/id/1011/980/400 480w"
      >
        <img
          onload="console.log('load', this.src, event)"
          onerror="console.log('error',this.src, event)"
          class="m-related-content__image"
          srcset="${preview0}"
          src="https://picsum.photos/id/1011/480/376"
        />
      </axa-picture>
      <div class="m-related-content__content">
        <p class="m-related-content__caption">
          Was tun als Opfer von Cyberkriminellen?
        </p>
        <h3 class="m-related-content__text">Kreditkartenbetrug</h3>
      </div>
    </a>
    <a
      class="m-related-content__item__link"
      target="_self"
      href="javascript:void(0)"
    >
      <axa-picture
        class="m-related-content__picture"
        srcset="https://picsum.photos/id/1010/360/480 980w, https://picsum.photos/id/1010/980/400 480w"
      >
        <img
          onload="console.log('load', this.src, event)"
          onerror="console.log('error',this.src, event)"
          class="m-related-content__image"
          srcset="${preview1}"
          src="https://picsum.photos/id/1010/480/376"
        />
      </axa-picture>
      <div class="m-related-content__content">
        <p class="m-related-content__caption">Unterwegs</p>
        <h3 class="m-related-content__text">
          Wintereinbruch: AXA rechnet mit mehr Kollisionen
        </h3>
      </div>
    </a>
    <a
      class="m-related-content__item__link"
      target="_self"
      href="javascript:void(0)"
    >
      <axa-picture
        class="m-related-content__picture"
        srcset="https://picsum.photos/id/1001/360/480 980w, https://picsum.photos/id/1001/980/400 480w"
      >
        <img
          onload="console.log('load', this.src, event)"
          onerror="console.log('error',this.src, event)"
          class="m-related-content__image"
          srcset="${preview2}"
          src="https://picsum.photos/id/1001/480/376"
        />
      </axa-picture>
      <div class="m-related-content__content">
        <p class="m-related-content__caption">
          Welche Rechtsschritte kann ich einleiten?
        </p>
        <h3 class="m-related-content__text">Cybermobbing</h3>
      </div>
    </a>
    <a
      class="m-related-content__item__link"
      target="_self"
      href="javascript:void(0)"
      ><axa-picture
        class="m-related-content__picture"
        srcset="https://picsum.photos/id/102/360/480 980w, https://picsum.photos/id/102/980/400 480w"
      >
        <img
          onload="console.log('load', this.src, event)"
          onerror="console.log('error',this.src, event)"
          class="m-related-content__image"
          srcset="${preview3}"
          src="https://picsum.photos/id/102/480/376"
        />
      </axa-picture>
      <div class="m-related-content__content">
        <p class="m-related-content__caption">
          Grund- und Zusatzversicherung: Hilft separat versichern beim Sparen?
        </p>
        <h3 class="m-related-content__text">Gesundheit</h3>
      </div>
    </a>
  </axa-carousel>
`;
