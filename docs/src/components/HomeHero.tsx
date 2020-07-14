import React from 'react';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';

import spotIllustration from '../images/axa-design-illustration.png';
import GitHubIcon from './GitHubIcon';
import { githubCodebaseUrl } from '../../siteConfig';
import { Button } from '../patterns';

export default function HomeHero() {
  return (
    <section className="Hero">
      <div className="Hero-inner">
        <div className="Hero-left">
          <div className="kicker">Have a perfect start</div>
          <h1 className="heading">
            New to the AXA
            <br />
            Design System?
          </h1>
          <p className="text-neutral-600">
            Check out our introduction guide on our guidelines,
            <br />
            components and key concepts.
          </p>
          <div style={{ display: 'flex' }}>
            <Link to="/start" style={{ marginRight: 32 }}>
              <Button size="large">Get started</Button>
            </Link>
            <Button
              variant="secondary"
              size="large"
              onClick={() => {
                navigate(githubCodebaseUrl);
              }}
            >
              <GitHubIcon
                width="16"
                height="16"
                style={{
                  marginRight: 10,
                }}
              />
              GitHub
            </Button>
          </div>
        </div>
        <div className="Hero-right">
          <img
            src={spotIllustration}
            alt="AXA Design System illustration"
            height="396"
          />
        </div>
      </div>
    </section>
  );
}
