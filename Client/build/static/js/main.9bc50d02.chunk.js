(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var i=n(2),r=n.n(i),c=n(18),s=n.n(c),a=(n(23),n.p,n(24),n(3)),o=n(4),d=n(5),l=n(8),j=n.n(l),u=n(0);function h(){var t=Object(i.useState)({usuario:"","contrase\xf1a":"",pword:""}),e=Object(d.a)(t,2),n=e[0],r=e[1];function c(t){r(Object(o.a)(Object(o.a)({},n),{},Object(a.a)({},t.target.id,t.target.value)))}return Object(u.jsx)("div",{style:{display:"flex",width:"100vw",height:"100vh",justifyContent:"center"},children:Object(u.jsx)("div",{style:{display:"flex",marginTop:"30vh",height:"40vh",backgroundColor:"white",alignItems:"center",borderRadius:"7px",border:" 3px solid black"},children:Object(u.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),j.a.post(window.env.HOST_SIGNUP,{usuario:n.usuario,email:n.email,pword:n.pword},{withCredentials:!0}).then((function(t){console.log(t)}),(function(t){console.log(t)}))}(t)},children:[Object(u.jsxs)("table",{style:{padding:"3vw"},children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{align:"right",children:"Usuario:"}),Object(u.jsxs)("td",{align:"left",children:[Object(u.jsx)("input",{id:"usuario",onChange:function(t){return c(t)}})," "]})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{align:"right",children:"Email:"}),Object(u.jsxs)("td",{align:"left",children:[Object(u.jsx)("input",{id:"email",onChange:function(t){return c(t)}})," "]})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{align:"right",children:"Contrase\xf1a:"}),Object(u.jsxs)("td",{align:"left",children:[Object(u.jsx)("input",{id:"pword",onChange:function(t){return c(t)}})," "]})]})]}),Object(u.jsx)("button",{style:{marginInlineStart:"18em",width:"4.5em"},children:" Entrar"})]})})})}function b(){var t=Object(i.useState)({usuario:"",pword:""}),e=Object(d.a)(t,2),n=e[0],r=e[1],c=Object(i.useState)(""),s=Object(d.a)(c,2),l=(s[0],s[1]);function b(t){r(Object(o.a)(Object(o.a)({},n),{},Object(a.a)({},t.target.id,t.target.value)))}return Object(u.jsxs)("div",{style:{display:"flex",width:"100vw",height:"100vh",justifyContent:"center"},children:[Object(u.jsx)("div",{style:{display:"flex",marginTop:"30vh",height:"40vh",backgroundColor:"white",alignItems:"center",borderRadius:"7px",border:" 3px solid black"},children:Object(u.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),j.a.post(window.env.HOST_SIGNIN,{usuario:n.usuario,pword:n.pword},{withCredentials:!0}).then((function(t){console.log(t.data),console.log(t.data.accessToken),l(t.data.accessToken)}),(function(t){console.log(t)}))}(t)},children:[Object(u.jsxs)("table",{style:{padding:"3vw"},children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{align:"right",children:"Usuario:"}),Object(u.jsxs)("td",{align:"left",children:[Object(u.jsx)("input",{id:"usuario",onChange:function(t){return b(t)}})," "]})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{align:"right",children:"Contrase\xf1a:"}),Object(u.jsxs)("td",{align:"left",children:[Object(u.jsx)("input",{id:"pword",onChange:function(t){return b(t)}})," "]})]})]}),Object(u.jsx)("button",{style:{marginInlineStart:"18em",width:"4.5em"},children:" Entrar"})]})}),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h,{})})]})}var g=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(b,{})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),i(t),r(t),c(t),s(t)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),O()}},[[44,1,2]]]);
//# sourceMappingURL=main.9bc50d02.chunk.js.map