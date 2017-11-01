// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TableRow } from '../src/components/table-row';

const stories = storiesOf('Table Row', module);

stories
  .add('standard', () => (
    <div>
      <TableRow idx={0}>Row 1</TableRow>
      <TableRow idx={1}>Row 2</TableRow>
      <TableRow idx={2}>Row 3</TableRow>
      <TableRow idx={3}>Row 4</TableRow>
    </div>
  ))
  .add('hover', () => (
    <div>
      <TableRow hover idx={0}>
        Row 1
      </TableRow>
      <TableRow hover idx={1}>
        Row 2
      </TableRow>
      <TableRow hover idx={2}>
        Row 3
      </TableRow>
      <TableRow hover idx={3}>
        Row 4
      </TableRow>
    </div>
  ));
