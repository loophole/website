import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Container } from "../../global";
import ReportAbuse from "../reportabuse/reportabuse";

const Footer = () => {
  const [reportAbuseOpen, setReportAbuseOpen] = useState(false);

  return (
    <FooterWrapper id="footer">
      <FooterColumnContainer>
        <FooterColumn>
          <span>Company</span>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <button onClick={() => setReportAbuseOpen(true)}> Report Abuse </button>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <span>Community</span>
          <ul>
            <li>
              <a href="https://github.com/loophole/cli/releases" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Loophole_cloud" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://testandset.com/" target="_blank" rel="noreferrer">
                TestAndSet
              </a>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <ul>
            <li>Made with Love in Germany and Poland! </li>
            <li>© 2020 Main Development GmbH All rights reserved. </li>
          </ul>
        </FooterColumn>
      </FooterColumnContainer>
      <BrandContainer>
        <Logo>loophole</Logo>
      </BrandContainer>
      {reportAbuseOpen &&
        <ReportAbuse onClose={() => setReportAbuseOpen(false)}>
        </ReportAbuse>
      }
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`;

const Logo = styled.div`
  font-family: ${(props) => props.theme.font.extrabold};
  ${(props) => props.theme.font_size.regular};
  color: ${(props) => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 100%;
  }
`;

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    align-items: center;
  }
`;
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    text-align: center;
  }
`;
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${(props) => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${(props) => props.theme.font.normal};
      font-size: 15px;

      button {
        text-decoration: underline;
      }
    }
  }
`;

export default Footer;
