// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  element: number | string | React.Element<any>,
  flex?: number,
  centered?: boolean
};

export const TableValue = ({ element, flex, centered }: Props) => (
  <Container flex={flex} centered={centered}>
    {element}
  </Container>
);

const Container = styled.div`
  padding-left: 10px;
  font-size: 0.85em;
  font-weight: 300;
  text-align: ${props => (props.centered ? 'center' : 'inherit')};
  flex: ${props => props.flex || 1};
`;
