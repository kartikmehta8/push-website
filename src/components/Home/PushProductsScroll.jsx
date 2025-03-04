/* eslint-disable */

// React + Web3 Essentials
import React, { useEffect, useRef } from 'react';

// External Components
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import styled from 'styled-components';

// Internal Components
import FadeInAnimation from '@site/src/components/FadeInAnimation';
import ImageHolder from '@site/src/components/ImageHolder';
import { A, H2, Image, ItemV, Span } from '@site/src/css/SharedStyling';

// Internal Configs
import { device } from '@site/src/config/globals';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const SlideElement = ({
  content,
  linkContent,
  srcref,
  alt,
  title,
  sendRef,
  addMargin,
  link,
  paddingBottom,
  paddingMobile
}) => {

  return (
    <GrowPushCard background="#2A2A39" ref={sendRef} margin={addMargin && "0 0 0 2%"} paddingBottom={paddingBottom} className="panel">

      <GrowPushCardContent>
        <GrowPushCardDesc
          color="#ADB8D7"
          fontSize="22px"
          fontWeight="500"
          lineHeight="146%"
          letterSpacing="inherit"
        >
        <Span color="#fff" fontSize='24px' fontWeight="bold" letterSpacing="inherit">
          {title} {' '}
        </Span>
        
           {content}
        </GrowPushCardDesc>

        <GrowPushCardLink
          href={link}
          title={title}
          target="_self"
          padding="0px 0px"
          fontSize="20px"
          fontWeight="500"
          letterSpacing="-0.03em"
          lineHeight="26px"
          className='button'
          margin="10px 0px 0px 0px"
          background="transparent"
          alignItems='center'
        >
          <SpanLink>{linkContent}</SpanLink>
          <FiArrowUpRight className="anchorSVGlink" />
        </GrowPushCardLink>

      </GrowPushCardContent>

      <Div padding={paddingMobile}>
        <Image
          src={require(`@site/static/assets/website/illustrations/${srcref}.webp`).default}
          srcSet={`${require(`@site/static/assets/website/illustrations/${srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/illustrations/${srcref}@3x.webp`).default} 3x`}
          alt={alt}
          loading="lazy"
        />
      </Div>
    </GrowPushCard>
  )
}

const HorizontalScroll = () => {

  // Internationalization
  const { t } = useTranslation();

  const panels = useRef([]);
  const panelsContainer = useRef();

  // ScrollTrigger.saveStyles(".mobile, .desktop");

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    ScrollTrigger.matchMedia({
      "(min-width: 1199px)": function () {
        gsap.to(panels?.current, {
          xPercent: -79 * (totalPanels - 1),
          // xPercent: -100 * (totalPanels - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: panelsContainer?.current,
            pin: true,
            scrub: true,
            // snap: 1 / (totalPanels - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: () => '+=' + panelsContainer?.current?.offsetWidth
          }
        });
      },
      "(max-width: 1023px)": function () { },
      "all": function () { }
    });


  }, []);

  return (
    <>
      <SliderContainer
        sizing='calc(100vh-0)'
        ref={panelsContainer}
      >
        <SlideElement sendRef={(e) => createPanelsRefs(e, 0)}
          content={t('home.horizontal-scroll-section.slide1.text')}
          linkContent={t('home.horizontal-scroll-section.slide1.link-text')}
          srcref="pushnotifications"
          alt={t('home.horizontal-scroll-section.slide1.image-alt')}
          title={t('home.horizontal-scroll-section.slide1.title')}
          addMargin={false}
          link="/docs/notifications"
        />

        <SlideElement sendRef={(e) => createPanelsRefs(e, 1)}
          content={t('home.horizontal-scroll-section.slide2.text')}
          linkContent={t('home.horizontal-scroll-section.slide2.link-text')}
          srcref="pushchat"
          alt={t('home.horizontal-scroll-section.slide2.image-alt')}
          title={t('home.horizontal-scroll-section.slide2.title')}
          addMargin={true}
          link="/docs/chat"
          paddingMobile={"30px 0px"}
        />

        <SlideElement sendRef={(e) => createPanelsRefs(e, 2)}
          content={t('home.horizontal-scroll-section.slide3.text')}
          linkContent={t('home.horizontal-scroll-section.slide3.link-text')}
          srcref="pushdao"
          alt={t('home.horizontal-scroll-section.slide3.image-alt')}
          title={t('home.horizontal-scroll-section.slide3.title')}
          addMargin={true}
          link="https://gov.push.org/"
          paddingBottom={"34px"}
          paddingMobile={"30px 0px"}
        />
      </SliderContainer>
    </>
  )
}

