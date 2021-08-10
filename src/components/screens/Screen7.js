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

const Image = styled.img`
  width: 100%;
  transform: translate(-30px, 70px);
  z-index: 3;
  pointer-events: none;
`;

const handWithPhone = process.env.PUBLIC_URL + '/static/images/hand_with_phone.png';

const dialogText = 'Во время инструктажа по пожарной безопасности в здании компании ' +
  'неожиданно сработала пожарная тревога, твои действия:';

const answers = [
  {
    value: '1',
    text: 'Позвоню руководителю, уточню, что делать',
    label: 'Хороший вариант, но ты потеряешь ценное время',
    pointsTo: ['C'],
  },
  {
    value: '2',
    text: 'Применю полученные на инструктаже знания',
    label: 'Правильно, поэтому инструктаж необходимо слушать очень внимательно',
    pointsTo: ['B'],
  },
  {
    value: '3',
    text: 'Сниму видео в Тик ток, как я спасаю коллег',
    label: 'Миллион просмотров тебе обеспечен. Но в критической ситуации лучше следовать установленным правилам',
    pointsTo: ['A'],
  },
  {
    value: '4',
    text: 'Ничего не буду делать, это учебная тревога, останусь на месте',
    label: 'Ты уверен, что это правильное решение?',
    pointsTo: ['D'],
  },
];

export const Screen7 = ({ contentWrapper }) => {
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
        onSelect={handleSelect}
        onComplete={handleComplete}
      />
      <Image src={handWithPhone} />
    </Wrapper>
  );
};