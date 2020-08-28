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
    <axa-heading rank="1">AXA’s Design System 🚀</axa-heading>
    <axa-text variant="size-3">
      Welcome to the Design System of AXA Switzerland. Our Pattern Library
      provides components and tools to help product teams work more efficiently,
      and to make AXA’s applications more cohesive.
    </axa-text>
    <axa-commercial-hero-banner
      variant="light"
      imagesource="https://drive.google.com/uc?export=view&id=1CZAbIBfCiH0aRhMoFtpOT4wXCLSxnY-1"
    >
      <header slot="title">
        <p>HAVE A PERFECT START</p>
        <h1>New to the AXA Design System?</h1>
      </header>
      <p slot="content">
        Check out our introduction guide on our guidelines, components and key
        concepts
      </p>
      <div slot="button">
        <axa-button-link href="https://axa.ch" variant="" size="large"
          >GET STARTED</axa-button-link
        >
        <axa-button-link
          href="https://axa.ch"
          variant="secondary"
          size="large"
          icon="upload"
          >GITHUB</axa-button-link
        >
      </div>
    </axa-commercial-hero-banner>
    <axa-heading rank="2">Last releases</axa-heading>
    <axa-heading rank="6"><span id="githubResponseDate"></axa-heading>
    <axa-text><span id="githubResponse"></span></axa-text>
    <section class="PageCallToAction">
      <div class="PageCallToAction-inner">
        <div>
          <p class="landingpage-questions-subtitle">Help & Contact</p>
          <axa-heading rank="4" variant="secondary">Any question?<axa-heading>
        </div>
        <axa-button-link href="/contact" variant="inverted"
          >Get in touch</axa-button-link
        >
      </div>
    </section>
    
    <style>
    
.landingpage-questions-subtitle {
    text-transform: uppercase;
    overflow-wrap: break-word;
}

.PageCallToAction {
    padding: 20px 40px;
    background-color: #333;
    color: #fff;
}
  
.PageCallToAction-inner {
    padding-left: 96px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 960px;
}</style>
  `;

  render(template, wrapper);
  return wrapper;
};

ToPatternLibrary.story = {
  name: 'to Pattern Library',
};
