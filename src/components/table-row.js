// @flow
import * as React from 'react';
import styled from 'styled-components';

type TableRowProps = {
  children?: React.Node,
  idx: number,
  hover?: boolean,
  borderTop?: boolean
};

export const TableRow = ({ children, idx, hover, borderTop }: TableRowProps) => (
  <RowContainer idx={idx} hover={hover} borderTop={borderTop}>
    {children}
  </RowContainer>
);

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  &:hover {
    background-color: ${props => (props.hover ? 'rgba(109, 142, 160, 0.5)' : rowColor(props.idx))};
  }
  background-color: ${props => rowColor(props.idx)};
  border-top: ${props => (props.borderTop ? '1px solid lightgray' : 'inherit')};
`;

function rowColor(idx) {
  return idx % 2 === 1 ? '#f8f8f9' : 'inherit';
}
