// @flow
import * as React from 'react';
import { TableHeader } from './table-header';
import SortedTableHeader from './sorted-table-header';
import styled from 'styled-components';

type HeadingProps = {
  children: React.ChildrenArray<React.Element<typeof TableHeader | typeof SortedTableHeader>>
};

export class TableHeadings extends React.Component<HeadingProps> {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding-top: 15px;
  padding-bottom: 5px;
  margin-bottom: 12px;
`;
