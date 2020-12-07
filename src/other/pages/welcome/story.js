import { html, render } from 'lit-html';
import '../../../components/10-atoms/heading';
import '../../../components/10-atoms/text';
import '../utils/contact-footer';
import styles from './index.scss';

const getFormattedGitCommitMessage = answerJson => {
  const keyword = 'Publish\n\n - ';
  const seperator = '<br>';

  if (
    answerJson.items.length > 0 &&
    answerJson.items[0].commit.message.startsWith(keyword)
  ) {
    const formattedMessage = answerJson.items[0].commit.message
      .replace(keyword, '')
      .replace(/ - /g, seperator);

    return formattedMessage;
  }

  return '';
};

const getDateFromGitCommit = answerJson => {
  const formattedDate = new Date(answerJson.items[0].commit.author.date);
  return formattedDate.toLocaleString(navigator.language);
};

export default {
  title: 'Welcome',
  decorators: [],
  parameters: {
    changelog: { disabled: true },
    controls: { disabled: true },
    codepreview: { disabled: true },
    a11y: { disabled: true },
    options: { showPanel: false },
    layout: 'fullscreen',
  },
};

export const ToPatternLibrary = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('accessory-story-wrapper');

  const internalLink = `${window.location.href.replace(
    /\/[^/]*$/,
    ''
  )}/?path=/story/guides-getting-started--getting-started`;

  const template = html`
    <style>
      ${styles}
    </style>
    <div class="accessory-story-content">
      <axa-heading rank="1" variant="secondary"
        >AXA Design System 🚀</axa-heading
      >
      <axa-text variant="size-2">
        Welcome to the Design System of AXA Switzerland. Our Pattern Library
        provides components and tools to help product teams work more
        efficiently, and to make AXA web applications more visually cohesive.
      </axa-text>
      <axa-commercial-hero-banner variant="light">
        <header slot="title">
          <p>HAVE A PERFECT START</p>
          <h1>New to the AXA Design System?</h1>
        </header>
        <p slot="content">
          Check out our introductory guides for components, guidelines, and key
          concepts
        </p>
        <div
          class="welcome__commercial-hero-banner-button-wrapper"
          slot="button"
        >
          <axa-button-link
            href="https://github.com/axa-ch/patterns-library"
            size="large"
            style="padding-right:25px;"
            icon='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
            >GITHUB</axa-button-link
          >
          <axa-button-link
            href="${internalLink}"
            variant="secondary"
            size="large"
            >GETTING STARTED</axa-button-link
          >
          </div>
        </axa-commercial-hero-banner>
        <img
          class="welcome__commercial-hero-banner-image"
          src="axa-design-system-illustration.png"
          alt="Design system illustration"
        /><img />
      </div>
    </div>
    <pl-contact-footer></pl-contact-footer>
  `;

  render(template, wrapper);
  return wrapper;
};

ToPatternLibrary.story = {
  name: 'to Pattern Library',
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
        '#welcome__github-response'
      ).innerHTML = getFormattedGitCommitMessage(responseJson);
      document.querySelector(
        '#welcome__github-response-date'
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
        Here you will find the latest updates on AXA Design System
        development.
      </axa-text>
      <axa-heading rank="2" variant="secondary">Update log</axa-heading>
      <axa-heading rank="5">Component versioning is now live!</axa-heading>
      <p class="welcome__text-with-link">
        We are happy to announce that we now support component versioning!
        Our solution automatically injects package.json version information into component code at build time. Additionally, by making components version-aware at runtime, we can dynamically name custom element to include version information.
        For more information check out
        <axa-link href="https://github.com/axa-ch/patterns-library/blob/develop/COMPONENT_VERSIONING.md">Introduction</axa-link>.
      </p>
      
      <axa-heading rank="2" variant="secondary">Last releases</axa-heading>
      <axa-heading rank="6" class="welcome__response-date"><span id="welcome__github-response-date"></axa-heading>
      <axa-text variant="size-2"><span id="welcome__github-response"></span></axa-text>
    </div>
    <pl-contact-footer></pl-contact-footer>
  `;

  render(template, wrapper);
  return wrapper;
};
