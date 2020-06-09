import brandSystem from './images/introduction/constant.svg';
import atomIcon from './images/icons/atom.svg';
import moleculeIcon from './images/icons/molecule.svg';
import organismIcon from './images/icons/organism.svg';

import { githubDocumentationUrl, designGuidelineUrl } from '../siteConfig';

const githubDocumentationLink = (folder: string) => {
  return `${githubDocumentationUrl}${folder}`;
};
const designLink = (path: string) => {
  return `${designGuidelineUrl}${path}`;
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
        title: 'Molecule Footer',
        items: [
          {
            id: 'footer',
            github: githubDocumentationLink('30-organisms/footer'),
            guideline: designLink('footer'),
            name: 'Footer',
            image: moleculeIcon,
          },
        ],
      },
      {
        title: 'Molecule Hero',
        items: [
          {
            id: 'hero',
            kind: 'molecules',
            github: githubDocumentationLink(
              '30-organisms/commercial-hero-banner'
            ),
            guideline: designLink('hero-covers'),
            name: 'Hero',
            image: moleculeIcon,
          },
          {
            id: 'button',
            kind: 'atoms',
            github: githubDocumentationLink('10-atoms/button'),
            name: 'Button',
            tags: ['icon button', 'button', 'action'],
            image: atomIcon,
          },
          {
            id: 'button-link',
            kind: 'atoms',
            github: githubDocumentationLink('10-atoms/button-link'),
            name: 'Button Link',
            tags: ['icon button', 'button', 'link', 'href'],
            image: atomIcon,
          },
        ],
      },
    ],
  },
};
