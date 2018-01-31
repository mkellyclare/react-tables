// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TableHeadings } from '../src/components/table-headings';
import { TableHeader } from '../src/components/table-header';
import { Table } from '../src/components/table';
import { TableRow } from '../src/components/table-row';
import { TableValue } from '../src/components/table-value';

const stories = storiesOf('Table', module);

stories
  .add('full', () => (
    <Table paper>
      <TableHeadings>
        <TableHeader label="Header1" />
        <TableHeader label="Header2" />
      </TableHeadings>
      <TableRow idx={0}>
        <TableValue element="Value 1" />
        <TableValue element="Value 2" />
      </TableRow>
      <TableRow idx={1}>
        <TableValue element="Value 1" />
        <TableValue element="Value 2" />
      </TableRow>
      <TableRow idx={2}>
        <TableValue element="Value 1" />
        <TableValue element="Value 2" />
      </TableRow>
      <TableRow idx={3}>
        <TableValue element="Value 1" />
        <TableValue element="Value 2" />
      </TableRow>
    </Table>
  ))
  .add('full no paper', () => (
    <Table>
      <TableHeadings>
        <TableHeader label="Header1" />
        <TableHeader label="Header2" />
      </TableHeadings>
      <TableRow idx={0}>
        <TableValue element="Value 1" />
        <TableValue element="Value 2" />
      </TableRow>
      <TableRow idx={1}>
        <TableValue element="Value 1" />
        <TableValue element="Value 2" />
      </TableRow>
      <TableRow idx={2}>
        <TableValue element="Value 1" />
        <TableValue element="Value 2" />
      </TableRow>
      <TableRow idx={3}>
        <TableValue element="Value 1" />
        <TableValue element="Value 2" />
      </TableRow>
    </Table>
  ))
  .add('headings', () => (
    <Table>
      <TableHeadings>
        <TableHeader label="Header1" />
        <TableHeader label="Header2" />
      </TableHeadings>
    </Table>
  ));
