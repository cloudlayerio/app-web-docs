"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3039],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),y=n,f=d["".concat(c,".").concat(y)]||d[y]||p[y]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7671:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:4,slug:"/privacy",title:"Privacy"},i=void 0,s={unversionedId:"privacy",id:"privacy",title:"Privacy",description:"Privacy is important to us and we take every measure possible to ensure that your data is protected.",source:"@site/docs/api-reference/privacy.md",sourceDirName:".",slug:"/privacy",permalink:"/privacy",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/privacy",title:"Privacy"},sidebar:"tutorialSidebar",previous:{title:"Storage",permalink:"/storage"}},c={},l=[{value:"Data Storage",id:"data-storage",level:2},{value:"Secret Storage",id:"secret-storage",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Privacy is important to us and we take every measure possible to ensure that your data is protected."),(0,n.kt)("h2",{id:"data-storage"},"Data Storage"),(0,n.kt)("p",null,"Data is stored in your accounts cloud storage by default unless storage parameters are passed into the request to disable storage or to you use your own personal storage."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For synchronous calls, the data gets removed immediately after the request connection is closed.    ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For asynchronous calls, the data is either stored based on the storage settings set up in your account or stored based on the storage parameters defined in the request JSON parameters."))),(0,n.kt)("h2",{id:"secret-storage"},"Secret Storage"),(0,n.kt)("p",null,'Secrets such as authentication username and password, cookies, HTML contents, etc. never get stored in our system. This information gets redacted from our logs and database before storage. All you will see in the activity logs is a "...", which indicates the redaction of sensitive information.'))}p.isMDXComponent=!0}}]);