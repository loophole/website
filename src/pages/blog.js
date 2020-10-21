import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/common/layout/layout";
import SEO from "../components/common/layout/seo";
import Navigation from "../components/common/navigation/navigation";
import Footer from "../components/common/footer/footer";
import GetStarted from "../components/common/footer/getstarted";

import Header from "../components/blog/header";

import { Section, Container } from "../components/global";

const Blog = ({ data }) => {
    const posts = data.allMarkdownRemark.nodes;

    return (
        <Layout>
            <SEO title="Blog" />
            <Navigation isIndex={false} />
            <Header />
            <Section id="Contact Us!">
                <Container>
                    <SectionTitle>Current blog posts</SectionTitle>
                    {posts.length === 0 ? "Sorry, currently there are no blog posts available" : <ol style={{ listStyle: `none` }}>
                        {posts.map(post => {
                            const title = post.frontmatter.title;

                            return (
                                <li key={post.frontmatter.slug}>
                                    <article>
                                        <header>
                                            <BlogTitle>
                                                <BlogTitleLink to={post.frontmatter.slug}>{title}</BlogTitleLink>
                                            </BlogTitle>
                                            <small>{post.frontmatter.date}</small>
                                        </header>
                                        <section>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: post.excerpt,
                                                }}
                                                itemProp="description"
                                            />
                                        </section>
                                    </article>
                                </li>
                            )
                        })}
                    </ol>}
                </Container>
            </Section>
            <GetStarted />
            <Footer />
        </Layout>
    )
}
export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC },
        filter: {frontmatter: {type: {eq: "blog"}}}
    ) {
      nodes {
        excerpt
        frontmatter {
          slug
          date
          title
        }
      }
    }
  }
`


const SectionTitle = styled.h3`
    color: ${(props) => props.theme.color.primary};
    display: flex;
    justify-content: center;
    margin: 0 auto 40px;
    text-align: center;
`;

const BlogTitle = styled.h2`
    line-height: 2rem;
    margin-left: 0;
    padding-left: 0;
`

const BlogTitleLink = styled(Link)`
    text-decoration: none;
    letter-spacing: 1px;
`;