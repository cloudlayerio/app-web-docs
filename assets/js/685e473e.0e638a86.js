"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2128],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(o),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return o?n.createElement(f,a(a({ref:t},s),{},{components:o})):n.createElement(f,a({ref:t},s))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<r;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7077:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var n=o(7462),i=(o(7294),o(3905));const r={sidebar_position:1.5,slug:"/account"},a="Account",c={unversionedId:"account",id:"account",title:"Account",description:"Get information about your account, such as usage, credits, number of documents created, etc.",source:"@site/docs/api-reference/account.md",sourceDirName:".",slug:"/account",permalink:"/account",draft:!1,editUrl:"https://github.com/cloudlayerio/docs/edit/main/docs/api-reference/account.md",tags:[],version:"current",sidebarPosition:1.5,frontMatter:{sidebar_position:1.5,slug:"/account"},sidebar:"tutorialSidebar",previous:{title:"Url to PDF",permalink:"/url-to-pdf"},next:{title:"Assets",permalink:"/assets"}},l={},u=[{value:"Endpoint",id:"endpoint",level:2},{value:"GET /account",id:"get-account",level:3},{value:"Account Response",id:"account-response",level:2},{value:"<code>calls</code>",id:"calls",level:3},{value:"<code>subscription</code>",id:"subscription",level:3},{value:"<code>bytesTotal</code>",id:"bytestotal",level:3},{value:"<code>bytesLimit</code>",id:"byteslimit",level:3},{value:"<code>computeTimeTotal</code>",id:"computetimetotal",level:3},{value:"<code>computeTimeLimit</code>",id:"computetimelimit",level:3},{value:"<code>subType</code>",id:"subtype",level:3},{value:"<code>uid</code>",id:"uid",level:3},{value:"<code>credit</code>",id:"credit",level:3},{value:"<code>subActive</code>",id:"subactive",level:3},{value:"<code>successJobs</code>",id:"successjobs",level:3},{value:"<code>errorJobs</code>",id:"errorjobs",level:3},{value:"<code>totalJobs</code>",id:"totaljobs",level:3}],s={toc:u};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"account"},"Account"),(0,i.kt)("p",null,"Get information about your account, such as usage, credits, number of documents created, etc."),(0,i.kt)("h2",{id:"endpoint"},"Endpoint"),(0,i.kt)("h3",{id:"get-account"},"GET /account"),(0,i.kt)("p",null,"Returns a JSON object containing the information about your account. Uses any API Key on your account for authentication."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="GET /account"',title:'"GET','/account"':!0},"https://api.cloudlayer.io/v2/account\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Make sure your ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," gets set to ",(0,i.kt)("inlineCode",{parentName:"p"},"application/json"),", and that you have placed your ",(0,i.kt)("inlineCode",{parentName:"p"},"X-API-Key")," header with your API Key from your account.")),(0,i.kt)("h2",{id:"account-response"},"Account Response"),(0,i.kt)("p",null,"The account values for each account response. If an error occurs the appropriate ",(0,i.kt)("a",{parentName:"p",href:"/#http-status-codes"},"HTTP Status Code")," will be returned."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"An account usage threshold email gets sent to you if your nearing one of your limits or credit is low.")),(0,i.kt)("h3",{id:"calls"},(0,i.kt)("inlineCode",{parentName:"h3"},"calls")),(0,i.kt)("p",null,"The total number of api calls used."),(0,i.kt)("h3",{id:"subscription"},(0,i.kt)("inlineCode",{parentName:"h3"},"subscription")),(0,i.kt)("p",null,"The name of the current subscription."),(0,i.kt)("h3",{id:"bytestotal"},(0,i.kt)("inlineCode",{parentName:"h3"},"bytesTotal")),(0,i.kt)("p",null,"The total number of bytes processed."),(0,i.kt)("h3",{id:"byteslimit"},(0,i.kt)("inlineCode",{parentName:"h3"},"bytesLimit")),(0,i.kt)("p",null,"Current accounts byte limit, if exceeded you will get errors. If empty, the account does not have a limit."),(0,i.kt)("h3",{id:"computetimetotal"},(0,i.kt)("inlineCode",{parentName:"h3"},"computeTimeTotal")),(0,i.kt)("p",null,"The total number of seconds spent on compute cycles."),(0,i.kt)("h3",{id:"computetimelimit"},(0,i.kt)("inlineCode",{parentName:"h3"},"computeTimeLimit")),(0,i.kt)("p",null,"Current accounts compute time limit, if exceeded you will get errors. If empty, the account does not have a limit."),(0,i.kt)("h3",{id:"subtype"},(0,i.kt)("inlineCode",{parentName:"h3"},"subType")),(0,i.kt)("p",null,"The current type of subscription. Either ",(0,i.kt)("inlineCode",{parentName:"p"},"limit")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"usage"),"."),(0,i.kt)("h3",{id:"uid"},(0,i.kt)("inlineCode",{parentName:"h3"},"uid")),(0,i.kt)("p",null,"The account owners user id."),(0,i.kt)("h3",{id:"credit"},(0,i.kt)("inlineCode",{parentName:"h3"},"credit")),(0,i.kt)("p",null,"If account type is ",(0,i.kt)("inlineCode",{parentName:"p"},"usage")," this is the amount of ",(0,i.kt)("inlineCode",{parentName:"p"},"credit")," remaining."),(0,i.kt)("h3",{id:"subactive"},(0,i.kt)("inlineCode",{parentName:"h3"},"subActive")),(0,i.kt)("p",null,"If the account is ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"inactive"),".  If your account is inactive, you will need to contact support or update billing."),(0,i.kt)("h3",{id:"successjobs"},(0,i.kt)("inlineCode",{parentName:"h3"},"successJobs")),(0,i.kt)("p",null,"Number of successful jobs for the lifetime of the account."),(0,i.kt)("h3",{id:"errorjobs"},(0,i.kt)("inlineCode",{parentName:"h3"},"errorJobs")),(0,i.kt)("p",null,"Number of jobs in error for the lifetime of the account."),(0,i.kt)("h3",{id:"totaljobs"},(0,i.kt)("inlineCode",{parentName:"h3"},"totalJobs")),(0,i.kt)("p",null,"Total number of jobs for the lifetime of the account."))}p.isMDXComponent=!0}}]);