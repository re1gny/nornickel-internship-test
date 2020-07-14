import React, {useContext} from 'react';
import styled from 'styled-components'
import { ProgressContext } from "../../contexts/ProgressContext";
import { QuestionDialog } from "../QuestionDialog";
import { afterAnswerDelay } from "../../constants";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: 100%;
  width: 100%;
  padding: 108px 30px 20px 30px;
  overflow: hidden;
`;

const dialogText = 'Во время презентации руководитель \n' +
  'указал на твою ошибку и сказал, \n' +
  'что не согласен с предложениями.\n' +
  ' Что ты будешь делать?';

const answers = [
  {
    value: '1',
    text: 'Приму его точку зрения, у него гораздо \n' +
      'больше опыта',
    label: null,
    pointsTo: ['D'],
  },
  {
    value: '2',
    text: 'Уточню какие моменты не понравились \n' +
      'руководителю, позже проанализирую \n' +
      'аргументы',
    label: null,
    pointsTo: ['C'],
  },
  {
    value: '3',
    text: 'Соглашусь с руководителем, но приведу \n' +
      'доводы и примеры, на которые \n' +
      'ориентировался при подготовке',
    label: null,
    pointsTo: ['A'],
  },
  {
    value: '4',
    text: 'Я уверен в себе и в том, что предложил. \n' +
      'Поэтому буду аргументировать \n' +
      'и настаивать на своей правоте',
    label: null,
    pointsTo: ['B'],
  },
];

export const Screen17 = () => {
  const { setNext, addPoints } = useContext(ProgressContext);

  const handleSelect = (answer) => {
    answer.pointsTo.forEach(key => addPoints(key, 1));
    setTimeout(setNext, afterAnswerDelay);
  };

  return (
    <Wrapper>
      <QuestionDialog
        answers={answers}
        dialogText={dialogText}
        onSelect={handleSelect}
      />
    </Wrapper>
  );
};