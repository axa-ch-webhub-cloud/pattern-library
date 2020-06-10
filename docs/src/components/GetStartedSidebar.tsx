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
            branding: [
              {
                to: '/colors',
                label: 'Colors',
              },
              {
                to: '/elevation',
                label: 'Elevation',
              },
              {
                to: '/grid',
                label: 'Grid',
              },
              {
                to: '/typography',
                label: 'Typography',
              },
            ],
          },
          {
            atoms: [
              {
                to: '/components/button',
                label: 'Button',
              },
              {
                to: '/components/button-link',
                label: 'Button Link',
              },
            ],
          },
          {
            molecules: [
              {
                to: '/components/hero',
                label: 'Hero',
              },
              {
                to: '/components/footer',
                label: 'Footer',
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
