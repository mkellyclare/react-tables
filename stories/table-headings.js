// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { TableHeadings } from '../src/components/table-headings';
import { TableHeader } from '../src/components/table-header';
import SortedTableHeader from '../src/components/sorted-table-header';

let sortField = 'header1';

const stories = storiesOf('Table Headings', module);

stories.addDecorator(withKnobs);

stories
  .add('standard', () => (
    <TableHeadings>
      <TableHeader label="Header1" />
      <TableHeader label="Header2" />
    </TableHeadings>
  ))
  .add('with sorted headers', () => (
    <TableHeadings>
      <SortedTableHeader
        field="header1"
        label="Header1"
        sortField={sortField}
        sortDir={boolean('Direction', false) ? 'asc' : 'desc'}
        onSort={field => {}}
      />
      <TableHeader label="Header2" />
      <TableHeader label="Header3" />
    </TableHeadings>
  ));
