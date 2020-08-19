module.exports = {
    stories: ['../src/other/landingpage/story.js', '../src/components/**/(story|demo).(js|jsx)', '../src/pages/axa-ch-main/story.js'],
    addons: [
      //'storybook-readme/register',
      //'./addons/changelog/register',
      '@storybook/addon-knobs',
      //'./addons/codepreview/register',
      '@storybook/addon-a11y'
    ],
};
