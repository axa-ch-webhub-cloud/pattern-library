module.exports = {
    addons: [
      'storybook-readme/register',
      './.storybook/addons/changelog/register.js',
      '@storybook/addon-knobs/register',
      './.storybook/addons/codepreview/register.js',
      '@storybook/addon-a11y/register'
    ],
};