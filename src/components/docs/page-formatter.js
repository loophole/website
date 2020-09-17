import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import { Container, Section } from "../global"
import Layout from "../common/layout/layout"
import SEO from "../common/layout/seo"
import Navigation from "../common/navigation/navigation"
import GetStarted from "../common/footer/getstarted"
import Footer from "../common/footer/footer"

import Header from "./header"

const DocsPage = ({
    data, // this prop will be injected by the GraphQL query below.
}) => {
    const Docs = data.allMarkdownRemark.edges
        .map(edge => <DocsMenuItem key={edge.node.id}><Link to={`/docs/${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link></DocsMenuItem>)
    return (
        <Layout>
            <SEO title="Documentation" />
            <Navigation />
            <Header />
            <Section id="content">
                <DocsContainer>
                    <DocsMenu>
                        <DocsMenuGroup>
                            {Docs}
                        </DocsMenuGroup>
                    </DocsMenu>
                    <DocsContent>
                        <DocsContentTitle>{data.markdownRemark.frontmatter.title}</DocsContentTitle>
                        <DocsContentText dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                    </DocsContent>
                </DocsContainer>

            </Section>
            <GetStarted />
            <Footer />
        </Layout>
    )
}
export default DocsPage

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                slug
                title
            }
        }
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___slug] }) {
            edges {
                node {
                    id
                    frontmatter {
                        slug
                        title
                    }
                }
            }
        }
    }
`


const DocsContainer = styled(Container)`
    display: flex;
`

const DocsMenu = styled.div`
    flex: 0 0 230px;
`
const DocsMenuGroup = styled.ul`
  list-style: none;
`

const DocsMenuItem = styled.li`
a {
    text-decoration: none;

  color: ${props => props.theme.color.primary};

  :hover {
      color: ${props => props.theme.color.secondary};
  }
}
`

const DocsContent = styled.div`
    flex: 1 0 230px;
`

const DocsContentTitle = styled.h1`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const DocsContentText = styled.p`
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
`
