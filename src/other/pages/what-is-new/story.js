import { html, render } from 'lit-html';
import '../../../components/10-atoms/text';
import '../../../components/10-atoms/heading';
import styles from './index.scss';
import contact from '../utils/contact-footer';

const getFormattedGitCommitMessage = answerJson => {
  const formattedMessage = answerJson.items[0].commit.message
    .replace('Publish\n\n', '')
    .replace(/- /g, '<br/>');
  return formattedMessage;
};

const getDateFromGitCommit = answerJson => {
  const formattedDate = new Date(answerJson.items[0].commit.author.date);
  return formattedDate.toLocaleString(navigator.language);
};

export default {
  title: 'Welcome',
  decorators: [],
  parameters: {
    knobs: { disabled: true },
    changelog: { disabled: true },
    codepreview: { disabled: true },
    a11y: { disabled: true },
    options: { showPanel: false },
  },
};

export const WhatIsNew = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('accessory-story-wrapper');

  const xhttp = new XMLHttpRequest();
  // eslint-disable-next-line func-names
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const responseJson = JSON.parse(xhttp.responseText);
      document.querySelector(
        '#githubResponse'
      ).innerHTML = getFormattedGitCommitMessage(responseJson);
      document.querySelector(
        '#githubResponseDate'
      ).innerHTML = getDateFromGitCommit(responseJson);
    }
  };
  xhttp.open(
    'GET',
    'https://api.github.com/search/commits?q=repo:axa-ch/patterns-library+Publish&sort=author-date&order=desc',
    true
  );
  xhttp.setRequestHeader('Accept', 'application/vnd.github.cloak-preview');
  xhttp.send();

  const template = html`
    <style>
      ${styles}
    </style>
    <div class="accessory-story-content">
      <axa-heading rank="1" variant="secondary">What's new</axa-heading>
      <axa-text variant="size-2">
        Here you will find the latest updates on the AXA Design System
        development.
      </axa-text>
      <axa-heading rank="2" variant="secondary">Update log</axa-heading>
      <axa-heading rank="5">Component versioning is now live!</axa-heading>
      <p class="what-is-new__text-with-link">
        We are happy to introduce to you that we support component versioning.
        Our solution automatically injects package.json version information into component code at build time. With PL components now being version-aware at runtime, we can rewrite custom element names under the hood to include version information.
        For more information check out our
        <axa-link href="https://github.com/axa-ch/patterns-library/blob/develop/COMPONENT_VERSIONING.md">Introduction</axa-link>.
      </p>
      
      <axa-heading rank="2" variant="secondary">Last releases</axa-heading>
        <axa-heading rank="6"><span id="githubResponseDate"></axa-heading>
        <axa-text variant="size-2"><span id="githubResponse"></span></axa-text>
    </div>
    ${contact}
  `;

  render(template, wrapper);
  return wrapper;
};
