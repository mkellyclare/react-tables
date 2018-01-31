// @flow
import * as React from 'react';
import styled from 'styled-components';

export const Table = ({ children, paper = false }: { children?: React.Node, paper?: boolean }) => (
  <Outer>
    {paper ? (
      <Paper>
        <InnerTable>{children}</InnerTable>
      </Paper>
    ) : (
      <InnerTable>{children}</InnerTable>
    )}
  </Outer>
);

export const InnerTable = ({ children }: { children?: React.Node }) => (
  <InnerTableContainer>{children}</InnerTableContainer>
);

const Paper = styled.div`
  width: 100%;
  background: white;
  border-radius: 2px;
  display: inline-block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const InnerTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Outer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
