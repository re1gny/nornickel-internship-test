import React, {useContext} from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import {DialogBox} from '../DialogBox';
import {ProgressContext} from '../../contexts/ProgressContext';
import {WinnerBox} from '../WinnerBox';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px 30px;
  overflow: hidden;
`;

const DialogBoxWrapper = styled.div`
  margin-top: 28px;
`;

const DialogBoxStyled = styled(DialogBox)`
  & + & {
    margin-top: 18px;
  }
`;

const Image = styled.img`
  width: 60px;
  height: auto;
  margin-top: 28px;
  cursor: pointer;
`;

const internshipLink = 'https://www.nornickel.ru/careers/why-nornickel';

const vkIcon = process.env.PUBLIC_URL + '/images/vk_icon.png';
const copper = process.env.PUBLIC_URL + '/images/copper.png';
const platinum = process.env.PUBLIC_URL + '/images/platinum.png';
const palladium = process.env.PUBLIC_URL + '/images/palladium.png';
const cobalt = process.env.PUBLIC_URL + '/images/cobalt.png';

const shareImages = { copper, platinum, palladium, cobalt };

const categories = {
  A: {
    value: 'copper',
    label: 'Медь',
    sublabel: 'ВЫДАЮ ИДЕАЛЬНЫЙ РЕЗУЛЬТАТ',
    description: `Медь проводит электричество без потерь. Ее используют в крутых наушниках, чтобы сохранить чистый звук из студии. Или передать энергию к тебе домой из ТЭЦ.`,
    subdescription: `Ты любишь чёткие задачи и выдаешь прекрасный результат без искажений. Эти навыки отличают прекрасных экономистов, аналитиков, юристов и геологов, а также специалистов по компенсациям и льготам, специалистов по документообороту и протоколу, специалистов по охране труда. Мы в Норникеле добываем медь и знаем как с ней работать. \n\n Все открытые стажировки в Норникеле [/ссылка/](${internshipLink})`,
  },
  B: {
    value: 'platinum',
    label: 'Платина',
    sublabel: 'эталон во всём',
    description: `Чтобы всё вокруг работало — должен быть эталон. Поэтому даже у метра есть эталон. И его сделали из платинового сплава. Быть лидером непросто, но у тебя получается.`,
    subdescription: `Мы в Норникеле добываем платину и знаем как с ней работать. Советуем развивать свои способности у нас, чтобы возглавить целый отдел в Норникеле. \n\n Все открытые стажировки в Норникеле: [/ссылка/](${internshipLink})`,
  },
  C: {
    value: 'palladium',
    label: 'Палладий',
    sublabel: 'ПРИДУМЫВАЮ НОВОЕ И ИЗМЕНЯЮ МИР',
    description: `Палладий — пластичный и гибкий металл, который принимает любую форму. Благодаря этим качествам появились смартфоны с невероятной производительностью размером с ладонь.`,
    subdescription: `Мы в Норникеле добываем палладий и знаем как с ним работать. Если тебе интересно придумывать новое, советуем присмотреться к позициям в маркетинге, PR, обучении и IT-архитектуре. \n\n Все открытые стажировки в Норникеле [/ссылка/](${internshipLink})`,
  },
  D: {
    value: 'cobalt',
    label: 'Кобальт',
    sublabel: 'улучшаю всё вокруг',
    description: `Сталь — прочный и гибкий металл. Но если добавить кобальт в сталь, то деталь прослужит в 6 раз дольше! Кобальт улучшает свойства других сплавов. Такие улучшения нужны для реализации сверхзадач. Например, для освоения космоса. Вы похожи с кобальтом в совершенствовании процессов. Ты можешь объединить узкопрофильных спецов и сделать крутой продукт.`,
    subdescription: `Мы в Норникеле добываем кобальт и знаем, как с ним работать. Возможно мы сможем развить тебя в проектном менеджменте. \n\n Все открытые стажировки в Норникеле: [/ссылка/](${internshipLink})`,
  },
};

export const Screen21 = () => {
  const { points } = useContext(ProgressContext);

  const maxPointsValue = Math.max(...Object.keys(points).map(key => points[key]));
  const suitableCategoryId = Object.keys(points).find(key => points[key] === maxPointsValue);
  const suitableCategory = categories[suitableCategoryId];

  const shareUrl = encodeURIComponent(window.location.origin);
  const shareTitle = encodeURIComponent('В чем ты силён? #норникель #стажировка #первыйденьвнорникеле');
  const shareDescription = encodeURIComponent('#норникель #стажировка #первыйденьвнорникеле');
  const shareImage = encodeURIComponent(shareImages[suitableCategory.value]);

  return (
    <Wrapper>
      <WinnerBox {...suitableCategory} />
      <DialogBoxWrapper>
        <DialogBoxStyled text={<ReactMarkdown source={suitableCategory.description} linkTarget={'_blank'} />} />
        <DialogBoxStyled text={<ReactMarkdown source={suitableCategory.subdescription} linkTarget={'_blank'} />} />
      </DialogBoxWrapper>
      <a href={`http://vk.com/share.php?url=${shareUrl}&title=${shareTitle}&description=${shareDescription}&image=${shareImage}`}>
        <Image src={vkIcon} />
      </a>
    </Wrapper>
  );
};