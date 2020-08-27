module.exports = {
    stories: ['../src/other/landingpage/story.js', '../src/components/**/@(story|demo).@(js|jsx)', '../src/pages/axa-ch-main/story.js'],
    addons: [
      //'./addons/changelog/register', // deactivated because of SB issue
      '@storybook/addon-knobs',
      //'@whitespace/storybook-addon-html/register', // deactivated because of IE11 issue
      '@storybook/addon-a11y'
    ],
};
