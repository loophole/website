import React, { useState } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

import InvalidIcon from "../../images/product/invalid.png"
import { Section, Container } from "../global";

let prefill = true;

const Content = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState("");
  const [urlValid, setUrlValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [reportSendingSuccess, setReportSendingSuccess] = useState(false);
  const [reportSendingFailure, setReportSendingFailure] = useState(false);
  const { user } = useAuth0();

  if (user && user.email && prefill) {
    setMail(user.email);
    prefill = false;
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

  const report = async () => {
    setUrlValid(url.length !== 0);
    setMessageValid(message.length !== 0);

    if (reportSendingSuccess) return;

    if (url.length === 0 || message.length === 0) {
      return;
    }

    try {
      await axios.post('https://api.loophole.cloud/api/report-abuse', {
        siteId: url,
        message,
        mail
      });
      setReportSendingSuccess(true);
      setReportSendingFailure(false);
    } catch (e) {
      setReportSendingFailure(true);
      setReportSendingSuccess(false);
    }
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
                <ReportAbuseContentRowInputWrapper>
                  <TextFieldWithSuffix>
                    <ReportAbuseContentRowInput type="text" value={url} className="reported-url-textfield" onChange={(e) => changeUrl(e.target.value)} maxLength="40" />
                    <span className="reported-url-suffix">.loophole.host</span>
                  </TextFieldWithSuffix>
                </ReportAbuseContentRowInputWrapper>
                <ReportAbuseContentRowValidation>
                  <img src={InvalidIcon} alt="!" className={urlValid ? undefined : "invalid"} />
                </ReportAbuseContentRowValidation>
              </ReportAbuseContentRow>
              <ReportAbuseContentRow>
                <ReportAbuseContentRowLabel>
                  Message:
              </ReportAbuseContentRowLabel>
                <ReportAbuseContentRowInputWrapper>
                  <textarea rows="5" value={message} onChange={(e) => changeMessage(e.target.value)} maxLength="400" />
                </ReportAbuseContentRowInputWrapper>
                <ReportAbuseContentRowValidation>
                  <img src={InvalidIcon} alt="!" className={messageValid ? undefined : "invalid"} />
                </ReportAbuseContentRowValidation>
              </ReportAbuseContentRow>
              <ReportAbuseContentRow>
                <ReportAbuseContentRowLabel>
                  Email-address (optional):
                </ReportAbuseContentRowLabel>
                <ReportAbuseContentRowInputWrapper>
                  <ReportAbuseContentRowInput type="text" value={mail} onChange={(e) => setMail(e.target.value)} />
                </ReportAbuseContentRowInputWrapper>
                <ReportAbuseContentRowValidation />
              </ReportAbuseContentRow>
              <ReportAbuseContentRow>
                {reportSendingSuccess ? <SuccessMessage>Succesfully sent report</SuccessMessage> : null}
                {reportSendingFailure ? <SuccessMessage>There was an error sending the report, please try again</SuccessMessage> : null}

              </ReportAbuseContentRow>
              <ReportAbuseContentRow>
                <ActionButton onClick={async () => await report()} onKeyDown={async () => await report()} disabled={reportSendingSuccess}>
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
    border: 1px solid ${props => props.theme.color.secondary};
    border-radius: 4px;
    padding: 8px 16px;
    outline: 0px;
    &:focus {
      box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
    }
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
  padding: 16px;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex: 0 1 30px;
    text-align: center;
  }
`;

const ReportAbuseContentRowInputWrapper = styled.div`
  flex: 1 1 auto;
`;

const ReportAbuseContentRowInput = styled.input`
  font-weight: 500;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const TextFieldWithSuffix = styled.div`
  display: flex;
  min-width: 300px;
  input.reported-url-textfield {
    border-top: 1px solid ${(props) => props.theme.color.secondary};
    border-left: 1px solid ${(props) => props.theme.color.secondary};
    border-bottom: 1px solid ${(props) => props.theme.color.secondary};
    border-right: 0px;
    flex: 1 1 auto;

    &:focus {
      box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
    }
  }

  span.reported-url-suffix {
    border-top: 1px solid ${(props) => props.theme.color.secondary};
    border-right: 1px solid ${(props) => props.theme.color.secondary};
    border-bottom: 1px solid ${(props) => props.theme.color.secondary};
    border-left: 1px dotted ${(props) => props.theme.color.secondary};
    border-radius: 4px;
    padding: 16px 8px;
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

const Message = styled.div`
  padding: 1rem;
  margin: auto;
  width: 100%;

  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-radius: 4px;
`;

const SuccessMessage = styled(Message)`
color: ${(props) => props.theme.color.success.regular};
  background-color:  ${(props) => props.theme.color.white.regular};
  border-color:  ${(props) => props.theme.color.success.regular};

  :before {
    content: "✔ "
  }
`;
const FailureMessage = styled(Message)`
color: ${(props) => props.theme.color.error.regular};
  background-color:  ${(props) => props.theme.color.white.regular};
  border-color:  ${(props) => props.theme.color.error.regular};

  :before {
    content: "⚠ "
  }
`;