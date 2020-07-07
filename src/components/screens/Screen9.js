import React, {useContext} from 'react';
import styled from 'styled-components'
import { ProgressContext } from "../../contexts/ProgressContext";
import { QuestionDialog } from "../QuestionDialog";
import { afterAnswerDelay } from "../../constants";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  width: 100%;
  padding: 98px 30px 60px 30px;
  overflow: hidden;
`;

const dialogText = 'Иванов, Петров, Кузнецов и Трифонов — \n' +
  'работают в одной проектной команде. \n' +
  'Их профессии — геолог, горный инженер, \n' +
  'руководитель и инженер-программист.\n' +
  'Иванов и Петров — соседи и всегда \n' +
  'на работу ездят вместе.\n' +
  'Петров старше Кузнецова.\n' +
  'Иванов регулярно обыгрывает \n' +
  'Трифонова в пинг-понг.\n' +
  'Геолог на работу всегда ходит пешком.\n' +
  'Руководитель и инженер программист \n' +
  'видятся очень редко, так как руководитель \n' +
  'часто отсутствует в офисе. \n' +
  'Горный инженер и инженер-программист\n' +
  'младше руководителя.\n' +
  'Инженер-программист не живет рядом \n' +
  'с горным инженером.';

const answers = [
  {
    value: '1',
    text: 'Иванов',
    label: 'Нет, Иванов  – это горный инженер, но ноутбук ты всё равно получил',
    pointsTo: [],
  },
  {
    value: '2',
    text: 'Петров',
    label: 'Да, это так! Ты получил ноутбук и теперь можешь приступить к работе',
    pointsTo: ['A', 'D'],
  },
  {
    value: '3',
    text: 'Кузнецов',
    label: 'Нет, Кузнецов – это инженер-программист, но ноутбук ты всё равно получил',
    pointsTo: [],
  },
  {
    value: '4',
    text: 'Трифонов',
    label: 'Нет, Трифонов  – это геолог, а тимлид – это Петров, но ноутбук ты всё равно получил',
    pointsTo: [],
  },
];

export const Screen9 = () => {
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
        centerAnswersText={true}
        labelPosition={'bottom'}
        onSelect={handleSelect}
      />
    </Wrapper>
  );
};