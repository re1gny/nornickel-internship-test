import React, {useContext} from 'react';
import styled from 'styled-components'
import { ProgressContext } from "../../contexts/ProgressContext";
import { QuestionDialog } from "../QuestionDialog";
import { afterAnswerSimpleDelay } from "../../constants";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  width: 100%;
  padding: 98px 30px 20px 30px;
  overflow: hidden;
`;

const dialogText = 'У руководителя созвон с коллегой. \n' +
  'Он поручил тебе организовать \n' +
  'видеоконференцию с 3 департаментами \n' +
  'и самостоятельно подготовиться \n' +
  'к звонку. Нужно сообщить каждому\n' +
  ' сотруднику и пригласить на встречу. \n' +
  'Твои действия:';

const answers = [
  {
    value: '1',
    text: 'Выяснить контакты у секретаря, разослать \n' +
      'сообщения на почту',
    label: null,
    pointsTo: ['D'],
  },
  {
    value: '2',
    text: 'Выяснить контакты у секретаря, позвонить \n' +
      'каждому коллеге и убедиться, что он может \n' +
      'присутствовать ',
    label: null,
    pointsTo: ['C'],
  },
  {
    value: '3',
    text: 'Спросить у куратора контакты коллег, \n' +
      'подготовить черновик письма и отправить\n' +
      'ему на проверку перед отправкой',
    label: null,
    pointsTo: ['B'],
  },
  {
    value: '4',
    text: 'Создать встречу в календаре, отправить \n' +
      'приглашения на почту всем, кто должен \n' +
      'присутствовать, после чего дополнительно \n' +
      'всех обзвонить',
    label: null,
    pointsTo: ['A'],
  },
];

export const Screen15 = () => {
  const { setNext, addPoints } = useContext(ProgressContext);

  const handleSelect = (answer) => {
    answer.pointsTo.forEach(key => addPoints(key, 1));
    setTimeout(setNext, afterAnswerSimpleDelay);
  };

  return (
    <Wrapper>
      <QuestionDialog
        answers={answers}
        dialogText={dialogText}
        dialogArrows={true}
        onSelect={handleSelect}
      />
    </Wrapper>
  );
};