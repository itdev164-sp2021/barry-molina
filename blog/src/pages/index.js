import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {
        data.allContentfulBlogPost.edges.map(edge => (
          <li>
            <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
            <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
          </li>
        ))
      }
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
{
  allContentfulBlogPost {
    edges {
      node {
        id
        slug
        title
        body {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
}
`
