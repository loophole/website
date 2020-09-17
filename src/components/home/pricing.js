import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Pricing = () => (
  <Section id="pricing">
    <StyledContainer>
      <Subtitle>Pricing</Subtitle>
      <SectionTitle>Something for every budget</SectionTitle>
      <PricingGrid>
        <PricingItem>
          <PricingTitle>Free</PricingTitle>
          <PricingText>
            This that whatever
          </PricingText>
        </PricingItem>
        <PricingItem>
          <PricingTitle>Advanced</PricingTitle>
          <PricingText>
          This and that
          </PricingText>
        </PricingItem>
        <PricingItem>
          <PricingTitle>Full</PricingTitle>
          <PricingText>
            Ooo, everything!
          </PricingText>
        </PricingItem>
      </PricingGrid>
    </StyledContainer>
  </Section>
)

export default Pricing

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

const PricingGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const PricingItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const PricingTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const PricingText = styled.p`
  text-align: center;
`
