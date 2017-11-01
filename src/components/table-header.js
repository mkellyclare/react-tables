// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  label: string,
  flex?: number,
  centered?: boolean
};

export class TableHeader extends React.Component<Props> {
  render() {
    return <Container {...this.props}>{this.props.label}</Container>;
  }
}

const Container: React.ComponentType<{ flex?: number, centered?: boolean }> = styled.div`
  font-size: 0.72em;
  font-weight: bold;
  padding-left: 10px;
  display: flex;
  text-align: ${props => (props.centered ? 'center' : 'inherit')};
  flex: ${props => props.flex || 1};
`;
