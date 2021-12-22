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
    title: "Share files instantly",
    imageUrl: "img/undraw_upload_re_pasx.svg",
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


const number = [
  {
    type: "Number of Tunnels Created.",
    value: "15000+",
  },
  {
    type: "Number of Signups.",
    value: "700+",

  },
  {
    type: "Countries trust us!",
    value: "90+",
  },
];
  

const social = [
  {
    username:"@cloudy_stuey",
    text: "@loophole_cloud is an alternative to @ngrok_- its great to see the innovation in such tools which help developers",
    imageUrl: "img/cloudy_stuey.jpg",
  },
  {
    username:"@Brodie_Friesen",
    text: "@loophole_cloud and @SimpleMachines is an amazing combo for small self-hosted servers and development! I highly recommend both.",
    imageUrl: "img/Brodie_Friesen.jpg",
  },
  {
    username:"@james_a_rob",
    text: "Integrated @loophole_cloud into a productivity tool i'm working on. Real simple to add custom domains for free.",
    imageUrl: "img/james_a_rob.jpg",
  },
  {
    username:"@msanaullahsahar",
    text: "We really love this feature. Thanks for providing this wonderful service.",
    imageUrl: "img/msanaullahsahar.jpg",
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

const Social = ({ imageUrl, username, text }) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx(styles.socialBox, "col")}>
      {imgUrl && (
        <div className="text--left">
          <img src={imgUrl} alt={username} />
        </div>
      )}
      <h4 className="text--left">{username}</h4>
      <p className="text--left">{text}</p>
    </div>
  );
};

const Number = ({ value, type }) => {
  return (
    <div className={clsx("col col--4")}>
      <div className={clsx(styles.numberBox)}>
        <h1 className="text--center">{value}</h1>
        <p className="text--center">{type}</p>
      </div>
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
                  className={clsx("button button--secondary button--lg text--uppercase")}
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
      <div className="spacer--lg"></div>
        {number && number.length > 0 && (
          <section>
            <div className="container">
              <div className="text--center">
                <h2>Believing in our mission.</h2>
              </div>
              <div className="row">
                {number.map((props, idx) => (
                 <Number key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
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
        <div className="spacer --lg"></div>
        {social && social.length > 0 && (
          <section>
            <div className="container">
              <div className="text--center">
                <h2>What other developers have to say!</h2>
              </div>
              <div className="row">
                {social.map((props, idx) => (
                  <Social key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
};

export default Home;
