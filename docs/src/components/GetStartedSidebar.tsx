import React, { PureComponent } from 'react';
import Sidebar from './Sidebar';

export default class GetStartedSidebar extends PureComponent {
  static defaultProps = {
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
              {
                to: '/components/checkbox',
                label: 'Checkbox',
              },
              {
                to: '/components/images',
                label: 'Images',
              },
              {
                to: '/components/input',
                label: 'Input',
              },
              {
                to: '/components/logo',
                label: 'Logo',
              },
              {
                to: '/components/textarea',
                label: 'Textarea',
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
            organisms: [
              {
                to: '/components/login',
                label: 'Login',
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
