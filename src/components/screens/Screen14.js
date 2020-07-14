import React, {useContext} from 'react';
import styled from 'styled-components'
import {DialogBox} from "../DialogBox";
import {ProgressContext} from "../../contexts/ProgressContext";
import {Button} from "../Button";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: calc(20% + 88px) 30px 20px 30px;
`;

const DialogBoxStyled = styled(DialogBox)`
  margin-top: 12px;
`;

const ButtonStyled = styled(Button)`
  margin-top: 12px;
`;

const dialogText = 'Работа выполнена. Ты уверенно идешь \n' +
  'к руководителю  отчитаться по заданию \n' +
  'и узнать дальнейшие шаги.';

export const Screen14 = () => {
  const { setNext } = useContext(ProgressContext);

  return (
    <Wrapper>
      <DialogBoxStyled text={dialogText} />
      <ButtonStyled onClick={setNext}>Далее</ButtonStyled>
    </Wrapper>
  );
};