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

const person1 = process.env.PUBLIC_URL + '/static/images/person_1.png';

const dialogText = 'Презентация прошла успешно,\n' +
  'коллеги благодарят за проделанную\n' +
  'работу и приглашают вечером \n' +
  'отметить твой первый день \n' +
  'в компании. Уже 17:45 и рабочий день \n' +
  'подходит к концу, ты узнаешь \n' +
  'у куратора вводную\n' +
  'по дальнейшим шагам.';

export const Screen18 = () => {
  const { setNext } = useContext(ProgressContext);
  const stopTimer = useInactivityDelay(setNext);

  const handleClick = () => {
    stopTimer();
    setNext();
  };

  return (
    <Wrapper onClick={handleClick}>
      <DialogBoxStyled text={dialogText} arrows={true} padding={'16px 86px 16px 20px'} />
      <Image src={person1} />
    </Wrapper>
  );
};