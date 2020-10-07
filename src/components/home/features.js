import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Get to know it better</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>
            Easy HTTPS
          </FeatureTitle>
            <FeatureText>
              Instantly create a public HTTPS url for a website running locally on your development machine. 
              Loophole offloads TLS so you don't have to worry about your configuration.
            </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Completely Secure</FeatureTitle>
          <FeatureText>
            We take security and customer data very seriously. 
            By default, we offer end-to-end SSL encryption for all of our 
            services - your data is secure all the way to your local services. 
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Encrypted, untouched Data</FeatureTitle>
          <FeatureText>
          Automatic TLS is built into our client using Let's Encrypt. 
          All our services utilize HTTPS for securing all traffic. 
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Multiple Simultaneous tunnels</FeatureTitle>
          <FeatureText>
          Run multiple tunnels simultaneously with a single loophole client.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Authenticated tunnels</FeatureTitle>
          <FeatureText>
          Protect your Tunnel by limiting access to authenticated users. 
          We offer Basic Auth or Bearer Token authentication strategies.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>No Setups required</FeatureTitle>
          <FeatureText>
          Get over the complex network setups and stop worrying about VPNs. 
          With Loophole, you are protected from exposing your network and the hassle of firewall setups or reverse proxies. 
          </FeatureText>
        </FeatureItem>

      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
