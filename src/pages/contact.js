import React from "react";

import Layout from "../components/common/layout/layout";
import SEO from "../components/common/layout/seo";
import Navigation from "../components/common/navigation/navigation";

import Header from "../components/contactus/header";
import Features from "../components/contactus/features";
import Footer from "../components/common/footer/footer";
import GetStarted from "../components/common/footer/getstarted";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Navigation isIndex={false} />
    <Header />
    <Features />
    <GetStarted />
    <Footer />
  </Layout>
);

export default Contact;
