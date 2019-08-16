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

const about = () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
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
        
	<div id="about" >
	  <div class="container">
	    <div class="section-title text-center center col-md-8 col-md-offset-2">
	      <h1>About Me</h1>
	      <hr/>
	    </div>
	    <div class="row">
	      <div class="col-md-12 text-center"><img src="img/about.jpg" class="img-responsive"/></div>
		<div class="col-md-8 col-md-offset-2">
		  <div class="about-text">
		    <p style="text-align: center">I am currently a Data Scientist at <a href="https://visulytix.com">Visulytix</a> working on developing and building Deep Learning models for healthcare. My main 				interests are in unsupervised learning and deep representations.</p>
		    <p style="text-align: center">Some of my research interests include AI safety & explainability, neurotechnology and the underlying mechanisms of imagination and creativity, artificial or 				not :).</p>
		    </div>
		  <div class="social col-md-12 text-center">
		    <ul>
		      <li><a href="https://twitter.com/HanuLaura"><i class="fa fa-twitter"></i></a></li>
		        <li><a href="https://github.com/laurahanu"><i class="fa fa-github"></i></a></li>
		      <li><a href="https://www.linkedin.com/in/laura-hanu-a0941691/"><i class="fa fa-linkedin"></i></a></li>
		    </ul>
		  </div>
		<p class="col-md-12 text-center">
		<a href="./static/CV.pdf" class="btn btn-primary" ><i class="fa fa-download"></i> CV </a></p>
	    </div>
	  </div>
	</div>
	</div>

    </div>
  )
}

export default about
