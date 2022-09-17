"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:6,slug:"/settings/teams",title:"Team"},o=void 0,s={unversionedId:"Settings/team",id:"Settings/team",title:"Team",description:"Team is where you control who will have access to your jobs and assets. You can create a team by inviting users. The user will need to have a cloudlayer.io account before being invited.",source:"@site/docs/home/Settings/team.md",sourceDirName:"Settings",slug:"/settings/teams",permalink:"/home/settings/teams",draft:!1,editUrl:"https://github.com/cloudlayerio/docs/edit/main/docs/home/Settings/team.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/settings/teams",title:"Team"},sidebar:"tutorialSidebar",previous:{title:"Billing",permalink:"/home/settings/billing"}},l={},c=[{value:"Owner",id:"owner",level:2},{value:"Inviting Members",id:"inviting-members",level:3},{value:"Removing Members",id:"removing-members",level:3},{value:"Member",id:"member",level:2},{value:"Accepting Invite",id:"accepting-invite",level:3},{value:"Leaving Team",id:"leaving-team",level:3}],m={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Team is where you control who will have access to your jobs and assets. You can create a team by inviting users. The user will need to have a cloudlayer.io account before being invited."),(0,i.kt)("h2",{id:"owner"},"Owner"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Team Settings",src:n(8050).Z,width:"800",height:"776"})),(0,i.kt)("h3",{id:"inviting-members"},"Inviting Members"),(0,i.kt)("p",null,"When you invite someone to your team they will show up under ",(0,i.kt)("inlineCode",{parentName:"p"},"My Team")," with a status of ",(0,i.kt)("inlineCode",{parentName:"p"},"Pending"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Inviting Members",src:n(7882).Z,width:"800",height:"776"})),(0,i.kt)("p",null,"Once the user accepts the invite the status will change to ",(0,i.kt)("inlineCode",{parentName:"p"},"accepted"),"."),(0,i.kt)("h3",{id:"removing-members"},"Removing Members"),(0,i.kt)("p",null,"Once a user has accepted, you will get the option to remove them from your team."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Remove Member",src:n(8042).Z,width:"705",height:"99"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the menu icon"),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Remove"))),(0,i.kt)("p",null,"Once a member has been removed they will no longer have access to any of the projects, jobs, or assets originally shared with them."),(0,i.kt)("p",null,"On removal the user will be automatically removed from any projects they belong to as well."),(0,i.kt)("h2",{id:"member"},"Member"),(0,i.kt)("h3",{id:"accepting-invite"},"Accepting Invite"),(0,i.kt)("p",null,"When you have been invited to be part of someones team it will show up in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Team Membership")," section.  There will be two buttons, ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Reject"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pending Invite",src:n(2857).Z,width:"800",height:"805"})),(0,i.kt)("p",null,"If you choose accept, you will become part of their team and can be added to projects. Once the owner of the project has added you a project, it will show up as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Shared")," project in your projects page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Accept Invite",src:n(60).Z,width:"800",height:"805"})),(0,i.kt)("p",null,"The project filter will also show up in your project filters since your now able to see their jobs and assets since you are now part of the team."),(0,i.kt)("h3",{id:"leaving-team"},"Leaving Team"),(0,i.kt)("p",null,"Once you have accepted team membership you have the option to leave the team. Once you leave a team you lose access to all the jobs, assets, and projects you were a member."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Leave",src:n(7391).Z,width:"800",height:"805"})))}p.isMDXComponent=!0},8050:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/settings_team-3a9dd0194e247d22412e37a995171d27.png"},2857:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/settings_team_member_invite-35dd43129505ff8113a79229c7735f8f.png"},60:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/settings_team_member_invite_accepted-722ae79e58c57a69b4c2fe3b18b13c57.png"},7391:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/settings_team_member_leave-71618066448bcfa7fedfae66d6f8f8dd.png"},7882:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/settings_team_myteam_invite-e13eeb1b15c08af3fba2e355bf4a907e.png"},8042:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/settings_team_myteam_remove-e0fa0d2e7d013bdac9a297c762859513.png"}}]);