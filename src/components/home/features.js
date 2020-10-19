import React from "react";
import styled from "styled-components";

import { Section, Container } from "../global";

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Get to know it better</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Easy HTTPS</FeatureTitle>
          <FeatureText>
            Instantly create a public HTTPS url for a website running locally on
            your development machine.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Completely Secure</FeatureTitle>
          <FeatureText>
            By default, we offer end-to-end SSL encryption for all of our
            services - your data is secure all the way to your local services.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Encrypted & Untouched</FeatureTitle>
          <FeatureText>
            Automatic TLS is built into our client using Let's Encrypt. All our
            services utilize HTTPS for securing all traffic.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Multiple tunnels</FeatureTitle>
          <FeatureText>
            Run multiple tunnels simultaneously with a single loophole client.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Authenticated tunnels</FeatureTitle>
          <FeatureText>
            We offer Basic Auth or Bearer Token authentication strategies to
            limit access for safety.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>No Setups required</FeatureTitle>
          <FeatureText>
            You are protected from exposing your network and the hassle of
            firewall setups or reverse proxies.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
);

export default Features;

const StyledContainer = styled(Container)``;

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`;

const Subtitle = styled.h5`
  font-size: 18px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`;

const FeaturesGrid = styled.div`
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 150px;
  grid-row-gap: 40px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`;

const FeatureText = styled.p`
  text-align: center;
`;
