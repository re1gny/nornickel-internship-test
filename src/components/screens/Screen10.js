import React, {useContext} from 'react';
import styled from 'styled-components'
import {DialogBox} from "../DialogBox";
import {ProgressContext} from "../../contexts/ProgressContext";
import {useInactivityDelay} from "../../hooks/useInactivityDelay";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 20% 30px 20px 30px;
`;

const DialogBoxStyled = styled(DialogBox)`
  margin-top: 12px;
`;

const dialogText = 'Внезапно у руководителя зазвонил \n' +
  'телефон. Быстро переговорив с кем-то, \n' +
  'он сказал, что уходит на час, и поручил \n' +
  'тебе самостоятельно изучить документы \n' +
  'и подготовить презентацию со своими \n' +
  'комментариями. ';

export const Screen10 = () => {
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