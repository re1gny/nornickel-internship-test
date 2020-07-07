import React, {useContext} from 'react';
import styled from 'styled-components'
import { ProgressContext } from "../../contexts/ProgressContext";
import { QuestionDialog } from "../QuestionDialog";
import {afterAnswerSimpleDelay} from "../../constants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10px 30px 40px 30px;
`;

const dialogText = 'Оформление документов прошло быстро, \n' +
  'осталось полчаса свободного времени \n' +
  'до начала инструктажа, чем займешься?';

const answers = [
  {
    value: '1',
    text: 'Пойду познакомлюсь с проектной  командой, нужно завести полезные знакомства ',
    label: null,
    pointsTo: ['C'],
  },
  {
    value: '2',
    text: 'Прогуляюсь по офису, заранее узнаю расположение отделов компании',
    label: null,
    pointsTo: ['A'],
  },
  {
    value: '3',
    text: 'Вернусь в кабинет. Нужно изучить книгу',
    label: null,
    pointsTo: ['B'],
  },
  {
    value: '4',
    text: 'Подойду к секретарю и спрошу можно ли пройти инструктаж сейчас, чтобы не терять время',
    label: null,
    pointsTo: ['D'],
  },
];

export const Screen5 = () => {
  const { setNext, addPoints } = useContext(ProgressContext);

  const handleSelect = (answer) => {
    answer.pointsTo.forEach(key => addPoints(key, 1));
    setTimeout(setNext, afterAnswerSimpleDelay);
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