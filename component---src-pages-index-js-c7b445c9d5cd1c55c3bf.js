(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{201:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var r=a(0),i=a.n(r),n=a(204),o=a(210),s=a(207),l=a(208),d=a(202);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return i.a.createElement(s.a,{location:this.props.location,title:t},i.a.createElement(l.a,{title:"All posts"}),i.a.createElement(o.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},i.a.createElement(n.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))},r}(i.a.Component);t.default=c;var u="2785444898"},202:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(214),i=a.n(r),n=a(215),o=a.n(n);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new i.a(o.a);var l=s.rhythm,d=s.scale},203:function(e,t,a){var r;e.exports=(r=a(205))&&r.default||r},204:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(66),o=a.n(n);a.d(t,"a",function(){return o.a});a(203),a(9).default.enqueue,i.a.createContext({})},205:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),i=a.n(r),n=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},206:function(e,t,a){"use strict";a(211)("fixed",function(e){return function(){return e(this,"tt","","")}})},207:function(e,t,a){"use strict";a(18);var r=a(0),i=a.n(r),n=a(204),o=a(202);var s=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,s=t.children;return e="/laurahanu-blog.github.io/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(o.b)(1.5),{fontFamily:"Lato",marginBottom:Object(o.a)(2.5),marginTop:0})},i.a.createElement(n.a,{style:{boxShadow:"none",fontFamily:"Lato-light",textDecoration:"none",color:"inherit"},to:"/"},r)):i.a.createElement("h3",{style:{fontFamily:"Lato",marginTop:0}},i.a.createElement(n.a,{style:{fontFamily:"Lato",boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),i.a.createElement("div",{style:{fontFamily:"Lato",marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},i.a.createElement("header",null,e),i.a.createElement("main",null,s),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},r}(i.a.Component);t.a=s},208:function(e,t,a){"use strict";var r=a(209),i=a(0),n=a.n(i),o=a(216),s=a.n(o);function l(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return n.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},209:function(e){e.exports={data:{site:{siteMetadata:{title:"Blog",description:"A starter blog demonstrating what Gatsby can do.",author:"Laura Hanu"}}}}},210:function(e,t,a){"use strict";a(206);var r=a(212),i=a(0),n=a.n(i),o=a(213),s=a.n(o),l=a(202);t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author;t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.2)}},n.a.createElement(s.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginTop:-20,marginBottom:10,minWidth:50,width:70,height:70,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"This is my blog page where I write about data science and machine learning."," "))}},211:function(e,t,a){var r=a(1),i=a(7),n=a(32),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},212:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAQL/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAABirzaRpeEZfSdQR//xAAeEAACAQMFAAAAAAAAAAAAAAABAgADEBIREyIxM//aAAgBAQABBQLWMmFgee6HKHJepS9CoU//xAAWEQEBAQAAAAAAAAAAAAAAAAABABD/2gAIAQMBAT8BNb//xAAXEQEBAQEAAAAAAAAAAAAAAAABABAx/9oACAECAQE/AXGOX//EABwQAAICAgMAAAAAAAAAAAAAAAABESEQIjFBcf/aAAgBAQAGPwIXOINU6XZJ6Io//8QAGxABAAIDAQEAAAAAAAAAAAAAAQARIUFRMWH/2gAIAQEAAT8hefZSzSmb7CW8o4IeNpX7birU6I6+7UVG2Z//2gAMAwEAAgADAAAAEETng//EABkRAAIDAQAAAAAAAAAAAAAAAAABEBExIf/aAAgBAwEBPxCldhajTP/EABkRAAIDAQAAAAAAAAAAAAAAAAARARAxIf/aAAgBAgEBPxB3ysSYH//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESFRMXFBgfD/2gAIAQEAAT8QQU6L3AccwYlNVFiV1Bo3fUUDtYFtr71Mb0sDScxgchOotXiwbGHShV58pmf/2Q==",width:500,height:500,src:"/laurahanu-blog.github.io/static/266481baad13319f2363c8edb16953b2/56565/profile-pic.jpg",srcSet:"/laurahanu-blog.github.io/static/266481baad13319f2363c8edb16953b2/56565/profile-pic.jpg 1x"}}},site:{siteMetadata:{author:"Laura Hanu",social:{twitter:"hanulaura"}}}}}},213:function(e,t,a){"use strict";a(29),a(30),a(13),a(93),a(135),a(206);var r=a(14);t.__esModule=!0,t.default=void 0;var i,n=r(a(68)),o=r(a(71)),s=r(a(139)),l=r(a(140)),d=r(a(0)),c=r(a(52)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),g=function(e){var t=u(e),a=f(t);return A[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var B=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)}).join("")+"<img "+d+o+s+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(L,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},L=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},A,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&h&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=B(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,g=e.fluid,p=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,E=e.itemProp,w=e.loading,B=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:R?1:0,transition:x?"opacity "+h+"ms":"none"},s),Q="boolean"==typeof m?"lightgray":m,N={transitionDelay:h+"ms"},C=(0,l.default)({opacity:this.state.imgLoaded?0:1},x&&N,s,f),M={title:t,alt:this.state.isVisible?"":a,style:C,className:A};if(g){var V=g,T=V[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),Q&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&N)}),T.base64&&d.default.createElement(I,{src:T.base64,spreadProps:M,imageVariants:V,generateSources:v}),T.tracedSVG&&d.default.createElement(I,{src:T.tracedSVG,spreadProps:M,imageVariants:V,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(V),d.default.createElement(L,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:B})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:a,title:t,loading:w},T,{imageVariants:V}))}}))}if(p){var z=p,D=z[0],F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},n);return"inherit"===n.display&&delete F.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},Q&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},x&&N)}),D.base64&&d.default.createElement(I,{src:D.base64,spreadProps:M,imageVariants:z,generateSources:v}),D.tracedSVG&&d.default.createElement(I,{src:D.tracedSVG,spreadProps:M,imageVariants:z,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(z),d.default.createElement(L,{alt:a,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:B})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:a,title:t,loading:w},D,{imageVariants:z}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var x=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:x,sizes:O,fixed:c.default.oneOfType([x,c.default.arrayOf(x)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var Q=R;t.default=Q}}]);
//# sourceMappingURL=component---src-pages-index-js-c7b445c9d5cd1c55c3bf.js.map