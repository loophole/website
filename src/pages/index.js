import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.scss";

const usecases = [
  {
    title: "Showing demos to customers",
    imageUrl: "img/undraw_conference_uo36.svg",
  },
  {
    title: "Integrating webhooks",
    imageUrl: "img/undraw_done_a34v.svg",
  },
  {
    title: "Pre-release testing by beta users",
    imageUrl: "img/undraw_mobile_testing_reah.svg",
  },
  {
    title: "Building peers to peer apps",
    imageUrl: "img/undraw_code_typing_7jnv.svg",
  },
  {
    title: "Running personal cloud servers from home",
    imageUrl: "img/undraw_server_status_5pbv.svg",
  },
  {
    title: "SSH access to Raspberry Pi",
    imageUrl: "img/undraw_smart_home_28oy.svg",
  },
];

const features = [
  {
    title: "Easy HTTPS",
    description: (
      <>
        Instantly create a public HTTPS url for a website running locally on
        your development machine.
      </>
    ),
  },
  {
    title: "Completely Secure",
    description: (
      <>
        By default, we offer end-to-end SSL encryption for all of our services -
        your data is secure all the way to your local services.
      </>
    ),
  },
  {
    title: "Encrypted & Untouched",
    description: (
      <>
        Automatic TLS is built into our client using Let's Encrypt. All our
        services utilize HTTPS for securing all traffic.
      </>
    ),
  },
  {
    title: "Multiple tunnels",
    description: (
      <>Run multiple tunnels simultaneously with a single loophole client.</>
    ),
  },
  {
    title: "Authenticated tunnels",
    description: (
      <>
        We offer Basic Auth or Bearer Token authentication strategies to limit
        access for safety.
      </>
    ),
  },
  {
    title: "No network setup required",
    description: (
      <>
        You are protected from exposing your network and the hassle of firewall
        setups or reverse proxies.
      </>
    ),
  },
];

const UseCase = ({ imageUrl, title }) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx(styles.useCaseBox, "col col--4")}>
      {imgUrl && (
        <div className="text--center">
          <img src={imgUrl} alt={title} />
        </div>
      )}
      <h4 className="text--center">{title}</h4>
    </div>
  );
};

const Feature = ({ title, description }) => {
  return (
    <div className={clsx("col col--4", styles.featureBox)}>
      <h4 className="text--center">{title}</h4>
      <p className="text--center">{description}</p>
    </div>
  );
};

const Home = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className="hero">
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <h2 className="hero__title">{siteConfig.tagline}</h2>
              <p className="hero__subtitle">
                {siteConfig.customFields.description}
              </p>
              <div className="spacer spacer--sm"></div>
              <div>
                <Link
                  className={clsx("button button--secondary button--lg")}
                  to={useBaseUrl("/download")}
                >
                  Quickstart for free
                </Link>
              </div>
            </div>
            <div className="col col--6">
              <img
                className={clsx(styles.bannerImage)}
                src={useBaseUrl("img/main.png")}
                alt="Banner image"
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="spacer"></div>
        {usecases && usecases.length > 0 && (
          <section>
            <div className="container">
              <div className="text--center">
                <small>Breaking the barrier between local and global</small>
                <h2>Under 5 minutes, create public URLs for...</h2>
              </div>
              <div className="row">
                {usecases.map((props, idx) => (
                  <UseCase key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="spacer spacer--lg"></div>
        {features && features.length > 0 && (
          <section>
            <div className="container">
              <div className="text--center">
                <small>Features</small>
                <h2>Get to know it better</h2>
              </div>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="spacer"></div>
      </main>
    </Layout>
  );
};

export default Home;
