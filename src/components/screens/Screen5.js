import React, {useContext} from 'react';
import styled from 'styled-components'
import { ProgressContext } from "../../contexts/ProgressContext";
import { QuestionDialog } from "../QuestionDialog";
import {afterAnswerDelay} from "../../constants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: 100%;
  padding: 98px 30px 70px 30px;
`;

const dialogText = 'Тебе необходимо занести документы для оформления в Департамент ' +
  'кадровой политики, который находится на 20-м этаже. Пока поднимался в лифте, ' +
  'ты обратил внимание на свое отражение в зеркале. Давай проверим, ' +
  'правильный ли стиль одежды ты выбрал?';

const answers = [
  {
    value: '1',
    text: 'Деловой костюм',
    label: 'Правильно. В компании стараются придерживаться делового дресс-кода',
    pointsTo: ['C'],
  },
  {
    value: '2',
    text: 'Джинсы и поло',
    label: 'Такой комплект подойдет больше для пятницы',
    pointsTo: ['A'],
  },
  {
    value: '3',
    text: 'Шорты, футболка, самокат',
    label: 'Главное не замерзнуть, в офисе работают кондиционеры. В следующий раз выбери деловой костюм',
    pointsTo: ['B'],
  },
];

export const Screen5 = () => {
  const { setNext, addPoints } = useContext(ProgressContext);

  const handleSelect = (answer) => {
    answer.pointsTo.forEach(key => addPoints(key, 1));
  };

  const handleComplete = () => {
    setTimeout(setNext, afterAnswerDelay);
  };

  return (
    <Wrapper>
      <QuestionDialog
        answers={answers}
        dialogText={dialogText}
        labelPosition={'bottom'}
        onSelect={handleSelect}
        onComplete={handleComplete}
      />
    </Wrapper>
  );
};