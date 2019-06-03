// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import {
  FacebookSvg,
  InstagramSvg,
  TwitterSvg,
  XingSvg,
  YoutubeSvg,
  LinkedinSvg,
  CaretSvg,
} from '@axa-ch/materials';
import '@axa-ch/container';
import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import defineOnce from '../../../utils/define-once';
import NoShadowDOM from '../../../utils/no-shadow';
import styles from './index.scss';

class AXAFooter extends NoShadowDOM {
  static get tagName() {
    return 'axa-footer';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      content: { type: Array },
      social: { type: Object },
      dynamic: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.content = [];
    this.social = {};
    this.dynamic = false;
    this.onItemClick = () => {};

    this.iconMap = new Map();
    this.iconMap.set('facebook', FacebookSvg);
    this.iconMap.set('instagram', InstagramSvg);
    this.iconMap.set('twitter', TwitterSvg);
    this.iconMap.set('xing', XingSvg);
    this.iconMap.set('youtube', YoutubeSvg);
    this.iconMap.set('linkedin', LinkedinSvg);
  }

  handleClick(e, index) {
    e.stopPropagation();
    const oldState = this.content[index].active;
    this.content = this.content.map(c => {
      c.active = false;
      return c;
    });

    this.content[index].active = !oldState;
  }

  handleLinkClick = (ev, text) => {
    if (this.dynamic) {
      ev.preventDefault();
      this.onItemClick(text);
      this.dispatchEvent(
        new CustomEvent('axa-link-click', {
          detail: text,
          bubbles: true,
          cancelable: true,
        })
      );
    }
  };
}

/* <footer class="o-footer">
<axa-container>
  <div class="o-footer__content">
    <slot></slot>
  </div>
</axa-container>
</footer> */

// AXAFooter.styles = css`
//   axa-footer {
//   }
// `;

defineOnce(AXAFooter.tagName, AXAFooter);

export default AXAFooter;
