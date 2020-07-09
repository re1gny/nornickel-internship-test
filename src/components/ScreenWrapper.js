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
  width: ${({ width }) => `calc(${width}px / 1.22)`};
  
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
  display: ${({ error }) => error ? 'none' : 'block'};
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

const DEFAULT_WRAPPER_WIDTH = 326 * 1.22;

export const ScreenWrapper = React.forwardRef((props, ref) => {
  const { background, backgroundType, preloadImages, clock, children } = props;

  const [mockupLoadingError, setMockupLoadingError] = useState(false);

  const [wrapperWidth, setWrapperWidth] = useState(0);
  const iPhoneMockup = useRef();
  const { width: iPhoneMockupWidth } = useComponentSize(iPhoneMockup);

  useLayoutEffect(() => {
    if (mockupLoadingError) setWrapperWidth(DEFAULT_WRAPPER_WIDTH);
    else setWrapperWidth(iPhoneMockupWidth);
  }, [mockupLoadingError, iPhoneMockupWidth]);

  useEffect(() => {
    const clears = preloadImages && preloadImages.map(img => preloadImage(img));
    return () => clears && clears.forEach(clear => clear());
  }, [preloadImages]);

  const handleMockupError = () => {
    setMockupLoadingError(true);
  };

  const handleMockupLoad = () => {
    setMockupLoadingError(false);
  };

  return (
    <Wrapper width={wrapperWidth}>
      <IPhoneMockupWrapper
        ref={iPhoneMockup}
        src={iPhoneMockupImage}
        error={mockupLoadingError}
        onLoad={handleMockupLoad}
        onError={handleMockupError}
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