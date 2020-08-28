import { html, render } from 'lit-html';
import '../../components/10-atoms/text';
import '../../components/10-atoms/heading';

export default {
  title: 'Welcome',
  decorators: [],
  parameters: {
    knobs: { disabled: true },
    changelog: { disabled: true },
    codepreview: { disabled: true },
    a11y: { disabled: true },
  },
};

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

export const ToPatternLibrary = () => {
  const wrapper = document.createElement('div');

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
    <axa-heading rank="3">Welcome to AXA’s Design System 🚀</axa-heading>
    <axa-text variant="size-3">
      Welcome to the Design System of AXA Switzerland. Our Pattern Library
      provides components and tools to help product teams work more efficiently,
      and to make AXA’s applications more cohesive.
    </axa-text>
    <axa-heading rank="3">Latest Releases:</axa-heading>
    <axa-heading rank="6"><span id="githubResponseDate"></axa-heading>
    <axa-text><span id="githubResponse"></span></axa-text>
    <axa-heading rank="4">How to contribute</axa-heading>
    <axa-text variant="size-3">
      Whether you are helping us to fix bugs, or you are more into creating
      components, we would love to have you as
      <axa-link
        href="https://github.com/axa-ch/patterns-library/blob/develop/CONTRIBUTION.md"
        >contributer</axa-link
      >
      of the AXA Pattern Library! Check out our Contributing Guide for ideas on
      contributing and setup steps for getting the repository up and running on
      your local machine.
    </axa-text>

    <axa-heading rank="4">Contact</axa-heading>
  `;

  render(template, wrapper);
  return wrapper;
};

ToPatternLibrary.story = {
  name: 'to Pattern Library',
};
