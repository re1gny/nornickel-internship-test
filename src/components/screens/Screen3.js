import React, { useContext } from 'react';
import styled from 'styled-components'
import { ProgressContext } from "../../contexts/ProgressContext";
import { QuestionDialog } from "../QuestionDialog";
import { afterAnswerDelay } from "../../constants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 98px 30px 40px 30px;
`;

const dialogText = 'Только вот незадача, наклейки \n' +
  'на автоматах перепутаны! Первый \n' +
  'выдает чай, второй кофе, а третий \n' +
  'случайным образом чай или кофе. \n' +
  'Сколько нужно потратить денег, \n' +
  'чтобы выяснить, где какой автомат? \n' +
  'Стакан любого напитка стоит 30 рублей.';

const answers = [
  {
    value: '30',
    text: '30 рублей',
    label: 'Молодец, это правильный ответ',
    pointsTo: ['A', 'D'],
  },
  {
    value: '60',
    text: '60 рублей',
    label: 'Неплохая попытка, но можно быстрее',
    pointsTo: [],
  },
  {
    value: '90',
    text: '90 рублей',
    label: 'Нет, это очень много, можно потратить всего 30 рублей',
    pointsTo: [],
  },
  {
    value: '120',
    text: '120 рублей',
    label: 'Нет, это очень много, можно потратить всего 30 рублей',
    pointsTo: [],
  },
];

export const Screen3 = ({ contentWrapper }) => {
  const { setNext, addPoints } = useContext(ProgressContext);

  const handleSelect = (answer) => {
    answer.pointsTo.forEach(key => addPoints(key, 1));
    const contentEl = contentWrapper.current;
    contentEl && contentEl.scrollTo({ top: contentEl.scrollHeight, behavior: "smooth" });
  };

  const handleComplete = () => {
    setTimeout(setNext, afterAnswerDelay)
  };

  return (
    <Wrapper>
      <QuestionDialog
        answers={answers}
        dialogText={dialogText}
        labelPosition={'right'}
        onSelect={handleSelect}
        onComplete={handleComplete}
      />
    </Wrapper>
  );
};