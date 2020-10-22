import React from "react";

import Layout from "../components/common/layout/layout";
import SEO from "../components/common/layout/seo";
import Navigation from "../components/common/navigation/navigation";

import Header from "../components/privacypolicy/header";
import Features from "../components/privacypolicy/features";
import Footer from "../components/common/footer/footer";
import GetStarted from "../components/common/footer/getstarted";

const privacy = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <Navigation isIndex={false} />
    <Header />
    <Features />
    <GetStarted />
    <Footer />
  </Layout>
);

export default privacy;
