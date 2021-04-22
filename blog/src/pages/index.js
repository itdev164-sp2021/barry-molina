import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'
import { Box, Card, Image, Heading } from 'rebass'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { List, ListItem } from '../components/List'

const Grid = styled(Box)`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      {
        data.allContentfulBlogPost.edges.map(edge => (
          <Card key={edge.node.id} width={256} p={3}>
            <Link to={edge.node.slug}>
              <Image src={edge.node.heroImage.fluid.src} alt="hero image" />
            </Link>
            <Heading>{edge.node.title}</Heading>
            <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
          </Card>
        ))
      }
    </Grid>
{/* 
    <List width={[1, 1/2, 2/3,]} p={2}>
      {
        data.allContentfulBlogPost.edges.map(edge => (
          <ListItem p={3}>
            <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
            <div>
              <img src={edge.node.heroImage.fluid.src} alt="hero image" />
            </div>
            <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
          </ListItem>
        ))
      }
    </List> */}
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
        heroImage {
          fluid(maxWidth: 600) {
            src
          }
        }
      }
    }
  }
}
`
