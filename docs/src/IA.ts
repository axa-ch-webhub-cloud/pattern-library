import brandSystem from './images/introduction/constant.svg';
import atomIcon from './images/icons/atom.svg';
import moleculeIcon from './images/icons/molecule.svg';
import organismIcon from './images/icons/organism.svg';

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
  branding: {
    title: 'Branding',
    items: [
      {
        id: 'colors',
        github: githubDocumentationLink('#'),
        name: 'Colors',
        tags: ['color'],
        image: brandSystem,
      },
      {
        id: 'elevation',
        github: githubDocumentationLink('#'),
        name: 'Elevation',
        tags: ['shadow', 'box', 'card'],
        image: brandSystem,
      },
      {
        id: 'grid',
        github: githubDocumentationLink('#'),
        name: 'Layout Primitives',
        tags: ['grid', 'card', 'box', 'layout'],
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
    ],
  },

  components: {
    title: 'Components',
    items: [
      {
        title: 'Atomic Elements',
        items: [
          {
            id: 'button',
            github: githubDocumentationLink('10-atoms/button'),
            name: 'Button',
            tags: ['icon button', 'button', 'action'],
            image: atomIcon,
          },
          {
            id: 'tab',
            github: githubDocumentationLink('tabs'),
            name: 'Tab',
            tags: ['tab', 'tab list', 'tab navigation', 'navigation'],
            image: atomIcon,
          },
          {
            id: 'badge-and-pill',
            github: githubDocumentationLink('badges'),
            name: 'Badge & Pill',
            tags: ['badge', 'pills', 'tag'],
            related: ['tag-input'],
            image: atomIcon,
          },
          {
            id: 'avatar',
            github: githubDocumentationLink('avatar'),
            name: 'Avatar',
            image: atomIcon,
          },
        ],
      },
      {
        title: 'Molecule Elements',
        items: [
          {
            id: 'text-input',
            github: githubDocumentationLink('text-input'),
            name: 'Text Input',
            image: moleculeIcon,
          },
          {
            id: 'tag-input',
            github: githubDocumentationLink('tag-input'),
            name: 'Tag Input',
            tags: ['badge', 'pills', 'tag'],
            related: ['badge-and-pill'],
            image: moleculeIcon,
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
        ],
      },
    ],
  },
};
