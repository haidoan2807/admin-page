"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6224],{73968:function(e,n,s){s(72791);n.Z=s.p+"static/media/detail.d232b89ec33fbd721094385fe3952a2d.svg"},91957:function(e,n,s){s(72791);n.Z=s.p+"static/media/edit.3ea27fdd08515410ec98b228fe97392c.svg"},74480:function(e,n,s){s(72791);n.Z=s.p+"static/media/trash.2bed1ff8985500405fc4f593c88e8fb9.svg"},70278:function(e,n,s){s(72791);var t=s(97511),a=s(80184);const o={control:e=>({...e,fontSize:"14px"})};n.Z=e=>{let{...n}=e;return(0,a.jsx)(t.ZP,{...n,styles:o})}},29801:function(e,n,s){s.r(n);s(72791);var t=s(24846),a=s(62092),o=s(22800),c=s(41596),l=s(80184);n.default=e=>{let{selectedRows:n}=e;return n>0&&(0,l.jsxs)("div",{className:"d-flex flex-row w-100 justify-content-between align-items-center",style:{backgroundColor:"#61A4BC"},children:[(0,l.jsxs)("span",{className:"p-2",style:{fontSize:"14px"},children:[n," items selected"]}),(0,l.jsx)("div",{className:"p-2",children:(0,l.jsx)(a.Z,{className:"bg-danger",style:{borderColor:"#dc3545"},onClick:()=>(0,c.Z)({show:!0,message:"Are you sure you want to delete ?",title:"Confirm Delete Multiple Record(s)",confirmText:"Delete"}),children:(0,l.jsx)(t.Z,{icon:o.N})})})]})}},92707:function(e,n,s){s.d(n,{x6:function(){return ye},Lk:function(){return Ce},qh:function(){return we},tf:function(){return Ve},S8:function(){return qe},Gi:function(){return xn},ns:function(){return Qe},q3:function(){return sn},cG:function(){return Xe}});var t,a=s(72791),o=s(79271),c=s(30168),l=s(78983),i=s(54483),r=s(62092),d=s(44313),m=s(11632),h=s(41596),p=s(74480),x=s(91957),j=s(73968),u=s(29801),b=s(33173),f=s(29711),g=s(80184);const y=d.ZP.div(t||(t=(0,c.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n"])));var v=()=>{const[e,n]=(0,a.useState)([]),s=e=>{const{id:s,checked:a}=e.target;o("all-selected"===s?e=>e.map((e=>({...e,isChecked:a}))):e=>e.map((e=>e.id===s?{...e,isChecked:a}:e))),n((e=>{if("all-selected"===s)return e.length!==t.length?t.map((e=>e.id)):[];{let n=[...e,s];return e.includes(s)&&(n=n.filter((e=>e!==s))),n}}))},[t,o]=(0,a.useState)([{id:"1",costType:"One Time",name:"HUPER",startOn:"Mar 19 2022",startEnd:"Mar 20 2022",costValue:"$100.00",totalCostValue:"$100.00"},{id:"2",costType:"One Time",name:"HUPER",startOn:"Mar 19 2022",startEnd:"Mar 20 2022",costValue:"$100.00",totalCostValue:"$100.00"}]),c=[{name:(0,g.jsx)("div",{className:"text-center w-100",children:(0,g.jsx)(l.EC,{type:"checkbox",id:"all-selected",checked:t.filter((e=>!0!==(null===e||void 0===e?void 0:e.isChecked))).length<1,onChange:s})}),selector:"check",render:(e,n)=>(0,g.jsx)("div",{className:"text-center",children:(0,g.jsx)(l.EC,{type:"checkbox",id:n.id,checked:(null===n||void 0===n?void 0:n.isChecked)||!1,onChange:s})})},{name:"Cost Type",selector:"costType",sortable:!0},{name:"Campaign Name",selector:"name",sortable:!0},{name:"Start On",selector:"startOn",sortable:!0},{name:"Start End",selector:"startEnd",sortable:!0},{name:"Cost Value",selector:"costValue",sortable:!0},{name:"Total Cost Value",selector:"totalCostValue",sortable:!0},{name:(0,g.jsx)("div",{className:"text-center w-100",children:"Action"}),selector:"action",render:(e,n)=>(0,g.jsxs)("div",{className:"d-flex flex-row justify-content-center",children:[(0,g.jsx)(r.Z,{color:"main",onClick:()=>(0,b.Z)({show:!0,disable:!0}),children:(0,g.jsx)("img",{src:j.Z})}),(0,g.jsx)(r.Z,{color:"main",onClick:()=>(0,b.Z)({show:!0}),children:(0,g.jsx)("img",{src:x.Z})}),(0,g.jsx)(r.Z,{color:"main",onClick:()=>(0,h.Z)({show:!0,message:(0,g.jsx)("span",{children:"Do you want to delete this cost?"}),title:"Confirm delete",confirmText:"Delete"}),children:(0,g.jsx)("img",{src:p.Z})})]})}];return(0,g.jsxs)("div",{className:"d-flex flex-column w-100 bg-white",children:[(0,g.jsxs)("div",{className:"d-flex flex-row justify-content-between my-3",style:{padding:"0 12px"},children:[(0,g.jsxs)("div",{className:"d-flex flex-row align-items-center gap-2",children:[(0,g.jsx)("div",{className:"h5",children:"HUPER"}),(0,g.jsx)(l.C_,{color:"success",children:"Active"})]}),(0,g.jsxs)(y,{children:[(0,g.jsx)(r.Z,{color:"secondary",children:(0,g.jsx)(i.G,{icon:m.d8e})}),(0,g.jsxs)(r.Z,{color:"primary",onClick:()=>(0,f.Z)({show:!0}),children:[(0,g.jsx)(i.G,{icon:m.n7u})," Add New Cost"]})]})]}),(0,g.jsx)("p",{className:"mb-0 h4",style:{paddingLeft:"12px"},children:"Total Cost: $100.00"}),(0,g.jsx)(xn,{data:t,columns:c,Header:()=>(0,g.jsx)(u.default,{selectedRows:e.length})})]})};const C=a.lazy((()=>s.e(6805).then(s.bind(s,6805)))),N=a.lazy((()=>s.e(9557).then(s.bind(s,99557)))),w=a.lazy((()=>s.e(5722).then(s.bind(s,15722)))),z=a.lazy((()=>s.e(6692).then(s.bind(s,96692)))),k=a.lazy((()=>s.e(6857).then(s.bind(s,76857)))),S=a.lazy((()=>s.e(2808).then(s.bind(s,28062)))),Z=a.lazy((()=>s.e(7182).then(s.bind(s,47182)))),P=a.lazy((()=>s.e(5735).then(s.bind(s,75735)))),_=a.lazy((()=>s.e(1001).then(s.bind(s,61001)))),T=a.lazy((()=>s.e(7494).then(s.bind(s,97494)))),L=a.lazy((()=>s.e(2422).then(s.bind(s,2422)))),D=a.lazy((()=>s.e(4142).then(s.bind(s,54142)))),O=a.lazy((()=>s.e(44).then(s.bind(s,60044)))),R=a.lazy((()=>s.e(1299).then(s.bind(s,1299)))),A=a.lazy((()=>s.e(2670).then(s.bind(s,62670)))),E=a.lazy((()=>s.e(6882).then(s.bind(s,16882)))),U=a.lazy((()=>s.e(3866).then(s.bind(s,13866)))),V=a.lazy((()=>s.e(644).then(s.bind(s,30644)))),F=a.lazy((()=>s.e(3738).then(s.bind(s,83738)))),I=a.lazy((()=>s.e(6027).then(s.bind(s,76027)))),M=a.lazy((()=>s.e(3255).then(s.bind(s,63255)))),B=a.lazy((()=>s.e(4085).then(s.bind(s,64085)))),H=a.lazy((()=>s.e(3861).then(s.bind(s,53861)))),Y=a.lazy((()=>s.e(1883).then(s.bind(s,61883)))),$=a.lazy((()=>s.e(1968).then(s.bind(s,91968)))),q=a.lazy((()=>s.e(8386).then(s.bind(s,78386)))),G=a.lazy((()=>Promise.all([s.e(3076),s.e(9958)]).then(s.bind(s,29958)))),K=a.lazy((()=>Promise.all([s.e(3013),s.e(2442),s.e(4017)]).then(s.bind(s,74017)))),Q=a.lazy((()=>Promise.all([s.e(3013),s.e(1737),s.e(327)]).then(s.bind(s,80327)))),W=a.lazy((()=>Promise.all([s.e(3013),s.e(7096)]).then(s.bind(s,57096)))),X=a.lazy((()=>s.e(3304).then(s.bind(s,23304)))),J=a.lazy((()=>s.e(1243).then(s.bind(s,21243)))),ee=a.lazy((()=>s.e(2066).then(s.bind(s,72066)))),ne=a.lazy((()=>s.e(5198).then(s.bind(s,75198)))),se=a.lazy((()=>Promise.all([s.e(3076),s.e(6098)]).then(s.bind(s,36098)))),te=a.lazy((()=>Promise.all([s.e(3076),s.e(4727)]).then(s.bind(s,44727)))),ae=a.lazy((()=>s.e(2513).then(s.bind(s,52513)))),oe=a.lazy((()=>s.e(8967).then(s.bind(s,48967)))),ce=a.lazy((()=>s.e(5630).then(s.bind(s,5630)))),le=a.lazy((()=>s.e(4599).then(s.bind(s,94599)))),ie=a.lazy((()=>Promise.all([s.e(9726),s.e(4071)]).then(s.bind(s,64071)))),re=a.lazy((()=>s.e(1608).then(s.bind(s,31608)))),de=a.lazy((()=>Promise.all([s.e(9726),s.e(2334),s.e(3760)]).then(s.bind(s,40154)))),me=a.lazy((()=>s.e(4434).then(s.bind(s,64434)))),he=a.lazy((()=>s.e(8536).then(s.bind(s,88536)))),pe=a.lazy((()=>s.e(3261).then(s.bind(s,33261)))),xe=a.lazy((()=>s.e(4376).then(s.bind(s,64376)))),je=a.lazy((()=>s.e(8852).then(s.bind(s,18852)))),ue=a.lazy((()=>s.e(1594).then(s.bind(s,1594)))),be=a.lazy((()=>s.e(4549).then(s.bind(s,94549))));var fe=[{path:"/",exact:!0,name:"Agency Subscription",component:le},{path:"/agency-subscription",name:"Agency Subscription",component:le},{path:"/theme",name:"Theme",component:C,exact:!0},{path:"/theme/colors",name:"Colors",component:C},{path:"/theme/typography",name:"Typography",component:N},{path:"/base",name:"Base",component:k,exact:!0},{path:"/base/accordion",name:"Accordion",component:w},{path:"/base/breadcrumbs",name:"Breadcrumbs",component:z},{path:"/base/cards",name:"Cards",component:k},{path:"/base/carousels",name:"Carousel",component:S},{path:"/base/collapses",name:"Collapse",component:Z},{path:"/base/list-groups",name:"List Groups",component:P},{path:"/base/navs",name:"Navs",component:_},{path:"/base/paginations",name:"Paginations",component:T},{path:"/base/popovers",name:"Popovers",component:L},{path:"/base/progress",name:"Progress",component:D},{path:"/base/spinners",name:"Spinners",component:O},{path:"/base/tables",name:"Tables",component:R},{path:"/base/tooltips",name:"Tooltips",component:A},{path:"/buttons",name:"Buttons",component:E,exact:!0},{path:"/buttons/buttons",name:"Buttons",component:E},{path:"/buttons/dropdowns",name:"Dropdowns",component:V},{path:"/buttons/button-groups",name:"Button Groups",component:U},{path:"/charts",name:"Charts",component:G},{path:"/forms",name:"Forms",component:M,exact:!0},{path:"/forms/form-control",name:"Form Control",component:M},{path:"/forms/select",name:"Select",component:$},{path:"/forms/checks-radios",name:"Checks & Radios",component:F},{path:"/forms/range",name:"Range",component:Y},{path:"/forms/input-group",name:"Input Group",component:B},{path:"/forms/floating-labels",name:"Floating Labels",component:I},{path:"/forms/layout",name:"Layout",component:H},{path:"/forms/validation",name:"Validation",component:q},{path:"/icons",exact:!0,name:"Icons",component:K},{path:"/icons/coreui-icons",name:"CoreUI Icons",component:K},{path:"/icons/flags",name:"Flags",component:Q},{path:"/icons/brands",name:"Brands",component:W},{path:"/notifications",name:"Notifications",component:X,exact:!0},{path:"/notifications/alerts",name:"Alerts",component:X},{path:"/notifications/badges",name:"Badges",component:J},{path:"/notifications/modals",name:"Modals",component:ee},{path:"/notifications/toasts",name:"Toasts",component:ne},{path:"/widgets",name:"Widgets",component:se},{path:"/user-management/user-detail",name:"User Detail",component:a.lazy((()=>s.e(6445).then(s.bind(s,96445))))},{path:"/user-management",name:"User Management",component:te},{path:"/accesscontrol",name:"Access Control",component:ae},{path:"/package-management",name:"Package Management",component:oe},{path:"/subscription",name:"Subscription Management",component:ce,extraHeader:be},{path:"/pos-management",name:"POS Management",component:xe},{path:"/campaign/campaign-cost",name:"Campaign Cost",component:v},{path:"/campaign/detail",name:"View Campaign",component:a.lazy((()=>s.e(7857).then(s.bind(s,47857))))},{path:"/campaign",name:"Campaign",component:re},{path:"/track-sales/track-sale-detail",name:"Track Sales Detail",component:he},{path:"/track-sales/preview-imported-history",name:"Preview Import History",component:pe},{path:"/track-sales/show-imported-history",name:"Import History",component:me},{path:"/track-sales",name:"Track Sales",component:de},{path:"/chat",name:"Chat",component:ie},{path:"/change-password",name:"Change Password",component:ue},{path:"/profile",name:"Profile",component:je}];const ge=e=>{const n=(0,o.TH)().pathname,s=(e,n)=>n.find((n=>n.path===e)).name,t=(e=>{const n=[];return e.split("/").reduce(((e,t,a,o)=>{const c="".concat(e,"/").concat(t);return n.push({pathname:c,name:s(c,fe),active:a+1===o.length}),c})),n})(n);return(0,g.jsxs)(l.fj,{className:"m-0 ms-2",children:[(0,g.jsx)(l.Sd,{style:{color:"#888888"},children:"Home"}),t.map(((e,n)=>(0,a.createElement)(l.Sd,{...e.active?{active:!0}:{href:e.pathname},key:n,style:{color:"#595959"}},e.name)))]})};var ye=a.memo(ge);const ve=()=>(0,g.jsx)(l.KB,{fluid:!0,children:(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(l.LQ,{color:"primary"}),children:(0,g.jsxs)(o.rs,{children:[fe.map(((e,n)=>e.component&&(0,g.jsx)(o.AW,{path:e.path,exact:e.exact,name:e.name,render:n=>(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(e.component,{...n})})},n))),(0,g.jsx)(o.l_,{from:"/",to:"/agency-subscription"})]})})});var Ce=a.memo(ve);const Ne=()=>(0,g.jsx)(l.pG,{});var we=a.memo(Ne),ze=s(16030),ke=s(24846),Se=s(54299),Ze=s(31389),Pe=s(13170),_e=s(62412),Te=s(32642),Le=s(90710),De=s.p+"static/media/8.35ee8919ea545620a475.jpg",Oe=s(28613);var Re=()=>{const e=(0,o.k6)(),{signOut:n}=(0,Oe.aC)(),[s,t]=(0,a.useState)(!1);return(0,g.jsxs)(l.w5,{variant:"nav-item",children:[(0,g.jsxs)(l.SQ,{placement:"bottom-end",className:"py-0",caret:!1,children:[(0,g.jsx)(l.cU,{src:De,size:"md"})," Miriam ",(0,g.jsx)(ke.Z,{icon:Pe.D})]}),(0,g.jsxs)(l.$H,{className:"pt-0",placement:"bottom-end",children:[(0,g.jsxs)(l.$f,{href:"/profile",children:[(0,g.jsx)(ke.Z,{icon:_e.E,className:"me-2"}),"My Profile"]}),(0,g.jsxs)(l.$f,{href:"/change-password",children:[(0,g.jsx)(ke.Z,{icon:Te.C,className:"me-2"}),"Change Password"]}),(0,g.jsx)(l.$f,{href:"#",onClick:s=>{s.preventDefault(),t(!0),n(),e.push("/login"),t(!1)},children:s?(0,g.jsx)(l.LQ,{color:"secondary"}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(ke.Z,{icon:Le.V,className:"me-2"}),"Logout"]})})]})]})};var Ae,Ee=s.p+"static/media/maralytics_Logo_full.f4307303ccb6780ef5767d175a3771e3.svg";const Ue=d.ZP.span(Ae||(Ae=(0,c.Z)(["\n  display: flex;\n  font-weight: 400;\n  font-size: 20px;\n  padding-left: 8px;\n  color: #282828;\n"])));var Ve=()=>{const e=(0,ze.I0)(),n=(0,ze.v9)((e=>e.sidebarUnfoldable)),s=(0,ze.v9)((e=>e.sidebarShow)),t=(0,o.TH)().pathname,a=fe.find(((e,n)=>e.path===t));return(0,g.jsxs)(l.PO,{position:"sticky",className:"mb-4",style:{padding:"0"},children:[(0,g.jsxs)(l.KB,{fluid:!0,style:{boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",padding:"12px 0.5rem"},children:[(0,g.jsx)(l.qy,{className:"mx-auto d-md-none",to:"/",children:(0,g.jsx)("img",{src:Ee,style:{height:"40px"}})}),(0,g.jsx)(l.g3,{className:"d-none d-md-flex me-auto"}),(0,g.jsx)(l.g3,{children:(0,g.jsx)(l.U6,{children:(0,g.jsx)(l.AQ,{href:"#/chat",children:(0,g.jsx)(ke.Z,{icon:Se.a,size:"lg"})})})}),(0,g.jsx)(l.g3,{className:"ms-3",children:(0,g.jsx)(Re,{})})]}),(0,g.jsxs)(l.KB,{fluid:!0,style:{background:"#fff",justifyContent:"start"},className:"d-flex flex-column align-items-start",children:[(0,g.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[(0,g.jsx)(l.X4,{style:{color:"#595959"},className:"ps-1",onClick:()=>{window.innerWidth<768?e({type:"set",sidebarShow:!s}):e({type:"set",sidebarUnfoldable:!n})},children:(0,g.jsx)(ke.Z,{icon:Ze.N,size:"lg"})}),(0,g.jsx)(ye,{})]}),(0,g.jsxs)("div",{className:"d-flex flex-row justify-content-between w-100 pb-3",children:[(0,g.jsx)(Ue,{children:a.name}),a.extraHeader&&(0,g.jsx)(a.extraHeader,{})]})]})]})},Fe=s(91523);const Ie=e=>{let{items:n}=e;const s=(0,o.TH)(),t=(e,n,s)=>(0,g.jsxs)(g.Fragment,{children:[n&&n,e&&e,s&&(0,g.jsx)(l.C_,{color:s.color,className:"ms-auto",children:s.text})]}),c=(e,n)=>{const{component:s,name:o,badge:c,icon:l,...i}=e,r=s;return(0,a.createElement)(r,{...i.to&&!i.items&&{component:Fe.OL,activeClassName:"active"},key:n,...i},t(o,l,c))},i=(e,n)=>{var a;const{component:o,name:l,icon:r,to:d,...m}=e,h=o;return(0,g.jsx)(h,{idx:String(n),toggler:t(l,r),visible:s.pathname.startsWith(d),...m,children:null===(a=e.items)||void 0===a?void 0:a.map(((e,n)=>e.items?i(e,n):c(e,n)))},n)};return(0,g.jsx)(a.Fragment,{children:n&&n.map(((e,n)=>e.items?i(e,n):c(e,n)))})};var Me=s.p+"static/media/maralytics_Logo_short.4e1d09bd270419f4c0460bca0e943ad7.svg",Be=s(34358);s(82454);s.p;s.p;s.p;s.p;s.p;s.p;s.p;var He=s.p+"static/media/icon_package_management.4517b2452f5db6ebe59267440d8a4915.svg";var Ye=[{component:l.U6,name:(0,g.jsx)("div",{style:{marginLeft:"19px"},children:"Agency Subscription"}),to:"/agency-subscription",icon:(0,g.jsx)("img",{src:He,style:{marginLeft:"5px"}})}];const $e=()=>{const e=(0,ze.I0)(),n=(0,ze.v9)((e=>e.sidebarUnfoldable)),s=(0,ze.v9)((e=>e.sidebarShow));return(0,g.jsxs)(l.z3,{position:"fixed",unfoldable:n,visible:s,onVisibleChange:n=>{e({type:"set",sidebarShow:n})},children:[(0,g.jsxs)(l.Dl,{className:"d-none d-md-flex",to:"/",children:[(0,g.jsx)("img",{src:Ee,className:"sidebar-brand-full",style:{height:"40px"}}),(0,g.jsx)("img",{src:Me,className:"sidebar-brand-narrow",style:{height:"40px"}})]}),(0,g.jsx)(l.Xk,{children:(0,g.jsx)(Be.Z,{children:(0,g.jsx)(Ie,{items:Ye})})})]})};var qe=a.memo($e),Ge={Y:"4.0"};const Ke=e=>{const{content:n,href:s,name:t}=e,a="s"===t.slice(-1),o="https://coreui.io/react/docs/".concat(Ge.Y,"/").concat(s);return(0,g.jsxs)(l.e_,{color:"info",className:"bg-white",children:[n||"A React ".concat(t," component ").concat(a?"have":"has"," been created as a native React.js version\n      of Bootstrap ").concat(t,". ").concat(t," ").concat(a?"are":"is"," delivered with some new features,\n      variants, and unique design that matches CoreUI Design System requirements."),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"For more information please visit our official"," ",(0,g.jsx)(l.h7,{href:o,target:"_blank",children:"documentation of CoreUI Components Library for React.js"}),"."]})};var Qe=a.memo(Ke);const We=e=>{const{href:n,name:s,text:t,...a}=e,o=s?"https://coreui.io/react/docs/components/".concat(s):n;return(0,g.jsx)("div",{className:"float-end",children:(0,g.jsx)(l.h7,{...a,href:o,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:(0,g.jsx)("small",{className:"text-medium-emphasis",children:t||"docs"})})})};var Xe=a.memo(We),Je=s(52001),en=s(87857);const nn=e=>{const{children:n,href:s}=e,t="https://coreui.io/react/docs/".concat(Ge.Y,"/").concat(s);return(0,g.jsxs)("div",{className:"example",children:[(0,g.jsxs)(l.n2,{variant:"tabs",children:[(0,g.jsx)(l.U6,{children:(0,g.jsxs)(l.AQ,{href:"#",active:!0,children:[(0,g.jsx)(ke.Z,{icon:Je.B,className:"me-2"}),"Preview"]})}),(0,g.jsx)(l.U6,{children:(0,g.jsxs)(l.AQ,{href:t,target:"_blank",children:[(0,g.jsx)(ke.Z,{icon:en.I,className:"me-2"}),"Code"]})})]}),(0,g.jsx)(l.gr,{className:"rounded-bottom",children:(0,g.jsx)(l.IA,{className:"p-3 preview",visible:!0,children:n})})]})};var sn=a.memo(nn);var tn=e=>{let{currentPage:n,pageSize:s,custom:t,totalData:a,paginate:o}=e;const c=[],[i,r]=s;for(let l=1;l<=Math.ceil(a/i);l++)c.push(l);return(0,g.jsxs)("div",{className:"d-flex flex-row align-items-center justify-content-between mb-1",children:[(0,g.jsx)("div",{style:{color:"#282828",fontSize:"14px"},children:t.tooltip||"1 - ".concat(i," of ").concat(a," rows ")}),(0,g.jsxs)("div",{className:"d-flex flex-row",children:[(0,g.jsx)("div",{className:"me-2",style:{cursor:"pointer"},children:(0,g.jsxs)(l.E7,{size:"sm",children:[(0,g.jsx)(l.tn,{"aria-label":"Previous",onClick:()=>o(n-1),disabled:1===n,children:(0,g.jsx)("span",{"aria-hidden":"true",children:"\xab"})}),c.map((e=>(0,g.jsx)(l.tn,{onClick:()=>o(e),active:n===e,children:e},e))),(0,g.jsx)(l.tn,{"aria-label":"Next",onClick:()=>o(n+1),disabled:n===c.length,children:(0,g.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})]})}),(0,g.jsx)("div",{children:(0,g.jsxs)(l.LX,{size:"sm",onChange:e=>r(e.target.value),children:[(0,g.jsx)("option",{value:"5",children:"5/page"}),(0,g.jsx)("option",{value:"10",children:"10/page"}),(0,g.jsx)("option",{value:"15",children:"15/page"}),(0,g.jsx)("option",{value:"20",children:"20/page"})]})})]})]})};var an=s.p+"static/media/icon_sort_up.82be06fff580270eed536104f4f65158.svg";var on=s.p+"static/media/icon_sort_down.897f19de1e665a718aee470099c65346.svg";var cn=s.p+"static/media/icon_sort_up_black.45a05e9073a0059aa7acb9c8c38a61cc.svg";var ln,rn=s.p+"static/media/icon_sort_down_black.7e0707cdaf3fd0ba9be810be3729d385.svg";const dn=d.ZP.div(ln||(ln=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 5px;\n  cursor: pointer;\n"])));var mn,hn=e=>{let{sort:n,onClick:s}=e;return(0,g.jsxs)(dn,{onClick:s,children:[(0,g.jsx)("img",{src:"asc"===n?cn:an,style:{marginBottom:"1px"}}),(0,g.jsx)("img",{src:"desc"===n?rn:on})]})};const pn=d.ZP.div(mn||(mn=(0,c.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));var xn=e=>{let{columns:n=[],data:s=[],Header:t,Footer:o,maxRow:c=0,type:i="rows",server:r=!1,pagination:d=!0,custom:m={pagination:{}},...h}=e;const[p,x]=(0,a.useState)(s),[j,u]=(0,a.useState)(1),[b,f]=(0,a.useState)(5),[y,v]=(0,a.useState)({sortKey:"Name",sortDirection:""}),C=j*b,N=C-b;let w=s;d&&(w=s.slice(N,C));return(0,g.jsxs)("div",{className:"container-fluid d-flex flex-column pt-3 bg-white",children:[t&&(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(t,{})}),(0,g.jsx)("div",{style:{overflow:"auto"},children:(0,g.jsxs)(l.Sx,{bordered:!0,borderColor:"#E5E5E5",children:[(0,g.jsx)(l.V,{children:(0,g.jsx)(l.T6,{children:n.map((e=>(0,g.jsx)(l.is,{scope:"col",style:{backgroundColor:"#FAFAFA",fontSize:"14px",color:"#282828"},children:(0,g.jsxs)(pn,{className:"".concat(e.className),children:[e.name,e.sortable&&(0,g.jsx)(hn,{sort:e.name===y.sortKey?y.sortDirection:void 0,onClick:()=>(e=>{e.name===y.sortKey?(v((e=>({...e,sortDirection:"asc"===e.sortDirection?"desc":"asc"}))),"asc"===y.sortDirection?x((n=>n.sort(((n,s)=>n[e.selector]<s[e.selector]?1:-1)))):x((n=>n.sort(((n,s)=>n[e.selector]>s[e.selector]?1:-1))))):(v((n=>({...n,sortKey:e.name,sortDirection:"asc"}))),x((n=>n.sort(((n,s)=>n[e.selector]>s[e.selector]?1:-1)))))})(e)})]})},"table-header-col-".concat(e.selector))))})}),(0,g.jsx)(l.NR,{children:w.map(((e,s)=>(0,g.jsx)(l.T6,{children:n.map(((n,s)=>(0,g.jsx)(l.NN,{scope:"row",style:{fontSize:"14px",color:"#57585B"},children:n.render?n.render(n,e):e[n.selector]},"table-data-cell-row-".concat(s))))},"table-data-row-".concat(s))))})]})}),p.length>c&&d&&(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(tn,{currentPage:j,pageSize:[b,f],custom:m.pagination,totalData:p.length,paginate:e=>u(e)})}),o&&(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(o,{})})]})}},41596:function(e,n,s){s.d(n,{Z:function(){return i}});var t=s(72791),a=s(54164),o=s(78983),c=s(62092),l=s(80184);function i(e){return new Promise((n=>{let s=document.createElement("div");(0,a.render)((0,l.jsx)(r,{...e,onExit:e=>{(0,a.unmountComponentAtNode)(s),s=null,n(e)}}),s)}))}const r=e=>{const{message:n,show:s,title:a,confirmText:i}={...e},[r,d]=(0,t.useState)(s);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.Tk,{visible:r,onClose:()=>d(!1),className:"d-flex justify-content-center",size:"lg",children:[a&&(0,l.jsx)(o.p0,{onClose:()=>d(!1),children:(0,l.jsx)(o.fl,{style:{color:"#000000",fontSize:"18px"},children:a})}),(0,l.jsxs)(o.sD,{className:"d-flex flex-row align-items-center",style:{fontSize:"14px"},children:[(0,l.jsx)("i",{className:"far fa-question-circle fa-lg me-2",style:{color:"#fd7e14"}}),n]}),a?(0,l.jsxs)(o.Ym,{children:[(0,l.jsx)(c.Z,{color:"secondary",onClick:()=>d(!1),style:{marginRight:"10px"},children:"Cancel"}),(0,l.jsx)(c.Z,{color:"primary",children:i})]}):(0,l.jsxs)("div",{className:"d-flex flex-row-reverse pb-2 pe-3 mt-2",children:[(0,l.jsx)(c.Z,{color:"primary",children:"OK"}),(0,l.jsx)(c.Z,{color:"secondary",onClick:()=>d(!1),style:{marginRight:"10px"},children:"Cancel"})]})]})})}},29711:function(e,n,s){var t=s(72791),a=s(78983),o=s(54164),c=s(62092),l=s(82424),i=s(70278),r=s(80184);const d=(0,l.ZP)(),m=e=>{const{show:n,callback:s}={...e},[o,l]=(0,t.useState)(n),[m,h]=(0,t.useState)(!1),[p,x]=(0,t.useState)([{value:0,label:"Vietnam"},{value:1,label:"Thailand"}]);return(0,t.useEffect)((()=>{o||h(!0)}),[o]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.Tk,{visible:m,onClose:()=>h(!1),children:[(0,r.jsx)(a.p0,{onClose:()=>h(!1),children:(0,r.jsx)(a.fl,{style:{color:"#000000",fontSize:"18px"},children:"Create New POS"})}),(0,r.jsxs)(a.sD,{style:{fontSize:"14px"},children:[(0,r.jsx)(a.L8,{children:"Required Information"}),(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)(a.L8,{children:"Type of POS"}),(0,r.jsx)(i.Z,{closeMenuOnSelect:!0,components:d,options:p,placeholder:"Type of POS"})]}),(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)(a.L8,{children:"Campaign Name"}),(0,r.jsx)(i.Z,{closeMenuOnSelect:!0,components:d,options:p,placeholder:"Select campaign name"})]})]}),(0,r.jsxs)(a.Ym,{children:[(0,r.jsx)(c.Z,{color:"secondary",onClick:()=>h(!1),children:"Cancel"}),(0,r.jsx)(c.Z,{color:"primary",children:"Create"})]})]}),(0,r.jsxs)(a.Tk,{visible:o,onClose:()=>l(!1),size:"lg",children:[(0,r.jsx)(a.p0,{onClose:()=>l(!1),children:(0,r.jsx)(a.fl,{style:{color:"#000000",fontSize:"18px"},children:"Add New Cost"})}),(0,r.jsxs)(a.sD,{children:[(0,r.jsx)(a.L8,{style:{color:"#000000"},children:"Required Information"}),(0,r.jsxs)(a.rb,{children:[(0,r.jsxs)(a.b7,{md:6,children:[(0,r.jsx)(a.L8,{children:"Campaign Name"}),(0,r.jsx)("div",{className:"mb-3",children:(0,r.jsx)(i.Z,{InputcloseMenuOnSelect:!0,components:d,options:p,placeholder:"Campaign Name"})}),(0,r.jsxs)(a.rb,{children:[(0,r.jsxs)(a.b7,{md:6,children:[(0,r.jsx)(a.L8,{children:"Start Date"}),(0,r.jsx)(a.YR,{className:"mb-3",children:(0,r.jsx)(a.jO,{type:"date",id:"start-date",onChange:()=>{},placeholder:"Start date"})})]}),(0,r.jsxs)(a.b7,{md:6,children:[(0,r.jsx)(a.L8,{children:"End Date"}),(0,r.jsx)(a.YR,{className:"mb-3",children:(0,r.jsx)(a.jO,{type:"date",id:"end-date",onChange:()=>{},placeholder:"End date"})})]})]})]}),(0,r.jsxs)(a.b7,{md:6,children:[(0,r.jsx)(a.L8,{children:"Cost Type"}),(0,r.jsx)("div",{className:"mb-3",children:(0,r.jsx)(i.Z,{InputcloseMenuOnSelect:!0,components:d,options:p,placeholder:"Select cost type"})}),(0,r.jsx)(a.L8,{children:"Cost Value"}),(0,r.jsxs)(a.YR,{className:"mb-3",children:[(0,r.jsx)(a.wV,{children:"$"}),(0,r.jsx)(a.jO,{type:"number",min:"0",id:"cost-value",onChange:()=>{},placeholder:"Cost value"})]})]})]}),(0,r.jsx)(a.rb,{children:(0,r.jsxs)(a.b7,{md:12,children:[(0,r.jsx)(a.L8,{children:"Notes"}),(0,r.jsx)(a.YR,{className:"mb-3",children:(0,r.jsx)(a.PB,{id:"note",rows:"4",onChange:()=>{}})})]})})]}),(0,r.jsxs)(a.Ym,{children:[(0,r.jsx)(c.Z,{color:"secondary",onClick:()=>l(!1),children:"Skip"}),(0,r.jsx)(c.Z,{color:"light",children:"Add & Continue"}),(0,r.jsx)(c.Z,{color:"primary",children:"Add & Close"})]})]})]})};n.Z=e=>new Promise((n=>{let s=document.createElement("div");(0,o.render)((0,r.jsx)(m,{...e,onExit:e=>{(0,o.unmountComponentAtNode)(s),s=null,n(e)}}),s)}))},33173:function(e,n,s){var t=s(72791),a=s(78983),o=s(54164),c=s(62092),l=s(82424),i=s(70278),r=s(80184);const d=(0,l.ZP)(),m=e=>{const{show:n,disable:s,callback:o}={...e},[l,m]=(0,t.useState)(n),[h,p]=(0,t.useState)([{label:"One Time",value:"One Time"}]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Tk,{visible:l,onClose:()=>m(!1),size:"lg",children:[(0,r.jsx)(a.p0,{onClose:()=>m(!1),children:(0,r.jsx)(a.fl,{style:{color:"#000000",fontSize:"18px"},children:s?"View Cost":"Update Cost"})}),(0,r.jsxs)(a.sD,{children:[!s&&(0,r.jsx)(a.L8,{style:{color:"#000000"},children:"Required Information"}),(0,r.jsxs)(a.rb,{children:[(0,r.jsxs)(a.b7,{md:6,children:[(0,r.jsx)(a.L8,{children:"Campaign Name"}),(0,r.jsx)(a.YR,{className:"mb-3",children:(0,r.jsx)(a.jO,{type:"text",id:"campaign-name",value:"HUPER",disabled:!0})}),(0,r.jsx)(a.L8,{children:"Date"}),(0,r.jsx)(a.YR,{className:"mb-3",children:(0,r.jsx)(a.jO,{type:"date",id:"date",disabled:!!s,onChange:()=>{}})})]}),(0,r.jsxs)(a.b7,{md:6,children:[(0,r.jsx)(a.L8,{children:"Cost Type"}),(0,r.jsx)("div",{className:"mb-3",children:(0,r.jsx)(i.Z,{InputcloseMenuOnSelect:!0,components:d,defaultValue:h,value:h,isDisabled:!!s})}),(0,r.jsx)(a.L8,{children:"Cost Value"}),(0,r.jsxs)(a.YR,{className:"mb-3",children:[(0,r.jsx)(a.wV,{children:"$"}),(0,r.jsx)(a.jO,{type:"number",id:"cost-value",min:"0",value:"100",disabled:!!s,onChange:()=>{}})]})]})]}),(0,r.jsx)(a.rb,{children:(0,r.jsxs)(a.b7,{md:12,children:[(0,r.jsx)(a.L8,{children:"Notes"}),(0,r.jsx)(a.YR,{className:"mb-3",children:(0,r.jsx)(a.PB,{id:"note",rows:"4",disabled:!!s,onChange:()=>{}})})]})})]}),!s&&(0,r.jsxs)(a.Ym,{children:[(0,r.jsx)(c.Z,{color:"secondary",onClick:()=>m(!1),children:"Cancel"}),(0,r.jsx)(c.Z,{color:"light",children:"Update & Continue"}),(0,r.jsx)(c.Z,{color:"primary",children:"Update & Close"})]})]})})};n.Z=e=>new Promise((n=>{let s=document.createElement("div");(0,o.render)((0,r.jsx)(m,{...e,onExit:e=>{(0,o.unmountComponentAtNode)(s),s=null,n(e)}}),s)}))}}]);
//# sourceMappingURL=6224.9822545b.chunk.js.map