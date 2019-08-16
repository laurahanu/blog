/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 500, height: 500, quality:100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.2),

      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{

          marginRight: rhythm(0.5),
	  marginTop: -20,
          marginBottom: 0,
          minWidth: 70,
	  width: 70,
          height: 70,
	  quality: 100,
          borderRadius: `50%`,

        }}
        imgStyle={{
          borderRadius: `0%`,
	  quality: 100
        }}
      />
      <p>
        This is my blog page where I mostly write about data science and machine learning.
        {` `}
      </p>
    </div>
  )
}

export default Bio
