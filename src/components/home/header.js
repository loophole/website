import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import { Container } from "../global";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
      file(sourceInstanceName: { eq: "product" }, name: { eq: "green-skew" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <HeaderWrapper id="logo">
      <Container>
        <Banner>
          <BannerTitle>Announcement</BannerTitle>
          <p>
            We were experiencing troubles with certificates and we were forced to do some alignments in the client.{" "}
            To enjoy full <em>loophole</em> experience without issues please update your client to version{" "}
            <a href="https://github.com/loophole/cli/releases/tag/1.0.0-beta.8" target="_blank">1.0.0-beta.8</a>.
            <br />
            <br />
            We are aware of the fact that some of people trying it out during that time and were unable to use <em>loophole</em>{" "}
            and we are sorry for all the incovinience caused.
          </p>
        </Banner>
        <Flex>
          <HeaderTextGroup>
            <Subtitle>NOW IN BETA</Subtitle>
            <h1>Instant hosting, right from your local machine.</h1>
            <h2>
              No more hassle with port-forwarding, bypassing firewalls, or
              setting up dynamic DNS. Do what you are best at, CODING. We take
              care of the rest!
            </h2>

            <HeaderButton>Quickstart for free</HeaderButton>
          </HeaderTextGroup>

          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 160px 120px 90px 120px;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding: 120px 20px 20px 20px;
  }
`;
const Subtitle = styled.h5`
  font-size: 18px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 1px;
`;

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${(props) => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    font-size: 3 rem;
    margin: 0 0 24px;
    color: ${(props) => props.theme.color.primary};
  }

  h2 {
    font-size: 5 rem;
    margin-bottom: 24px;
    ${(props) => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`;

const Banner = styled.div`
border: 1px solid ${(props) => props.theme.color.primary};
padding: 5px;
p {
  padding: 5px;
}
`;

const BannerTitle = styled.h4`
margin: 0;
padding: 5px;
`;

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`;

const HeaderButton = styled.button`
  font-weight: 200;
  font-size: 16px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  margin-left: 0px;
  cursor: pointer;
  white-space: nowrap;
  background: ${(props) => props.theme.color.accent};

  border-radius: 4px;
  padding: 10px 20px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-left: 0;
  }
`;

const ImageWrapper = styled.div`
  justify-self: right;
  align-self: right;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-self: left;
  }
`;

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 300px;
  }
`;
