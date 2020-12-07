module.exports = {
    stories: ['../src/other/pages/landingpage/story.js', '../src/other/pages/guides/getting-started/story.jsx', '../src/other/pages/guides/structure-approach/story.js', '../src/other/pages/what-is-new/story.js','../src/other/pages/contact/story.js', '../src/components/**/@(story|demo).@(js|jsx)', '../src/other/pages/showcases/axa-ch-main/story.js'],
    addons: [
      '@storybook/addon-controls',
      '@storybook/addon-knobs',
      './addons/readme/register',
      './addons/changelog/register',
      //'@whitespace/storybook-addon-html/register', // deactivated because of IE11 issue
      '@storybook/addon-a11y',
      '@storybook/addon-viewport'
    ],
};
