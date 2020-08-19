module.exports = {
    stories: ['../src/components/**/story.js'],
    addons: [
      //'storybook-readme/register',
      './.storybook/addons/changelog/register.js',
      '@storybook/addon-knobs',
      './.storybook/addons/codepreview/register.js',
      '@storybook/addon-a11y'
    ],
};
