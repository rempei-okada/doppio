(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{81:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(97)),p={title:"Stepper",sidebar_label:"Stepper",slug:"/stepper"},i={unversionedId:"components/stepper",id:"components/stepper",isDocsHomePage:!1,title:"Stepper",description:"Step 1",source:"@site/docs\\components\\stepper.md",slug:"/stepper",permalink:"/doppio/docs/stepper",editUrl:"https://github.com/rempei-okada/doppio/tree/master/docs/docs/docs/components/stepper.md",version:"current",sidebar_label:"Stepper",sidebar:"documents",previous:{title:"Slider",permalink:"/doppio/docs/slider"},next:{title:"Switch",permalink:"/doppio/docs/switch"}},c=[],l={toc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",{class:"stepper orange-text my-12"},Object(a.b)("li",{class:"stepper-item"},Object(a.b)("a",{class:"tooltip","data-tooltip":"Step 1"},"Step 1")),Object(a.b)("li",{class:"stepper-item active "},Object(a.b)("a",{class:"tooltip","data-tooltip":"Step 2"},"Step 2")),Object(a.b)("li",{class:"stepper-item"},Object(a.b)("a",{class:"tooltip","data-tooltip":"Step 3"},"Step 3")),Object(a.b)("li",{class:"stepper-item"},Object(a.b)("a",{class:"tooltip","data-tooltip":"Step 4"},"Step 4"))),Object(a.b)("p",null,"Steps are progress indicators of a sequence of task steps."),Object(a.b)("p",null,"Add a container element with the ",Object(a.b)("inlineCode",{parentName:"p"},"step")," class. And add child elements with the ",Object(a.b)("inlineCode",{parentName:"p"},"step-item")," class. The ",Object(a.b)("inlineCode",{parentName:"p"},"step-item")," with the ",Object(a.b)("inlineCode",{parentName:"p"},"active")," class will be highlighted and indicate the current state of progress. "),Object(a.b)("p",null,"in order to specify color add class ",Object(a.b)("inlineCode",{parentName:"p"},"{color}-text")," or ",Object(a.b)("inlineCode",{parentName:"p"},'style="color: #aabbcc"'),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<ul class="stepper">\n  <li class="stepper-item">\n    <a href="#" class="tooltip" data-tooltip="Step 1">Step 1</a>\n  </li>\n  <li class="stepper-item active">\n    <a href="#" class="tooltip" data-tooltip="Step 2">Step 2</a>\n  </li>\n  <li class="stepper-item">\n    <a href="#" class="tooltip" data-tooltip="Step 3">Step 3</a>\n  </li>\n  <li class="stepper-item">\n    <a href="#" class="tooltip" data-tooltip="Step 4">Step 4</a>\n  </li>\n</ul>\n')))}s.isMDXComponent=!0},97:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(r),u=n,m=b["".concat(p,".").concat(u)]||b[u]||d[u]||a;return r?o.a.createElement(m,i(i({ref:t},l),{},{components:r})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);