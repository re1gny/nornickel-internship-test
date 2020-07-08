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
  transform: translate(-30px, 20px);
  z-index: 3;
`;

const handWithPhone = process.env.PUBLIC_URL + '/static/images/hand_with_phone.png';

const dialogText = 'Во время инструктажа по пожарной \n' +
  'безопасности тебе внезапно звонит \n' +
  'куратор. Что будешь делать?';

const answers = [
  {
    value: '1',
    text: 'Отправлю сообщение, что отвечу позже ',
    label: null,
    pointsTo: ['C'],
  },
  {
    value: '2',
    text: 'Извинюсь перед инструктором, выйду и отвечу на звонок ',
    label: null,
    pointsTo: ['B'],
  },
  {
    value: '3',
    text: 'Сброшу звонок, напишу, что я на инструктаже и перезвоню после ',
    label: null,
    pointsTo: ['A'],
  },
  {
    value: '4',
    text: 'Спрошу, насколько это срочно, и, если не срочно, то договорюсь перезвонить после инструктажа ',
    label: null,
    pointsTo: ['D'],
  },
];

export const Screen7 = () => {
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
        onSelect={handleSelect}
      />
      <Image src={handWithPhone} />
    </Wrapper>
  );
};