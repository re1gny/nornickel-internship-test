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

const dialogText = 'Теперь можно приступить к изучению \n' +
  'проекта. Необходимо провести проверку \n' +
  'нового регламента, который хотят \n' +
  'внедрить в одном из департаментов. \n' +
  'Твоя задача — дать обратную связь \n' +
  'по документу и подготовить презентацию.\n' +
  'С чего начнешь?';

const answers = [
  {
    value: '1',
    text: 'Прочитаю регламент, выделю пункты, которые несут в себе потенциальные риски ',
    label: null,
    pointsTo: ['D'],
  },
  {
    value: '2',
    text: 'Запрошу старый регламент для сравнения, подготовлю реестр замечаний и вопросов ',
    label: null,
    pointsTo: ['B'],
  },
  {
    value: '3',
    text: 'Загуглю, как оформляются регламенты в других компаниях, сравню разные варианты, напишу свои соображения и рекомендации',
    label: null,
    pointsTo: ['A'],
  },
  {
    value: '4',
    text: 'Посоветуюсь с коллегами и подготовлю свои комментарии',
    label: null,
    pointsTo: ['C'],
  },
];

export const Screen12 = () => {
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