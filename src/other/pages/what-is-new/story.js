import { html, render } from 'lit';
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
    knobs: { disable: true },
    readme: { disable: true },
    usage: { disable: true },
    changelog: { disable: true },
    options: { showPanel: false },
    layout: 'fullscreen',
  },
};

export const WhatsNew = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('accessory-story-wrapper');

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      const responseJson = JSON.parse(xhttp.responseText);
      document.querySelector('#what-is-new__github-response').innerHTML =
        getFormattedGitCommitMessage(responseJson);
      document.querySelector('#what-is-new__github-response-date').innerHTML =
        getDateFromGitCommit(responseJson);
    }
  };
  xhttp.open(
    'GET',
    'https://api.github.com/search/commits?q=repo:axa-ch-webhub-cloud/pattern-library+Publish&sort=author-date&order=desc',
    true
  );
  xhttp.setRequestHeader('Accept', 'application/vnd.github.cloak-preview');
  xhttp.send();

  const template = html`
    <style>
      ${styles}
    </style>
    <div class="accessory-story-wrapper">
    <div class="accessory-story-content">
      <axa-heading size="1" secondary>What's new</axa-heading>
      <axa-text size="2">
        Here you will find the latest updates on AXA Design System
        development.
      </axa-text>
      <axa-heading size="2" secondary>Update log</axa-heading>
      <axa-heading size="5">Component versioning is now live!</axa-heading>
      <p class="what-is-new__text-with-link">
        We are happy to announce that we now support component versioning!
        Our solution automatically injects package.json version information into component code at build time. Additionally, by making components version-aware at runtime, we can dynamically name custom element to include version information.
        For more information check out
        <axa-link href="https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/COMPONENT_VERSIONING.md">Introduction</axa-link>.
      </p>
      
      <axa-heading size="2" secondary>Last releases</axa-heading>
      <axa-heading size="6" class="what-is-new__response-date"><span id="what-is-new__github-response-date"></axa-heading>
      <axa-text size="2"><span id="what-is-new__github-response"></span></axa-text>
    </div>
    <pl-contact-footer></pl-contact-footer>
    </div>
  `;

  render(template, wrapper);
  return wrapper;
};

WhatsNew.storyName = "What's new";
