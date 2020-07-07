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

const Image = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 344px;
  z-index: 3;
  transform: translate(-34%, 68%);
`;

const handWithPhone = '/images/hand_with_phone.png';

const dialogText = 'Оформление документов прошло быстро, \n' +
  'осталось полчаса свободного времени \n' +
  'до начала инструктажа, чем займешься?';

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
    setTimeout(setNext, afterAnswerSimpleDelay);
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