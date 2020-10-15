import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Section, Container } from "../global"

const Usecases = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          author,
          description
        }
      }
      connection: file(sourceInstanceName: { eq: "product" }, name: { eq: "connection" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      database: file(sourceInstanceName: { eq: "product" }, name: { eq: "database" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      debug: file(sourceInstanceName: { eq: "product" }, name: { eq: "website" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      lesson: file(sourceInstanceName: { eq: "product" }, name: { eq: "lesson" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      raspberry: file(sourceInstanceName: { eq: "product" }, name: { eq: "raspberry" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      webhook: file(sourceInstanceName: { eq: "product" }, name: { eq: "phishing" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
  
    <Section id="usecases">
      <StyledContainer>
        <Subtitle>Breaking the barrier between local and global</Subtitle>
        <SectionTitle>Under 5 minutes, create public URLs for </SectionTitle>
        <UsecasesGrid>
          <UsecasesItem>
          <UsecasesImage fluid={data.lesson.childImageSharp.fluid} />
            <UsecasesTitle>Showing demos to customers</UsecasesTitle>
          </UsecasesItem>
          <UsecasesItem>
          <UsecasesImage fluid={data.webhook.childImageSharp.fluid} />
            <UsecasesTitle>Integrating webhooks</UsecasesTitle>
          </UsecasesItem>
          <UsecasesItem>
          <UsecasesImage fluid={data.debug.childImageSharp.fluid} />
            <UsecasesTitle>Pre-release testing by beta users</UsecasesTitle>
          </UsecasesItem>
          <UsecasesItem>
          <UsecasesImage fluid={data.connection.childImageSharp.fluid} />
            <UsecasesTitle>Building peers to peer apps</UsecasesTitle>
          </UsecasesItem>
          <UsecasesItem>
              <UsecasesImage fluid={data.database.childImageSharp.fluid} />
            <UsecasesTitle>Running personal cloud servers from home</UsecasesTitle>
          </UsecasesItem>
          <UsecasesItem>
              <UsecasesImage fluid={data.raspberry.childImageSharp.fluid} />
            <UsecasesTitle>SSH access to Raspberry pi</UsecasesTitle>
          </UsecasesItem>
        </UsecasesGrid>
      </StyledContainer>
    </Section>
  )
}

export default Usecases

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

const UsecasesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-gap: 4px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const UsecasesItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const UsecasesTitle = styled.h5`
  color: ${props => props.theme.color.primary};
  justify-content: left;
  align-items: left;
  letter-spacing: 0px;
  line-height: 20px;
  margin-bottom: 05px;
`

const UsecasesText = styled.p`
  text-align: center;
`
const UsecasesImage = styled(Img)`
width: 60px;
@media (max-width: ${props => props.theme.screen.md}) {
  width: 400px;
}
@media (max-width: ${props => props.theme.screen.sm}) {
  width: 300px;
  display: none;
}
`