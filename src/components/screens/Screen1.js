import React, {useContext} from 'react';
import styled from 'styled-components'
import {DialogBox} from "../DialogBox";
import {ProgressContext} from "../../contexts/ProgressContext";
import {Button} from "../Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 100%;
  padding: 10px 30px 20px 30px;
`;

const HeaderText = styled.div`
  text-transform: uppercase;
  color: #ffffff;
  font-size: 14px;
  text-align: center;
`;

const HeaderTextLarge = styled(HeaderText)`
  margin-top: 6px;
  font-size: 26px;
`;

const DialogBoxStyled = styled(DialogBox)`
  margin-top: 12px;
`;

const ButtonStyled = styled(Button)`
  margin-top: 12px;
`;

const introText = 'Сегодня первый день твоей стажировки! \n' +
  'Говорят, что встречают по одежке. Какое\n' +
  'ты произведешь впечатление? Отвечай\n' +
  'на вопросы, решай задачи и в конце дня\n' +
  'узнаешь ответ на этот вопрос. Удачи!';

export const Screen1 = () => {
  const { setNext } = useContext(ProgressContext);

  return (
    <Wrapper>
      <HeaderText>
        ты успешно прошел
        <br/>
        все вступительные
        <br/>
        испытания и принят
        <HeaderTextLarge>
          на стажировку
          <br/>
          в Норникель
        </HeaderTextLarge>
      </HeaderText>
      <DialogBoxStyled theme={'white'} text={introText} />
      <ButtonStyled theme={'light'} onClick={setNext}>Начать</ButtonStyled>
    </Wrapper>
  );
};