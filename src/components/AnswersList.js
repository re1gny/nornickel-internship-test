import React from 'react';
import styled from 'styled-components';
import { AnswerBox } from './AnswerBox';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AnswerBoxStyled = styled(AnswerBox)`
  & + & {
    margin-top: 10px;
  }
`;

const BottomLabelWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(calc(100% + 12px));
`;

const BottomRightLabelWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 88px;
`;

const Label = styled.div`
  font-size: 12px;
  color: #ffffff;
`;

export const AnswersList = (props) => {
  const { answers, active, centerAnswersText, answersTextSize, labelPosition = 'right', onSelect, className } = props;

  const isLabelShown = active && active.label;
  const isRightLabelShown = isLabelShown && labelPosition === 'right';
  const isBottomLabelShown = isLabelShown && labelPosition === 'bottom';
  const isBottomRightLabelShown = isLabelShown && labelPosition === 'bottom-right';

  return (
    <Wrapper className={className}>
      <div>
        {answers.map(answer => (
          <AnswerBoxStyled
            {...answer}
            key={answer.value}
            isActive={active && answer.value === active.value}
            center={centerAnswersText}
            textSize={answersTextSize}
            label={isRightLabelShown && <Label>{active.label}</Label>}
            onSelect={() => onSelect(answer)}
          />
        ))}
        {isBottomLabelShown && (
          <BottomLabelWrapper>
            <Label>{active.label}</Label>
          </BottomLabelWrapper>
        )}
        {isBottomRightLabelShown && (
          <BottomRightLabelWrapper>
            <Label>{active.label}</Label>
          </BottomRightLabelWrapper>
        )}
      </div>
    </Wrapper>
  );
};