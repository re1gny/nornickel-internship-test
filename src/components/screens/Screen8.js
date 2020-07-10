import React, {useContext} from 'react';
import styled from 'styled-components'
import {DialogBox} from "../DialogBox";
import {ProgressContext} from "../../contexts/ProgressContext";
import {Button} from "../Button";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 108px 30px 24% 30px;
`;

const DialogBoxStyled = styled(DialogBox)`
  margin-top: 12px;
`;

const ButtonStyled = styled(Button)`
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

  return (
    <Wrapper>
      <DialogBoxStyled text={dialogText} />
      <ButtonStyled onClick={setNext}>Далее</ButtonStyled>
    </Wrapper>
  );
};