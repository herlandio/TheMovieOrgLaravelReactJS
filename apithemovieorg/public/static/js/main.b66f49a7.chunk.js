(this.webpackJsonpfrontthemovieorg=this.webpackJsonpfrontthemovieorg||[]).push([[0],{38:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(21),s=c.n(r),i=(c(28),c(8)),j=c(3),l=c(12),o=c(13),d=c(0);var b=function(e){var t=e.name;return Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"row justify-content-center bg-dark p-4",children:[Object(d.jsx)("div",{className:"col-6 p-4",children:Object(d.jsx)("h1",{className:"text-light text-start lead",children:t})}),Object(d.jsx)("div",{className:"col-2 p-4 text-end",children:Object(d.jsx)(i.b,{to:"/search",children:Object(d.jsx)(l.a,{icon:o.b})})})]})})},h=c(9),u=c(11),m=c.n(u),x=c(16),O="https://api-themovieorg.herokuapp.com";function v(){return(v=Object(x.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/api/start"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(x.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/api/movieById/").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(x.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/api/search/").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=function(e){return new Date(e).toLocaleDateString("pt-br",{weekday:"long",year:"numeric",month:"long",day:"numeric"})};function N(e){var t={image:e.image,movie:e.movie};return Object(d.jsx)("div",{className:"table-responsive",children:Object(d.jsxs)("table",{className:"table table-striped",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",className:"text-center",children:"#"}),Object(d.jsx)("th",{scope:"col",className:"text-center",children:"Nome"}),Object(d.jsx)("th",{scope:"col",className:"text-center",children:"Descri\xe7\xe3o"}),Object(d.jsx)("th",{scope:"col",className:"text-center",children:"Data"}),Object(d.jsx)("th",{scope:"col",className:"text-center",children:"A\xe7\xe3o"})]})}),Object(d.jsx)("tbody",{children:t.movie.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"align-middle text-center",children:Object(d.jsx)("img",{className:"img-fluid",src:"".concat(t.image,"/").concat(e.poster_path),alt:e.original_title,width:"100"})}),Object(d.jsx)("td",{className:"align-middle text-center",children:Object(d.jsx)("b",{children:e.original_title})}),Object(d.jsxs)("td",{className:"align-middle text-center",children:[e.overview.substring(0,30),"..."]}),Object(d.jsx)("td",{className:"align-middle text-center",children:f(e.release_date)}),Object(d.jsx)("td",{className:"align-middle text-center",children:Object(d.jsx)(i.b,{to:"details/".concat(e.id),children:Object(d.jsx)(l.a,{icon:o.b})})})]},e.id)}))})]})})}var w=function(e){var t=e.image,c=Object(n.useState)([]),a=Object(h.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){var e=!0;return!0===e&&function(){return v.apply(this,arguments)}().then((function(e){s(e)})),function(){return e=!1}}),[]),Object(d.jsx)("div",{children:Object(d.jsx)(N,{image:t,movie:r})})};var y=function(e){var t=e.image;return Object(d.jsx)("div",{className:"container-fluid bg-light",children:Object(d.jsx)("div",{className:"row justify-content-center",children:Object(d.jsx)("div",{className:"col-8 bg-white p-4 shadow m-4 rounded",children:Object(d.jsx)(w,{image:t})})})})};function _(e){var t={image:e.image,movie:e.movie};return Object(d.jsx)("div",{className:"container-fluid bg-light",children:Object(d.jsx)("div",{className:"row justify-content-center",children:Object(d.jsxs)("div",{className:"col-8 bg-white p-4 shadow m-4 rounded",children:[Object(d.jsx)("h2",{className:"text-secondary text-start lead pt-3 pb-3",children:"Detalhes"}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsx)("img",{className:"img-fluid",src:"".concat(t.image,"/").concat(t.movie.poster_path),alt:t.movie.original_title,width:"170"})}),Object(d.jsxs)("div",{className:"col-md-8",children:[Object(d.jsx)("p",{className:"pt-4 text-uppercase",children:Object(d.jsx)("b",{children:t.movie.original_title})}),Object(d.jsx)("p",{children:t.movie.overview}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"nota:"})," ",t.movie.vote_average," | ",Object(d.jsx)("b",{children:"votos:"})," ",t.movie.vote_count]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"idioma:"})," ",t.movie.original_language," | ",Object(d.jsx)("b",{children:"ano:"})," ",f(t.movie.release_date)]})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)(l.a,{icon:o.a})})]})})})}var k=function(e){var t=e.image,c=Object(n.useState)([]),a=Object(h.a)(c,2),r=a[0],s=a[1],i=Object(j.f)().id;return Object(n.useEffect)((function(){var e=!0;return!0===e&&function(e){return p.apply(this,arguments)}(i).then((function(e){s(e)})),function(){return e=!1}}),[i]),Object(d.jsx)("div",{children:Object(d.jsx)(_,{image:t,movie:r})})};var S=function(e){var t={image:e.image,listMs:e.listMs};return Object(d.jsx)("div",{className:"row justify-content-center pt-3 bg-light",children:Object(d.jsx)("div",{className:"col-8 p-4",children:Object(d.jsx)(N,{image:t.image,movie:t.listMs})})})};function D(e){var t={search:e.search,change:e.value};return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"row justify-content-center bg-dark",children:Object(d.jsx)("div",{className:"col-8 pb-4",children:Object(d.jsx)("form",{children:Object(d.jsx)("input",{className:"form-control",type:"search",placeholder:"Procurar","aria-label":"search",value:t.search,onChange:t.change})})})})})}var M=function(e){var t=e.image,c=Object(n.useState)([]),a=Object(h.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)("start"),j=Object(h.a)(i,2),l=j[0],o=j[1];return Object(n.useEffect)((function(){var e=!0;return!0===e&&""!==l&&function(e){return g.apply(this,arguments)}(l).then((function(e){s(e)})),function(){return e=!1}}),[l]),Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(D,{search:l.value,value:function(e){o(e.target.value)}}),Object(d.jsx)(S,{listMs:r,image:t})]})};var C=function(){var e="https://image.tmdb.org/t/p/w500";return Object(d.jsxs)(i.a,{children:[Object(d.jsx)("div",{children:Object(d.jsx)(b,{name:"Test themoviedb.org"})}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/",children:Object(d.jsx)(y,{image:e})}),Object(d.jsx)(j.a,{path:"/details/:id",children:Object(d.jsx)(k,{image:e})}),Object(d.jsx)(j.a,{path:"/search",children:Object(d.jsx)(M,{image:e})})]})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),E()}},[[38,1,2]]]);
//# sourceMappingURL=main.b66f49a7.chunk.js.map