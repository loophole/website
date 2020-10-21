import React, { useState } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import CloseIcon from "../../../images/product/close-icon.png"
import InvalidIcon from "../../../images/product/invalid.png"

const ReportAbuse = ({ onClose }) => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState("");
  const [urlValid, setUrlValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const { user } = useAuth0();

  const changeUrl = (currentUrl) => {
    if (currentUrl.length > 40) {
      currentUrl = currentUrl.substr(0, 40);
    }

    setUrl(currentUrl)
  }

  const changeMessage = (text) => {
    if (text.length > 400) {
      text = text.substr(0, 400);
    }

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
    <ModalWindow>
      <ReportAbuseModal>
        <ReportAbuseHeader>
          <ReportAbuseHeadline>
            Report Abuse
            <input type="image" src={CloseIcon} onClick={() => onClose()} onKeyDown={() => onClose()} alt="X" />
          </ReportAbuseHeadline>
        </ReportAbuseHeader>
        {
          user ?
            <ReportAbuseContent>
              <ReportAbuseContentRow>
                Unfortunately, bad people do exist. If you've seen a Loophole URL that looks suspicious, violates our Terms of Service, or any laws, let us know about it and we'll take care of it.
              </ReportAbuseContentRow>
              <ReportAbuseContentRow>
                <div>
                  Reported site url:
                </div>
                <div>
                  <input type="text" value={url} className="reported-url-textfield" onChange={(e) => changeUrl(e.target.value)} maxLength="40" />
                  <span className="reported-url-suffix">.loophole.site</span>
                </div>
                <img src={InvalidIcon} alt="!" className={urlValid ? undefined : "invalid"} />
              </ReportAbuseContentRow>
              <ReportAbuseContentRow>
                <div>
                  Message:
                </div>
                <div>
                  <textarea rows="5" value={message} onChange={(e) => changeMessage(e.target.value)} maxLength="400" />
                </div>
                <img src={InvalidIcon} alt="!" className={messageValid ? undefined : "invalid"} />
              </ReportAbuseContentRow>
              <ReportAbuseContentRow>
                <div>
                  Email-address (optional):
                </div>
                <div>
                  <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} />
                </div>
              </ReportAbuseContentRow>
              <ReportAbuseContentRow>
                <ActionButton onClick={() => report()} onKeyDown={() => report()}>
                  Report
                </ActionButton>
              </ReportAbuseContentRow>
            </ReportAbuseContent> :
            <ReportAbuseContent>
              <ReportAbuseContentRow>
                Please log in to report abuse!
              </ReportAbuseContentRow>
            </ReportAbuseContent>
        }
      </ReportAbuseModal>
    </ModalWindow>
  );
}

export default ReportAbuse;

const ModalWindow = styled.div`
  width: 100%;
  height: 100%;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(50, 50, 50, 0.2);
`;

const ReportAbuseModal = styled.div`
  width: 550px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: ${(props) => props.theme.color.white.dark};
  border-radius: 10px;
  border: 1px solid rgba(200, 200, 200, 0.4);
  box-shadow: 0 2px 6px rgba(0,0,0,.2);
`;

const ReportAbuseHeader = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
`;

const ReportAbuseHeadline = styled.div`
  padding: 10px 15px;
  font-weight: 600;

  input {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 5px;
    cursor: pointer;
  }
`;

const ReportAbuseContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ReportAbuseContentRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px;

  div {
    width: 48%;
  }

  input {
    width: 90%;
  }

  input.reported-url-textfield {
    width: 50%;
    border-top: 1px solid ${(props) => props.theme.color.border};
    border-left: 1px solid ${(props) => props.theme.color.border};
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    border-right: 0px;
  }

  span.reported-url-suffix {
    width: 50%;
    border-top: 1px solid ${(props) => props.theme.color.border};
    border-right: 1px solid ${(props) => props.theme.color.border};
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    border-left: 1px dotted ${(props) => props.theme.color.secondary};
    padding: 1px;
    background-color: ${(props) => props.theme.color.background.white};
  }

  textarea {
    width: 90%;
    resize: none;
  }

  img {
    width: 16px;
    height: 16px;
    display: none;
  }

  img.invalid {
    display: block;
  }
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