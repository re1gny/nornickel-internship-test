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
  padding: 108px 30px 12% 30px;
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

const dialogText = 'Оповестив всех коллег ты узнаешь \n' +
  'у куратора правила организации\n' +
  'конференции. Куратор объясняет \n' +
  'формат и тайминг, а также делится\n' +
  'лайфхаками для быстрой \n' +
  'качественной подготовки. Ты \n' +
  'с энтузиазмом начинаешь работу,\n' +
  'предвкушая свой первый \n' +
  'опыт проведения ответственного\n' +
  'мероприятия.';

export const Screen16 = () => {
  const { setNext } = useContext(ProgressContext);
  const stopTimer = useInactivityDelay(setNext);

  const handleClick = () => {
    stopTimer();
    setNext();
  };

  return (
    <Wrapper onClick={handleClick}>
      <DialogBoxStyled text={dialogText} arrows={true} padding={'16px 84px 16px 20px'} />
      <Image src={person1} />
    </Wrapper>
  );
};