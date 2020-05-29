import Alert from './images/illustrations/Empty.png';
import Autocomplete from './images/illustrations/Empty.png';
import Avatar from './images/illustrations/Empty.png';
import BadgePill from './images/illustrations/Empty.png';
import Button from './images/illustrations/Button.png';
import Checkbox from './images/illustrations/Empty.png';
import Colors from './images/illustrations/Empty.png';
import Combobox from './images/illustrations/Empty.png';
import CornerDialog from './images/illustrations/Empty.png';
import Dialog from './images/illustrations/Empty.png';
import Filepicker from './images/illustrations/Empty.png';
import FormField from './images/illustrations/Empty.png';
import Icons from './images/illustrations/Empty.png';
import LayoutPrimitive from './images/illustrations/Empty.png';
import Menu from './images/illustrations/Empty.png';
import Popover from './images/illustrations/Empty.png';
import Portal from './images/illustrations/Empty.png';
import Positioner from './images/illustrations/Empty.png';
import Radio from './images/illustrations/Empty.png';
import SearchInput from './images/illustrations/Empty.png';
import SelectMenu from './images/illustrations/Empty.png';
import Select from './images/illustrations/Empty.png';
import SideSheet from './images/illustrations/Empty.png';
import Spinner from './images/illustrations/Empty.png';
import Switch from './images/illustrations/Empty.png';
import Tab from './images/illustrations/Empty.png';
import Table from './images/illustrations/Empty.png';
import TagInput from './images/illustrations/Empty.png';
import TextInput from './images/illustrations/Empty.png';
import Textarea from './images/illustrations/Empty.png';
import Toaster from './images/illustrations/Empty.png';
import Tooltip from './images/illustrations/Empty.png';
import Typography from './images/illustrations/Empty.png';

import githubDocumentationUrl from '../siteConfig';

const githubDocumentationLink = (str) => {
  return `${githubDocumentationUrl}/${str}`;
};

/**
 * Information Architecture.
 * - Foundation
 * - Components
 *
 * The `id` property is used for routing and also maps to the filename.
 */

export default {
  foundation: {
    title: 'Foundation',
    description: 'Styles and primitive components. Start here.',
    items: [
      {
        id: 'layout-primitives',
        github: githubDocumentationLink('layers'),
        name: 'Layout Primitives',
        tags: ['pane', 'card', 'box', 'layout'],
        image: LayoutPrimitive,
      },
      {
        id: 'typography',
        github: githubDocumentationLink('typography'),
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
        image: Typography,
      },
      {
        id: 'colors',
        github: githubDocumentationLink('theme/src/default-theme'),
        name: 'Colors',
        tags: ['color'],
        image: Colors,
      },
      {
        id: 'icons',
        github: githubDocumentationLink('icon'),
        name: 'Icons',
        tags: ['icon'],
        image: Icons,
        related: ['button'],
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
            github: githubDocumentationLink('buttons'),
            name: 'Button',
            tags: ['icon button', 'button', 'action'],
            image: Button,
          },
          {
            id: 'tab',
            github: githubDocumentationLink('tabs'),
            name: 'Tab',
            tags: ['tab', 'tab list', 'tab navigation', 'navigation'],
            image: Tab,
          },
          {
            id: 'badge-and-pill',
            github: githubDocumentationLink('badges'),
            name: 'Badge & Pill',
            tags: ['badge', 'pills', 'tag'],
            image: BadgePill,
            related: ['tag-input'],
          },
          {
            id: 'avatar',
            github: githubDocumentationLink('avatar'),
            name: 'Avatar',
            tags: ['avatar', 'image', 'user'],
            image: Avatar,
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
            image: TextInput,
          },
          {
            id: 'search-input',
            github: githubDocumentationLink('search-input'),
            name: 'Search Input',
            image: SearchInput,
          },
          {
            id: 'tag-input',
            github: githubDocumentationLink('tag-input'),
            name: 'Tag Input',
            image: TagInput,
            tags: ['badge', 'pills', 'tag'],
            related: ['badge-and-pill'],
          },
          {
            id: 'textarea',
            github: githubDocumentationLink('textarea'),
            name: 'Textarea',
            image: Textarea,
          },
          {
            id: 'autocomplete',
            github: githubDocumentationLink('autocomplete'),
            name: 'Autocomplete',
            image: Autocomplete,
          },
          {
            id: 'filepicker',
            github: githubDocumentationLink('file-picker'),
            name: 'Filepicker',
            image: Filepicker,
            placeholder: 'Placeholder',
          },
        ],
      },
      {
        title: 'Selects & Dropdown Menus',
        items: [
          { id: 'select', name: 'Select', image: Select },
          {
            id: 'combobox',
            github: githubDocumentationLink('combobox'),
            name: 'Combobox',
            tags: ['dropdown', 'menu'],
            image: Combobox,
          },
          {
            id: 'select-menu',
            github: githubDocumentationLink('select-menu'),
            name: 'Select Menu',
            tags: ['dropdown', 'menu'],
            image: SelectMenu,
          },
          {
            id: 'popover',
            github: githubDocumentationLink('popover'),
            name: 'Popover',
            tags: ['dropdown'],
            image: Popover,
          },
          {
            id: 'menu',
            github: githubDocumentationLink('menu'),
            name: 'Menu',
            tags: ['dropdown'],
            image: Menu,
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
            image: Checkbox,
          },
          {
            id: 'radio',
            github: githubDocumentationLink('radio'),
            name: 'Radio',
            image: Radio,
          },
          {
            id: 'switch',
            github: githubDocumentationLink('switch'),
            name: 'Switch',
            image: Switch,
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
            image: Toaster,
          },
          {
            id: 'alert',
            github: githubDocumentationLink('alert'),
            name: 'Alert',
            tags: ['banners', 'notification', 'messages', 'inline alert'],
            image: Alert,
          },
          {
            id: 'spinner',
            github: githubDocumentationLink('spinner'),
            name: 'Spinner',
            tags: ['loading', 'indicator'],
            image: Spinner,
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
            image: Dialog,
          },
          {
            id: 'side-sheet',
            github: githubDocumentationLink('side-sheet'),
            name: 'Side Sheet',
            tags: ['drawer', 'sheet'],
            image: SideSheet,
          },
          {
            id: 'tooltip',
            github: githubDocumentationLink('tooltip'),
            name: 'Tooltip',
            image: Tooltip,
          },
          {
            id: 'corner-dialog',
            github: githubDocumentationLink('corner-dialog'),
            name: 'Corner Dialog',
            tags: ['notification', 'message'],
            image: CornerDialog,
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
            image: Table,
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
            image: Portal,
          },
          {
            id: 'positioner',
            github: githubDocumentationLink('positioner'),
            name: 'Positioner',
            image: Positioner,
          },
          {
            id: 'form-field',
            github: githubDocumentationLink('form-field'),
            name: 'Form Field',
            image: FormField,
            tags: ['validation message', 'label'],
          },
        ],
      },
    ],
  },
};
