"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[6495],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1555:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],l={title:"Command-line injection",sidebar_position:6,tags:["Coding guidelines","Policies","Security"]},s=void 0,c={unversionedId:"development/policies/security/commandline-injection",id:"development/policies/security/commandline-injection",title:"Command-line injection",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/commandline-injection.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/commandline-injection",permalink:"/devdocs/general/development/policies/security/commandline-injection",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/commandline-injection.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1652797985,formattedLastUpdatedAt:"17/05/2022",sidebarPosition:6,frontMatter:{title:"Command-line injection",sidebar_position:6,tags:["Coding guidelines","Policies","Security"]},sidebar:"policies",previous:{title:"SQL injection",permalink:"/devdocs/general/development/policies/security/sql-injection"},next:{title:"Data-loss",permalink:"/devdocs/general/development/policies/security/dataloss"}},d={},u=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This page forms part of the ",(0,a.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,a.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,a.kt)("p",null,"This is very like SQL injection, except that it arises when we execute a command-line program rather than when we do a database query."),(0,a.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,a.kt)("p",null,"Always try to avoid using command-line tools if at all possible. Look for equivalent PHP libraries."),(0,a.kt)("p",null,"However, when there is no other option, it is the standard approach of cleaning the input, and then escaping the values that came from the user before including them in the command-line."),(0,a.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tyy to avoid using shell commands if at all possible.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Many utilities are available as PHP libraries."))),(0,a.kt)("li",{parentName:"ul"},"If you can't avoid shell commands, use ",(0,a.kt)("inlineCode",{parentName:"li"},"escapeshellcmd")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"escapeshellarg"),".")),(0,a.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This is not something you can do much about."),(0,a.kt)("li",{parentName:"ul"},"However, turn off Moodle features that use shell commands (for example, the LaTeX filter) unless you actually need them.")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Coding"},"Coding"))))}m.isMDXComponent=!0}}]);