import React, {useContext, useState} from 'react';
import styled from 'styled-components'
import { ProgressContext } from "../../contexts/ProgressContext";
import { QuestionDialog } from "../QuestionDialog";
import { afterAnswerDelay } from "../../constants";
import {Banner} from "../Banner";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 40px 30px;
  overflow: hidden;
`;

const BannerStyled = styled(Banner)`
  margin-top: 20px;
  width: 100%;
`;

const HintWrapper = styled.div`
  display: flex;
  align-items: center;
  
  & + & {
    margin-top: 8px;
  }
`;

const HintValue = styled.div`
  display: flex;
  padding: 2px 8px;
  background-color: #ffffff;
  color: #0089C5;
`;

const HintLabel = styled.div`
  font-size: 12px;
  color: #ffffff;
  margin-left: 14px;
`;

const dialogText = 'Включив компьютер, выяснилось, \n' +
  'что нужно ввести пароль. \n' +
  'Как его узнать? Твоё внимание \n' +
  'привлекла надпись “Подсказка”. \n' +
  'Кажется, это может помочь...';

const LOSE_LABEL = 'После безуспешных попыток отгадать пароль, вернулся куратор и подсказал нужные цифры.';

const DEFAULT_ANSWERS = [
  {
    value: '086',
    text: '086',
    label: 'Неверно, попробуй другой код',
    pointsTo: [],
  },
  {
    value: '062',
    text: '062',
    label: 'Да, это верный ответ!',
    pointsTo: ['A', 'D'],
  },
  {
    value: '042',
    text: '042',
    label: 'Не получилось, попробуй ещё раз',
    pointsTo: [],
  },
  {
    value: '126',
    text: '126',
    label: 'Не сработало, попробуй другой вариант',
    pointsTo: [],
  },
];

const hints = [
  {
    value: '682',
    label: 'Один номер верен и на месте',
  },
  {
    value: '614',
    label: 'Один номер верен, но не на месте',
  },
  {
    value: '206',
    label: 'Два номера верны, но не на месте',
  },
  {
    value: '738',
    label: 'Нет верных номеров',
  },
  {
    value: '380',
    label: 'Один номер верен, но не на месте',
  },
];

export const Screen11 = () => {
  const { setNext, addPoints } = useContext(ProgressContext);
  const [labelPosition, setLabelPosition] = useState('right');
  const [answers, setAnswers] = useState(DEFAULT_ANSWERS);

  const handleLose = () => {
    setAnswers(answers => [...answers.map(answer => ({ ...answer, label: LOSE_LABEL }))]);
    setLabelPosition('bottom-right');
    setTimeout(setNext, afterAnswerDelay);
  };

  const handleSelect = (answer) => {
    answer.pointsTo.forEach(key => addPoints(key, 1));
    if (answer.pointsTo.length) setTimeout(setNext, afterAnswerDelay);
    else setTimeout(handleLose, afterAnswerDelay);
  };

  const HintBanner = (
    <BannerStyled>
      {hints.map(hint => (
        <HintWrapper key={hint.value}>
          <HintValue>{hint.value}</HintValue>
          <HintLabel>{hint.label}</HintLabel>
        </HintWrapper>
      ))}
    </BannerStyled>
  );

  return (
    <Wrapper>
      <QuestionDialog
        answers={answers}
        dialogText={dialogText}
        centerAnswersText={true}
        answersTextSize={'18px'}
        labelPosition={labelPosition}
        middleContent={HintBanner}
        onSelect={handleSelect}
      />
    </Wrapper>
  );
};