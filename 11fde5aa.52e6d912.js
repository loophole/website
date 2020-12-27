(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{113:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return b}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(o),h=n,b=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return o?r.a.createElement(b,i(i({ref:t},l),{},{components:o})):r.a.createElement(b,i({ref:t},l))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,c=new Array(a);c[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=o[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},73:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return u})),o.d(t,"default",(function(){return s}));var n=o(3),r=o(7),a=(o(0),o(113)),c={id:"auth",title:"Authentication"},i={unversionedId:"guides/auth",id:"guides/auth",isDocsHomePage:!1,title:"Authentication",description:"To access Loophole services described in further sections, you need to sign up for an account. Once you've signed up, you need to configure loophole with the authtoken. This will grant you access to account-only features. Loophole has a simple 'account' command to make this easy. Under the hood, the login command does is to add (or modify) the authtoken property in your loophole configuration file.",source:"@site/docs/guides/auth.md",slug:"/guides/auth",permalink:"/docs/guides/auth",editUrl:"https://github.com/loophole/website/edit/master/docs/guides/auth.md",version:"current",sidebar:"docs",previous:{title:"help",permalink:"/docs/commands/help"},next:{title:"Expose a local resource to the Internet",permalink:"/docs/guides/expose"}},u=[{value:"account",id:"account",children:[{value:"login",id:"login",children:[]},{value:"logout",id:"logout",children:[]}]}],l={rightToc:u};function s(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To access Loophole services described in further sections, you need to sign up for an account. Once you've signed up, you need to configure loophole with the authtoken. This will grant you access to account-only features. Loophole has a simple 'account' command to make this easy. Under the hood, the login command does is to add (or modify) the authtoken property in your loophole configuration file."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Under beta testing, all the features are available to every user at no cost.")),Object(a.b)("h2",{id:"account"},"account"),Object(a.b)("p",null,"This command is responsible for user account related functions."),Object(a.b)("p",null,"It doesn't do anything alone, one of the following needs to be provided:"),Object(a.b)("h3",{id:"login"},"login"),Object(a.b)("p",null,"To get the beta benefits the user should login with his access token which can be generated by using this command.\nAfter executing this command you'll be asked to open the URL in your browser, log in and input the given code.\nIf everything is correct you'll be logged in. You can come back to CLI and start using ",Object(a.b)("inlineCode",{parentName:"p"},"loophole"),"!."),Object(a.b)("p",null,"Usage:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ loophole account login\n")),Object(a.b)("h3",{id:"logout"},"logout"),Object(a.b)("p",null,"On the utilization of the services, you get an option to logout from the account.\nThis discards the access token and let's you log in again."),Object(a.b)("p",null,"Usage:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"$ loophole account logout\n")))}s.isMDXComponent=!0}}]);