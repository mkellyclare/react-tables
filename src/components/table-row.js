// @flow
import * as React from 'react';
import styled from 'styled-components';

type TableRowProps = {
  children?: React.Node,
  idx: number,
  hover?: boolean,
  borderTop?: boolean,
  highlight?: boolean
};

export const TableRow = ({ children, idx, hover, borderTop, highlight }: TableRowProps) => (
  <RowContainer idx={idx} hover={hover} borderTop={borderTop} highlight={highlight}>
    {children}
  </RowContainer>
);

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  &:hover {
    background-color: ${props => (props.hover ? 'rgba(109, 142, 160, 0.5)' : rowColor(props))};
  }
  background-color: ${props => rowColor(props)};
  border-top: ${props => (props.borderTop ? '1px solid lightgray' : 'inherit')};
`;

function rowColor(props) {
  return props.highlight ? 'rgba(109, 142, 160, 0.5)' : modColor(props.idx)
}

function modColor(idx) {
  return idx % 2 === 1 ? '#f8f8f9' : 'inherit';
}
