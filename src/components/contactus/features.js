import React from "react";
import styled from "styled-components";

import { Section, Container } from "../global";

const Features = () => (
  <Section id="Contact Us!">
    <StyledContainer>
      <SectionTitle>We'd love to hear from you!</SectionTitle>

      <FeatureItem>
        <FeatureText>
          Whether you have a question about features, demo, or wish to help us
          improve our services, our team is ready to answer all your questions
          and listen to your feedback. Email us at{" "}
          <a href="mailto: loophole@main.dev">loophole@main.dev</a>
          &nbsp; and we would be happy to help!
        </FeatureText>
      </FeatureItem>
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

const FeatureItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
`;

const FeatureText = styled.p`
  text-align: left;
  font-size: 22px;
`;
