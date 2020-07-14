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
  min-height: 100%;
  width: 100%;
  padding: 98px 30px 40px 30px;
`;

const dialogText = 'Ты видишь три автомата: первый выдает \n' +
  'чай, второй - кофе, а третий радует \n' +
  'покупателя сюрпризом, случайно наливая \n' +
  'чай или кофе. Только вот незадача, \n' +
  'наклейки на автоматах перепутаны! \n' +
  'Кто-то заботливо подписал около каждого \n' +
  'автомата "Не" и ты точно знаешь, что все \n' +
  'названия неправильные. Сколько нужно \n' +
  'потратить денег, чтобы выяснить, где \n' +
  'какой автомат? Стакан любого напитка \n' +
  'стоит 30 рублей.';

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