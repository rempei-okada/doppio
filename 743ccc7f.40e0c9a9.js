(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=n(0),i=n(97),l={title:"Shadow",sidebar_label:"Shadow",slug:"/shadow"},c={unversionedId:"elements/shadow",id:"elements/shadow",isDocsHomePage:!1,title:"Shadow",description:"The elevation helpers allow you to control relative depth, or distance, between two surfaces along the z-axis.",source:"@site/docs\\elements\\shadow.md",slug:"/shadow",permalink:"doppio/docs/shadow",editUrl:"https://github.com/rempei-okada/doppio/tree/master/docs/docs/docs/elements/shadow.md",version:"current",sidebar_label:"Shadow",sidebar:"documents",previous:{title:"Labels",permalink:"doppio/docs/labels"},next:{title:"Typography",permalink:"doppio/docs/typographies"}},s=[{value:"Play Glound",id:"play-glound",children:[]}],p={toc:s};function d(e){var t,n,l,c=e.components,s=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,s,{components:c,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The elevation helpers allow you to control relative depth, or distance, between two surfaces along the z-axis.\nThere is a total of 25 elevation levels. You can set an element's elevation by using the class ",Object(i.b)("inlineCode",{parentName:"p"},"elevation-{n}"),",\nwhere ",Object(i.b)("inlineCode",{parentName:"p"},"n")," is a integer between 0-24 corresponding to the desired elevation."),Object(i.b)("div",{style:{width:"120px",height:"120px"},className:"shadow-5 ma-3 d-flex align-center justify-center my-12"},"shadow-5"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<div class="shadow-4">Element</div>\n')),Object(i.b)("h2",{id:"play-glound"},"Play Glound"),Object(i.b)("div",{class:"d-flex flex-wrap my-12"},(t=Object(o.useState)(1),n=t[0],l=t[1],Object(i.b)("div",{class:"ml-6"},Object(i.b)("input",{class:"slider tooltip cyan-text",type:"range",min:"0",max:"12",value:n,onInput:function(e){return l(e.target.value)}}),Object(i.b)("div",{style:{width:"120px",height:"120px"},className:"shadow-"+n+" mt-6 ma-3 d-flex align-center justify-center"},"shadow-",n)))),Object(i.b)("div",{class:"d-flex flex-wrap mb-12"},[].concat(Array(13).keys()).map((function(e){return Object(i.b)("div",{style:{width:"120px",height:"120px"},className:"shadow-"+e+" ma-3 d-flex align-center justify-center"},"shadow-",e)}))))}d.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);