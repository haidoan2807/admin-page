"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1608],{42067:function(e,a,s){var l=s(72791),n=s(78983),t=s(54164),c=s(62092),i=s(82424),r=s(70278),o=s(80184);const d=(0,i.ZP)(),m=e=>{const{show:a}={...e},[s,t]=(0,l.useState)(a),[i,m]=(0,l.useState)([{value:0,label:"Vietnam"},{value:1,label:"Thailand"}]);return(0,o.jsxs)(n.Tk,{visible:s,onClose:()=>t(!1),size:"lg",children:[(0,o.jsx)(n.p0,{onClose:()=>t(!1),children:(0,o.jsx)(n.fl,{style:{color:"#000000",fontSize:"18px"},children:"Add New Sales Value"})}),(0,o.jsxs)(n.sD,{children:[(0,o.jsx)(n.L8,{style:{color:"#000000"},children:"Required Information"}),(0,o.jsxs)(n.rb,{children:[(0,o.jsxs)(n.b7,{md:6,children:[(0,o.jsx)(n.L8,{children:"Campaign Name"}),(0,o.jsx)("div",{className:"mb-3",children:(0,o.jsx)(r.Z,{InputcloseMenuOnSelect:!0,components:d,options:i,placeholder:"Campaign Name"})}),(0,o.jsx)(n.L8,{children:"Campaign Type"}),(0,o.jsx)("div",{className:"mb-3",children:(0,o.jsx)(r.Z,{InputcloseMenuOnSelect:!0,components:d,options:i,placeholder:"Campaign Type"})}),(0,o.jsx)(n.L8,{children:"Number of customers"}),(0,o.jsx)(n.YR,{className:"mb-3",children:(0,o.jsx)(n.jO,{type:"number",id:"number",min:"0",onChange:()=>{},placeholder:"Number of customers"})})]}),(0,o.jsxs)(n.b7,{md:6,children:[(0,o.jsx)(n.L8,{children:"Sales Date"}),(0,o.jsx)(n.YR,{className:"mb-3",children:(0,o.jsx)(n.jO,{type:"date",id:"sale-date",onChange:()=>{},placeholder:"Sales date"})}),(0,o.jsx)(n.L8,{children:"Sales Value"}),(0,o.jsxs)(n.YR,{className:"mb-3",children:[(0,o.jsx)(n.wV,{children:"$"}),(0,o.jsx)(n.jO,{type:"number",min:"0",id:"sale-date",onChange:()=>{},placeholder:"Sales value"})]}),(0,o.jsx)(n.L8,{children:"Notes"}),(0,o.jsx)(n.YR,{className:"mb-3",children:(0,o.jsx)(n.PB,{id:"note",rows:"1",onChange:()=>{},placeholder:"Notes"})})]})]})]}),(0,o.jsxs)(n.Ym,{children:[(0,o.jsx)(c.Z,{color:"secondary",onClick:()=>t(!1),children:"Cancel"}),(0,o.jsx)(c.Z,{color:"light",children:"Add & Continue"}),(0,o.jsx)(c.Z,{color:"primary",children:"Add & Close"})]})]})};a.Z=e=>new Promise((a=>{let s=document.createElement("div");(0,t.render)((0,o.jsx)(m,{...e,onExit:e=>{(0,t.unmountComponentAtNode)(s),s=null,a(e)}}),s)}))},31608:function(e,a,s){s.r(a),s.d(a,{default:function(){return R}});var l=s(72791),n=s(78983),t=s(62092),c=s(92707),i=s(41596),r=s(79271),o=s(74480),d=s(91957);var m=s.p+"static/media/dollar.66b6eaee4eabb8f90709f53b39864bbd.svg",h=s(73968),x=s(30168),p=s(54483),u=s(11632),j=s(54164),b=s(82424),g=s(70278),y=s(80184);(0,b.ZP)();s(42067);var v,C,f,S=s(44313);const _=S.ZP.div(v||(v=(0,x.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 11px;\n\n  @media only screen and (max-width: 1200px) {\n    flex-direction: column;\n  }\n"]))),N=S.ZP.div(C||(C=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),Z=S.ZP.div(f||(f=(0,x.Z)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"]))),k=(0,b.ZP)();var w=()=>{const[e,a]=(0,l.useState)(!0),[s,c]=(0,l.useState)(!1),[i,r]=(0,l.useState)({campaignSearchText:"",campaignSearch:[],campaignTypes:[],status:null}),[o,d]=(0,l.useState)([]),[m,h]=(0,l.useState)([]),[x,j]=(0,l.useState)([{label:"All",value:""},{label:"Active",value:"Active"},{label:"Inactive",value:"Inactive"}]),[b,v]=(0,l.useState)([{label:"Name",value:"name"},{label:"Type",value:"campaign_type.name"},{label:"Start Date",value:"start_date"},{label:"Total Sales",value:"total_sale"},{label:"Total Customers",value:"total_customer"},{label:"Total Cost",value:"total_cost"},{label:"Total Profit",value:"campaign_roi"},{label:"ROI%",value:"roi_percent"},{label:"Status",value:"status"}]),[C,f]=(0,l.useState)([{label:"Name",value:"name"},{label:"Type",value:"campaign_type.name"},{label:"Start Date",value:"start_date",type:"dateTime"},{label:"Total Sales",value:"total_sale",type:"currency"},{label:"Total Customers",value:"total_customer",type:"number"},{label:"Total Cost",value:"total_cost",type:"currency"},{label:"Total Profit",value:"campaign_roi",type:"number"},{label:"ROI%",value:"roi_percent",type:"percent"},{label:"Status",value:"status"}]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(Z,{className:"mb-3",children:[(0,y.jsxs)(t.Z,{color:"secondary",style:{borderStyle:"none"},onClick:()=>{a(!e),c(!1)},children:[(0,y.jsx)(p.G,{icon:u.G_j})," Filter"]}),(0,y.jsxs)(t.Z,{color:"secondary",onClick:()=>{c(!s),a(!1)},style:{marginLeft:"5px",borderStyle:"none"},children:[(0,y.jsx)(p.G,{icon:u.rWw})," Columns"]})]}),(0,y.jsxs)(n.V9,{visible:e,className:"mb-3",children:[(0,y.jsxs)(_,{children:[(0,y.jsx)(N,{children:(0,y.jsxs)(n.YR,{children:[(0,y.jsx)(n.jO,{type:"text",placeholder:"Search by username or email",style:{fontSize:"14px"}}),(0,y.jsx)(n.u5,{type:"button",color:"secondary",variant:"outline",id:"search",children:(0,y.jsx)(p.G,{icon:u.wn1})})]})}),(0,y.jsx)(N,{children:(0,y.jsx)(g.Z,{value:i.campaignSearch,isMulti:!0,closeMenuOnSelect:!1,components:k,options:m,inputId:"select_campaigns",instanceId:"select_campaigns",placeholder:"Select campaign name",onChange:e=>{r({...i,campaignSearch:e})}})}),(0,y.jsx)(N,{children:(0,y.jsx)(g.Z,{value:i.campaignTypes,isMulti:!0,closeMenuOnSelect:!1,components:k,options:o,inputId:"select_campaign_type_input",instanceId:"select_campaign_type_instant",placeholder:"Select campaign type",onChange:e=>{r({...i,campaignTypes:e})}})}),(0,y.jsxs)(Z,{children:[(0,y.jsx)(t.Z,{color:"primary",children:"Apply"}),(0,y.jsx)(t.Z,{color:"main",style:{marginLeft:"5px"},children:"Reset"})]})]}),(0,y.jsx)("div",{className:"mt-3",children:(0,y.jsx)("span",{children:"Summary: This list shows all Active/Inactive campaigns."})})]}),(0,y.jsxs)(n.V9,{visible:s,className:"mb-3",children:[(0,y.jsx)(g.Z,{isMulti:!0,closeMenuOnSelect:!1,options:b,defaultValue:b,value:C,inputId:"select_campaign_type_input",instanceId:"select_campaign_type_instant",onChange:e=>{0!=e.length?f(e):f(C)}}),(0,y.jsx)("div",{className:"text-end mt-2",children:(0,y.jsx)(t.Z,{color:"primary",onClick:()=>f(b),children:"Clear"})})]}),(0,y.jsxs)("div",{className:"d-flex flex-row w-100 justify-content-between mb-2",children:[(0,y.jsx)("div",{children:(0,y.jsx)(t.Z,{color:"secondary",children:(0,y.jsx)(p.G,{icon:u.d8e})})}),(0,y.jsxs)("div",{className:"d-flex flex-row gap-2",children:[(0,y.jsxs)(n.Z0,{role:"group",color:"primary",children:[(0,y.jsxs)(t.Z,{color:"primary",children:[(0,y.jsx)(p.G,{icon:u.gSj,className:"me-1"}),"Export PDF"]}),(0,y.jsxs)(n.w5,{variant:"btn-group",children:[(0,y.jsx)(n.SQ,{style:{backgroundColor:"#1A428A"}}),(0,y.jsx)(n.$H,{children:(0,y.jsx)(n.$f,{onClick:()=>{},children:"Download now"})})]})]}),(0,y.jsxs)(n.Z0,{role:"group",color:"primary",children:[(0,y.jsxs)(t.Z,{color:"primary",children:[(0,y.jsx)(p.G,{icon:u.fUD,className:"me-1"}),"Export CSV"]}),(0,y.jsxs)(n.w5,{variant:"btn-group",children:[(0,y.jsx)(n.SQ,{style:{backgroundColor:"#1A428A"}}),(0,y.jsx)(n.$H,{children:(0,y.jsx)(n.$f,{onClick:()=>{},children:"Download now"})})]})]})]})]})]})};const T=(0,b.ZP)(),I=e=>{const{show:a}={...e},[s,c]=(0,l.useState)(a),[i,r]=(0,l.useState)([{value:0,label:"Vietnam"},{value:1,label:"Thailand"}]),[o,d]=(0,l.useState)({campaign_name:"HUPER",campaign_type:"10% discount",start_date:"Feb 01 2022",end_date:"Jan 07 2023"});return(0,y.jsxs)(n.Tk,{visible:s,onClose:()=>c(!1),size:"lg",children:[(0,y.jsx)(n.p0,{onClose:()=>c(!1),children:(0,y.jsx)(n.fl,{style:{color:"#000000",fontSize:"18px"},children:"Edit Campaign"})}),(0,y.jsxs)(n.sD,{children:[(0,y.jsx)(n.L8,{style:{color:"#000000"},children:"Required Information"}),(0,y.jsxs)(n.rb,{children:[(0,y.jsxs)(n.b7,{md:6,children:[(0,y.jsx)(n.L8,{children:"Campaign Name"}),(0,y.jsx)(n.YR,{className:"mb-3",children:(0,y.jsx)(n.jO,{type:"text",id:"campaign-name",placeholder:"Campaign Name",onChange:()=>{},value:o.campaign_name})}),(0,y.jsx)(n.L8,{children:"Campaign Type"}),(0,y.jsx)("div",{style:{marginBottom:"15px"},children:(0,y.jsx)(g.Z,{InputcloseMenuOnSelect:!0,components:T,options:i,placeholder:"Campaign Type",defaultValue:i[0]})}),(0,y.jsxs)(n.rb,{className:"mb-3",children:[(0,y.jsxs)(n.b7,{md:6,children:[(0,y.jsx)(n.L8,{children:"Start Date"}),(0,y.jsx)(n.YR,{children:(0,y.jsx)(n.jO,{type:"date",id:"start-date",onChange:()=>{},value:o.start_date})})]}),(0,y.jsxs)(n.b7,{md:6,children:[(0,y.jsx)(n.L8,{children:"End Date"}),(0,y.jsx)(n.YR,{children:(0,y.jsx)(n.jO,{type:"date",id:"end-date",onChange:()=>{},value:o.end_date})})]})]}),(0,y.jsxs)("div",{className:"d-flex flex-row mb-3",children:[(0,y.jsx)(n.EC,{type:"radio",name:"checkRadio",id:"checkActive",label:"Active",defaultChecked:!0,className:"me-5",onChange:()=>{}}),(0,y.jsx)(n.EC,{type:"radio",name:"checkRadio",id:"checkInactive",label:"Inactive",onChange:()=>{}})]}),(0,y.jsx)(n.EC,{id:"enable",className:"mb-3",label:"Enable change campaign status manually",onChange:()=>{}})]}),(0,y.jsxs)(n.b7,{md:6,children:[(0,y.jsx)(n.L8,{className:"mb-0",children:"Notes"}),(0,y.jsx)("p",{className:"fst-italic",children:"You can add some notes for your campaign to retain a history of the details or special requirements."}),(0,y.jsx)(n.YR,{className:"mb-3",children:(0,y.jsx)(n.PB,{id:"note",rows:"7",onChange:()=>{}})})]})]}),(0,y.jsx)(n.rb,{children:(0,y.jsxs)(n.b7,{md:12,children:[(0,y.jsx)("span",{className:"fw-bold",children:"Tip:"}),(0,y.jsx)("br",{}),(0,y.jsxs)("span",{children:["If you check 'Enable change campaign status manually', you must change the status of the",(0,y.jsx)("br",{})," campaign manually."]}),(0,y.jsx)("br",{}),(0,y.jsx)("span",{children:"If you do not check, the system shall change the status of the campaign automatically"}),(0,y.jsx)("br",{}),(0,y.jsx)("span",{children:"(base on the campaign's start date and end date)"})]})})]}),(0,y.jsxs)(n.Ym,{children:[(0,y.jsx)(t.Z,{color:"secondary",onClick:()=>c(!1),children:"Close"}),(0,y.jsx)(t.Z,{color:"primary",children:"Create"})]})]})};var A=e=>new Promise((a=>{let s=document.createElement("div");(0,j.render)((0,y.jsx)(I,{...e,onExit:e=>{(0,j.unmountComponentAtNode)(s),s=null,a(e)}}),s)}));var R=()=>{const e=l.lazy((()=>Promise.resolve().then(s.bind(s,29801)))),a=(0,r.k6)(),[x,p]=(0,l.useState)([]),u=e=>{const{id:a,checked:s}=e.target;b("all-selected"===a?e=>e.map((e=>({...e,isChecked:s}))):e=>e.map((e=>e.id===a?{...e,isChecked:s}:e))),p((e=>{if("all-selected"===a)return e.length!==j.length?j.map((e=>e.id)):[];{let s=[...e,a];return e.includes(a)&&(s=s.filter((e=>e!==a))),s}}))},[j,b]=(0,l.useState)([{id:"1",name:"Miriam Van Heusden1",type:(0,y.jsx)("span",{className:"d-inline-block text-truncate",style:{maxWidth:"80px"},children:"Buy one get one"}),"start-date":"Mar  2022","total-sales":"$0.00","total-customers":0,"total-cost":"$0.00",campaigns:9,"total-profit":"$0.00",roi:"0.00%",status:!0},{id:"2",name:"Airiam Van Heusden2",type:(0,y.jsx)("span",{className:"d-inline-block text-truncate",style:{maxWidth:"80px"},children:"Mid one get one"}),"start-date":"Mar  2022","total-sales":"$0.00","total-customers":0,"total-cost":"$0.00",campaigns:10,"total-profit":"$0.00",roi:"0.00%",status:!1}]),g=[{name:(0,y.jsx)("div",{className:"text-center w-100",children:(0,y.jsx)(n.EC,{type:"checkbox",id:"all-selected",checked:j.filter((e=>!0!==(null===e||void 0===e?void 0:e.isChecked))).length<1,onChange:u})}),selector:"checkbox",className:" align-center-col-name",render:(e,a)=>(0,y.jsx)("div",{className:"text-center",children:(0,y.jsx)(n.EC,{type:"checkbox",id:a.id,checked:(null===a||void 0===a?void 0:a.isChecked)||!1,onChange:u})})},{name:"Name",selector:"name",sortable:!0},{name:"Type",selector:"type",sortable:!0},{name:"Start Date",selector:"start-date",sortable:!0},{name:"Total Sales",selector:"total-sales",sortable:!0},{name:"Total Cost",selector:"total-cost",sortable:!0},{name:"Total Profit",selector:"total-profit",sortable:!0},{name:"ROI%",selector:"roi",sortable:!0},{name:"Campaigns",selector:"campaigns",sortable:!0},{name:"Status",selector:"status",sortable:!0,render:(e,a)=>a.status?(0,y.jsx)(n.u5,{color:"success",size:"sm",children:"Active"}):(0,y.jsx)(n.u5,{color:"danger",size:"sm",children:"Expired"})},{name:(0,y.jsx)("div",{className:"text-center w-100",children:"Action"}),selector:"action",render:(e,s)=>(0,y.jsxs)("div",{className:"d-flex flex-row justify-content-center",children:[(0,y.jsx)(t.Z,{color:"main",onClick:()=>{return e=s.id,void a.push({pathname:"/campaign/detail",state:{id:e}});var e},children:(0,y.jsx)("img",{src:h.Z})}),(0,y.jsx)(t.Z,{color:"main",onClick:()=>A({show:!0}),children:(0,y.jsx)("img",{src:d.Z})}),(0,y.jsx)(t.Z,{color:"main",onClick:()=>{return e=s.id,void a.push({pathname:"/campaign/campaign-cost",state:{id:e}});var e},children:(0,y.jsx)("img",{src:m})}),(0,y.jsx)(t.Z,{color:"main",onClick:()=>(0,i.Z)({show:!0,message:(0,y.jsxs)("span",{children:["Do you want to delete this campaign: ",s.name,"?"]}),title:"Confirm delete",confirmText:"Delete"}),children:(0,y.jsx)("img",{src:o.Z})})]})}];return(0,y.jsx)(c.Gi,{data:j,columns:g,Header:()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(w,{}),(0,y.jsx)(e,{selectedRows:x.length})]})})}}}]);
//# sourceMappingURL=1608.54a76d5b.chunk.js.map