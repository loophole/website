(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{89:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return r})),t.d(o,"metadata",(function(){return l})),t.d(o,"rightToc",(function(){return i})),t.d(o,"default",(function(){return u}));var n=t(3),a=t(7),s=(t(0),t(107)),r={slug:"expose",title:"Expose a local resource to the Internet"},l={unversionedId:"guides/expose",id:"guides/expose",isDocsHomePage:!1,title:"Expose a local resource to the Internet",description:"If you don't know what port your web server is listening on, check in the logs of your running application, it should tell you that.",source:"@site/docs/guides/expose.md",slug:"/guides/expose",permalink:"/docs/guides/expose",editUrl:"https://github.com/loophole/website/edit/master/docs/docs/guides/expose.md",version:"current",sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/guides/auth"},next:{title:"FAQ",permalink:"/docs/faq"}},i=[{value:"Custom Subdomain Names",id:"custom-subdomain-names",children:[]},{value:"Verbose Mode",id:"verbose-mode",children:[]}],c={rightToc:i};function u(e){var o=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,t,{components:o,mdxType:"MDXLayout"}),Object(s.b)("p",null,"If you don't know what port your web server is listening on, check in the logs of your running application, it should tell you that.\nSome of the most common ones are 8080, 8000, 3000 or 1313."),Object(s.b)("p",null,"Example: Expose a web server on port 8000 of your local machine to the Internet."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ loophole http 8000\n\n# or for 1.0.0-beta.8 and older\n$ loophole 8000\n")),Object(s.b)("p",null,"Example: Expose a directory from your local machine to the Internet."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ loophole dir ./my/local/path --hostname myhostname\n")),Object(s.b)("h3",{id:"custom-subdomain-names"},"Custom Subdomain Names"),Object(s.b)("p",null,"Loophole assigns random hexadecimal names to the HTTP tunnels it opens for you. This is okay for one-time personal uses. But if you're displaying the URL at a hackathon or integrating with a third-party webhook, it can be frustrating if the tunnel name changes or is difficult to read."),Object(s.b)("p",null,"You can specify a custom subdomain for your tunnel URL with the ",Object(s.b)("inlineCode",{parentName:"p"},"--hostname")," flag"),Object(s.b)("p",null,"Usage:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ loophole http 8000 --hostname myhostname\n\n# or for 1.0.0-beta.8 and older\n$ loophole 8000 --hostname myhostname\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ loophole dir ./my/local/path --hostname myhostname\n")),Object(s.b)("h3",{id:"verbose-mode"},"Verbose Mode"),Object(s.b)("p",null,"Verbose mode flag helps you understand loophole in a greater context. It provides the verbose output for the command used along."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ loophole http 8000 --verbose\n\n# or for 1.0.0-beta.8 and older\n$ loophole 8000 --verbose\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ loophole dir ./my/local/path --verbose\n")),Object(s.b)("p",null,"After starting the tunnel with the above command you'll start seeing some ",Object(s.b)("inlineCode",{parentName:"p"},"DEBUG")," level logs together with the default ",Object(s.b)("inlineCode",{parentName:"p"},"INFO")," entries.\nIt may be useful in case something is not working and you want to share more details to the Loophole dev team."))}u.isMDXComponent=!0}}]);