(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(97)),i={title:"RadioButtion",sidebar_label:"RadioButtion",slug:"/radio-buttion"},c={unversionedId:"components/radio-button",id:"components/radio-button",isDocsHomePage:!1,title:"RadioButtion",description:"Radiobutton include colored radiobutton.",source:"@site/docs\\components\\radio-button.md",slug:"/radio-buttion",permalink:"doppio/docs/radio-buttion",editUrl:"https://github.com/rempei-okada/doppio/tree/master/docs/docs/docs/components/radio-button.md",version:"current",sidebar_label:"RadioButtion",sidebar:"documents",previous:{title:"Checkbox",permalink:"doppio/docs/checkbox"},next:{title:"Card",permalink:"doppio/docs/card"}},l=[{value:"Disabled",id:"disabled",children:[]}],d={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Radiobutton include colored radiobutton."),Object(a.b)("p",null,"Add the ",Object(a.b)("inlineCode",{parentName:"p"},"radio")," class to  container elements. Add ",Object(a.b)("inlineCode",{parentName:"p"},"<label>")," and ",Object(a.b)("inlineCode",{parentName:"p"},"<input/>")," element for radiobutton and label.\nAdd style",Object(a.b)("inlineCode",{parentName:"p"},'style="color: #aabbcc"')," or color pack class ",Object(a.b)("inlineCode",{parentName:"p"},"{color}-text")," to specify color."),Object(a.b)("div",{class:"d-flex my-12"},Object(a.b)("div",{class:"radio green-text"},Object(a.b)("input",{id:"1",type:"radio",name:"g",checked:!0}),Object(a.b)("label",{for:"1"},Object(a.b)("span",null,"Option 2"))),Object(a.b)("div",{class:"radio green-text"},Object(a.b)("input",{id:"2",type:"radio",name:"g"}),Object(a.b)("label",{for:"2"},Object(a.b)("span",null,"Option 2")))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<div class="d-flex">\n    <div class="radio">\n        <input id="1" type="radio" checked name="g"/>\n        <label for="1">Option 1</label>\n    </div>\n    <div class="radio">\n        <input id="2" type="radio" name="g"/>\n        <label for="2">Option 2</label>\n    </div>\n</div>\n')),Object(a.b)("hr",null),Object(a.b)("h2",{id:"disabled"},"Disabled"),Object(a.b)("p",null,"Add ",Object(a.b)("inlineCode",{parentName:"p"},"disabled")," attribute to ",Object(a.b)("inlineCode",{parentName:"p"},"<input>")," element."),Object(a.b)("div",{class:"d-flex my-12"},Object(a.b)("div",{class:"radio"},Object(a.b)("input",{id:"3",type:"radio",disabled:!0,name:"g1"}),Object(a.b)("label",{for:"3"},"Option 1")),Object(a.b)("div",{class:"radio"},Object(a.b)("input",{id:"4",type:"radio",name:"g1"}),Object(a.b)("label",{for:"4"},"Option 2"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<div class="d-flex">\n    <div class="radio">\n        <input id="3" type="radio" disabled name="g"/>\n        <label for="3">Option 1</label>\n    </div>\n    <div class="radio">\n        <input id="4" type="radio" name="g"/>\n        <label for="4">Option 2</label>\n    </div>\n</div>\n')))}b.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),b=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=b(n),s=r,m=p["".concat(i,".").concat(s)]||p[s]||u[s]||a;return n?o.a.createElement(m,c(c({ref:t},d),{},{components:n})):o.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);