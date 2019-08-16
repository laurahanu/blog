import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { Helmet } from 'react-helmet'
import Container from "../components/container"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    return (
      <div
        style={{fontFamily: `Lato`,
	backgroundColor: '#fbfbfe',
        boxShadow: `none`, position: `auto`,
        maxWidth: rhythm(270), maxHeight: rhythm(700), textDecoration: 'none'}}	      
      >
        <header>
	<link rel="stylesheet" type="text/css"  href="https://laurahanu.github.io/css/bootstrap.css"/>
	<link rel="stylesheet" type="text/css" href="https://laurahanu.github.io/fonts/font-awesome/css/font-awesome.css"/>
	<Helmet>
	  <script src="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js" type="text/javascript" />
	  <script type="text/javascript" src="https://laurahanu.github.io/js/bootstrap.js"/>
	<script async defer src="https://buttons.github.io/buttons.js"></script>
	<script type="text/javascript" src="https://laurahanu.github.io/js/jquery.1.11.1.js"></script>
	<script type="text/javascript" src="https://laurahanu.github.io/js/bootstrap.js"></script>
	<script type="text/javascript" src="https://laurahanu.github.io/js/SmoothScroll.js"></script>
	<script type="text/javascript" src="https://laurahanu.github.io/js/jquery.prettyPhoto.js"></script>
	<script type="text/javascript" src="https://laurahanu.github.io/js/jquery.isotope.js"></script>
	<script type="text/javascript" src="https://laurahanu.github.io/js/main.js"></script>
	</Helmet>

	
	<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
	<div id="nav" >
	  <nav class="navbar navbar-custom">
	    <div class="container">
	      <div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> <i class="fa fa-bars"></i> </button>
		<a class="navbar-brand page-scroll" href="#page-top">Laura Hanu</a> </div>
		  <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
		    <ul class="nav navbar-nav">
		      <li class="hidden"> <a href="#page-top"></a> </li>
		      <li> <a class="page-scroll" href="https://laurahanu.github.io/#about">About</a> </li>
		      <li> <a class="page-scroll" href="https://laurahanu.github.io/#projects">Projects</a> </li>
		      <li> <a class="page-scroll" href="https://laurahanu.github.io/#resume">Timeline</a> </li>
		      <li> <a class="page-scroll" href="/blog/">Blog</a> </li>
		      <li> <a class="page-scroll" href="https://laurahanu.github.io/#contact">Contact</a> </li>
		    </ul>
		</div>
	    </div>
	  </nav>
	</div>


	</body>
	{header}
	</header>



        <main style={{marginLeft: `auto`, marginRight: `auto`, fontWeight: 350, fontSize: 15, maxWidth: rhythm(34), paddingBottom: 20,  marginTop: 20, paddingLeft: 0, paddingRight: 0, marginBottom: 20}} >
			<div class="col-md-12 text-center center">
		      <h5  style={{fontFamily: `Lato`, fontSize: 28, textAlign: 'center', color:'#4b5b60'}}>Blog</h5>
		      <hr style={{marginTop:-20}}/>
		</div>
<div class="col-md-12 ">
		{children}		</div>
	</main>

        <footer style={{ boxShadow: `none`,color: `#4b5b60`, fontWeight: 200, fontSize: 11, marginLeft: `auto`, marginRight: `auto`, maxWidth: rhythm(34), paddingLeft: 20, marginTop: 20, paddingTop: 20}}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a  style={{ boxShadow: `none`,color: `#4b5b60`,fontWeight: 300 }} href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>

      </div>
    )
  }
}

export default Layout
