(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return p});var A=a(0),r=a.n(A),n=a(210),o=a(221),i=(a(213),a(217)),c=a(219),s=a(207);var l=function(t){var e,a;function A(){return t.apply(this,arguments)||this}return a=t,(e=A).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,A.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return r.a.createElement(i.a,{location:this.props.location,title:e},r.a.createElement("about",{title:"about"}),r.a.createElement(c.a,{title:"All posts"}),r.a.createElement(o.a,null),a.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return r.a.createElement("div",{key:e.fields.slug},r.a.createElement("h2",{style:{marginBottom:Object(s.a)(.25),boxShadow:"none",fontFamily:"Lato",fontWeight:400,color:"#629ca7"}},r.a.createElement(n.a,{style:{boxShadow:"none",color:"#629ca7",fontSize:26},to:e.fields.slug},a)),r.a.createElement("small",null,e.frontmatter.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))}))},A}(r.a.Component);e.default=l;var p="2785444898"},207:function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"b",function(){return s});var A=a(215),r=a.n(A),n=a(216),o=a.n(n);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var i=new r.a(o.a);var c=i.rhythm,s=i.scale},208:function(t,e,a){var A;t.exports=(A=a(214))&&A.default||A},210:function(t,e,a){"use strict";var A=a(0),r=a.n(A),n=a(66),o=a.n(n);a.d(e,"a",function(){return o.a});a(208),a(9).default.enqueue,r.a.createContext({})},212:function(t,e,a){"use strict";var A=a(0),r=a.n(A),n=a(199),o=a.n(n);e.a=function(t){var e=t.children;return r.a.createElement("div",{className:o.a.container},e)}},213:function(t,e,a){"use strict";a(218),a(0),a(211),a(207)},214:function(t,e,a){"use strict";a.r(e);a(18);var A=a(0),r=a.n(A),n=a(94);e.default=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(n.a,Object.assign({location:e,pageResources:a},a.json)):null}},217:function(t,e,a){"use strict";var A=a(0),r=a.n(A),n=(a(210),a(207)),o=a(209);a(213),a(212);var i=function(t){var e,a;function A(){return t.apply(this,arguments)||this}return a=t,(e=A).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,A.prototype.render=function(){var t=this.props,e=(t.location,t.title,t.children);return r.a.createElement("div",{style:{fontFamily:"Lato",backgroundColor:"#fbfbfe",boxShadow:"none",position:"auto",maxWidth:Object(n.a)(270),maxHeight:Object(n.a)(700),textDecoration:"none"}},r.a.createElement("header",null,r.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://laurahanu.github.io/css/bootstrap.css"}),r.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://laurahanu.github.io/fonts/font-awesome/css/font-awesome.css"}),r.a.createElement(o.Helmet,null,r.a.createElement("script",{src:"https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js",type:"text/javascript"}),r.a.createElement("script",{type:"text/javascript",src:"https://laurahanu.github.io/js/bootstrap.js"}),r.a.createElement("script",{async:!0,defer:!0,src:"https://buttons.github.io/buttons.js"}),r.a.createElement("script",{type:"text/javascript",src:"https://laurahanu.github.io/js/jquery.1.11.1.js"}),r.a.createElement("script",{type:"text/javascript",src:"https://laurahanu.github.io/js/bootstrap.js"}),r.a.createElement("script",{type:"text/javascript",src:"https://laurahanu.github.io/js/SmoothScroll.js"}),r.a.createElement("script",{type:"text/javascript",src:"https://laurahanu.github.io/js/jquery.prettyPhoto.js"}),r.a.createElement("script",{type:"text/javascript",src:"https://laurahanu.github.io/js/jquery.isotope.js"}),r.a.createElement("script",{type:"text/javascript",src:"https://laurahanu.github.io/js/main.js"})),r.a.createElement("body",{id:"page-top","data-spy":"scroll","data-target":".navbar-fixed-top"},r.a.createElement("div",{id:"nav"},r.a.createElement("nav",{class:"navbar navbar-custom"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"navbar-header"},r.a.createElement("button",{type:"button",class:"navbar-toggle","data-toggle":"collapse","data-target":".navbar-main-collapse"}," ",r.a.createElement("i",{class:"fa fa-bars"})," "),r.a.createElement("a",{class:"navbar-brand page-scroll",href:"#page-top"},"Laura Hanu")," "),r.a.createElement("div",{class:"collapse navbar-collapse navbar-right navbar-main-collapse"},r.a.createElement("ul",{class:"nav navbar-nav"},r.a.createElement("li",{class:"hidden"}," ",r.a.createElement("a",{href:"#page-top"})," "),r.a.createElement("li",null," ",r.a.createElement("a",{class:"page-scroll",href:"/about"},"About")," "),r.a.createElement("li",null," ",r.a.createElement("a",{class:"page-scroll",href:"/projects"},"Projects")," "),r.a.createElement("li",null," ",r.a.createElement("a",{class:"page-scroll",href:"https://laurahanu.github.io/#resume"},"Timeline")," "),r.a.createElement("li",null," ",r.a.createElement("a",{class:"page-scroll",href:"/blog/"},"Blog")," "),r.a.createElement("li",null," ",r.a.createElement("a",{class:"page-scroll",href:"https://laurahanu.github.io/#contact"},"Contact")," "))))))),void 0),r.a.createElement("main",{style:{marginLeft:"auto",marginRight:"auto",fontWeight:350,fontSize:15,maxWidth:Object(n.a)(34),paddingBottom:20,marginTop:20,paddingLeft:0,paddingRight:0,marginBottom:20}},r.a.createElement("div",{class:"col-md-12 text-center center"},r.a.createElement("h5",{style:{fontFamily:"Lato",fontSize:28,textAlign:"center",color:"#4b5b60"}},"Blog"),r.a.createElement("hr",{style:{marginTop:-20}})),r.a.createElement("div",{class:"col-md-12 "},e,"  ")),r.a.createElement("footer",{style:{boxShadow:"none",color:"#4b5b60",fontWeight:200,fontSize:11,marginLeft:"auto",marginRight:"auto",maxWidth:Object(n.a)(34),paddingLeft:20,marginTop:20,paddingTop:20}},"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{style:{boxShadow:"none",color:"#4b5b60",fontWeight:300},href:"https://www.gatsbyjs.org"},"Gatsby")))},A}(r.a.Component);e.a=i},218:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAQL/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAABirzaRpeEZfSdQR//xAAeEAACAQMFAAAAAAAAAAAAAAABAgADEBIREyIxM//aAAgBAQABBQLWMmFgee6HKHJepS9CoU//xAAWEQEBAQAAAAAAAAAAAAAAAAABABD/2gAIAQMBAT8BNb//xAAXEQEBAQEAAAAAAAAAAAAAAAABABAx/9oACAECAQE/AXGOX//EABwQAAICAgMAAAAAAAAAAAAAAAABESEQIjFBcf/aAAgBAQAGPwIXOINU6XZJ6Io//8QAGxABAAIDAQEAAAAAAAAAAAAAAQARIUFRMWH/2gAIAQEAAT8hefZSzSmb7CW8o4IeNpX7birU6I6+7UVG2Z//2gAMAwEAAgADAAAAEETng//EABkRAAIDAQAAAAAAAAAAAAAAAAABEBExIf/aAAgBAwEBPxCldhajTP/EABkRAAIDAQAAAAAAAAAAAAAAAAARARAxIf/aAAgBAgEBPxB3ysSYH//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESFRMXFBgfD/2gAIAQEAAT8QQU6L3AccwYlNVFiV1Bo3fUUDtYFtr71Mb0sDScxgchOotXiwbGHShV58pmf/2Q==",width:500,height:500,src:"/static/266481baad13319f2363c8edb16953b2/20313/profile-pic.jpg",srcSet:"/static/266481baad13319f2363c8edb16953b2/20313/profile-pic.jpg 1x"}}},site:{siteMetadata:{author:"Laura Hanu",social:{twitter:"hanulaura"}}}}}},219:function(t,e,a){"use strict";var A=a(220),r=a(0),n=a.n(r),o=a(209),i=a.n(o);function c(t){var e=t.description,a=t.lang,r=t.meta,o=t.title,c=A.data.site,s=e||c.siteMetadata.description;return n.a.createElement(i.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},220:function(t){t.exports={data:{site:{siteMetadata:{title:"Blog",description:"A starter blog demonstrating what Gatsby can do.",author:"Laura Hanu"}}}}},221:function(t,e,a){"use strict";a(222);var A=a(223),r=a(0),n=a.n(r),o=a(211),i=a.n(o),c=a(207);e.a=function(){var t=A.data,e=t.site.siteMetadata,a=e.author;e.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.2)}},n.a.createElement(i.a,{fixed:t.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginTop:-20,marginBottom:0,minWidth:70,width:70,height:70,quality:100,borderRadius:"50%"},imgStyle:{borderRadius:"0%",quality:100}}),n.a.createElement("p",null,"This is my blog page where I write about data science and machine learning."," "))}},223:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAQL/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAABirzaRpeEZfSdQR//xAAeEAACAQMFAAAAAAAAAAAAAAABAgADEBIREyIxM//aAAgBAQABBQLWMmFgee6HKHJepS9CoU//xAAWEQEBAQAAAAAAAAAAAAAAAAABABD/2gAIAQMBAT8BNb//xAAXEQEBAQEAAAAAAAAAAAAAAAABABAx/9oACAECAQE/AXGOX//EABwQAAICAgMAAAAAAAAAAAAAAAABESEQIjFBcf/aAAgBAQAGPwIXOINU6XZJ6Io//8QAGxABAAIDAQEAAAAAAAAAAAAAAQARIUFRMWH/2gAIAQEAAT8hefZSzSmb7CW8o4IeNpX7birU6I6+7UVG2Z//2gAMAwEAAgADAAAAEETng//EABkRAAIDAQAAAAAAAAAAAAAAAAABEBExIf/aAAgBAwEBPxCldhajTP/EABkRAAIDAQAAAAAAAAAAAAAAAAARARAxIf/aAAgBAgEBPxB3ysSYH//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESFRMXFBgfD/2gAIAQEAAT8QQU6L3AccwYlNVFiV1Bo3fUUDtYFtr71Mb0sDScxgchOotXiwbGHShV58pmf/2Q==",width:500,height:500,src:"/static/266481baad13319f2363c8edb16953b2/20313/profile-pic.jpg",srcSet:"/static/266481baad13319f2363c8edb16953b2/20313/profile-pic.jpg 1x"}}},site:{siteMetadata:{author:"Laura Hanu",social:{twitter:"hanulaura"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-74e0b0857b6858df527c.js.map