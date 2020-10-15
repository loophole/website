import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="Download">
    <StyledContainer>     
        <FeatureItem>
          <FeatureTitle><a href="https://github.com/loophole/cli/releases" target="blank" color="black"> Please download the latest version of Loophole for your Operating System and Architecture.</a></FeatureTitle>
          <FeatureText>
          <Boxx>
          On Linux or OSX you can unzip loophole from a terminal with the following command. On Windows, just double click loophole.zip. <br /> <br />
          <Code>unzip /path/to/loophole.zip </Code>
          </Boxx>
          </FeatureText>
        </FeatureItem>
        <FeatureText>
          <Boxx>
          Before you begin, the client must be authenticated. Dont have an account? *Sign up*
          </Boxx>
          </FeatureText>
          <FeatureItem>
          <FeatureTitle>Let’s test it!</FeatureTitle>
          <FeatureText>
          <Boxx>
          To start an HTTP tunnel on port 80, run this next: <br /> <br />
          <Code>loophole 80</Code>
          <br />
          Read the <Link to="/docs">documentation</Link>  to get more ideas on how to use Loophole.
          </Boxx>
          </FeatureText>
        </FeatureItem>
      </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: left;
  margin: 0 auto 40px;
  text-align: left;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  text-align: left;
`

const FeatureText = styled.p`
  text-align: left;
`

const Code = styled.div`
font-family: Consolas,"courier new";
color: crimson;
background-color: black;
padding: 4px;
font-size: 105%;
clear: left;
display: table;

`

const Boxx = styled.div`
font-family: Consolas,"courier new";
color: black;
background-color: #f2f1f1;
padding: 8px;
font-size: 105%;
clear: left;
`
