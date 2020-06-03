import React, { PureComponent } from 'react';
import Sidebar from './Sidebar';

export default class GetStartedSidebar extends PureComponent {
  static defaultProps = {
    /**
     * Manually manage components for now
     */
    groups: [
      {
        title: 'AXA Design System',
        links: [
          {
            to: '/',
            label: 'Introduction',
          },
          {
            to: '/start',
            label: 'Getting started',
          },
          {
            to: '/structure',
            label: 'Structure approach',
          },
          {
            constants: [
              {
                to: '/typography',
                label: 'Typography',
              },
              {
                to: '/elevation',
                label: 'Elevation',
              },
              {
                to: '/components/colors',
                label: 'Colors',
              },
            ],
          },
          {
            atoms: [
              {
                to: '/components/button',
                label: 'Button',
              },
            ],
          },
          {
            to: '/contact',
            label: 'Help & Contact',
          },
        ],
      },
    ],
  };

  render() {
    return <Sidebar {...this.props} />;
  }
}
