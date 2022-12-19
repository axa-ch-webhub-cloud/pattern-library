import { html } from 'lit';
import { args, argTypes } from './story.args.js';
import readme from './README.md';
import changelog from './CHANGELOG.md';
import './index.wc.js';

export default {
  title: 'Components/Accordion',
  parameters: {
    readme,
    usage: {
      componentName: 'accordion',
    },
    changelog,
  },
  args,
  argTypes,
};

export const Accordion = ({
  disabled,
  open,
  title,
  small,
  icon,
  ariaLevel,
}) => {
  const exampleIcon1 =
    '<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M57 6.45A17.44 17.44 0 0167.16 5.3a8.22 8.22 0 015.71 4.84l7.53 1.51a2 2 0 011.24.71 1.72 1.72 0 01.49 1.29 10.32 10.32 0 01-4.4 8.73 16.47 16.47 0 01-6.94 2.86 2.05 2.05 0 00-1.21.69 2.001 2.001 0 00-.4.53 1.69 1.69 0 00-.18.7v.06l-.72 7.24a9.69 9.69 0 002 4.18c4.83 8.77-2.6 19.65-4 21.83a16.12 16.12 0 00-.94 1.76c0 .44-.07.87-.09 1.3A67.464 67.464 0 0065 71.3a15.14 15.14 0 003.94 9.7c2.23 2.09 4 5.2 3.8 7-.36 1.47-1.12 2.31-3.44 2.35-1.79-.16-2.53-1.31-5-4.92-2.63-3.88-6.94-10.22-7-10.42m-16.18-5.66a9.82 9.82 0 019.39-3.43c5 .79 8.66 5.52 5.76 14.36a40.241 40.241 0 01-1.56 4.18c2.9-.13 9.89-2.54 10.1 2.89a3.72 3.72 0 01-.46 1.83c-1.86 3.07-13.42 1.55-21.39.52a82.816 82.816 0 00-9.5-.52c-7.35-.05-11.37-.49-17-4.77-5.63-4.28-7.37-14.53-6.3-20.35 1.2-6.51 8-13.36 9-16.05 1.49-4 1.29-7.91-1.6-13.19 8.56 4.273 9.707 12.16 3.44 23.66-3.453 7.12-3.787 13.363-1 18.73 1.58 3.013 3.217 5.067 4.91 6.16 0-10.78 2-19.953 6-27.52 1.42-2.667 4.04-6.887 7.86-12.66 4.14-5.647 6.64-9.003 7.5-10.07a16.51 16.51 0 003.54-8.47c.14-.83.53-4.16.56-5.55" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M68.28 34.77A30.211 30.211 0 0156.15 36a32.09 32.09 0 01-9.86-2.9m2.78-5.1s10.21 5 19.74 1.15M52.05 11.23l1.22-1.87A10.43 10.43 0 0157 6.45 49.001 49.001 0 0161.14 13c1.813 3.507 2.703 6.507 2.67 9a1 1 0 01-.18.41c-.088.125-.2.23-.33.31-1.77.678-3.676.925-5.56.72a11.56 11.56 0 01-7.35-4.27c.06-2.726.623-5.418 1.66-7.94z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M68.56 13.37a.6.6 0 100-1.2.6.6 0 000 1.2z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"/></svg>';
  const exampleIcon2 =
    '<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.24 67h32.52M32 72h29-29zm-8 8a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 75a3 3 0 100-6 3 3 0 000 6zm45 5a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M69 75a3 3 0 100-6 3 3 0 000 6zm18-8V54l-5.36-17.42A12.15 12.15 0 0070 28H57v39m20 5h9.5a2.5 2.5 0 000-5H75.24L77 72zm-61 0h-5.5a2.5 2.5 0 010-5h7.26L16 72z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M65 54h2M10 67V28a5 5 0 015-5h37a5 5 0 015 5m30 28h-3a3 3 0 000 6h3m-2.15-13h-16A4.801 4.801 0 0164 44.2V36a2 2 0 012-2h14.5l4.35 15z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M63 28v-1a4 4 0 118 0v1M44 41h-6v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6h-6a1 1 0 00-1 1v6a1 1 0 001 1h6v6a1 1 0 001 1h6a1 1 0 001-1v-6h6a1 1 0 001-1v-6a1 1 0 00-1-1z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  return html`
    <axa-accordion
      ?small="${small}"
      ?open="${open}"
      ?disabled="${disabled}"
      icon="${icon}"
      title="${title}"
      ariaLevel="${ariaLevel}"
    >
      Welcome to the website. If you're here, you're likely looking to find
      random words. Random Word Generator is the perfect tool to help you do
      this. While this tool isn't a word creator, it is a word generator that
      will generate random words for a variety of activities or uses.
    </axa-accordion>
    <axa-accordion
      title="This is the title of the second Accordion"
      icon="${exampleIcon1}"
      ?small="${small}"
      ?disabled="${disabled}"
    >
      Residence certainly elsewhere something she preferred cordially law. Age
      his surprise formerly mrs perceive few stanhill moderate. Of in power
      match on truth worse voice would. Large an it sense shall an match learn.
      By expect it result silent in formal of. Ask eat questions abilities
      described elsewhere assurance. Appetite in unlocked advanced breeding
      position concerns as. Cheerful get shutters yet for repeated screened. An
      no am cause hopes at three. Prevent behaved fertile he is mistake on.
    </axa-accordion>
    <axa-accordion
      title="This is the title of the third Accordion"
      icon="${exampleIcon2}"
      ?small="${small}"
      ?disabled="${disabled}"
    >
      Luckily friends do ashamed to do suppose. Tried meant mr smile so.
      Exquisite behaviour as to middleton perfectly. Chicken no wishing waiting
      am. Say concerns dwelling graceful six humoured. Whether mr up savings
      talking an. Active mutual nor father mother exeter change six did all.
    </axa-accordion>
  `;
};
