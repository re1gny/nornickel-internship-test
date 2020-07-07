import React, {useContext} from 'react';
import styled from 'styled-components'
import { ProgressContext } from "../../contexts/ProgressContext";
import { QuestionDialog } from "../QuestionDialog";
import { afterAnswerSimpleDelay } from "../../constants";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10px 30px 20px 30px;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 164px;
`;

const person2 = process.env.PUBLIC_URL + '/static/images/person_2.png';

const dialogText = 'Куратор раздумывает, как твои умения \n' +
  'применить максимально эффективно. \n' +
  'Какую работу тебе поручить в первую \n' +
  'очередь? Попробуй определить, \n' +
  'что у тебя лучше всего получается.';

const answers = [
  {
    value: '1',
    text: 'Я люблю продумывать стратегию \n' +
      'и расписывать пути её достижения',
    label: null,
    pointsTo: ['B'],
  },
  {
    value: '2',
    text: 'Я хотел бы прорабатывать гипотезы и \n' +
      'разбираться с нестандартными задачами',
    label: null,
    pointsTo: ['A'],
  },
  {
    value: '3',
    text: 'Я великий оптимизатор, люблю упрощать \n' +
      'и улучшать действующие процессы',
    label: null,
    pointsTo: ['D'],
  },
  {
    value: '4',
    text: 'Лучше всего я умею координировать \n' +
      'людей, мотивировать их на работу ',
    label: null,
    pointsTo: ['C'],
  },
];

export const Screen19 = () => {
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
      <Image src={person2} />
    </Wrapper>
  );
};