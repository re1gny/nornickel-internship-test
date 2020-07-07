import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${({ arrows, label }) => arrows || label ? 36 : 0}px;
`;

const Text = styled.div`
  position: relative;
  padding: ${({ padding }) => padding || '16px 20px'};
  font-size: 14px;
  border-radius: 14px;
  color: ${({ theme }) => theme === 'white' ? '#0089C5' : '#ffffff'};
  background-color: ${({ theme }) => theme === 'white' ? '#ffffff' : '#0089C5'};
  z-index: 2;
  
  a {
    color: currentColor;
  }
`;

const Arrows = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(calc(100% - 32px));
  padding: 40px 20px 8px 20px;
  border-radius: 14px;
  font-size: 16px;
  background-color: ${({ theme }) => theme === 'white' ? '#B3B3B3' : '#0075A8'};
  color: #ffffff;
  z-index: 1;
  cursor: pointer;
`;

const Label = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, calc(100% - 32px));
  padding: 40px 20px 8px 20px;
  border-radius: 14px;
  font-size: 14px;
  background-color: ${({ theme }) => theme === 'white' ? '#B3B3B3' : '#0075A8'};
  color: #ffffff;
  z-index: 1;
  cursor: pointer;
`;

export const DialogBox = ({ text, theme = 'blue', arrows, label, padding, className }) => {
  return (
    <Wrapper theme={theme} arrows={arrows} label={label} className={className}>
      <Text theme={theme} padding={padding}>{text}</Text>
      {arrows && <Arrows theme={theme}>>>></Arrows>}
      {label && <Label theme={theme}>{label}</Label>}
    </Wrapper>
  );
};