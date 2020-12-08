import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { Link } from "gatsby";

import { useAuth0 } from "@auth0/auth0-react";

import { Section, Container } from "../global";

const Features = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [ release, setRelease ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    async function getRelease() {
      try {
      const latestRelease = await axios.get("https://api.github.com/repos/loophole/cli/releases/latest");
      setRelease(latestRelease);
      setLoading(false);
      setError(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    }
    getRelease();
  }, []);

  const windowsAssets = !loading ? release.data.assets.filter(a => a.name.includes('windows')) : [];
  const linuxAssets = !loading ? release.data.assets.filter(a => a.name.includes('linux')) : [];
  const macAssets = !loading ? release.data.assets.filter(a => a.name.includes('darwin')) : [];

  const emptyAssets = !windowsAssets.length || !linuxAssets.length || !macAssets.length;
  return (
    <Section id="Download">
      <StyledContainer>
        <FeatureItem>
          <FeatureTitle>Download</FeatureTitle>
          <FeatureText>
            <Boxx>
              Please download the latest version of Loophole for your Operating
              System and Architecture.
              {loading || error || emptyAssets ?
                <div>
                  {loading ? <h5>Loading possible download options...</h5> : null}
                  {!loading && (error || emptyAssets) ? <h5>Please head to{" "}
                    <a href="https://github.com/loophole/cli/releases/latest" target="_blank" rel="noreferrer">GitHub</a>
                    {" "}to get newest release.</h5>: null}
                </div> :
                <DownloadLinksContainer>
                  <DownloadLinksSection>
                    <DownloadLinksSectionTitle>
                  Windows
                  </DownloadLinksSectionTitle>
                    <DownloadLinksList>
                      {windowsAssets.map(a =>
                      <li key={a.id}><a href={a.browser_download_url} target="_blank" rel="noreferrer">{a.name.split("_").pop().split('.')[0]}</a></li>)}
                    </DownloadLinksList>
                  </DownloadLinksSection>
                  <DownloadLinksSection>
                    <DownloadLinksSectionTitle>
                  Linux
                  </DownloadLinksSectionTitle>
                    <DownloadLinksList>
                    {linuxAssets.map(a =>
                      <li key={a.id}><a href={a.browser_download_url} target="_blank" rel="noreferrer">{a.name.split("_").pop().split('.')[0]}</a></li>)}
                    </DownloadLinksList>
                  </DownloadLinksSection>
                  <DownloadLinksSection>
                    <DownloadLinksSectionTitle>
                  Mac OSX
                  </DownloadLinksSectionTitle>
                    <DownloadLinksList>
                    {macAssets.map(a => 
                      <li key={a.id}><a href={a.browser_download_url} target="_blank" rel="noreferrer">{a.name.split("_").pop().split('.')[0]}</a></li>)}
                    </DownloadLinksList>
                  </DownloadLinksSection>
                </DownloadLinksContainer>
              }
              On Linux or OSX you can unzip loophole from a terminal with the
              following command:
              <pre>
                <code>$ unzip /path/to/loophole.zip </code>
              </pre>
              On Windows, just double click <em>loophole.zip</em>.
            </Boxx>
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Authenticate</FeatureTitle>
          <FeatureText>
            <Boxx>
              <br />
              Firstly, open your favorite terminal and change directory to the place you downloaded loophole.
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
              To start an HTTP tunnel on port 3000, execute this
              next:
              <pre>
                <code>
                  $ loophole http 3000<br />
                  # or ...<br />
                  # for 1.0.0-beta.8 and older<br />
                  $ loophole 3000
                </code>
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

const StyledContainer = styled(Container)`
pre {
  background-color: ${(props) => props.theme.color.white.darker};
  padding: 10px;
  overflow: auto;
  width: auto;
}
code {
  background-color: ${(props) => props.theme.color.white.darker};
  padding: 2px;
  font-family: monospace;
  color: ${(props) => props.theme.color.primary};
}`;

const DownloadLinksContainer = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
display: flex;
border: 1px solid ${(props) => props.theme.color.black.light};
flex-wrap: wrap;
flex-direction: row;

@media screen and (min-width:1000px) {
  flex-wrap: nowrap;
}
`;
const DownloadLinksSection = styled.div`
flex: 1 1 auto;

@media screen and (min-width:1000px) {
  border-right: 1px solid  ${(props) => props.theme.color.black.light};
  :last-child {
    border-right: none;
  }
}
`;

const DownloadLinksSectionTitle = styled.h4`
padding: 0.5rem;
margin: 0;
text-align: center;
border-bottom: 1px solid  ${(props) => props.theme.color.black.light};
`;

const DownloadLinksList = styled.ul`
li {
  margin: 2px;
  margin-top: 3px;
  a {
    color: ${(props) => props.theme.color.white.primary};
    :hover {
      color: ${(props) => props.theme.color.black.light};
    }
    text-decoration: none;
  }
  padding: 0;
}
`;

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

const FeatureText = styled.div`
  padding: 10px;
  text-align: left;
`;

const Boxx = styled.div`
  font-family: Consolas, "courier new";
  color: black;
  padding: 8px;
  font-size: 105%;
  clear: left;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    font-size: 95%;
  }
`;

const ButtonLink = styled.button`
  font-weight: bold;
`;