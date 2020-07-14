import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  position: relative;
  cursor: pointer;
  padding: 14px 16px;
  border-radius: 14px;
  color: #ffffff;
  background-color: ${({ theme }) => theme === 'light' ? '#B3B3B3' : '#0075A8'};
  outline: none;
  border: none;
`;

const Text = styled.span`
  font-size: ${({ fontSize }) => fontSize}px;
  text-transform: uppercase;
`;

export const Button = ({ theme = 'dark', fontSize = 18, onClick, children, className }) => {
  return (
    <Wrapper
      theme={theme}
      className={className}
      onClick={onClick}
    >
      <Text fontSize={fontSize}>{children}</Text>
    </Wrapper>
  );
};