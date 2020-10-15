import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Container, Section } from "../../global"
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';



const GetStarted = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleSubmit = event => {
    event.preventDefault()

    window.open("https://github.com/loophole/cli/releases/latest")
  }

  return (
  <StyledSection>
    { !isAuthenticated ?
      (
        <GetStartedContainer>
          <GetStartedTitle>Be the first to get the beta</GetStartedTitle>
          <TryItButton onClick={loginWithRedirect}>Get early access</TryItButton>
          <Subtitle> Or Explore <Link to="/docs">Docs</Link> to see everything Loophole can do!</Subtitle>
        </GetStartedContainer>
      ) : (
        <GetStartedContainer>
          <GetStartedTitle>Get the latest release</GetStartedTitle>
          <TryItButton onClick={handleSubmit}>Download</TryItButton>
          <Subtitle><b> Or Explore <Link to="/docs">Docs</Link>  to see everything Loophole can do! </b> </Subtitle>
        </GetStartedContainer>
      )
    }
  </StyledSection>
  )
}

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.accent};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
`
