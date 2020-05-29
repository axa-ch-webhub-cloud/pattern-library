import React from 'react';
import { Link } from 'gatsby';

import GitHubButton from 'react-github-button';
import GitHubIcon from './GitHubIcon';
import SlackIcon from './SlackIcon';
import LogoBranding from './LogoBranding';

import { githubCodebaseUrl, social } from '../../siteConfig';

// eslint-disable-next-line import/no-unassigned-import
import 'react-github-button/assets/style.css';
import { NativeLink } from './NativeLinks';

export default function TopBar() {
  return (
    <div className="TopBar">
      <Link to="/" className="focus-ring-link">
        <LogoBranding width={36}></LogoBranding>
      </Link>

      <nav className="TopBar-nav">
        <Link to="/start" className="TopBar-link" activeClassName="is-active">
          Get Started
        </Link>
        <Link
          className="TopBar-link"
          activeClassName="is-active"
          to="/components"
        >
          Components
        </Link>
        <Link
          className="TopBar-link TopBar-link--icon"
          activeClassName="is-active"
          to="/for-designers"
        >
          <span>For Designers</span>
        </Link>
      </nav>
      <div className="TopBar-navRight">
        <GitHubButton
          type="stargazers"
          namespace="axa-ch"
          repo="patterns-library"
        />
        <a
          className="TopBar-link TopBar-link--icon"
          href={social.slackUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-holder">
            <SlackIcon />
          </span>
          <span className="hide-on-mobile">Slack</span>
        </a>

        <NativeLink
          className="TopBar-link TopBar-link--icon"
          href={githubCodebaseUrl}
        >
          <span className="icon-holder">
            <GitHubIcon />
          </span>
          <span className="hide-on-mobile">GitHub</span>
        </NativeLink>
      </div>
    </div>
  );
}
