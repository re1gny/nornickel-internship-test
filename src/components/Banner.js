import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #303030;
  border-radius: 18px;
  padding: 4px 4px 26px 4px;
`;

const InnerBox = styled.div`
  border-radius: 14px 14px 0 0;
  background-color: #0089C5;
  padding: 16px 20px;
`;

export const Banner = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      <InnerBox>
        {children}
      </InnerBox>
    </Wrapper>
  );
};