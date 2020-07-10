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
  align-items: center;
  min-height: 100%;
  width: 100%;
  padding: 98px 30px 20px 30px;
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
    label: 'Этот пароль неверный',
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
    label: 'Этот пароль неверный',
    pointsTo: [],
  },
  {
    value: '126',
    text: '126',
    label: 'Этот пароль неверный',
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

export const Screen11 = ({ contentWrapper }) => {
  const { setNext, addPoints } = useContext(ProgressContext);
  const [labelPosition, setLabelPosition] = useState('right');
  const [answers, setAnswers] = useState(DEFAULT_ANSWERS);
  const [finishCallback, setFinishCallback] = useState(null);

  const handleLose = () => {
    setFinishCallback(() => () => setTimeout(setNext, afterAnswerDelay + 500));
    setAnswers(answers => [...answers.map(answer => ({ ...answer, label: LOSE_LABEL }))]);
    setLabelPosition('bottom-right');
  };

  const handleSelect = (answer) => {
    answer.pointsTo.forEach(key => addPoints(key, 1));

    const contentEl = contentWrapper.current;
    contentEl && contentEl.scrollTo({ top: contentEl.scrollHeight, behavior: "smooth" });

    if (answer.pointsTo.length) setFinishCallback(() => () => setTimeout(setNext, afterAnswerDelay));
    else setFinishCallback(() => () => setTimeout(handleLose, afterAnswerDelay));
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
        onComplete={finishCallback}
      />
    </Wrapper>
  );
};