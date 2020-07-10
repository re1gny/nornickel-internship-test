import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import styled, {css} from 'styled-components'
import useComponentSize from '@rehooks/component-size';
import {preloadImage} from "../utils/preloadImage";
import {Clock} from "./Clock";
import {getScrollbarWidth} from "../utils/getScrollbarWidth";

const Wrapper = styled.div`
  position: relative;
  max-height: 100%;
  height: 700px;
  width: ${({ width }) => width}px;
  
  @media only screen and (max-width: 767px) {
    height: 100%;
    width: 100%;
  }
`;

const ScreenContentWrapper = styled.div`
  position: relative;
  width: ${({ scrollbarWidth }) => `calc(100% + ${scrollbarWidth}px)`};
  height: 100%;
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

const iPhoneMockupImage = process.env.PUBLIC_URL + '/static/images/iPhone_mockup.png';

const IPhoneMockupWrapper = styled.img`
  display: ${({ loaded }) => loaded ? 'block' : 'none'};
  position: absolute;
  top: -5%;
  left: -11%;
  height: 110%;
  z-index: 1000;
  pointer-events: none;
  
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const scrollbarWidth = getScrollbarWidth();

const DEFAULT_WRAPPER_WIDTH = 326;
const WIDTH_SCALE_COEFFICIENT = 1.22;

export const ScreenWrapper = React.forwardRef((props, ref) => {
  const { background, backgroundType, preloadImages, clock, children } = props;

  const [mockupLoaded, setMockupLoaded] = useState(false);
  const [wrapperWidth, setWrapperWidth] = useState(DEFAULT_WRAPPER_WIDTH);
  const iPhoneMockup = useRef();
  const { width: iPhoneMockupWidth } = useComponentSize(iPhoneMockup);

  useLayoutEffect(() => {
    if (mockupLoaded && iPhoneMockupWidth) setWrapperWidth(iPhoneMockupWidth / WIDTH_SCALE_COEFFICIENT);
    else setWrapperWidth(DEFAULT_WRAPPER_WIDTH);
  }, [mockupLoaded, iPhoneMockupWidth]);

  useEffect(() => {
    const clears = preloadImages && preloadImages.map(img => preloadImage(img));
    return () => clears && clears.forEach(clear => clear());
  }, [preloadImages]);

  const handleMockupLoad = () => {
    setMockupLoaded(true);
  };

  return (
    <Wrapper width={wrapperWidth}>
      <IPhoneMockupWrapper
        ref={iPhoneMockup}
        src={iPhoneMockupImage}
        loaded={mockupLoaded}
        onLoad={handleMockupLoad}
      />
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