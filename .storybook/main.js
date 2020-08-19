module.exports = {
    stories: ['../src/other/landingpage/story.js', '../src/components/**/(story|demo).(js|jsx)', '../src/pages/axa-ch-main/story.js'],
    addons: [
      //'storybook-readme/register',
      './.storybook/addons/changelog/register.js',
      '@storybook/addon-knobs',
      './.storybook/addons/codepreview/register.js',
      '@storybook/addon-a11y'
    ],
};
