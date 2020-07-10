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
  max-width: 40%;
  z-index: 3;
  transform: translate(10%, 38%);
  pointer-events: none;
`;

const ButtonStyled = styled(Button)`
  margin-top: 12px;
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

  return (
    <Wrapper>
      <DialogBoxStyled text={dialogText} padding={'16px 20% 16px 20px'} />
      <Image src={person1} />
      <ButtonStyled onClick={setNext}>Далее</ButtonStyled>
    </Wrapper>
  );
};