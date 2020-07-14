import React, {useContext} from 'react';
import styled from 'styled-components'
import {DialogBox} from "../DialogBox";
import {ProgressContext} from "../../contexts/ProgressContext";
import {Button} from "../Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 108px 30px 34% 30px;
`;

const DialogBoxStyled = styled(DialogBox)`
  margin-top: 12px;
`;

const ButtonStyled = styled(Button)`
  margin-top: 12px;
`;

const dialogText = 'Приехав в офис к 9:00, ты подумал, \n' +
  'что хорошо бы выпить горячий кофе \n' +
  'перед началом рабочего дня. \n' +
  'Хм, тут есть автоматы с напитками \n' +
  'и снеками. ';

export const Screen2 = () => {
  const { setNext } = useContext(ProgressContext);

  return (
    <Wrapper>
      <DialogBoxStyled text={dialogText} />
      <ButtonStyled onClick={setNext}>Далее</ButtonStyled>
    </Wrapper>
  );
};