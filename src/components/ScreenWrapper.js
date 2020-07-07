import React, {useEffect} from 'react';
import styled, {css} from 'styled-components'
import {preloadImage} from "../utils/preloadImage";
import {Clock} from "./Clock";

const Wrapper = styled.div`
  position: relative;
  width: 360px;
  height: 720px;
  ${({background, backgroundType}) =>
    backgroundType === 'image' ? 
    css`
      background-size: cover;
      background-image: url(${background});
    ` : 
    css`
      background-color: ${background};
    `
  };
`;

const ClockStyled = styled(Clock)`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 70px;
  height: 70px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 80px;
`;

const iPhoneMockup = process.env.PUBLIC_URL + '/static/images/iPhone_mockup.png';

const IPhoneMockupWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${iPhoneMockup});
`;

export const ScreenWrapper = ({background, backgroundType, preloadImages, clock, children}) => {

  useEffect(() => {
    const clears = preloadImages && preloadImages.map(img => preloadImage(img));
    return () => clears && clears.forEach(clear => clear());
  }, [preloadImages]);

  return (
    <Wrapper background={background} backgroundType={backgroundType}>
      {/*<IPhoneMockupWrapper/>*/}
      <ContentWrapper>
        {clock && <ClockStyled time={clock}/>}
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};