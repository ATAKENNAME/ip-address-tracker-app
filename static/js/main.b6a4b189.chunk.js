(this["webpackJsonpip-address-tracker"]=this["webpackJsonpip-address-tracker"]||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(14),c=n.n(s),o=n(9),i=n(1);var r=function(){return Object(i.jsxs)("div",{id:"header",children:[Object(i.jsx)("h1",{id:"header-text",children:"IP Address Track"}),Object(i.jsx)("img",{id:"header-bg",src:"images/pattern-bg.png",alt:"background img"})]})},l=n(35),d=n(41),p=n(36),j=n(37),b=n(19),h=n(20);var x=function(e){return Object(i.jsxs)("div",{id:"searchDisplayContainer",children:[Object(i.jsxs)(l.a,{id:"SearchContainer",children:[Object(i.jsx)("input",{type:"search",id:"searchBar",className:"form-control",onChange:function(t){return e.handleInput(t)},placeholder:"Enter Your IP Address Here"}),Object(i.jsx)(d.a,{id:"searchBtn",type:"button",className:"searchBarBtn btn",variant:"dark",onClick:function(){return e.handleClick()},children:Object(i.jsx)(b.a,{icon:h.a})})]}),Object(i.jsx)(l.a,{id:"diplayContainer",children:Object(i.jsxs)(p.a,{children:[Object(i.jsxs)(j.a,{xs:12,md:3,className:"text-box box1",children:[Object(i.jsx)("span",{className:"title",children:"IP ADDRESS"}),Object(i.jsx)("p",{className:"result",children:e.displayInfo.ipAddress})]}),Object(i.jsxs)(j.a,{xs:12,md:3,className:"text-box box2",children:[Object(i.jsx)("span",{className:"title",children:"LOCATION"}),Object(i.jsxs)("p",{className:"result",children:[e.displayInfo.city+", ",e.displayInfo.region,"  "+e.displayInfo.postalCode]})]}),Object(i.jsxs)(j.a,{xs:12,md:3,className:"text-box box3",children:[Object(i.jsx)("span",{className:"title",children:"TIMEZONE"}),Object(i.jsxs)("p",{className:"result",children:["UTC ",e.displayInfo.timeZone]})]}),Object(i.jsxs)(j.a,{xs:12,md:3,className:"text-box box4",children:[Object(i.jsx)("span",{className:"title",children:"ISP"}),Object(i.jsx)("p",{className:"result",children:e.displayInfo.isp})]})]})})]})},u=n(8),m=n.n(u),O=(n(18),n(38)),g=n(39),f=n(42),y=n(40);var I=function(e){var t=m.a.icon({iconUrl:"images/icon-location.svg",iconSize:[40,50],iconAnchor:null,shadowUrl:null});function n(e){var t=e.coords,n=Object(O.a)();return n.setView(t,n.getZoom()),null}return Object(i.jsxs)(g.a,{id:"map",center:[e.mapLocation.lat,e.mapLocation.lng],zoom:13,scrollWheelZoom:!1,children:[console.log(e.mapLocation.lat,e.mapLocation.lng),Object(i.jsx)(f.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(i.jsx)(n,{coords:e.mapLocation}),Object(i.jsx)(y.a,{position:[e.mapLocation.lat,e.mapLocation.lng],icon:t})]})};var v=function(){var e,t=Object(a.useState)("8.8.8.8"),n=Object(o.a)(t,2),s=n[0],c=n[1],l=Object(a.useState)({ipAddress:"8.8.8.8",city:"Mountain View",region:"Califonia",postalCode:"94035",lat:37.38605,lng:-122.08385,timeZone:"-07:00",isp:"Google LLC"}),d=Object(o.a)(l,2),p=d[0],j=d[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(r,{}),Object(i.jsx)(x,{handleInput:function(e){console.log("handlerUserInput called",e.target.value),c(e.target.value)},handleClick:function(){e="https://geo.ipify.org/api/v1?apiKey=at_mypl9PF26wwqAcR8xJi6FfXfE4f12&ipAddress="+s,console.log("url in handle Click",e,typeof e),fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e,"result"),j({ipAddress:e.ip,city:e.location.city,region:e.location.region,postalCode:e.location.postalCode,lat:e.location.lat,lng:e.location.lng,timeZone:e.location.timezone,isp:e.isp})}),(function(e){console.log(e,"error")}))},displayInfo:p}),Object(i.jsx)(I,{mapLocation:p})]})};c.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b6a4b189.chunk.js.map