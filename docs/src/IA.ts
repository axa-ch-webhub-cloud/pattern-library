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
        image: brandSystem,
      },
      {
        id: 'elevation',
        github: githubDocumentationLink('#'),
        name: 'Elevation',
        image: brandSystem,
      },
      {
        id: 'grid',
        github: githubDocumentationLink('#'),
        name: 'Layout Primitives',
        image: brandSystem,
      },
      {
        id: 'typography',
        github: githubDocumentationLink('10-atoms/typography'),
        name: 'Typography',
        image: brandSystem,
      },
    ],
  },

  components: {
    title: 'Components',
    items: [
      {
        title: 'Atom Button',
        items: [
          {
            id: 'button',
            github: githubDocumentationLink('10-atoms/button'),
            guideline: designLink('buttons-and-links'),
            name: 'Button',
            image: atomIcon,
          },
        ],
      },
      {
        title: 'Atom Button Link',
        items: [
          {
            id: 'button-link',
            github: githubDocumentationLink('10-atoms/button-link'),
            guideline: designLink('buttons-and-links'),
            name: 'Button Link',
            image: atomIcon,
          },
        ],
      },
      {
        title: 'Atom Checkbox',
        items: [
          {
            id: 'checkbox',
            github: githubDocumentationLink('10-atoms/checkbox'),
            guideline: designLink('forms'),
            name: 'Checkbox',
            image: atomIcon,
          },
        ],
      },
      {
        title: 'Atom Input',
        items: [
          {
            id: 'input',
            github: githubDocumentationLink('10-atoms/input-text'),
            guideline: designLink('forms'),
            name: 'Input',
            image: atomIcon,
          },
        ],
      },
      {
        title: 'Atom Textarea',
        items: [
          {
            id: 'textarea',
            github: githubDocumentationLink('10-atoms/textarea'),
            guideline: designLink('forms'),
            name: 'Textarea',
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
            github: githubDocumentationLink(
              '30-organisms/commercial-hero-banner'
            ),
            guideline: designLink('hero-covers'),
            name: 'Hero',
            related: ['button-link'],
            image: moleculeIcon,
          },
        ],
      },
      {
        title: 'Organism Login',
        items: [
          {
            id: 'login',
            guideline: designLink('login'),
            name: 'Login',
            related: ['button', 'button-link', 'checkbox', 'input'],
            image: organismIcon,
          },
        ],
      },
    ],
  },
};
