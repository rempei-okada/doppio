(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(0),r(97)),a={title:"Slider",sidebar_label:"Slider",slug:"/slider"},c={unversionedId:"components/slider",id:"components/slider",isDocsHomePage:!1,title:"Slider",description:"The Sliders are for selecting values from ranges.",source:"@site/docs\\components\\slider.md",slug:"/slider",permalink:"/doppio/docs/slider",editUrl:"https://github.com/rempei-okada/doppio/tree/master/docs/docs/docs/components/slider.md",version:"current",sidebar_label:"Slider",sidebar:"documents",previous:{title:"Progress",permalink:"/doppio/docs/progress"},next:{title:"Stepper",permalink:"/doppio/docs/stepper"}},l=[{value:"Preview",id:"preview",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Sliders are for selecting values from ranges.\nIn order to specify color add style",Object(i.b)("inlineCode",{parentName:"p"},'style="color: #aabbcc"')," or color pack class ",Object(i.b)("inlineCode",{parentName:"p"},"{color}-text"),"."),Object(i.b)("div",{class:"my-5"},Object(i.b)("input",{class:"slider orange-text",type:"range",min:"0",max:"100"})),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<input class="slider" type="range" min="0" max="100" value="50"/>\n<input \n  class="slider tooltip" \n  type="range" \n  min="0"\n  max="100" \n  value="50" \n  oninput="this.setAttribute(\'value\', this.value);"\n/>\n')),Object(i.b)("hr",null),Object(i.b)("h2",{id:"preview"},"Preview"),Object(i.b)("div",null,Object(i.b)("input",{class:"slider lime-text mt-8",type:"range",min:"0",max:"100"}),Object(i.b)("input",{class:"slider cyan-text mt-3",type:"range",min:"0",max:"100"}),Object(i.b)("input",{class:"slider pink-text mt-3",type:"range",min:"0",max:"100"}),Object(i.b)("input",{class:"slider disabled mt-3",type:"range",min:"0",max:"100"})))}p.isMDXComponent=!0},97:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return r?o.a.createElement(b,c(c({ref:t},s),{},{components:r})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);