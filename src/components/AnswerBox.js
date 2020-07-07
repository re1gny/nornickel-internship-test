import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  padding: 16px 20px;
  border-radius: 14px;
  color: ${({ active }) => active ? '#ffffff' : '#0089C5'};
  background-color: ${({ active }) => active ? '#0089C5' : '#ffffff'};
`;

const Text = styled.div`
  font-size: ${({ textSize }) => textSize || '14px'};
  text-align: ${({ center }) => center ? 'center' : 'none'};
`;

const LabelWrapper = styled.div`
  position: absolute;
  width: 90px;
  top: 50%;
  right: 0;
  transform: translate(calc(100% + 6px), -50%);
`;

export const AnswerBox = (props) => {
  const { value, text, isActive, label, center, textSize, onSelect, className } = props;
  return (
    <Wrapper
      active={isActive}
      className={className}
      onClick={() => onSelect(value)}
    >
      <Text center={center} textSize={textSize}>{text}</Text>
      {isActive && label && <LabelWrapper>{label}</LabelWrapper>}
    </Wrapper>
  );
};