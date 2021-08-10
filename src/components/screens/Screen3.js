import React, { useContext, useRef } from 'react';
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
  padding: 98px 30px 70px 30px;
`;

const dialogText = 'Ты уточнил у коллеги, сколько же стоит кофе, он ответил следующее:\n' +
  'Чашка кофе с сахаром стоит 10 р 50 копеек. Известно, что кофе дороже сахара на 10 р.\n' +
  'Сколько стоит сам кофе?\n';

const answers = [
  {
    value: '10',
    text: '10 р.',
    label: 'Нет, подумай еще',
    pointsTo: [],
  },
  {
    value: '9.5',
    text: '9 р. 50 к.',
    label: 'Нет, подумай еще',
    pointsTo: [],
  },
  {
    value: '10.5',
    text: '10 р. 25 к.',
    label: 'Молодец, это правильный ответ! А на самом деле кофе в офисе бесплатный для всех сотрудников)',
    pointsTo: ['A', 'D'],
  },
  {
    value: 'free',
    text: 'Кофе в офисе бесплатный',
    label: 'Молодец, это правильный ответ! Кофе в офисе бесплатный для всех сотрудников)',
    pointsTo: ['A', 'D'],
  },
];

export const Screen3 = ({ contentWrapper }) => {
  const { setNext, addPoints } = useContext(ProgressContext);
  const dialogRef = useRef();

  const handleSelect = (answer) => {
    answer.pointsTo.forEach(key => addPoints(key, 1));
    const contentEl = contentWrapper.current;
    contentEl && contentEl.scrollTo({ top: contentEl.scrollHeight, behavior: "smooth" });
  };

  const handleComplete = (active) => {
    if (active.pointsTo && active.pointsTo.length) {
      setTimeout(setNext, afterAnswerDelay);
    } else if (dialogRef.current) {
      setTimeout(dialogRef.current.clearActive, afterAnswerDelay);
    }
  };

  return (
    <Wrapper>
      <QuestionDialog
        ref={dialogRef}
        answers={answers}
        dialogText={dialogText}
        centerAnswersText={true}
        labelPosition={'bottom'}
        onSelect={handleSelect}
        onComplete={handleComplete}
      />
    </Wrapper>
  );
};