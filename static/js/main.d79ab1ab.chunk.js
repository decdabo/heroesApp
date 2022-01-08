(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(23),n=a.n(r),s=a(5),o=a(20),i=a(48),l="[Auth] Login",d="[Auth] Logout",j="[Heroes] Add Data",b="[Heroes] Show Hero",h="[Heroes] Add Error",u="[Heroes] Remove",m=JSON.parse(localStorage.getItem("token"))?{logged:!0}:{logged:!1},O=a(35),p=a(6),x={teamHero:[],showHero:{}},g="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):o.c,f=Object(o.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case l:return{logged:c};case d:return{};default:return e}},heroes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case j:return Object(p.a)(Object(p.a)({},e),{},{teamHero:[].concat(Object(O.a)(e.teamHero),[c])});case u:var r=e.teamHero,n=r.filter((function(e){return e!==c}));return Object(p.a)(Object(p.a)({},e),{},{teamHero:Object(O.a)(n)});case b:return Object(p.a)(Object(p.a)({},e),{},{showHero:c});case h:return Object(p.a)({},e);default:return e}}}),v=g(Object(o.a)(i.a)),y=Object(o.d)(f,v),N=a(13),w=a(2),_=a(16),S=a(25),k=a.n(S),E=a(28),H=a(1),A=function(){var e=Object(c.useState)(!1),t=Object(_.a)(e,2),a=t[0],r=t[1],n=Object(s.b)(),o=Object(w.g)().push;return Object(H.jsx)(E.a,{initialValues:{email:"",password:""},onSubmit:function(e){k.a.post("https://heroes-alkemy.herokuapp.com/api/login",e).then((function(e){n(function(e){var t={type:l,payload:!0};return localStorage.setItem("token",JSON.stringify(e)),t}(e.data)),o("/home")})).catch((function(e){r(!0)}))},validate:function(e){var t={};return e.email?e.email.length<2?t.email="Email too short":/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.email)||(t.email="The email can't contains spaces and simbols"):t.email="Please complete the space",e.password?e.password.length<1?t.password="password too short":/^[a-zA-Z\xc0-\xff\s]{1,40}$/.test(e.password)||(t.password="The password can't contains simbols and numbers"):t.password="Please complete the space",t},children:function(e){var t=e.values,c=e.handleChange,r=e.handleBlur,n=e.handleSubmit,s=e.errors,o=e.touched;return Object(H.jsxs)("form",{className:"auth d-flex flex-column justify-content-center align-items-center",onSubmit:n,children:[Object(H.jsxs)("div",{className:"container w-50 rounded-3 brightGrey from__container",children:[Object(H.jsxs)("div",{className:"mb-3 row",children:[Object(H.jsx)("label",{htmlFor:"staticEmail",className:"col-12 col-form-label text-orange brightGrey",children:"Email*"}),Object(H.jsxs)("div",{className:"col-12 brightGrey",children:[Object(H.jsx)("input",{autoComplete:"off",className:"form-control bg-dark text-light mb-3 brightGrey",id:"staticEmail",name:"email",value:t.email,type:"text",placeholder:"email@email.com",onBlur:r,onChange:c}),o.email&&s.email&&Object(H.jsx)("h1",{className:"fs-6 text-danger brightGrey",children:s.email})]})]}),Object(H.jsxs)("div",{className:"mb-3 row",children:[Object(H.jsx)("label",{htmlFor:"inputPassword",className:"col-12 col-form-label text-orange brightGrey",children:"Password*"}),Object(H.jsxs)("div",{className:"col-12 brightGrey",children:[Object(H.jsx)("input",{autoComplete:"off",className:"form-control bg-dark text-light mb-3",name:"password",id:"inputPassword",value:t.password,type:"password",placeholder:"password",onBlur:r,onChange:c}),o.password&&s.password&&Object(H.jsx)("h1",{className:"fs-6 text-danger brightGrey",children:s.password}),a&&Object(H.jsx)("h1",{className:"fs-6 text-danger brightGrey",children:"Password or email wrong"})]})]}),Object(H.jsx)("div",{className:"row button__container brightGrey p-5",children:Object(H.jsx)("button",{className:"btn btn-red-orange col-12 m-auto w-50",type:"submit",children:"Login"})})]}),Object(H.jsx)("div",{className:"accordion mt-4",id:"accordionExample",children:Object(H.jsxs)("div",{className:"accordion-item",children:[Object(H.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(H.jsx)("div",{className:"accordion-button collapsed","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Want to met inside? Click me!"})}),Object(H.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(H.jsxs)("div",{className:"accordion-body",children:[Object(H.jsx)("h1",{className:"fs-6 help-text",children:"USER: challenge@alkemy.org"}),Object(H.jsx)("h1",{className:"fs-6 help-text",children:"PASSWORD: react"})]})})]})})]})}})},T=a(30),C=a.n(T),G=function(e,t){var a=t.filter((function(t){return t===e})),c=Object(_.a)(a,1)[0],r=t.filter((function(t){return t.biography.alignment===e.biography.alignment}));return c===e?(C.a.fire({icon:"error",title:"Oops...",text:"You already have this character"}),{type:h}):6===t.length?(C.a.fire({icon:"error",title:"Oops...",text:"You already have 6 characters"}),{type:h}):3===r.length?(C.a.fire({icon:"error",title:"Oops...",text:"you already have 3 characters with this align"}),{type:h}):{type:j,payload:e}},P=function(){var e=Object(s.b)();return Object(H.jsx)("div",{children:Object(H.jsx)("nav",{className:"navbar navbar-expand-lg nav__container",children:Object(H.jsxs)("div",{className:"container-fluid",children:[Object(H.jsx)("div",{className:"navbar-brand",children:Object(H.jsxs)(N.b,{to:"/home",className:"navbar-brand nav__item",children:[Object(H.jsx)("i",{className:"fas fa-mask navbar-brand nav__item"}),"Home"]})}),Object(H.jsx)(N.b,{to:"/auth",className:"btn btn-red-orange",onClick:function(){e(function(){var e={type:d,payload:!1};return localStorage.removeItem("token"),e}())},children:"Logout"})]})})})},I=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.heroes.teamHero})),a=Object(s.c)((function(e){return e.heroes.showHero})),c=a.appearance,r=a.biography,n=a.name,o=a.work,i=a.image,l=c.weight[1],d=c.height[1],j=r.aliases,b=c["eye-color"],h=c["hair-color"];return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(P,{}),Object(H.jsxs)("div",{className:"container",children:[Object(H.jsx)("hr",{}),Object(H.jsx)("div",{className:"row w-100",children:Object(H.jsx)("div",{className:"col-12 col-lg-6 m-auto",children:Object(H.jsx)("div",{className:"card__style ",children:Object(H.jsxs)("div",{className:"card w-100 m-auto",style:{width:"100%"},children:[Object(H.jsx)("img",{src:i.url,className:"card-img-top m-auto mt-3",alt:"..."}),Object(H.jsxs)("div",{className:"card-body",children:[Object(H.jsx)("h5",{className:"card-title",children:n}),Object(H.jsxs)("p",{className:"card-text",children:["Aliases: ",j.map((function(e){return Object(H.jsxs)("span",{children:['"',e,'", ']},e)}))]})]}),Object(H.jsxs)("ul",{className:"list-group list-group-flush brightGrey",children:[Object(H.jsxs)("li",{className:"list-group-item brightGrey text-light",children:["Weight: ",l]}),Object(H.jsxs)("li",{className:"list-group-item brightGrey text-light",children:["Height: ",d]}),Object(H.jsxs)("li",{className:"list-group-item brightGrey text-light",children:["Eyes color: ",b]}),Object(H.jsxs)("li",{className:"list-group-item brightGrey text-light",children:["Hair color: ",h]}),Object(H.jsxs)("li",{className:"list-group-item brightGrey text-light",children:['Localization: "',o.base,'"']})]}),Object(H.jsxs)("div",{className:"card-body d-flex justify-content-between",children:[Object(H.jsx)(N.b,{className:"btn btn-red-orange",to:"/home",children:"Back"}),Object(H.jsx)(N.b,{className:"btn btn-outline-success",onClick:function(){e(G(a,t))},to:"/home",children:"Add"})]})]})})})})]})]})},L=function(e){var t=e.data,a=e.conditional,r=e.numberTeam,n=Object(c.useState)(6),o=Object(_.a)(n,2),i=o[0],l=o[1],d=Object(s.c)((function(e){return e.heroes.teamHero})),j=Object(s.b)(),h=t.name,m=t.image;return Object(c.useEffect)((function(){l(r<=2?6:r<=3?4:2)}),[r]),Object(H.jsx)("div",{className:"col-12 col-xl-".concat(i," pb-4 m-auto"),children:Object(H.jsx)("div",{className:"card__style m-auto",children:Object(H.jsxs)("div",{className:"card w-100",style:{width:"100%"},children:[Object(H.jsx)("img",{src:m.url,className:"card-img-top m-auto mt-3",alt:h}),Object(H.jsxs)("div",{className:"card-body",children:[Object(H.jsx)("h5",{className:"card-title mb-3",children:h}),Object(H.jsxs)("div",{className:"card-body row",children:[Object(H.jsx)(N.b,{className:"btn btn-red-orange m-auto",onClick:function(){j(function(e){return{type:b,payload:e}}(t))},to:"./hero/".concat(h),children:"Look"}),a?Object(H.jsx)("button",{className:"btn btn-outline-success m-auto",onClick:function(){j(G(t,d))},children:"Add"}):Object(H.jsx)("button",{className:"btn btn-outline-danger m-auto",onClick:function(){j(function(e){return{type:u,payload:e}}(t))},children:" Remove"})]})]})]})})})},D=function(e){var t=e.heroes,a=e.conditional,c=e.lengthTeam,r=void 0===c?6:c;return Object(H.jsx)(H.Fragment,{children:Object(H.jsx)("div",{className:"row w-100 p-4 m-auto",children:t.map((function(e,t){return Object(H.jsx)(L,{data:e,conditional:a,numberTeam:r},"".concat(e).concat(t))}))})})},z=function(){var e=Object(c.useState)([]),t=Object(_.a)(e,2),a=t[0],r=t[1];return Object(H.jsx)(E.a,{initialValues:{searchText:""},validate:function(e){var t={};return/^[a-zA-Z\xc0-\xff\s]{1,40}$/.test(e.searchText)||(t.searchText="El nombre del h\xe9roe solo debe contener letras"),t},children:function(e){var t=e.values,c=e.handleChange,n=e.errors;return Object(H.jsxs)("div",{className:"container",children:[Object(H.jsxs)("div",{className:"row w-100",children:[Object(H.jsx)("h1",{children:" Search"}),Object(H.jsx)("hr",{}),Object(H.jsx)("input",{autoComplete:"off",className:"form-control form-control-lg bg-dark text-light mb-3",type:"text",name:"searchText",id:"searchText",value:t.searchText,placeholder:"Search a hero","aria-label":".form-control-lg example",onChange:function(e){return function(e,t,a){t(e);var c=a.value.toLowerCase();try{return k.a.get("https://superheroapi.com/api.php/117518734017873/search/".concat(c)).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}catch(n){console.log(n)}}(e,c,e.target)}}),n.searchText&&Object(H.jsx)("h4",{className:"fs-6 text-danger",children:n.searchText}),Object(H.jsx)("hr",{})]}),"success"!==a.response||n.searchText?Object(H.jsx)("h4",{className:"fs-6 text-danger",children:a.error}):Object(H.jsx)(D,{heroes:a.results,conditional:!0})]})}})},R=function(){var e=Object(s.c)((function(e){return e.heroes})).teamHero,t=function(e){var t=function(e,t){return parseInt(e)+parseInt(t)};return[{type:"Intelligence",value:e.map((function(e){return e.powerstats.intelligence})).reduce(t)},{type:"Combat",value:e.map((function(e){return e.powerstats.combat})).reduce(t)},{type:"Durability",value:e.map((function(e){return e.powerstats.durability})).reduce(t)},{type:"Power",value:e.map((function(e){return e.powerstats.power})).reduce(t)},{type:"Speed",value:e.map((function(e){return e.powerstats.intelligence})).reduce(t)},{type:"Strength",value:e.map((function(e){return e.powerstats.strength})).reduce(t)}]}(e).sort((function(e,t){return e.value<t.value?1:e.value>t.value?-1:0}));return Object(H.jsxs)("div",{className:"container",children:[Object(H.jsx)("div",{className:"row w-100",children:Object(H.jsx)("div",{className:"col-6",children:t.map((function(e){return Object(H.jsxs)("h5",{className:"text-orange",children:[" ",e.type,": ",e.value]},e.type)}))})}),Object(H.jsx)("hr",{}),Object(H.jsx)(D,{heroes:e,conditional:!1,lengthTeam:e.length})]})},B=function(){var e=Object(s.c)((function(e){return e.heroes})).teamHero;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(P,{}),Object(H.jsx)("hr",{}),void 0===e[0]?Object(H.jsxs)("div",{className:"container text-orange m-auto fs-1",children:["Haven't team yet! ",Object(H.jsx)("br",{}),Object(H.jsx)("i",{className:"fas fa-frown text-orange"})]}):Object(H.jsx)(R,{}),Object(H.jsx)("hr",{}),Object(H.jsx)(z,{})]})},F=function(){return Object(H.jsx)(N.a,{children:Object(H.jsx)("div",{className:"screen darkGrey",children:Object(H.jsxs)(w.d,{children:[Object(H.jsx)(w.b,{exact:!0,path:"/home",component:B}),Object(H.jsx)(w.b,{exact:!0,path:"/hero/:heroName",component:I}),Object(H.jsx)(w.a,{to:"/home",component:B})]})})})},Z=a(29),J=function(e){var t=e.isAuth,a=e.component,c=Object(Z.a)(e,["isAuth","component"]);return Object(H.jsx)(w.b,Object(p.a)(Object(p.a)({},c),{},{component:function(e){return t?Object(H.jsx)(a,Object(p.a)({},e)):Object(H.jsx)(w.a,{to:"/auth"})}}))},V=function(e){var t=e.isAuth,a=e.component,c=Object(Z.a)(e,["isAuth","component"]);return Object(H.jsx)(w.b,Object(p.a)(Object(p.a)({},c),{},{component:function(e){return t?Object(H.jsx)(w.a,{to:"/"}):Object(H.jsx)(a,Object(p.a)({},e))}}))},X=function(){var e=Object(s.c)((function(e){return e.auth})).logged;return Object(H.jsx)(N.a,{basename:"/heroesapp",children:Object(H.jsx)("div",{className:"body",children:Object(H.jsxs)(w.d,{children:[Object(H.jsx)(V,{path:"/auth",component:A,isAuth:e}),Object(H.jsx)(J,{path:"/",component:F,isAuth:e})]})})})},U=(a(93),function(){return Object(H.jsx)(s.a,{store:y,children:Object(H.jsx)(X,{})})});n.a.render(Object(H.jsx)(U,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.d79ab1ab.chunk.js.map