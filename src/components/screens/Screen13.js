import React, {useContext} from 'react';
import styled from 'styled-components'
import { ProgressContext } from "../../contexts/ProgressContext";
import { QuestionDialog } from "../QuestionDialog";
import { afterAnswerSimpleDelay } from "../../constants";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 40px 30px 80px 30px;
  overflow: hidden;
`;

const dialogText = 'Во время изучения регламента ты \n' +
  'столкнулся с непонятной формулировкой \n' +
  'в проекте документа, руководителя \n' +
  'нет на месте. Что будешь делать?';

const answers = [
  {
    value: '1',
    text: 'Изучу все доступные источники, предложу свою версию решения',
    label: null,
    pointsTo: ['A'],
  },
  {
    value: '2',
    text: 'Попрошу консультацию у коллег, они явно знают об этом больше меня',
    label: null,
    pointsTo: ['C'],
  },
  {
    value: '3',
    text: 'Оставлю эту задачу и буду ждать пока руководитель вернётся, чтобы спросить у него, как это решать',
    label: null,
    pointsTo: ['B'],
  },
  {
    value: '4',
    text: 'Узнаю у куратора как и с кем решать подобные вопросы быстро и эффективно',
    label: null,
    pointsTo: ['D'],
  },
];

export const Screen13 = () => {
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
        dialogArrows={true}
        onSelect={handleSelect}
      />
    </Wrapper>
  );
};