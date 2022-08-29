import { html } from 'lit';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

const variants = {
  default: '',
  ordered: 'ordered',
  unstyled: 'unstyled',
  icon: 'icon',
};

export default {
  title: 'Components/List',
  parameters: {
    readme,
    usage: {
      innerHTML: `
      <li>Hello</li>
      <li>World</li>
      `,
    },
    changelog,
  },
  args: {
    variant: 'default',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="%231cc54e" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: Object.keys(variants),
      mapping: variants,
      labels: variants,
    },
    icon: { control: 'text' },
  },
};

export const List = ({ variant, icon }) => html`
  <axa-list variant="${variant}" icon="${icon}">
    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>
      Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris
      sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui
      placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies
      in, diam. Sed arcu. Cras consequat.
    </li>
    <li>Nunc dignissim risus id metus.</li>
    <li>Cras ornare tristique elit.</li>
    <li>Vivamus vestibulum ntulla nec ante.</li>
    <li>Praesent placerat risus quis eros.</li>
    <li>Fusce pellentesque suscipit nibh.</li>
    <li>Integer vitae libero ac risus egestas placerat.</li>
    <li>Vestibulum commodo felis quis tortor.</li>
    <li>Ut aliquam sollicitudin leo.</li>
    <li>
      Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
      Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae,
      eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
      tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus
      ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
      vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a,
      sodales sit amet, nisi.
    </li>
    <li>Donec quis dui at dolor tempor interdum.</li>
  </axa-list>
`;
