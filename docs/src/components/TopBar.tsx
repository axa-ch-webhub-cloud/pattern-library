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
      <Link to="/">
        <LogoBranding width={36}></LogoBranding>
      </Link>

      <nav className="TopBar-nav"></nav>
      <div className="TopBar-navRight">
        <NativeLink
          className="TopBar-link TopBar-link--icon"
          href="https://design.axa.com/"
        >
          <span>Axa Digital Guidelines</span>
        </NativeLink>

        <NativeLink
          className="TopBar-link TopBar-link--icon"
          href="https://brandhub.axa.com/"
        >
          <span>AXA Brand Hub</span>
        </NativeLink>
      </div>
    </div>
  );
}
