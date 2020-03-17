import { graphql } from "gatsby"

export const SiteInformation = graphql`
  fragment SiteMetadataFragment on Site {
    siteMetadata {
      title
      description
      author
    }
  }
`
