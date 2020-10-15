import React from "react";

import Layout from "../components/common/layout/layout";
import SEO from "../components/common/layout/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      Sorry, this page does not exist! Kindly go to{" "}
      <a href="https://www.loophole.cloud" target="blank">
        Loophole
      </a>
      .{" "}
    </p>
  </Layout>
);

export default NotFoundPage;
