import 'storybook-readme/register';
import './addons/changelog/register.js';
import '@storybook/addon-knobs/register';
import './addons/codepreview/register.js';
import '@storybook/addon-a11y/register';
import { STORIES_CONFIGURED, STORY_MISSING } from '@storybook/core-events';
import addonAPI from '@storybook/addons';

addonAPI.register('axa-ch/defaultpage', storybookAPI => {
  storybookAPI.on(STORIES_CONFIGURED, (kind, story) => {
    if (storybookAPI.getUrlState().path === '/story/*') {
      storybookAPI.selectStory('Overview|Introduction', 'Welcome')
    }
  });
  storybookAPI.on(STORY_MISSING, (kind, story) => {
    storybookAPI.selectStory('Introduction', 'Welcome')
  })
});
