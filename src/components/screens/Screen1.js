import React, {useContext} from 'react';
import styled from 'styled-components'
import {DialogBox} from "../DialogBox";
import {ProgressContext} from "../../contexts/ProgressContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 30% 30px 20px 30px;
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

const introText = 'Сегодня твой первый день стажировки. \n' +
  'Нужно проявить себя с лучшей стороны, \n' +
  'справиться со всеми задачами \n' +
  'и не ударить в грязь лицом. Удачи!';

export const Screen1 = () => {
  const { setNext } = useContext(ProgressContext);

  return (
    <Wrapper onClick={setNext}>
      <HeaderText>
        ты успешно прошел
        <br/>
        все вступительные
        <br/>
        испытания и попал
        <HeaderTextLarge>
          на стажировку
          <br/>
          в Норникель
        </HeaderTextLarge>
      </HeaderText>
      <DialogBoxStyled theme={'white'} text={introText} arrows={true} />
    </Wrapper>
  );
};