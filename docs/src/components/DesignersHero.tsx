import React from 'react';
import { withPrefix } from 'gatsby';
import { navigate } from '@reach/router';

import spotIllustration from '../images/sketch-hero.png';
import sketchIcon from '../images/icons/sketch.png';

// TODO
// import Button from './Button';

export default function DesignersHero() {
  return (
    <section className="Hero">
      <div className="Hero-inner">
        <div className="Hero-left">
          <h1>AXA Design System for Designers</h1>
          <p>
            Design products and side-projects with our official design resource
            for the AXA products.
          </p>
          <div>
            {/* <Button
              variant="secondary"
              onClick={() => {
                navigate(withPrefix('/axa-design-system-v3.sketch'));
              }}
            >
              <img
                src={sketchIcon}
                height="16"
                style={{
                  marginRight: 10,
                  marginLeft: -2,
                }}
              />
              Download Sketch UI Kit
            </Button> */}
          </div>
        </div>
        <div className="Hero-right" style={{ marginBottom: -80 }}>
          <img
            src={spotIllustration}
            alt="AXA Design spot illustration"
            style={{ width: 540 }}
          />
        </div>
      </div>
    </section>
  );
}
