import React, { ReactElement } from 'react';
import { useLocation } from '@reach/router';

interface Props {
  currentPath: string;
}

import brandSystem from '../images/introduction/constant.svg';
import atomIcon from '../images/icons/atom.svg';
import moleculeIcon from '../images/icons/molecule.svg';
import organismIcon from '../images/icons/organism.svg';

export default function InfoBar({ currentPath }: Props): ReactElement {
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
            location.pathname === '/atom' ? 'is-current' : null
          }`}
        >
          <img src={atomIcon} className="InfoBar-image" alt="Atoms" />
          <div className="kicker font-bold mb-0">Atoms</div>
        </div>
        <div
          className={`col InfoBar-item ${
            location.pathname === '/molecule' ? 'is-current' : null
          }`}
        >
          <img src={moleculeIcon} className="InfoBar-image" alt="Molecules" />
          <div className="kicker font-bold mb-0">Molecules</div>
        </div>
        <div
          className={`col InfoBar-item ${
            location.pathname === '/organism' ? 'is-current' : null
          }`}
        >
          <img src={organismIcon} className="InfoBar-image" alt="Organism" />
          <div className="kicker font-bold mb-0">Organism</div>
        </div>
      </div>
    </div>
  );
}
