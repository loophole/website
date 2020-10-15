import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { useAuth0 } from "@auth0/auth0-react";

import { Section, Container } from "../global";

const Features = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Section id="Download">
      <StyledContainer>
        <FeatureItem>
          <FeatureTitle>Download</FeatureTitle>
          <FeatureText>
            <Boxx>
              Please download the latest version of Loophole for your Operating
              System and Architecture by clicking
              <b>
                <a
                  href="https://github.com/loophole/cli/releases"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
              </b>
              .
              <br />
              <br />
              On Linux or OSX you can unzip loophole from a terminal with the
              following command:
              <pre>
                <code>$ unzip /path/to/loophole.zip </code>
              </pre>
              On Windows, just double click `loophole.zip`.
            </Boxx>
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Authenticate</FeatureTitle>
          <FeatureText>
            <Boxx>
              Before you begin, the client must be authenticated.
              {isAuthenticated ? null : (
                <span>
                  Don't have an account?{" "}
                  <b>
                    <a onClick={loginWithRedirect}>*Sign up*</a>
                  </b>
                </span>
              )}
              <br />
              <br />
              To authenticate your CLI, execute
              <pre>
                <code>$ loophole account login</code>
              </pre>
              and follow the instructions on your screen to complete the login.
            </Boxx>
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Test it!</FeatureTitle>
          <FeatureText>
            <Boxx>
              To start an HTTP tunnel on port 3000, open your favorite terminal,
              change directory to the place you downloaded loophole and run this
              next:
              <pre>
                <code>$ loophole 3000</code>
              </pre>
              Read the <Link to="/docs">documentation</Link> to get more ideas
              on how to use Loophole.
            </Boxx>
          </FeatureText>
        </FeatureItem>
      </StyledContainer>
    </Section>
  );
};

export default Features;

const StyledContainer = styled(Container)``;

const FeatureItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
`;

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  text-align: left;
`;

const FeatureText = styled.p`
  text-align: left;
`;

const Boxx = styled.div`
  font-family: Consolas, "courier new";
  color: black;
  padding: 8px;
  font-size: 105%;
  clear: left;
`;
