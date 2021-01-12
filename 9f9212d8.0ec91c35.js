(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{87:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return r})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return s}));var o=n(3),l=n(7),b=(n(0),n(97)),a={title:"Button",sidebar_label:"Button",slug:"/"},r={unversionedId:"components/button",id:"components/button",isDocsHomePage:!1,title:"Button",description:"Buttons include simple button styles for actions in different types and sizes.",source:"@site/docs\\components\\button.md",slug:"/",permalink:"/doppio/docs/",editUrl:"https://github.com/rempei-okada/doppio/tree/master/docs/docs/docs/components/button.md",version:"current",sidebar_label:"Button",sidebar:"documents",next:{title:"Text Field",permalink:"/doppio/docs/text-fields"}},c=[{value:"Disabled",id:"disabled",children:[]},{value:"Flat",id:"flat",children:[]},{value:"Rounded",id:"rounded",children:[]},{value:"Text",id:"text",children:[]},{value:"Outlined",id:"outlined",children:[]}],u={toc:c};function s(t){var e=t.components,n=Object(l.a)(t,["components"]);return Object(b.b)("wrapper",Object(o.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Buttons include simple button styles for actions in different types and sizes."),Object(b.b)("p",null,"Add the btn class to ",Object(b.b)("inlineCode",{parentName:"p"},"<a>"),", ",Object(b.b)("inlineCode",{parentName:"p"},"<input>")," or ",Object(b.b)("inlineCode",{parentName:"p"},"<button>")," elements for a default button. There are classes btn-primary and btn-link for predefined primary and link buttons."),Object(b.b)("div",{class:"my-5"},Object(b.b)("button",{class:"btn"},"Default Button"),Object(b.b)("button",{class:"btn blue ml-3"},"Button Color"),Object(b.b)("button",{class:"btn ml-3 foreground-5",style:{background:"#abdaff"}},"Button Color")),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<button class="btn">Default Button</button>\n<button class="btn orange">Button Color</button>\n')),Object(b.b)("h4",{id:"size"},"Size"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"xs"),Object(b.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"sm"),Object(b.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"lg"),Object(b.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"xl")))),Object(b.b)("p",null,"Add the ",Object(b.b)("inlineCode",{parentName:"p"},"sm")," to ",Object(b.b)("inlineCode",{parentName:"p"},"lg")," class for small or large button size. Also, you can add the ",Object(b.b)("inlineCode",{parentName:"p"},"block")," class for a full-width button."),Object(b.b)("div",{class:"my-5"},Object(b.b)("div",{class:"d-flex"},Object(b.b)("button",{class:"btn cyan xl"},"X Large"),Object(b.b)("button",{class:"btn yellow foreground-5 lg ml-3"},"Large"),Object(b.b)("button",{class:"btn lime ml-3"},"Normal"),Object(b.b)("button",{class:"btn pink sm ml-3"},"Small"),Object(b.b)("button",{class:"btn orange xs ml-3"},"X Small")),Object(b.b)("div",{class:"d-flex mt-3"},Object(b.b)("button",{class:"btn deep-purple block"},"Blocked"))),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<button class="btn foreground-1">Default Button</button>\n<button class="btn cyan">Button Color</button>\n')),Object(b.b)("h2",{id:"disabled"},"Disabled"),Object(b.b)("p",null,"Add the ",Object(b.b)("inlineCode",{parentName:"p"},"disabled")," class or the disabled attribute for disabled button state style."),Object(b.b)("div",{class:"my-5"},Object(b.b)("button",{class:"btn disabled red"},"Disabled Button"),Object(b.b)("button",{class:"btn blue ml-3 disabled"},"Disabled Button Color")),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<button class="btn foreground-1">Default Button</button>\n<button class="btn cyan">Button Color</button>\n')),Object(b.b)("h2",{id:"flat"},"Flat"),Object(b.b)("p",null,"Add the ",Object(b.b)("inlineCode",{parentName:"p"},"flat")," class for no-shadow flat button state style."),Object(b.b)("div",{class:"my-5"},Object(b.b)("button",{class:"btn flat red"},"Flat Button")),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'    <button class="btn foreground-1">Default Button</button>\n    <button class="btn cyan">Button Color</button>\n')),Object(b.b)("h2",{id:"rounded"},"Rounded"),Object(b.b)("p",null,"Add the ",Object(b.b)("inlineCode",{parentName:"p"},"rounded")," class for rounded button state style."),Object(b.b)("div",{class:"my-5"},Object(b.b)("button",{class:"btn yellow rounded foreground-1"},"Default Button"),Object(b.b)("button",{class:"btn pink rounded ml-3"},"Button Color")),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'    <button class="btn yellow rounded foreground-1">Default Button</button>\n    <button class="btn pink rounded">Button Color</button>\n')),Object(b.b)("h2",{id:"text"},"Text"),Object(b.b)("p",null,"Add the ",Object(b.b)("inlineCode",{parentName:"p"},"text")," class for text button state style."),Object(b.b)("div",{class:"my-5"},Object(b.b)("button",{class:"btn purple-text text foreground-1"},"Default Button"),Object(b.b)("button",{class:"btn blue-text text ml-3"},"Button Color")),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'    <button class="btn yellow-text text">Default Button</button>\n    <button class="btn pink-text text">Button Color</button>\n')),Object(b.b)("h2",{id:"outlined"},"Outlined"),Object(b.b)("p",null,"Add the ",Object(b.b)("inlineCode",{parentName:"p"},"outlined")," class for outlined button state style.\nAdd the color style for changing button color state style."),Object(b.b)("div",{class:"my-5"},Object(b.b)("button",{class:"btn yellow-text outlined"},"Default Button"),Object(b.b)("button",{class:"btn pink-text outlined ml-3"},"Button Color")),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<button class="btn yellow-text outlined">Default Button</button>\n<button class="btn pink-text outlined">Button Color</button>\n')))}s.isMDXComponent=!0},97:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return O}));var o=n(0),l=n.n(o);function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,l=function(t,e){if(null==t)return{};var n,o,l={},b=Object.keys(t);for(o=0;o<b.length;o++)n=b[o],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(o=0;o<b.length;o++)n=b[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=l.a.createContext({}),s=function(t){var e=l.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=s(t.components);return l.a.createElement(u.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return l.a.createElement(l.a.Fragment,{},e)}},p=l.a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,b=t.originalType,a=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=s(n),p=o,O=d["".concat(a,".").concat(p)]||d[p]||i[p]||b;return n?l.a.createElement(O,r(r({ref:e},u),{},{components:n})):l.a.createElement(O,r({ref:e},u))}));function O(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var b=n.length,a=new Array(b);a[0]=p;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=t,r.mdxType="string"==typeof t?t:o,a[1]=r;for(var u=2;u<b;u++)a[u]=n[u];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);