import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/download/header"
import Features from "../components/download/features"
import Footer from "../components/common/footer/footer"
import GetStarted from "../components/common/footer/getstarted"


const download = () => (
  <Layout>
    <SEO title="Download" />
    <Navigation isIndex={true} />
    <Header />
    <Features />
    <GetStarted />
    <Footer />
  </Layout>
)

export default download
