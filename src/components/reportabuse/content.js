import React, { useState } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import InvalidIcon from "../../images/product/invalid.png"
import { Section, Container } from "../global";

const Content = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState("");
  const [urlValid, setUrlValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const { user } = useAuth0();

  if (user && user.email && mail !== user.email) {
    setMail(user.email);
  }

  const changeUrl = (currentUrl) => {
    if (currentUrl.length > 40) {
      currentUrl = currentUrl.substr(0, 40);
    }

    setUrlValid(currentUrl.length !== 0);
    setUrl(currentUrl)
  }

  const changeMessage = (text) => {
    if (text.length > 400) {
      text = text.substr(0, 400);
    }

    setMessageValid(text.length !== 0);
    setMessage(text)
  }

  const report = () => {
    setUrlValid(url.length !== 0);
    setMessageValid(message.length !== 0);

    if (url.length === 0 || message.length === 0) {
      return;
    }

    //TODO: send to backend
    console.log('sendReport', url, message, mail);
  }

  return (
    <Section id="ReportAbuse">
      <StyledContainer>
        <SectionTitle>Report abuse</SectionTitle>
        <ContentWrapper>
          <ContentText>
            <ReportAbuseContent>
              <ReportAbuseContentRow>
                Unfortunately, bad people do exist. If you've seen a Loophole URL that looks suspicious, violates our Terms of Service, or any laws, let us know about it and we'll take care of it.
              </ReportAbuseContentRow>
              <ReportAbuseContentRow>
                <ReportAbuseContentRowLabel>
                  Reported site url:
                </ReportAbuseContentRowLabel>
                <ReportAbuseContentRowInput>
                  <TextFieldWithSuffix>
                    <input type="text" value={url} className="reported-url-textfield" onChange={(e) => changeUrl(e.target.value)} maxLength="40" />
                    <span className="reported-url-suffix">.loophole.site</span>
                  </TextFieldWithSuffix>
                </ReportAbuseContentRowInput>
                <ReportAbuseContentRowValidation>
                  <img src={InvalidIcon} alt="!" className={urlValid ? undefined : "invalid"} />
                </ReportAbuseContentRowValidation>
              </ReportAbuseContentRow>
              <ReportAbuseContentRow>
                <ReportAbuseContentRowLabel>
                  Message:
              </ReportAbuseContentRowLabel>
                <ReportAbuseContentRowInput>
                  <textarea rows="5" value={message} onChange={(e) => changeMessage(e.target.value)} maxLength="400" />
                </ReportAbuseContentRowInput>
                <ReportAbuseContentRowValidation>
                  <img src={InvalidIcon} alt="!" className={messageValid ? undefined : "invalid"} />
                </ReportAbuseContentRowValidation>
              </ReportAbuseContentRow>
              <ReportAbuseContentRow>
                <ReportAbuseContentRowLabel>
                  Email-address (optional):
                </ReportAbuseContentRowLabel>
                <ReportAbuseContentRowInput>
                  <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} />
                </ReportAbuseContentRowInput>
                <ReportAbuseContentRowValidation />
              </ReportAbuseContentRow>
              <ReportAbuseContentRow>
                <ActionButton onClick={() => report()} onKeyDown={() => report()}>
                  Report
            </ActionButton>
              </ReportAbuseContentRow>
            </ReportAbuseContent>
          </ContentText>
        </ContentWrapper>
      </StyledContainer>
    </Section>
  )
};

export default Content;

const StyledContainer = styled(Container)``;

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  padding: 0 50px;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding: 0;
  }
`;

const ContentText = styled.div`
  text-align: left;
  font-size: 22px;
  align-items: center;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    font-size: 16px;
  }
`;

const ReportAbuseContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ReportAbuseContentRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
  }

  input {
    width: 100%;
  }

  textarea {
    width: 100%;
    resize: none;
  }

  img {
    margin: 5px;
    width: 24px;
    height: 24px;
    display: none;
    vertical-align: center;
  }

  img.invalid {
    display: block;
  }
`;

const ReportAbuseContentRowLabel = styled.div`
  flex: 0 1 300px;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex: 0 1 30px;
    text-align: center;
  }
`;

const ReportAbuseContentRowInput = styled.div`
  flex: 1 1 auto;
`;

const TextFieldWithSuffix = styled.div`
  display: flex;
  min-width: 300px;
  input.reported-url-textfield {
    border-top: 1px solid ${(props) => props.theme.color.border};
    border-left: 1px solid ${(props) => props.theme.color.border};
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    border-right: 0px;
    flex: 1 1 auto;
  }

  span.reported-url-suffix {
    border-top: 1px solid ${(props) => props.theme.color.border};
    border-right: 1px solid ${(props) => props.theme.color.border};
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    border-left: 1px dotted ${(props) => props.theme.color.secondary};
    padding: 5px;
    background-color: ${(props) => props.theme.color.background.white};
    flex: 0 1 150px;
  }
`;

const ReportAbuseContentRowValidation = styled.div`
  flex: 0 1 34px;
  margin: auto;
`;

const ActionButton = styled.button`
  font-size: 12px;
  color: white;
  letter-spacing: 1px;
  margin-left: 2px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;
  padding: 10px 16px;
  background-color: ${(props) => props.theme.color.secondary};
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;