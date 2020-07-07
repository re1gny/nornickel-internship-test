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
  padding: 20px 30px 36% 30px;
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

const LabelStyled = styled.span`
  white-space: nowrap;
  font-size: 14px;
`;

const person1 = process.env.PUBLIC_URL + '/static/images/person_1.png';

const dialogText = 'Ура! Первый день стажировки \n' +
  'в Норникеле успешно завершен.';

export const Screen20 = () => {
  const { setNext } = useContext(ProgressContext);
  const stopTimer = useInactivityDelay(setNext);

  const handleClick = () => {
    stopTimer();
    setNext();
  };

  const Label = <LabelStyled>УЗНАТЬ РЕЗУЛЬТАТ</LabelStyled>;

  return (
    <Wrapper onClick={handleClick}>
      <DialogBoxStyled
        text={dialogText}
        label={Label}
        padding={'16px 42px 16px 20px'}
      />
      <Image src={person1} />
    </Wrapper>
  );
};