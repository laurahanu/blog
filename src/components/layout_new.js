import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { Helmet } from 'react-helmet'
import about from "../components/about"
import projects from "../components/projects"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
	const ListLink = props => (
	  <li style={{ display: `inline-block`, marginRight: `1rem`,color: '#f4f5f6'  }}>
	    <Link to={props.to}>{props.children}</Link>
	  </li>
	)
    let header

    if (location.pathname === rootPath) {
      header = (
        <h5
        >
          <Link
            style={{
              boxShadow: `none`,
              fontFamily: `Lato`,
              fontWeight: 500,
              textDecoration: `none`,
              color: '#f4f5f6' ,
	      fontSize: 20,
	      paddingBottom: 0
            }}
            to={`/`}
          >
            {title}
          </Link>
	<hr  />
        </h5>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Lato`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              fontFamily: `Lato`,
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#4b5b60`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (

<div style={{fontFamily: `Lato`, backgroundColor: '#a4bac3', maxWidth: 1950, maxHeight: 60, padding: `0 19rem`, textAlign:'left' }}>


	<link rel="stylesheet" type="text/css"  href="https://laurahanu.github.io/css/bootstrap.css"/>
	<link rel="stylesheet" type="text/css" href="https://laurahanu.github.io/fonts/font-awesome/css/font-awesome.css"/>
	<Helmet>
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


	<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
	<div id="nav" >
	  <nav class="navbar navbar-custom">
	    <div class="container">
	      <div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> <i class="fa fa-bars"></i> </button>
		<a class="navbar-brand page-scroll" href="#page-top">Laura Hanu</a> </div>
		  <div class="collapse navbar-collapse navbar-right navbar-main-collapse">

    <header style={{ marginBottom: `5.5rem`, maxWidth: 650, textAlign:'center',paddingTop: 16}}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
        <h3 style={{ display: `inline`, fontSize: 20 , color:'#f4f5f6' }}>Laura Hanu</h3>
      </Link>

      <ul style={{ float: `right`, color: '#f4f5f6'}}>
        <ListLink to="/" ><h3 style={{ display: `inline`, fontSize: 20 , color:'#f4f5f6' }}>Blog</h3></ListLink>
        <ListLink to="/about/"><h3 style={{ display: `inline`, fontSize: 20 , color:'#f4f5f6' }}>About</h3></ListLink>
        <ListLink to="/projects/"><h3 style={{ display: `inline`, fontSize: 20 , color:'#f4f5f6' }}>Projects</h3></ListLink>
      </ul>
    </header>

		</div>
	    </div>
	  </nav>
	</div>
</body>
<div style={{fontFamily: `Lato`, margin: `2rem auto`, backgroundColor: '#fbfbfe', maxWidth: 650, padding: `0 6rem` }}>
        <main style={{fontWeight: 350, fontSize: 15, maxWidth: rhythm(34), paddingBottom: 20,  marginTop: 20, paddingLeft: 20, paddingRight: 10}} >
		{children}
	</main>
        <footer style={{ boxShadow: `none`,color: `#4b5b60`, fontWeight: 200, fontSize: 11, marginLeft: `auto`, marginRight: `auto`, maxWidth: rhythm(34), paddingLeft: 20 }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a  style={{ boxShadow: `none`,color: `#4b5b60`,fontWeight: 300 }} href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      </div>
    )
  }
}

export default Layout
