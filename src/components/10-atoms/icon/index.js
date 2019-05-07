import { LitElement, svg } from 'lit-element';
// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import {
  ArrowRightSvg,
  CollapseSvg,
  DownloadSvg,
  EmailSvg,
  ExpandSvg,
  PhoneSvg,
  PlusSvg,
  SearchSvg,
  UploadSvg,
} from '@axa-ch/materials';
import defineOnce from '../../../utils/define-once';
import '../../../utils/polyfills';

class AXAIcon extends LitElement {
  static get tagName() {
    return 'axa-icon';
  }

  static get iconsMapping() {
    return {
      'arrow-right': ArrowRightSvg,
      collapse: CollapseSvg,
      download: DownloadSvg,
      email: EmailSvg,
      expand: ExpandSvg,
      phone: PhoneSvg,
      plus: PlusSvg,
      search: SearchSvg,
      upload: UploadSvg,
    };
  }

  static get properties() {
    return {
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.icon = '';
  }

  connectedCallback() {
    super.connectedCallback();

    const { icon } = this;

    if (/\.svg/.test(icon)) {
      const req = new XMLHttpRequest();
      req.open('GET', icon);
      req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
          this.shadowRoot.innerHTML = req.response;
        }
      };

      req.send();
    }
  }

  render() {
    return svg([AXAIcon.iconsMapping[this.icon] || '']);
  }
}

defineOnce(AXAIcon.tagName, AXAIcon);

export default AXAIcon;
