import React from "react"
import Container from "../components/container"
import { Helmet } from 'react-helmet'
import Image from "gatsby-image"
import { rhythm, scale } from "../utils/typography"
import "../styles/global.css"
export default () => (

  <Container>
	<div
        style={{fontFamily: `Lato`,
	backgroundColor: '#fbfbfe'}}	      
      />

	<Helmet>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
	<link rel="stylesheet" type="text/css"  href="css/bootstrap.css"/>
	<link rel="stylesheet" type="text/css"  href="css/style.css"/>
	<link rel="stylesheet" type="text/css" href="css/prettyPhoto.css"/>
	<link href='http://fonts.googleapis.com/css?family=Lato:400,700,900,300' rel='stylesheet' type='text/css'/>
	<script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js" type="text/javascript" />
	<script type="text/javascript" src="https://laurahanu.github.io/js/bootstrap.js"/>
	<script async defer src="https://buttons.github.io/buttons.js"></script>
	<script type="text/javascript" src="https://laurahanu.github.io/js/jquery.1.11.1.js"></script>
	<script type="text/javascript" src="https://laurahanu.github.io/js/bootstrap.js"></script>
	<script type="text/javascript" src="https://laurahanu.github.io/js/SmoothScroll.js"></script>
	<script type="text/javascript" src="https://laurahanu.github.io/js/jquery.prettyPhoto.js"></script>
	<script type="text/javascript" src="https://laurahanu.github.io/js/jquery.isotope.js"></script>
	<script type="text/javascript" src="https://laurahanu.github.io/js/main.js"></script>
	</Helmet>

	<div class="about" >
		</div>
		    <div class="section-title text-center center col-md-8 col-md-offset-2">
		      <h5  style={{fontFamily: `Lato`}}>About Me</h5>
		      <hr style={{marginTop:-40}}/>


		      <div class="col-md-12 text-center"><img style={{borderRadius: `50%`, height: 200, width: 200, marginTop: 30, marginBottom: 20}} src="https://laurahanu.github.io/img/about.jpg" 				class="img-responsive"/></div>
			<div class="col-md-8 col-md-offset-2">
			  <div class="about-text" style={{maxWidth: 600, margin: 'auto'}}>
			    <p>I am currently a Data Scientist at <a href="https://visulytix.com">Visulytix</a> working on developing and building Deep Learning models for healthcare. My main interests are in 					unsupervised learning and deep representations.</p>
			    <p>Some of my research interests include AI safety & explainability, neurotechnology and the underlying mechanisms of imagination and creativity, artificial or not :).</p>
			    </div>
				  <social >
				    <ul>
				      <li><a style={{color: '#aac9d4', fontSize: 25, marginRight: 10, marginLeft: 10}} href="https://twitter.com/HanuLaura"><i class="fa fa-twitter"></i> </a> 
					<a style={{color: '#aac9d4', fontSize: 25, marginRight: 10, marginLeft: 10}} href="https://github.com/laurahanu"><i class="fa fa-github"></i></a>
					<a style={{color: '#aac9d4', fontSize: 25, marginRight: 10, marginLeft: 10}} href="https://www.linkedin.com/in/laura-hanu-a0941691/"><i class="fa fa-linkedin"></i></a>
					</li>

				    </ul>
				  </social>
				<p class="col-md-12 text-center">
				<a style={{borderRadius: 5}} href="https://laurahanu.github.io/static/CV.pdf" class="btn btn-primary" ><i class="fa fa-download"></i> CV </a></p>

			</div>
		</div>

  </Container>


)

