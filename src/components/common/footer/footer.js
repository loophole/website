import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


import { Container } from "../../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>Company</span>
        <ul>
          <li><Link  to="/contact">Contact</Link></li>
          <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Community</span>
        <ul>
          <li><Link  to="https://github.com/loophole/cli/releases" target="_blank">Github</Link></li>
          <li><Link  to="https://twitter.com/Loophole_cloud"target="_blank">Twitter</Link></li>
          <li><Link  to="https://testandset.com/"target="_blank">TestAndSet</Link></li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span><Link to="/abuse"> Report Abuse </Link></span>
        <ul>
          <li>Made with Love in Germany and Poland! </li>
          <li>© 2020 Main Development GmbH All rights reserved.  </li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
    <BrandContainer>
      <Logo>loophole</Logo>
    </BrandContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const Logo = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
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
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
    }
  }
`

export default Footer
