(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{208:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(216),i=a.n(r),n=a(217),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new i.a(s.a);var l=o.rhythm,c=o.scale},209:function(e,t,a){"use strict";a(214)("fixed",function(e){return function(){return e(this,"tt","","")}})},210:function(e,t,a){"use strict";a(29),a(30),a(13),a(92),a(134),a(209);var r=a(14);t.__esModule=!0,t.default=void 0;var i,n=r(a(68)),s=r(a(69)),o=r(a(135)),l=r(a(136)),c=r(a(0)),d=r(a(52)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),p=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function j(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var w=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)}).join("")+"<img "+c+s+o+a+r+t+n+i+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},B=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=c.default.createElement(L,(0,l.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),n):n},L=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,A=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},A,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&m&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=w(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,A=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,b=e.Tag,y=e.itemProp,j=e.loading,w=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:R?1:0,transition:I?"opacity "+m+"ms":"none"},o),Q="boolean"==typeof h?"lightgray":h,C={transitionDelay:m+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&C,o,f),z={title:t,alt:this.state.isVisible?"":a,style:N,className:A};if(p){var T=p,V=T[0];return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),Q&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&C)}),V.base64&&c.default.createElement(B,{src:V.base64,spreadProps:z,imageVariants:T,generateSources:S}),V.tracedSVG&&c.default.createElement(B,{src:V.tracedSVG,spreadProps:z,imageVariants:T,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,E(T),c.default.createElement(L,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:j,draggable:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:j},V,{imageVariants:T}))}}))}if(g){var M=g,P=M[0],k=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete k.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},Q&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},I&&C)}),P.base64&&c.default.createElement(B,{src:P.base64,spreadProps:z,imageVariants:M,generateSources:S}),P.tracedSVG&&c.default.createElement(B,{src:P.tracedSVG,spreadProps:z,imageVariants:M,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,E(M),c.default.createElement(L,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:j,draggable:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:j},P,{imageVariants:M}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),O=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});R.propTypes={resolutions:I,sizes:O,fixed:d.default.oneOfType([I,d.default.arrayOf(I)]),fluid:d.default.oneOfType([O,d.default.arrayOf(O)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var Q=R;t.default=Q},212:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(66),s=a.n(n);a.d(t,"a",function(){return s.a});a(213),a(9).default.enqueue,i.a.createContext({})},213:function(e,t,a){var r;e.exports=(r=a(220))&&r.default||r},214:function(e,t,a){var r=a(1),i=a(7),n=a(32),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},215:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(200),s=a.n(n);t.a=function(e){var t=e.children;return i.a.createElement("div",{className:s.a.container},t)}},218:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=(a(212),a(208)),s=a(211);a(215);var o=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=(e.location,e.title,e.children);return i.a.createElement("div",{style:{fontFamily:"Lato",backgroundColor:"#fbfbfe",boxShadow:"none",position:"auto",maxWidth:Object(n.a)(270),maxHeight:Object(n.a)(700),textDecoration:"none"}},i.a.createElement("header",null,i.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://laurahanu.github.io/css/bootstrap.css"}),i.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://laurahanu.github.io/fonts/font-awesome/css/font-awesome.css"}),i.a.createElement(s.Helmet,null,i.a.createElement("script",{src:"https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js",type:"text/javascript"}),i.a.createElement("script",{type:"text/javascript",src:"https://laurahanu.github.io/js/bootstrap.js"}),i.a.createElement("script",{async:!0,defer:!0,src:"https://buttons.github.io/buttons.js"}),i.a.createElement("script",{type:"text/javascript",src:"https://laurahanu.github.io/js/jquery.1.11.1.js"}),i.a.createElement("script",{type:"text/javascript",src:"https://laurahanu.github.io/js/bootstrap.js"}),i.a.createElement("script",{type:"text/javascript",src:"https://laurahanu.github.io/js/SmoothScroll.js"}),i.a.createElement("script",{type:"text/javascript",src:"https://laurahanu.github.io/js/jquery.prettyPhoto.js"}),i.a.createElement("script",{type:"text/javascript",src:"https://laurahanu.github.io/js/jquery.isotope.js"}),i.a.createElement("script",{type:"text/javascript",src:"https://laurahanu.github.io/js/main.js"})),i.a.createElement("body",{id:"page-top","data-spy":"scroll","data-target":".navbar-fixed-top"},i.a.createElement("div",{id:"nav"},i.a.createElement("nav",{class:"navbar navbar-custom"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"navbar-header"},i.a.createElement("button",{type:"button",class:"navbar-toggle","data-toggle":"collapse","data-target":".navbar-main-collapse"}," ",i.a.createElement("i",{class:"fa fa-bars"})," "),i.a.createElement("a",{class:"navbar-brand page-scroll",href:"https://laurahanu.github.io/"},"Laura Hanu")," "),i.a.createElement("div",{class:"collapse navbar-collapse navbar-right navbar-main-collapse"},i.a.createElement("ul",{class:"nav navbar-nav"},i.a.createElement("li",{class:"hidden"}," ",i.a.createElement("a",{href:"https://laurahanu.github.io/"})," "),i.a.createElement("li",null," ",i.a.createElement("a",{class:"page-scroll",href:"https://laurahanu.github.io/#about"},"About")," "),i.a.createElement("li",null," ",i.a.createElement("a",{class:"page-scroll",href:"https://laurahanu.github.io/#projects"},"Projects")," "),i.a.createElement("li",null," ",i.a.createElement("a",{class:"page-scroll",href:"https://laurahanu.github.io/#resume"},"Timeline")," "),i.a.createElement("li",null," ",i.a.createElement("a",{class:"page-scroll",href:"/blog/"},"Blog")," "),i.a.createElement("li",null," ",i.a.createElement("a",{class:"page-scroll",href:"https://laurahanu.github.io/#contact"},"Contact")," "))))))),void 0),i.a.createElement("main",{style:{marginLeft:"auto",marginRight:"auto",fontWeight:300,fontSize:15,maxWidth:Object(n.a)(34),paddingBottom:20,marginTop:20,paddingLeft:0,paddingRight:0,marginBottom:20}},i.a.createElement("div",{class:"col-md-12 text-center center"},i.a.createElement("h5",{style:{fontFamily:"Lato",fontSize:28,textAlign:"center",color:"#4b5b60"}},"Blog"),i.a.createElement("hr",{style:{marginTop:-30,maxHeight:2}})),i.a.createElement("div",{class:"col-md-12 "},t,"  ")),i.a.createElement("footer",{style:{boxShadow:"none",color:"#4b5b60",fontWeight:200,fontSize:11,marginLeft:"auto",marginRight:"auto",maxWidth:Object(n.a)(34),paddingLeft:20,marginTop:20,paddingTop:20}},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{style:{boxShadow:"none",color:"#4b5b60",fontWeight:300},href:"https://www.gatsbyjs.org"},"Gatsby")))},r}(i.a.Component);t.a=o},219:function(e,t,a){"use strict";var r=a(221),i=a(0),n=a.n(i),s=a(211),o=a.n(s);function l(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,l=r.data.site,c=t||l.siteMetadata.description;return n.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},220:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),i=a.n(r),n=a(99);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},221:function(e){e.exports={data:{site:{siteMetadata:{title:"Blog",description:"A starter blog demonstrating what Gatsby can do.",author:"Laura Hanu"}}}}},222:function(e,t,a){"use strict";a(209);var r=a(225),i=a(0),n=a.n(i),s=a(210),o=a.n(s),l=a(208);t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author;t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.2)}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginTop:-20,marginBottom:0,minWidth:70,width:70,height:70,quality:100,borderRadius:"50%"},imgStyle:{borderRadius:"0%",quality:100}}),n.a.createElement("p",null,"I mostly write about AI and machine learning."," "))}},225:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAQL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABirzaZaXgmX0NQL//xAAeEAACAQMFAAAAAAAAAAAAAAABAgADEBIREyIxM//aAAgBAQABBQLWMmFgee6HKHJepS9CoU//xAAWEQEBAQAAAAAAAAAAAAAAAAABABD/2gAIAQMBAT8BNb//xAAXEQEAAwAAAAAAAAAAAAAAAAABABAx/9oACAECAQE/AWzJ/8QAHBAAAgICAwAAAAAAAAAAAAAAAAERIRAiMUFx/9oACAEBAAY/Ahc4g1Tpdknoij//xAAbEAACAgMBAAAAAAAAAAAAAAAAAREhMUFRYf/aAAgBAQABPyF85IV2bVz0RLVQ6IYZEftsbbtrpDx7uBqW1n//2gAMAwEAAgADAAAAEETnwP/EABkRAAIDAQAAAAAAAAAAAAAAAAABEBExIf/aAAgBAwEBPxCtdhajTP/EABkRAAIDAQAAAAAAAAAAAAAAAAABEBExIf/aAAgBAgEBPxC98h4zA//EAB0QAQACAgMBAQAAAAAAAAAAAAEAESExQVFxgfD/2gAIAQEAAT8QQU8L7gONwYlOqixK6ho3fkUDtYFtr98mN6WB0m4yOQnkWrqwPIw6UKvPKWz/2Q==",width:500,height:500,src:"/blog/static/266481baad13319f2363c8edb16953b2/20313/profile-pic.jpg",srcSet:"/blog/static/266481baad13319f2363c8edb16953b2/20313/profile-pic.jpg 1x"}}},site:{siteMetadata:{author:"Laura Hanu",social:{twitter:"hanulaura"}}}}}}}]);
//# sourceMappingURL=2-d3f9d0d06392ac8d0546.js.map