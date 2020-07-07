import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  color: #0089C5;
`;

const Separator = styled.div`
  width: 40px;
  height: 2px;
  background-color: #0089C5;
  margin: 8px 0;
`;

const Label = styled.h3`
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 3.2px;
  margin-top: 4px;
`;

const Sublabel = styled.h4`
  font-size: 14px;
  font-weight: 400;
`;

export const WinnerBox = ({ label, sublabel }) => {
  return (
    <Wrapper>
      <span>Я как</span>
      <Label>{label}</Label>
      <Separator />
      <Sublabel>{sublabel}</Sublabel>
    </Wrapper>
  );
};