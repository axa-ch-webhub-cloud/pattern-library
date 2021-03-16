import { html } from 'lit-html';

// Code for lazy-loading <img> tags under <axa-picture>. Note that <img> tags are deliberately left intact for SEO reasons.
// This is a simple Custom-Element variant of the technique described in https://ivopetkov.com/b/lazy-load-responsive-images/.
// Remark: In production, the following ES5 code would go into an inline <script> in the document <head>
(function() {
  var dpr = 1; // window.devicePixelRatio;
  var thresholds = [],
    images = { '0': [] };

  function loadImage(img) {
    img.removeAttribute('srcset');
    loadMatchingImages();
  }

  function largest(width) {
    for (var i = 0, n = thresholds.length; i < n; i++) {
      if (width < thresholds[i]) continue;
      return thresholds[i];
    }
    return 0;
  }

  function loadMatchingImages() {
    var width = document.body.clientWidth;
    var matchingThreshold = largest(width);
    var _images = images[matchingThreshold] || [];
    for (var i = 0, n = _images.length, image, img; i < n; i++) {
      image = _images[i];
      img = image.img;
      if (img.hasAttribute('srcset')) continue;
      img.setAttribute('src', image.src);
    }
  }

  // monitor page load and resizes
  window.onload = loadMatchingImages;
  window.addEventListener('resize', loadMatchingImages);

  // define lazy-loading <axa-picture>, if possible
  if ('customElements' in window) {
    // observe an <img>'s visibility:
    var imgVisibilityObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        // not visible?
        if (!entry.isIntersecting) return; // no, so early exit
        // <img> visible, remove srcset attribute from <img> to make it load
        var img = entry.target;
        loadImage(img);
        // and unobserve it
        imgVisibilityObserver.unobserve(img);
      });
    });
    // <axa-picture> definition
    class AXAPicture extends HTMLElement {
      connectedCallback() {
        // get <img> child and make its 'src' the default
        var img = this.querySelector('img');
        images[0].push({ src: img.src, img: img });
        // parse 'srcset'
        var specs = (this.getAttribute('srcset') || '').split(',');
        specs.forEach(function(spec) {
          var parts = spec.trim().split(/\s+/);
          var width = dpr * (parseInt(parts[1], 10) || 0);
          thresholds.push(width);
          images[width] = images[width] || [];
          images[width].push({ src: parts[0], img: img });
        });
        // sort width thresholds in descending order
        thresholds.sort().reverse();
        // start observing <img> child
        imgVisibilityObserver.observe(img);
      }
    }
    customElements.define('axa-picture', AXAPicture);
  } else {
    // IE does not honour the 'srcset' attribute in <img>, cf. https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset
    // therefore <img>'s load eagerly in the default size anyway. This slight deterioriation of UX (non-responsive) is OK here ;-)
  }

  loadMatchingImages();
})();
// End Remark

// this transparent tiny data URI is used to suppress <img> loading despite functional 'src' value!
// (but see also https://css-tricks.com/preventing-content-reflow-from-lazy-loaded-images/)
const placeHolderImage = (width = 480, height = 376) =>
  `data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==`;

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
      width: 100%;
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
  </style>
  <axa-carousel
    mode="all"
    autorotatedisabled
    keysenabled
    arrowstyle="border-color: #7f7f7f"
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
          srcset="${placeHolderImage()}"
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
          srcset="${placeHolderImage()}"
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
          srcset="${placeHolderImage()}"
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
          srcset="${placeHolderImage()}"
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
