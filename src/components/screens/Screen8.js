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
  padding: 108px 30px 24% 30px;
`;

const DialogBoxStyled = styled(DialogBox)`
  margin-top: 12px;
`;

const dialogText = 'После инструктажа ты познакомился \n' +
  'с куратором стажировки. Куратор хочет \n' +
  'представить тебя руководителю и\n' +
  'команде. Войдя в кабинет, ты увидел \n' +
  'несколько человек. \n' +
  'Кто из них твой руководитель?';

export const Screen8 = () => {
  const { setNext } = useContext(ProgressContext);
  const stopTimer = useInactivityDelay(setNext);

  const handleClick = () => {
    stopTimer();
    setNext();
  };

  return (
    <Wrapper onClick={handleClick}>
      <DialogBoxStyled text={dialogText} arrows={true} />
    </Wrapper>
  );
};