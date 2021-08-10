import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import styled from 'styled-components';
import {DialogBox} from "./DialogBox";
import {AnswersList} from "./AnswersList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnswersListStyled = styled(AnswersList)`
  margin-top: 16px;
`;

export const QuestionDialog = forwardRef((props, ref) => {
  const {
    answers,
    dialogText,
    centerAnswersText,
    answersTextSize,
    labelPosition,
    onSelect,
    onComplete,
    className,
    middleContent,
    dialogArrows,
  } = props;

  const [active, setActive] = useState(false);

  const handleSelect = (answer) => {
    if (active) return;

    setActive(answer);
    onSelect(answer);
  };

  useImperativeHandle(ref, () => ({
    clearActive: () => setActive(false),
  }), [setActive]);

  useEffect(() => {
    const prevActive = { ...active };
    const newActive = answers.find(answer => answer.value === prevActive.value);
    setActive(newActive);
  }, [answers]);

  return (
    <Wrapper className={className}>
      <DialogBox text={dialogText} arrows={dialogArrows} />
      {middleContent}
      <AnswersListStyled
        answers={answers}
        active={active}
        centerAnswersText={centerAnswersText}
        answersTextSize={answersTextSize}
        labelPosition={labelPosition}
        onSelect={handleSelect}
        onComplete={onComplete}
      />
    </Wrapper>
  );
});