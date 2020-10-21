import React from "react";

import Layout from "../components/common/layout/layout";
import SEO from "../components/common/layout/seo";
import Navigation from "../components/common/navigation/navigation";

import Header from "../components/reportabuse/header";
import Content from "../components/reportabuse/content";
import Footer from "../components/common/footer/footer";
import GetStarted from "../components/common/footer/getstarted";

const Abuse = () => (
  <Layout>
    <SEO title="Report Abuse" />
    <Navigation isIndex={false} />
    <Header />
    <Content />
    <GetStarted />
    <Footer />
  </Layout>
);

export default Abuse;
