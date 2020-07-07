import React, {useContext} from 'react';
import styled from 'styled-components'
import {DialogBox} from "../DialogBox";
import {ProgressContext} from "../../contexts/ProgressContext";
import {useInactivityDelay} from "../../hooks/useInactivityDelay";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  padding: 20px 30px 12% 30px;
  overflow: hidden;
`;

const DialogBoxStyled = styled(DialogBox)`
  margin-top: 12px;
`;

const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 134px;
  z-index: 3;
  transform: translate(10%, 38%);
`;

const person1 = '/images/person_1.png';

const dialogText = 'Выпив кофе, ты встретился \n' +
  'с коллегой, который передал тебе \n' +
  'книгу нового сотрудника и сообщил, \n' +
  'что нужно оформить документы \n' +
  'и пройти инструктаж для начала \n' +
  'работы. Далее сосоится встреча \n' +
  'с куратором стажировки \n' +
  'и знакомство с коллегами.';

export const Screen4 = () => {
  const { setNext } = useContext(ProgressContext);
  const stopTimer = useInactivityDelay(setNext);

  const handleClick = () => {
    stopTimer();
    setNext();
  };

  return (
    <Wrapper onClick={handleClick}>
      <DialogBoxStyled text={dialogText} arrows={true} padding={'16px 78px 16px 20px'} />
      <Image src={person1} />
    </Wrapper>
  );
};