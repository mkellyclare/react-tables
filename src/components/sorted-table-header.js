//@flow
import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

type SortDirection = 'asc' | 'desc';

type SortedProps = {
  field: string,
  label: string,
  sortField: string,
  sortDir: SortDirection,
  onSort: (field: string) => void,
  flex?: number,
  centered?: boolean
};

export default class SortedTableHeader extends React.Component<SortedProps> {
  render() {
    const { field, label, sortField, sortDir, onSort } = this.props;
    return (
      <Container {...this.props}>
        {label}
        {field === sortField && (
          <IconContainer onClick={onSort}>
            <RotatingIcon up={sortDir === 'desc'}>
              <FontAwesome name="arrow-down" />
            </RotatingIcon>
          </IconContainer>
        )}
      </Container>
    );
  }
}

const Container: React.ComponentType<{ flex?: number, centered?: boolean }> = styled.div`
  font-size: 0.72em;
  font-weight: bold;
  padding-left: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: ${props => (props.centered ? 'center' : 'inherit')};
  flex: ${props => props.flex || 1};
`;

const IconContainer = styled.div`
  height: 100%;
  display: flex;
`;

const RotatingIcon = styled.div`
  color: #19aa8d;
  margin-left: 5px;
  font-size: 1.1em;
  transition: transform 550ms ease;
  transform: ${props => (props.up ? 'rotate(-180deg)' : 'rotate(-360deg);')};
`;
