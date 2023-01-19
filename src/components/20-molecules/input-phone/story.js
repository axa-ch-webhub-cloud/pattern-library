import { html } from 'lit';
import { args, argTypes } from './story.args.js';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index.wc.js';

export default {
  title: 'Components',
  parameters: {
    readme,
    changelog,
  },
  args,
  argTypes,
};

export const InputPhone = ({
  lang,
  label,
  error,
  countrycode,
  value,
  disabled,
  countryflags,
}) => html`
  <axa-input-phone
    lang="${lang}"
    label="${label}"
    error="${error}"
    countrycode="${countrycode}"
    value="${value}"
    ?disabled="${disabled}"
    ?countryflags="${countryflags}"
  ></axa-input-phone>
`;
