import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import '../../../components/10-atoms/heading';
import '../../../components/10-atoms/text';
import '../utils/contact-footer';
import styles from './index.scss';

const getFormattedGitCommitMessage = answerJson => {
  const keyword = 'Publish\n\n - ';
  for (let i = 0; i < answerJson.items.length; ++i) {
    if (answerJson.items[0].commit.message.startsWith(keyword)) {
      const formattedMessage = answerJson.items[0].commit.message.replace(
        keyword,
        ''
      );
      return formattedMessage;
    }
  }
  return '';
};

const getDateFromGitCommit = answerJson => {
  const formattedDate = new Date(answerJson.items[0].commit.author.date);
  return formattedDate.toLocaleString(navigator.language);
};

storiesOf('Welcome', module)
  .addParameters({
    decorators: [],
    parameters: {
      knobs: { disabled: true },
      readme: { disabled: true },
      changelog: { disabled: true },
      codepreview: { disabled: true },
      a11y: { disabled: true },
      options: { showPanel: false },
      layout: 'fullscreen',
    },
  })
  .add('What is new', () => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('accessory-story-wrapper');

    const xhttp = new XMLHttpRequest();
    // eslint-disable-next-line func-names
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const responseJson = JSON.parse(xhttp.responseText);
        document.querySelector(
          '#what-is-new__github-response'
        ).innerHTML = getFormattedGitCommitMessage(responseJson);
        document.querySelector(
          '#what-is-new__github-response-date'
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
      <p class="what-is-new__text-with-link">
        We are happy to announce that we now support component versioning!
        Our solution automatically injects package.json version information into component code at build time. Additionally, by making components version-aware at runtime, we can dynamically name custom element to include version information.
        For more information check out
        <axa-link href="https://github.com/axa-ch/patterns-library/blob/develop/COMPONENT_VERSIONING.md">Introduction</axa-link>.
      </p>
      
      <axa-heading rank="2" variant="secondary">Last releases</axa-heading>
      <axa-heading rank="6" class="what-is-new__response-date"><span id="what-is-new__github-response-date"></axa-heading>
      <axa-text variant="size-2"><span id="what-is-new__github-response"></span></axa-text>
    </div>
    <pl-contact-footer></pl-contact-footer>
  `;

    render(template, wrapper);
    return wrapper;
  });
