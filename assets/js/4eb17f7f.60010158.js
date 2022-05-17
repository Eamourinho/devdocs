"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[5341],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},h=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,w=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(w,p(p({ref:t},h),{},{components:n})):r.createElement(w,p({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7339:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],i={title:"Setup and installation"},s=void 0,l={unversionedId:"gettingstarted/setup",id:"version-4.0/gettingstarted/setup",title:"Setup and installation",description:"Technical requirements",source:"@site/versioned_docs/version-4.0/gettingstarted/setup.md",sourceDirName:"gettingstarted",slug:"/gettingstarted/setup",permalink:"/devdocs/docs/4.0/gettingstarted/setup",editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.0/gettingstarted/setup.md",tags:[],version:"4.0",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1652797985,formattedLastUpdatedAt:"17/05/2022",frontMatter:{title:"Setup and installation"},sidebar:"docs",previous:{title:"Quick start",permalink:"/devdocs/docs/4.0/gettingstarted/quickstart"},next:{title:"JavaScript",permalink:"/devdocs/docs/4.0/guides/javascript/"}},h={},c=[{value:"Technical requirements",id:"technical-requirements",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"technical-requirements"},"Technical requirements"),(0,o.kt)("p",null,"Before installing Moodle you must:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://php.net/downloads/"},"PHP 7.3.0")," or higher, and the following PHP extensions (most of which are installed and enabled by default in most PHP installations):\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.iconv"},"iConv"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.mbstring"},"mbstring"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.curl"},"curl"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.openssl"},"openssl"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.ctype"},"ctype"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.zip"},"zip"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.zlib"},"zlib"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.simplexml"},"simplexml"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.spl"},"spl"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.pcre"},"pcre"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.dom"},"dom"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.xml"},"xml"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.xmlreader"},"xmlreader"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.intl"},"intl"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.json"},"json"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.hash"},"hash"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/book.fileinfo"},"fileinfo")),(0,o.kt)("li",{parentName:"ul"},"A supported Database server. Moodle supports the following databases with the relevant PHP Extensions:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mariadb.org/"},"MariaDB")," (version 10.2.29 or higher) with the ",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.mysqli.php"},"MySQLi PHP Extension")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.mysql.com/"},"MySQL")," (version 5.7 or higher) with the ",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.mysqli.php"},"MySQLi PHP Extension")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"Postgresql")," (version 10 or higher) with the ",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.pgsql.php"},"pgsql PHP Extension")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-au/sql-server/sql-server-downloads"},"Microsoft SQL Server")," (version 14.0 or higher) with the ",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.sqlsrv.php"},"SQLSRV PHP Extension")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/cd/B19306_01/server.102/b14220/intro.htm"},"Oracle")," (version 11.2 or higher) with the ",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.oci8.php"},"OCI8 PHP Extension"))))))}m.isMDXComponent=!0}}]);