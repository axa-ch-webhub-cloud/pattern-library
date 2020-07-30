import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import Readme from '../../../README.md';
import '../../components/10-atoms/text';
import '../../components/10-atoms/heading';

const story = storiesOf('Welcome', module);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
  knobs: { disabled: true },
  changelog: { disabled: true },
  codepreview: { disabled: true },
  a11y: { disabled: true },
});

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

story.add('to Pattern Library', () => {
  const wrapper = document.createElement('div');

  // eslint-disable-next-line no-undef
  fetch(
    'https://api.github.com/search/commits?q=repo:axa-ch/patterns-library+Publish&sort=author-date&order=desc',
    {
      headers: {
        Accept: 'application/vnd.github.cloak-preview',
      },
    }
  )
    .then(val => {
      if (!val.ok) {
        throw new Error('Network response was not ok. ');
      }
      return val.json();
    })
    .then(data => {
      document.querySelector(
        '#githubResponse'
      ).innerHTML = getFormattedGitCommitMessage(data);
      document.querySelector(
        '#githubResponseDate'
      ).innerHTML = getDateFromGitCommit(data);
    })
    .catch(error => {
      throw new Error(
        'There has been a problem with your fetch operation:',
        error
      );
    });

  const template = html`
    <axa-heading rank="2">Welcome to the Pattern Library!</axa-heading>
    <axa-text variant="size-3">
      You can find all our Webcomponents here. Check out our Readme below.
    </axa-text>
    <axa-heading rank="3">Our latest releases:</axa-heading>
    <axa-heading rank="6"><span id="githubResponseDate"></axa-heading>
    <axa-text><span id="githubResponse"></span></axa-text>
  `;

  render(template, wrapper);
  return wrapper;
});
