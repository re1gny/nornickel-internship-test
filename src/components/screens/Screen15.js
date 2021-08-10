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
  padding: 98px 30px 20px 30px;
  overflow: hidden;
`;

const dialogText = 'У руководителя созвон с коллегой. Он поручил тебе организовать ' +
  'видеоконференцию с 3 департаментами и самостоятельно подготовиться к звонку. ' +
  'Ты все сделал у тебя есть 30 минут свободного времени. Чем займешься?\n';

const answers = [
  {
    value: '1',
    text: 'Проверю соц. сети',
    label: 'Полагаем, есть более полезное времяпрепровождение',
    pointsTo: ['D'],
  },
  {
    value: '2',
    text: 'Пойду в столовую и изучу меню',
    label: 'Обед уже скоро, потерпи немного',
    pointsTo: ['C'],
  },
  {
    value: '3',
    text: 'Пройду по офису и познакомлюсь со всеми коллегами',
    label: 'Постарайся запомнить все имена',
    pointsTo: ['B'],
  },
  {
    value: '4',
    text: 'Останусь на месте, изучу план адаптации',
    label: 'Верное решение!',
    pointsTo: ['A'],
  },
];

export const Screen15 = ({ contentWrapper }) => {
  const { setNext, addPoints } = useContext(ProgressContext);

  const handleSelect = (answer) => {
    answer.pointsTo.forEach(key => addPoints(key, 1));
    const contentEl = contentWrapper.current;
    contentEl && contentEl.scrollTo({ top: contentEl.scrollHeight, behavior: "smooth" });
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
        answersTextSize={'12px'}
        onSelect={handleSelect}
        onComplete={handleComplete}
      />
    </Wrapper>
  );
};