const ResponsiveH2 = styled(H2)`
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const SliderContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  padding: calc(calc(100vh - 750px) / 2) 0px;
  flex-wrap: nowrap;
  margin: auto 0;
  @media (max-width: 1200px){
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 0px 0px;
    margin-top: 20px;
  }

  @media (min-width: 1200px) and (max-height: 758px) {
     margin-top: 40px;
  }


  `;

const MemberImage = styled(ImageHolder)`
`;

const GrowPushCard = styled(ItemV)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 74px 74px 0px 74px;
  padding-bottom: ${(props) => props.paddingBottom};
  min-width: 68%;
  box-sizing: border-box;

  background: ${(props) => props.background || '#FFFBFB'};
  margin: ${(props) => props.margin || ''};
  border-radius: 48px;

  & .figureSvg {
    width: 500px;
    height: 100%;
    display: block;

  
    @media ${device.tablet} {
      width: 400px;
      height: 100%;
    }

    @media ${device.mobileL} {
      width: 100%;
      height: 100%;
      display: block;
    }

    @media (min-width: 1025px) and (max-width: 1250px) {
       width: 400px;
       height: 100%;
    }

    @media (min-width: 1440px) and (max-width: 1800px) {
      width: 500px;
      height: 100%;
   }

   @media (min-width: 1200px) and (max-height: 758px) {
       width: 400px;
       height: 100%;
      }
  }

  & .secondFigureSvg {
    width: 575px;
    height: 100%;
    display: block;

  
    @media ${device.tablet} {
      width: 400px;
      height: 100%;
    }

    @media ${device.mobileL} {
      width: 100%;
      height: 100%;
      display: block;
    }

    @media (min-width: 1025px) and (max-width: 1250px) {
       width: 400px;
       height: 100%;
    }

    @media (min-width: 1440px) and (max-width: 1800px) {
      width: 575px;
      height: 100%;
   }

   @media (min-width: 1200px) and (max-height: 758px) {
       width: 400px;
       height: 100%;
      }
  }

  @media ${device.tablet} {
   padding: 30px 30px 0px 30px;
   padding-bottom: ${(props) => props.paddingBottom ? "30px" : "0px"};
   border-radius: 36px;
  }

  @media (max-width: 1200px){
    margin: ${(props) => '10px 0px' || ''};
    padding: 30px 30px 0px 30px;
    padding-bottom: ${(props) => props.paddingBottom ? "30px" : "0px"};
  }

`;

const GrowPushCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 24px;

  @media ${device.laptop}{
   row-gap: 10px;
   margin-bottom: 10px;
  }
`;

const GrowPushCardDesc = styled(Span)`
  @media ${device.tablet} {
    font-size: 20px;
    font-weight: 400;
  }
`

const GrowPushCardLink = styled(A)`
  @media ${device.tablet} {
    font-size: 18px;
    font-weight: 400;
  }
`

const SpanLink = styled(Span)`
  position: relative;
  text-decoration: none;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Div = styled.div`
    padding: 0px 0px;
    max-height:63%;
    @media ${device.laptop}{
      padding: ${(props) => props.padding ? "20px 0px" : "10px 0px 0px 0px"};
    }
`;

export default HorizontalScroll