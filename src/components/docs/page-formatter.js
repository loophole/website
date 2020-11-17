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

const handleMenuClick = (e) => {
  e.preventDefault();
  e.target.parentElement.lastElementChild.style.display === "none"
    ? (e.target.parentElement.lastElementChild.style.display = "")
    : (e.target.parentElement.lastElementChild.style.display = "none");
};

const DocsPage = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const groupedEdges = data.allMarkdownRemark.edges.reduce((acc, edge) => {
    const parent = edge.node.frontmatter.slug.includes("/")
      ? edge.node.frontmatter.slug.split("/")[0]
      : "_global";
    acc[parent] = acc[parent] ? [...acc[parent], edge] : [edge];
    return acc;
  }, {});
  const Docs = [];
  for (const [key, value] of Object.entries(groupedEdges)) {
    if (key === "_global") {
      for (const item of value) {
        Docs.push(
          <DocsMenuItem key={item.node.id}>
            <Link role="button" to={`/docs/${item.node.frontmatter.slug}`}>
              {item.node.frontmatter.title}
            </Link>
          </DocsMenuItem>
        );
      }
    } else {
      const group = [];
      for (const item of value) {
        group.push(
          <DocsMenuItem key={item.node.id}>
            <Link role="button" to={`/docs/${item.node.frontmatter.slug}`}>
              {item.node.frontmatter.title}
            </Link>
          </DocsMenuItem>
        );
      }
      Docs.push(
        <DocsMenuItem key={`${key}-group`}>
          <DocsMenuCategory onClick={(e) => handleMenuClick(e)} onKeyDown={(e) => handleMenuClick(e)}>{key}</DocsMenuCategory>
          <DocsMenuSlider key={`${key}-items`}>{group}</DocsMenuSlider>
        </DocsMenuItem>
      );
    }
  }
  return (
    <Layout>
      <SEO title="Documentation" />
      <Navigation />
      <Header />
      <Section id="content">
        <DocsContainer>
          <DocsMenu>
            <DocsMenuGroup>{Docs}</DocsMenuGroup>
          </DocsMenu>
          <DocsContent>
            <DocsContentTitle>
              {data.markdownRemark.frontmatter.title}
            </DocsContentTitle>
            <DocsContentText
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </DocsContent>
        </DocsContainer>
      </Section>
      <GetStarted />
      <Footer />
    </Layout>
  );
};
export default DocsPage;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] },
      filter: {frontmatter: {type: {eq: "docs"}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            order
            slug
            title
          }
        }
      }
    }
  }
`;

const DocsContainer = styled(Container)`
  display: flex;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
  }
`;

const DocsMenu = styled.div`
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 230px;
  margin-right: 2.5rem;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-right: 0;
    margin: 20px;
  }
`;
const DocsMenuGroup = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

const DocsMenuSlider = styled.ul`
  animation: slide-down 0.3s ease-out;

  @keyframes slide-down {
    0% {
      opacity: 0;
      -moz-transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      -moz-transform: translateY(0);
    }
  }
`;

const DocsMenuCategory = styled.button`
  text-transform: capitalize;
`;

const DocsMenuItem = styled.li`
  text-transform: capitalize;
  span {
    cursor: pointer;
  }

  a {
    text-decoration: none;

    color: ${(props) => props.theme.color.primary};

    :hover {
      color: ${(props) => props.theme.color.secondary};
    }
  }
`;

const DocsContent = styled.div`
  flex-grow: 2;
  flex-shrink: 3;
  flex-basis: 500px;
  max-width: 900px;
`;

const DocsContentTitle = styled.h1`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 3rem;
  margin-bottom: 1.5rem;
`;

const DocsContentText = styled.div`
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

