import React from "react"
import Projects from "../components/projects"
import { Helmet } from 'react-helmet'
import Image from "gatsby-image"
import { rhythm, scale } from "../utils/typography"
import "../styles/global.css"
export default () => (

  <projects>
      <div
        style={{fontFamily: `Lato`,
	backgroundColor: '#fbfbfe',
}}	      
     / >
	<Helmet>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

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

      <h5   style={{fontFamily: `Lato`, color:'#4b5b60'}}>Projects</h5>
      <hr style={{marginTop:-40}}/>

	<div style={{ textAlign:'center', margin: 'auto'}}>

	<div style={{ display: `inline-block`, padding: 20}}>
        <div class="portfolio-item">
          <p><img src="https://laurahanu.github.io/img/portfolio/autoenc.png"  class="img-responsive img-circle"  alt="Project Title"/></p>
        <h3>2D & 3D Autoencoder</h3>
        <p  style={{fontSize:13, fontFamily:`Lato`, margin: 'auto', color: '#4b5b60', textAlign: 'center', paddingBottom: 10}}>Trained a 2D and 3D autoencoder to learn deep representationsof the MRI data.</p>
        <a  style={{borderRadius: 4, padding: 7, fontSize: 12}} href="https://github.com/laurahanu/2D-and-3D-Deep-Autoencoder" class="btn btn-linkedin btn-sm">Read more<i ></i></a>
        </div>
	</div>

	<div style={{ display: `inline-block`, padding: 20}}>
        <div class="portfolio-item">
          <p><img src="https://laurahanu.github.io/img/portfolio/gaugan.png"  class="img-responsive img-circle"  alt="Project Title"/></p>
        <h3 >Fun Stuff with GANs</h3>
        <p style={{fontSize:13, fontFamily:`Lato`, margin: 'auto', color: '#4b5b60', textAlign: 'center', paddingBottom: 10}}>This is an ongoing project, where I basically have some fun with GANs.</p>
        <a style={{borderRadius: 4, padding: 7, fontSize: 12}}  href="#" class="btn btn-linkedin btn-sm">Read more<i ></i></a>
        </div>
        </div>

	<div style={{ display: `inline-block`, padding: 20}}>
        <div class="portfolio-item">
          <p><img src="https://laurahanu.github.io/img/portfolio/gen.png"  class="img-responsive img-circle"  alt="Project Title"/></p>
        <h3>WGAN-GP on MRI images</h3>
        <p style={{fontSize:13, fontFamily:`Lato`, margin: 'auto', color: '#4b5b60', textAlign: 'center', paddingBottom: 10}}>Generated MRI images using a generative model, contains code and results.</p>
        <a style={{borderRadius: 4, padding: 7, fontSize: 12 }}  href="https://github.com/laurahanu/Improved-Wasserstein-GAN-application-on-MRI-images" class="btn btn-linkedin btn-sm">Read more<i ></i></a>
        </div>
        </div>

	<div style={{ display: `inline-block`, padding: 20}}>
        <div class="portfolio-item">
          <p><img style={{width:150, margin: 'auto'}} src="https://laurahanu.github.io/img/portfolio/fractal-small.png"  class="img-responsive img-circle"   alt="Project Title"/></p>
        <h3>3D Fractal Forest Project</h3>
        <p style={{fontSize:13, fontFamily:`Lato`, margin: 'auto', color: '#4b5b60', paddingBottom: 10}}>For my BEng final project, I designed a 3D phantom for wave experiments.</p>
        <a style={{borderRadius: 4, padding: 7, fontSize: 12}}  href="#" class="btn btn-linkedin btn-sm">Read more<i ></i></a>
        </div>
        </div>

       </div>

  </projects>


)

