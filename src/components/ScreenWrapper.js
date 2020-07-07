import React, {useEffect} from 'react';
import styled, {css} from 'styled-components'
import {preloadImage} from "../utils/preloadImage";

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
}
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

export const ScreenWrapper = ({background, backgroundType, preloadImages, children}) => {

  useEffect(() => {
    preloadImages && preloadImages.forEach(preloadImage);
  }, [preloadImages]);

  return (
    <Wrapper background={background} backgroundType={backgroundType}>
      {/*<IPhoneMockupWrapper/>*/}
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};