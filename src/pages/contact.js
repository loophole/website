import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Contact = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="Contact" description={siteConfig.tagline}>
      <header className="hero">
        <div className="container">
          <h1 className="hero__subtitle">Contact</h1>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <p>
              Whether you have a question about features, demo, or wish to help
              us improve our services, our team is ready to answer all your
              questions and listen to your feedback. Email us at{" "}
              <a href="mailto:loophole@main.dev">loophole@main.dev</a>
              &nbsp; and we would be happy to help!
            </p>
          </div>
        </section>
        <div className="spacer"></div>
      </main>
    </Layout>
  );
};

export default Contact;
