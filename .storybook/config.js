import {configure} from '@storybook/react';

function loadStories() {
  require('../stories/table');
  require('../stories/table-row');
  require('../stories/table-headings.js');
}

configure(loadStories, module);