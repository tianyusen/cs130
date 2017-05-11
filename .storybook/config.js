import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/StoryBook');
}

configure(loadStories, module);
