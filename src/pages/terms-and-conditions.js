import React from "react";

import Layout from "../components/common/layout/layout";
import SEO from "../components/common/layout/seo";
import Navigation from "../components/common/navigation/navigation";

import Header from "../components/termsandconditions/header";
import Features from "../components/termsandconditions/features";
import Footer from "../components/common/footer/footer";
import GetStarted from "../components/common/footer/getstarted";

const TnCPage = () => (
  <Layout>
    <SEO title="Terms and Conditions" />
    <Navigation isIndex={false} />
    <Header />
    <Features />
    <GetStarted />
    <Footer />
  </Layout>
);

export default TnCPage;
