import React from 'react';
import { createReactContainer } from '../../../utils/create-react-container';
import dependents from '../../../../dependents/data/dependents-analyse.json';
import '../../../components/10-atoms/text';
import '../../../components/10-atoms/heading';
import '../../../components/20-molecules/accordion';
import '../../../components/20-molecules/list';
import styles from './dependents.scss';

export default {
  title: 'Others/Dependents',
  parameters: {
    controls: { disable: true },
    readme: { disable: true },
    usage: { disable: true },
    changelog: { disable: true },
    options: { showPanel: false },
    layout: 'fullscreen',
  },
};

export const Dependents = () =>
  createReactContainer(
    <div>
      <style>{styles}</style>
      <div className="information-bar">
        <axa-text size={3}>Dependents: {dependents.length}</axa-text>
        <axa-text size={3}>
          Polyfill usage:{' '}
          {dependents.reduce((a, v) => (v.usePolyfill ? a + 1 : a), 0)}
        </axa-text>
        <axa-text size={3}>
          React usage:{' '}
          {dependents.reduce((a, v) => (v.useReact ? a + 1 : a), 0)}
        </axa-text>
        <axa-text size={3}>
          Webcomponents usage:{' '}
          {dependents.reduce((a, v) => (v.useWebcomponents ? a + 1 : a), 0)}
        </axa-text>
        <axa-text size={3}>
          native iife usage:{' '}
          {dependents.reduce((a, v) => (v.useNativeIife ? a + 1 : a), 0)}
        </axa-text>
      </div>
      <div className="dependents-wrapper">
        {dependents.map(dependent => (
          <axa-accordion title={dependent.name}>
            <axa-list size={3}>
              {dependent.useReact && <li>React usage</li>}
              {dependent.useWebcomponents && <li>Webcomponents usage</li>}
              {dependent.useNativeIife && <li>native iife usage</li>}
              {dependent.usePolyfill && <li>Polyfill usage</li>}
              <li>
                <axa-text size={3}>
                  Components usage: {Object.keys(dependent.components).length}
                </axa-text>
                <axa-list>
                  {Object.keys(dependent.components).map(name => (
                    <li>{`${name}: ${dependent.components[name]}`}</li>
                  ))}
                </axa-list>
              </li>
            </axa-list>
          </axa-accordion>
        ))}
      </div>
    </div>
  );
