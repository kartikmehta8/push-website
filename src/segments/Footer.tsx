// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import { useTranslation } from 'react-i18next';
import { BsArrowUpRight } from 'react-icons/bs';
import styled from 'styled-components';

// Internal Components
import { A, Content, Image, ItemH, ItemV, LinkTo, Section, Span } from '@site/src/css/SharedStyling';
import AndroidSVG from '@site/static/assets/android.svg';
import AppleSVG from '@site/static/assets/apple.svg';
import DiscordSVG from '@site/static/assets/discord.svg';
import GithubSVG from '@site/static/assets/github.svg';
import PushBellSVG from '@site/static/assets/pushBell.svg';
import TelegramSVG from '@site/static/assets/telegram.svg';
import TwitterSVG from '@site/static/assets/twitter.svg';
import FooterFollowusFigure from '@site/static/assets/website/illustrations/footerfollowus.svg';
import FooterJoinusFigure from '@site/static/assets/website/illustrations/footerjoinus.svg';
import { MailingSignup } from '../components/MailingSignup/MailingSignup';

// Internal Configs
import { device } from '@site/src/config/globals';

function Footer() {
  // Internationalization
  const { t } = useTranslation();

  const scrollToTop = () => {
    document.documentElement.scrollTo(0, 0);
  };

  return (
    <StyledFooter>
      <FooterSection
        id="footer"
        background="#121315"
        padding="70px 0 0 0"
      >
        <Content
          className="contentBox"
          padding="40px 0px"
          alignSelf="center"
        >
          {/* Information Cards */}

          <ItemH gap="32px">
            <InfoCard>
              <FooterJoinusFigure
                className="figureSvg"
                alt={t('footer.info-section.positions-card.image-alt')}
                title={t('footer.info-section.positions-card.image-title')}
              />

              <InfoDetails>
                <Span
                  color="#FFF"
                  fontWeight="500"
                  fontSize="24px"
                  lineHeight="142%"
                >
                  {t('footer.info-section.positions-card.text')}
                </Span>
                <FooterAnchorPrimary
                  href="https://angel.co/company/push-protocol"
                  title={t('footer.info-section.positions-card.link-text')}
                  target="_blank"
                >
                  {t('footer.info-section.positions-card.link-text')}&nbsp;
                  <BsArrowUpRight className="anchorSVGlink" />
                </FooterAnchorPrimary>
              </InfoDetails>
            </InfoCard>

            <InfoCard>
              <FooterFollowusFigure
                className="figureSvg"
                alt={t('footer.info-section.docs-card.image-alt')}
                title={t('footer.info-section.docs-card.image-title')}
              />

              <InfoDetails>
                <Span
                  color="#FFF"
                  fontWeight="500"
                  fontSize="24px"
                  lineHeight="142%"
                >
                  {t('footer.info-section.docs-card.text')}
                </Span>
                <FooterAnchorPrimary
                  href="/docs"
                  title={t('footer.info-section.docs-card.link-text')}
                >
                  {t('footer.info-section.docs-card.link-text')}&nbsp;
                  <BsArrowUpRight className="anchorSVGlink" />
                </FooterAnchorPrimary>
              </InfoDetails>
            </InfoCard>
          </ItemH>

          {/* footer links */}
          <ItemH
            gap="32px"
            margin="120px 0 0 0"
          >
            <FooterContainer>
              <FooterColumn>
                <FooterLinks>
                  <Span
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="142%"
                  >
                    {t('footer.links-section.company-column.title')}
                  </Span>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/frens"
                    title={t('footer.links-section.company-column.push-ecosystem-link')}
                    onClick={scrollToTop}
                  >
                    {t('footer.links-section.company-column.push-ecosystem-link')}
                  </FooterAnchorSecondary>
                  <FooterAnchorSecondary
                    href="https://www.notion.so/pushprotocol/Push-Brand-Guide-Media-Kit-6f9db19d513c4365a1faa6c244515498"
                    title={t('footer.links-section.company-column.media-kit-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.company-column.media-kit-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/tos"
                    title={t('footer.links-section.company-column.terms-link')}
                    onClick={scrollToTop}
                  >
                    {t('footer.links-section.company-column.terms-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/privacy"
                    title={t('footer.links-section.company-column.privacy-link')}
                    onClick={scrollToTop}
                  >
                    {t('footer.links-section.company-column.privacy-link')}
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="142%"
                  >
                    {t('footer.links-section.governance-column.title')}
                  </Span>

                  <FooterAnchorSecondary
                    href="https://gov.push.org"
                    title={t('footer.links-section.governance-column.push-governance-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.governance-column.push-governance-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://docs.push.org/governance"
                    title={t('footer.links-section.governance-column.guides-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.governance-column.guides-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://gov.push.org/top?period=yearly"
                    title={t('footer.links-section.governance-column.forum-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.governance-column.forum-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://www.notion.so/Push-Grants-Program-8c9f7934f7e5418faf96e7a5bdcaac4a"
                    title={t('footer.links-section.governance-column.grants-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.governance-column.grants-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://snapshot.org/#/epns.eth"
                    title={t('footer.links-section.governance-column.snapshot-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.governance-column.snapshot-link')}
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="142%"
                  >
                    {t('footer.links-section.resources-column.title')}
                  </Span>
                  <FooterAnchorSecondary
                    href="/blog"
                    title={t('footer.links-section.resources-column.blog-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.resources-column.blog-link')}
                  </FooterAnchorSecondary>
                  
                  <FooterAnchorSecondary
                    href="https://github.com/ethereum-push-notification-service"
                    title={t('footer.links-section.resources-column.github-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.resources-column.github-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://discord.gg/pushprotocol"
                    title={t('footer.links-section.resources-column.discord-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.resources-column.discord-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="/docs"
                    title={t('footer.links-section.resources-column.dev-guides-link')}
                  >
                    {t('footer.links-section.resources-column.dev-guides-link')}
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="142%"
                  >
                    {t('footer.links-section.subscribe-column.title')}
                  </Span>

                  <FooterAnchorSecondary
                    href="mailto:support@push.org"
                    target="_blank"
                  >
                    {t('footer.links-section.subscribe-column.contact-us-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/faq"
                    title={t('footer.links-section.subscribe-column.faq-link')}
                    onClick={scrollToTop}
                  >
                    {t('footer.links-section.subscribe-column.faq-link')}
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="142%"
                  >
                    {t('footer.links-section.support-column.title')}
                  </Span>

                  <MailingSignup showArrow={true} background='#0000' borderColor='#2a2a39' inputWidth='90%'/>
                </FooterLinks>
              </FooterColumn>
            </FooterContainer>
          </ItemH>

          {/* Social Icon Links */}
          <SocialLinks gap="32px">
            <ItemH
              justifyContent="flex-start"
              flex="1"
              gap="12px"
              className="pushLinks"
            >
              <LinkTo
                className="pushLogo"
                to="/"
                title="Push"
                onClick={scrollToTop}
              >
                <Image
                  src={require(`@site/static/assets/website/segments/PushLogoTextWhite.webp`).default}
                  srcSet={`${require(`@site/static/assets/website/segments/PushLogoTextWhite@2x.webp`).default} 2x, ${require(`@site/static/assets/website/segments/PushLogoTextWhite@3x.webp`).default} 3x`}
                  alt={`Push Logo`}
                  width="auto"
                  height="auto"
                  loading="lazy"
                />
              </LinkTo>

              <FooterAnchorIcon
                href="https://github.com/ethereum-push-notification-service"
                title="Push Github"
                target="_blank"
              >
                <GithubSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>
              <FooterAnchorIcon
                href="https://twitter.com/pushprotocol"
                title="Push Twitter"
                target="_blank"
              >
                <TwitterSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>

              <FooterAnchorIcon
                href="https://t.me/epnsproject"
                title="Push Telegram"
                target="_blank"
              >
                <TelegramSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>
              <FooterAnchorIcon
                href="https://discord.gg/pushprotocol"
                title="Push Discord"
                target="_blank"
              >
                <DiscordSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>
            </ItemH>

            <ItemH
              justifyContent="flex-end"
              flex="1"
              gap="12px"
              className="pushPlatformLinks"
            >
              <FooterAnchorIcon
                href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910"
                title="Push iOS app"
                target="_blank"
              >
                <AppleSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>

              <FooterAnchorIcon
                href="https://play.google.com/store/apps/details?id=io.epns.epns"
                title="Push Android app"
                target="_blank"
              >
                <AndroidSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>

              <FooterAnchorIcon
                href="https://app.push.org"
                title="Push Dapp"
                target="_blank"
              >
                <PushBellSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>
            </ItemH>
          </SocialLinks>
        </Content>
      </FooterSection>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  font-family: 'Strawford';
  display: flex;
  position: relative;
`;

const FooterSection = styled(Section)`
  flex-direction: column;
  @media ${device.tablet} {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
`;

const InfoCard = styled(ItemV)`
  border-radius: 32px;
  background: #2a2a39;
  padding: 48px 30px 48px 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 32px;
  box-sizing: border-box;

  & svg.figureSvg {
    width: 72px;
    height: 72px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    row-gap: 16px;

    & svg.figureSvg {
    }
  }
`;

const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(100% - 116px);

  @media ${device.tablet} {
    align-items: center;

    & span {
      text-align: center;
    }
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  box-sizing: border-box;
  color: #ffffff;

  flex-direction: column;

  align-items: center;

  @media ${device.tablet} {
    flex-basis: 50%;
    padding: 12px;
    row-gap: 16px;

    align-items: flex-start;

    & span {
      font-size: 20px;
    }

    &:last-child {
      flex-basis: 100%;
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

const SocialLinks = styled(ItemH)`
  margin: 80px 0 40px 0;
  position: relative;

  &:before {
    position: absolute;
    z-index: 1;
    content: '';
    top: -24px;
    left: 0;
    height: 1px;
    width: 100%;
    background: #2a2a39;
  }

  @media ${device.tablet} {
    flex-direction: column;

    & .pushLinks {
      justify-content: center;

      & a.pushLogo {
        flex: 0 0 100%;
      }
    }

    & .pushPlatformLinks {
      justify-content: center;
    }
  }
`;

const FooterAnchorPrimary = styled(A)`
  color: #dd44b9;
  border-radius: 16px;
  padding: 14px 0;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 142%;
  justify-content: flex-start;
  background: transparent;
  border-radius: 0;

  &:hover & {
    filter: transparent;
  }
  &:before {
    background: transparent;
  }
  &:after {
    background: transparent;
  }
`;

const FooterAnchorSecondary = styled(A)`
  color: #9c9cbe;
  padding: 0;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: normal;
  line-height: 142%;
  justify-content: flex-start;
  background: transparent;
  border-radius: 0;

  &:before {
    background: transparent;
  }
`;

const FooterAnchorIcon = styled(A)`
  border: 1px solid #2a2a39;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export default Footer;
