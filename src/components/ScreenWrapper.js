import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components'
import {preloadImage} from "../utils/preloadImage";
import {Clock} from "./Clock";
import {getScrollbarWidth} from "../utils/getScrollbarWidth";

const Wrapper = styled.div`
  position: relative;
  
  @media only screen and (max-width: 767px) {
    height: 100%;
  }
`;

const ScreenContentWrapper = styled.div`
  position: relative;
  width: ${({ scrollbarWidth }) => `calc(326px + ${scrollbarWidth}px)`};
  height: 700px;
  margin-right: ${({ scrollbarWidth }) => `-${scrollbarWidth}px`};
  overflow-y: scroll;
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
  
  @media only screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    margin-right: 0;
  }
`;

const ClockStyled = styled(Clock)`
  position: absolute;
  top: 18px;
  left: 20px;
  width: 70px;
  height: 70px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: 1px;
`;

const iPhoneMockup = process.env.PUBLIC_URL + '/static/images/iPhone_mockup.png';

const IPhoneMockupWrapper = styled.div`
  position: absolute;
  top: -34px;
  left: -34px;
  width: calc(100% + 68px);
  height: calc(100% + 68px);
  background-size: cover;
  background-image: url(${iPhoneMockup});
  z-index: 1000;
  pointer-events: none;
  
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const scrollbarWidth = getScrollbarWidth();

export const ScreenWrapper = React.forwardRef((props, ref) => {
  const { background, backgroundType, preloadImages, clock, children } = props;

  useEffect(() => {
    const clears = preloadImages && preloadImages.map(img => preloadImage(img));
    return () => clears && clears.forEach(clear => clear());
  }, [preloadImages]);

  return (
    <Wrapper>
      <IPhoneMockupWrapper />
      <ScreenContentWrapper
        ref={ref}
        scrollbarWidth={scrollbarWidth}
        background={background}
        backgroundType={backgroundType}
      >
        <ContentWrapper>
          {clock && <ClockStyled time={clock}/>}
          {children}
        </ContentWrapper>
      </ScreenContentWrapper>
    </Wrapper>
  );
});