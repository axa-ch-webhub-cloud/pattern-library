import { html } from 'lit-html';

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
      ><picture class="m-related-content__picture">
        <img
          class="m-related-content__image"
          src="https://picsum.photos/id/1011/480/376"
        />
      </picture>
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
      ><picture class="m-related-content__picture">
        <img
          class="m-related-content__image"
          src="https://picsum.photos/id/1001/480/376"
        />
      </picture>
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
      ><picture class="m-related-content__picture">
        <img
          class="m-related-content__image"
          src="https://picsum.photos/id/1018/480/376"
        />
      </picture>
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
      ><picture class="m-related-content__picture">
        <img
          class="m-related-content__image"
          src="https://picsum.photos/id/102/480/376"
        />
      </picture>
      <div class="m-related-content__content">
        <p class="m-related-content__caption">
          Grund- und Zusatzversicherung: Hilft separat versichern beim Sparen?
        </p>
        <h3 class="m-related-content__text">Gesundheit</h3>
      </div>
    </a>
  </axa-carousel>
`;
