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
import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXAFooter extends LitElement {
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

  getFooterIcons() {
    return html`
      <div>
        <strong class="o-footer__title o-footer__social-media-title">
          ${this.social.title}
        </strong>
        <ul class="o-footer__social-media-list">
          ${repeat(this.social.icons, icon => {
            return html`
              <li>
                <a
                  href="${icon.link}"
                  target="_blank"
                  @click="${ev => this.handleLinkClick(ev, icon.title)}"
                  >${svg([this.iconMap.get(icon.title) || ''])}</a
                >
              </li>
            `;
          })}
        </ul>
      </div>
    `;
  }

  getFooterContentList(contentItem) {
    return html`
      <ul
        class="o-footer__accordion-content-panel o-footer__accordion-content-panel${contentItem.active
          ? '--open'
          : ''}"
      >
        ${repeat(
          contentItem.items,
          i =>
            html`
              <li class="o-footer__accordion-content-panel-list-item">
                <a
                  href=${i.link}
                  target="${i.external ? '_blank' : '_top'}"
                  @click="${ev => this.handleLinkClick(ev, i.text)}"
                  >${i.text}</a
                >
              </li>
            `
        )}
      </ul>
    `;
  }

  getFooterHeader(contentItem, index) {
    return html`
      <strong class="o-footer__title-desktop">${contentItem.title}</strong>
      <button
        class="o-footer__accordion-content"
        @click="${ev => this.handleClick(ev, index)}"
      >
        <strong class="o-footer__title">
          ${contentItem.title}
        </strong>
        <span
          class="o-footer__accordion-content-caret o-footer__accordion-content-caret${contentItem.active
            ? '--open'
            : ''}"
          >${svg([CaretSvg || ''])}</span
        >
      </button>
    `;
  }

  render() {
    return html`
      <footer class="o-footer">
        <axa-container>
          <div class="o-footer__mobile">
            <div class="o-footer__collection">
              ${repeat(
                this.content,
                (contentItem, index) =>
                  html`
                    <div class="o-footer__accordion">
                      ${this.getFooterHeader(contentItem, index)}
                      ${this.getFooterContentList(contentItem)}
                    </div>
                  `
              )}
              ${this.getFooterIcons()}
            </div>
          </div>

          <div class="o-footer__non-mobile">
            <div class="o-footer__collection">
              ${repeat(
                this.content,
                (contentItem, index) =>
                  html`
                    <div class="o-footer__accordion">
                      ${this.getFooterHeader(contentItem, index)}
                      ${this.getFooterContentList(contentItem)}
                    </div>
                  `
              )}
            </div>
            ${this.getFooterIcons()}
          </div>
        </axa-container>
      </footer>
    `;
  }
}

defineOnce(AXAFooter.tagName, AXAFooter);

export default AXAFooter;
