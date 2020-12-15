import React, { useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import axios from "axios";

import styles from "./report-abuse.module.scss";

const ReportAbuse = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState("");
  const [reportSendingSuccess, setReportSendingSuccess] = useState(false);
  const [reportSendingFailure, setReportSendingFailure] = useState(false);
  const [
    reportSendingFailureMessage,
    setReportSendingFailureMessage,
  ] = useState("");
  const [isInitialEmpty, setInitialEmpty] = useState(true);

  const resetToInitialState = () => {
    setMail("");
    setMessage("");
    setUrl("");
    setInitialEmpty(true);
  };

  const isMessageValid = () => {
    return isInitialEmpty || message.length !== 0;
  };
  const isUrlValid = () => {
    return isInitialEmpty || url.length !== 0;
  };

  const changeUrl = (currentUrl) => {
    if (currentUrl.length > 40) {
      currentUrl = currentUrl.substr(0, 40);
    }

    setUrl(currentUrl);
    setInitialEmpty(false);
  };

  const changeMessage = (text) => {
    if (text.length > 400) {
      text = text.substr(0, 400);
    }

    setMessage(text);
    setInitialEmpty(false);
  };

  const report = async () => {
    if (isInitialEmpty || !isUrlValid() || !isMessageValid()) {
      setInitialEmpty(false);
      setReportSendingFailure(true);
      setReportSendingFailureMessage(
        "Please fix the fields marked as invalid and try again"
      );
      return;
    }

    try {
      const response = await axios.post(
        "https://api.loophole.cloud/api/report-abuse",
        {
          siteId: url,
          message,
          mail,
        }
      );
      console.log(response);
      resetToInitialState();
      setReportSendingSuccess(true);
      setReportSendingFailure(false);
    } catch (e) {
      setReportSendingFailureMessage(
        "There was an error sending the report, please try again later or contact us directly via mail"
      );
      setReportSendingFailure(true);
      setReportSendingSuccess(false);
    }
  };

  return (
    <Layout title="Report Abuse" description={siteConfig.tagline}>
      <header className="hero">
        <div className="container">
          <h1 className="hero__subtitle">Report Abuse</h1>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                Unfortunately, bad people do exist. If you've seen a Loophole
                URL that looks suspicious, violates our Terms of Service, or any
                laws, let us know about it and we'll take care of it.
              </div>
            </div>
            <div className="spacer spacer--sm"></div>
            <div className="row">
              {reportSendingSuccess ? (
                <div className="col">
                  <div className="alert alert--success" role="alert">
                    Succesfully sent report
                  </div>
                  <div className="spacer spacer--sm"></div>
                </div>
              ) : null}
              {reportSendingFailure ? (
                <div className="col">
                  <div className="alert alert--danger" role="alert">
                    {reportSendingFailureMessage}
                  </div>
                  <div className="spacer spacer--sm"></div>
                </div>
              ) : null}
            </div>
            <div className={clsx("row", styles.form)}>
              <div className="col">
                <label htmlFor="url">Reported site URL:</label>
                <input
                  id="url"
                  type="text"
                  value={url}
                  onChange={(e) => changeUrl(e.target.value)}
                  maxLength="40"
                  minLength="1"
                  required={true}
                />
              </div>
              <div className="col">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  rows="5"
                  value={message}
                  onChange={(e) => changeMessage(e.target.value)}
                  maxLength="400"
                  minLength="1"
                  required={true}
                />
              </div>
              <div className="col">
                <label htmlFor="email">Email-address (optional):</label>
                <input
                  id="email"
                  type="text"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>
              <div className="spacer spacer--sm"></div>
              <div className="col text--center">
                <button
                  className="button button--primary"
                  onClick={async () => await report()}
                  onKeyDown={async () => await report()}
                >
                  Report
                </button>
              </div>
              <div className="spacer spacer--sm"></div>
            </div>
          </div>
        </section>
        <div className="spacer"></div>
      </main>
    </Layout>
  );
};

export default ReportAbuse;
