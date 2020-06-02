import brandSystem from './images/introduction/constant.svg';
import atomsSystem from './images/introduction/atoms.svg';
import moleculesSystem from './images/introduction/molecules.svg';
import organismSystems from './images/introduction/organisms.svg';

import { githubDocumentationUrl } from '../siteConfig';

const githubDocumentationLink = (str) => {
  return `${githubDocumentationUrl}${str}`;
};

/**
 * Information Architecture.
 * - Constant
 * - Components
 *
 * The `id` property is used for routing and also maps to the filename.
 */

export default {
  constant: {
    title: 'Constant',
    items: [
      {
        id: 'layout-primitives',
        github: githubDocumentationLink('layers'),
        name: 'Layout Primitives',
        tags: ['pane', 'card', 'box', 'layout'],
        image: brandSystem,
      },
      {
        id: 'typography',
        github: githubDocumentationLink('10-atoms/typography'),
        name: 'Typography',
        tags: [
          'heading',
          'paragraph',
          'text',
          'link',
          'list',
          'ordered list',
          'unordered list',
          'strong',
          'small',
        ],
        image: brandSystem,
      },
      {
        id: 'colors',
        github: githubDocumentationLink('theme/src/default-theme'),
        name: 'Colors',
        tags: ['color'],
        image: brandSystem,
      },
    ],
  },

  components: {
    title: 'Components',
    items: [
      {
        title: 'Buttons & Atomic Elements',
        items: [
          {
            id: 'button',
            github: githubDocumentationLink('10-atoms/button'),
            name: 'Button',
            tags: ['icon button', 'button', 'action'],
            image: atomsSystem,
          },
          {
            id: 'tab',
            github: githubDocumentationLink('tabs'),
            name: 'Tab',
            tags: ['tab', 'tab list', 'tab navigation', 'navigation'],
            image: atomsSystem,
          },
          {
            id: 'badge-and-pill',
            github: githubDocumentationLink('badges'),
            name: 'Badge & Pill',
            tags: ['badge', 'pills', 'tag'],
            related: ['tag-input'],
            image: atomsSystem,
          },
          {
            id: 'avatar',
            github: githubDocumentationLink('avatar'),
            name: 'Avatar',
            image: atomsSystem,
          },
        ],
      },

      {
        title: 'Text Inputs & File Uploading',
        items: [
          {
            id: 'text-input',
            github: githubDocumentationLink('text-input'),
            name: 'Text Input',
          },
          {
            id: 'search-input',
            github: githubDocumentationLink('search-input'),
            name: 'Search Input',
          },
          {
            id: 'tag-input',
            github: githubDocumentationLink('tag-input'),
            name: 'Tag Input',
            tags: ['badge', 'pills', 'tag'],
            related: ['badge-and-pill'],
          },
          {
            id: 'textarea',
            github: githubDocumentationLink('textarea'),
            name: 'Textarea',
          },
          {
            id: 'autocomplete',
            github: githubDocumentationLink('autocomplete'),
            name: 'Autocomplete',
          },
          {
            id: 'filepicker',
            github: githubDocumentationLink('file-picker'),
            name: 'Filepicker',
            placeholder: 'Placeholder',
          },
        ],
      },
      {
        title: 'Selects & Dropdown Menus',
        items: [
          {
            id: 'combobox',
            github: githubDocumentationLink('combobox'),
            name: 'Combobox',
            tags: ['dropdown', 'menu'],
          },
          {
            id: 'select-menu',
            github: githubDocumentationLink('select-menu'),
            name: 'Select Menu',
            tags: ['dropdown', 'menu'],
          },
          {
            id: 'popover',
            github: githubDocumentationLink('popover'),
            name: 'Popover',
            tags: ['dropdown'],
          },
          {
            id: 'menu',
            github: githubDocumentationLink('menu'),
            name: 'Menu',
            tags: ['dropdown'],
          },
        ],
      },
      {
        title: 'Toggles',
        items: [
          {
            id: 'checkbox',
            github: githubDocumentationLink('checkbox'),
            name: 'Checkbox',
          },
          {
            id: 'radio',
            github: githubDocumentationLink('radio'),
            name: 'Radio',
          },
          {
            id: 'switch',
            github: githubDocumentationLink('switch'),
            name: 'Switch',
          },
        ],
      },
      {
        title: 'Feedback Indicators',
        items: [
          {
            id: 'toaster',
            github: githubDocumentationLink('toaster'),
            name: 'Toaster',
            tags: ['notifications', 'messages'],
          },
          {
            id: 'alert',
            github: githubDocumentationLink('alert'),
            name: 'Alert',
            tags: ['banners', 'notification', 'messages', 'inline alert'],
          },
          {
            id: 'spinner',
            github: githubDocumentationLink('spinner'),
            name: 'Spinner',
            tags: ['loading', 'indicator'],
          },
        ],
      },
      {
        title: 'Overlays',
        items: [
          {
            id: 'dialog',
            github: githubDocumentationLink('dialog'),
            name: 'Dialog',
            tags: ['modal'],
          },
          {
            id: 'side-sheet',
            github: githubDocumentationLink('side-sheet'),
            name: 'Side Sheet',
            tags: ['drawer', 'sheet'],
          },
          {
            id: 'tooltip',
            github: githubDocumentationLink('tooltip'),
            name: 'Tooltip',
          },
          {
            id: 'corner-dialog',
            github: githubDocumentationLink('corner-dialog'),
            name: 'Corner Dialog',
            tags: ['notification', 'message'],
          },
        ],
      },
      {
        title: 'Lists & Tables',
        items: [
          {
            id: 'table',
            github: githubDocumentationLink('table'),
            name: 'Table',
            tags: [
              'list',
              'row',
              'cell',
              'TH',
              'TR',
              'THEAD',
              'TBODY',
              'table body',
            ],
          },
        ],
      },
      {
        title: 'Utilities & Helpers',
        items: [
          {
            id: 'portal',
            github: githubDocumentationLink('portal'),
            name: 'Portal',
          },
          {
            id: 'positioner',
            github: githubDocumentationLink('positioner'),
            name: 'Positioner',
          },
          {
            id: 'form-field',
            github: githubDocumentationLink('form-field'),
            name: 'Form Field',
            tags: ['validation message', 'label'],
          },
        ],
      },
    ],
  },
};
