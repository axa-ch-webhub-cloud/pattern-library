import React, { ReactElement } from 'react';
import { useLocation } from '@reach/router';

import brandSystem from '../images/icons/constant-infobar.svg';
import atomIcon from '../images/icons/atom.svg';
import moleculeIcon from '../images/icons/molecule.svg';
import organismIcon from '../images/icons/organism.svg';

export default function InfoBar(): ReactElement {
  const location = useLocation();

  return (
    <div className="InfoBar">
      <div className="InfoBar-container flex">
        <div
          className={`col InfoBar-item ${
            location.pathname === '/elevation' ||
            location.pathname === '/grid' ||
            location.pathname === '/typography' ||
            location.pathname === '/colors'
              ? 'is-current'
              : null
          }`}
          style={{ flex: 1.5 }}
        >
          <img
            src={brandSystem}
            className="InfoBar-image"
            alt="Brand"
            style={{ marginRight: 24 }}
          />
          <div className="kicker font-bold mb-0">Brand identity elements</div>
        </div>
        <div
          className={`col InfoBar-item ${
            location.pathname === '/components/button' ||
            location.pathname === '/components/button-link' ||
            location.pathname === '/components/checkbox' ||
            location.pathname === '/components/images' ||
            location.pathname === '/components/input' ||
            location.pathname === '/components/logo' ||
            location.pathname === '/components/textarea'
              ? 'is-current'
              : null
          }`}
        >
          <img src={atomIcon} className="InfoBar-image" alt="Atoms" />
          <div className="kicker font-bold mb-0">Atoms</div>
        </div>
        <div
          className={`col InfoBar-item ${
            location.pathname === '/components/hero' ||
            location.pathname === '/components/datepicker' ||
            location.pathname === '/components/footer'
              ? 'is-current'
              : null
          }`}
        >
          <img src={moleculeIcon} className="InfoBar-image" alt="Molecules" />
          <div className="kicker font-bold mb-0">Molecules</div>
        </div>
        <div
          className={`col InfoBar-item ${
            location.pathname === '/components/login' ? 'is-current' : null
          }`}
        >
          <img src={organismIcon} className="InfoBar-image" alt="Organism" />
          <div className="kicker font-bold mb-0">Organism</div>
        </div>
      </div>
    </div>
  );
}
