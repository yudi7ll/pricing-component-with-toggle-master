(this["webpackJsonppricing-component"]=this["webpackJsonppricing-component"]||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(2),i=t.n(c),o=t(3),l=t(4);t(10);function s(e){var n=e.title,t=e.price,a=e.features,c=void 0===a?[]:a,i=function(){return c.map((function(e){return r.a.createElement("li",{key:e},e)}))};return r.a.createElement("div",{className:"pricing"},r.a.createElement("div",{className:"pricing__box pricing__basic"},r.a.createElement("h3",null,n),r.a.createElement("h2",{className:"pricing__price"},"$",r.a.createElement("span",null,t)),r.a.createElement("ul",{className:"pricing__offers"},r.a.createElement(i,null)),r.a.createElement("div",{className:"pricing__btn"},r.a.createElement("button",{type:"button",onClick:function(){return document.location.reload()}},"LEARN MORE"))))}var u=[{title:"Basic",price:"19.99",features:["500 GB Storage","2 Users Allowed","Send up to 3 GB"]},{title:"Professional",price:"24.99",features:["1 TB Storage","5 Users Allowed","Send up to 10 GB"]},{title:"Master",price:"39.99",features:["2 TB Storage","10 Users Allowed","Send up to 20 GB"]}],p=["199.99","249.99","399.99"].map((function(e,n){return Object(l.a)({},u[n],{price:e})}));var d=function(){var e=Object(a.useState)(!0),n=Object(o.a)(e,2),t=n[0],c=n[1],i=function(){return(t?u:p).map((function(e){var n=e.title,t=e.price,a=e.features;return r.a.createElement(s,{key:n,title:n,price:t,features:a})}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Our Pricing"),r.a.createElement("div",{className:"switch"},r.a.createElement("h4",{className:"switch__text"},"Annually"),r.a.createElement("label",{className:"switch__box"},r.a.createElement("input",{type:"checkbox",defaultChecked:!0,onChange:function(e){return c(e.target.checked)}}),r.a.createElement("span",{className:"switch__slider"})),r.a.createElement("h4",{className:"switch__text"},"Monthly")),r.a.createElement("div",{className:"pricing-card"},r.a.createElement(i,null)))},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pricing-component",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/pricing-component","/service-worker.js");m?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(n,e)}))}}()},5:function(e,n,t){e.exports=t(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.d156a524.chunk.js.map