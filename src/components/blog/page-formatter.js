import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

import { Container, Section } from "../global";
import Layout from "../common/layout/layout";
import SEO from "../common/layout/seo";
import Navigation from "../common/navigation/navigation";
import GetStarted from "../common/footer/getstarted";
import Footer from "../common/footer/footer";

import Header from "./header";


const BlogPage = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Navigation />
      <Header />
      <Section id="content">
        <BlogContainer>
          <BlogContent>
            <BlogContentTitle>
              {data.markdownRemark.frontmatter.title}
            </BlogContentTitle>
            <BlogContentSubtitle>
              {data.markdownRemark.frontmatter.date} - {data.markdownRemark.timeToRead} min read - <Link to={"/blog"}>Go back</Link>
            </BlogContentSubtitle>
            <BlogContentText
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            <Link to={"/blog"}>Browse other posts</Link>
          </BlogContent>
        </BlogContainer>
      </Section>
      <GetStarted />
      <Footer />
    </Layout>
  );
};
export default BlogPage;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug }, type: { eq: "blog" } },
    ) {
      html
      headings {
        depth
        value
      }
      timeToRead
      frontmatter {
        slug
        title
        date
      }
    }
  }
`;

const BlogContainer = styled(Container)`
  display: flex;
`;

const BlogContent = styled.div`
  flex-grow: 2;
  flex-shrink: 3;
  flex-basis: 500px;
  max-width: 900px;
  `;

const BlogContentTitle = styled.h1`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 3rem;
  margin-bottom: 1.5rem;
`;

const BlogContentSubtitle = styled.h6`
color: ${(props) => props.theme.color.primary};
letter-spacing: 0px;
`;

const BlogContentText = styled.p`
  padding-left: 4rem;
  h1 {
    font-size: 2.25em;
  }
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.75em;
  }
  h4 {
    font-size: 1.5em;
  }
  h5 {
    font-size: 1.25em;
  }
  h6 {
    font-size: 1em;
  }
`;

