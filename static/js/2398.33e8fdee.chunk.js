"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2398],{62398:function(e,s,a){a.r(s);var n,i,t,r=a(30168),l=a(72791),c=a(78983),o=a(62092),d=a(50916),m=a(44313),p=a(79271),h=a(28613),u=a(80184);const x=m.ZP.div(n||(n=(0,r.Z)(["\n  display: flex;\n  width: 25%;\n  margin-bottom: 16px;\n  justify-content: center;\n\n  @media only screen and (max-width: 992px) {\n    width: 270px;\n  }\n"]))),f=(0,m.ZP)(c.lx)(i||(i=(0,r.Z)(["\n  width: 25%;\n\n  @media only screen and (max-width: 992px) {\n    width: 270px;\n  }\n"]))),g=m.ZP.a(t||(t=(0,r.Z)(["\n  color: ",";\n  text-decoration: none;\n  font-size: 14px;\n  cursor: pointer;\n\n  &:hover {\n    color: #0056b3;\n  }\n"])),(e=>e.flag?"#1D8DD4":"#212529"));s.default=()=>{const[e,s]=(0,l.useState)(!1),[a,n]=(0,l.useState)({code:null,message:null}),[i,t]=(0,l.useState)({email:"",password:"",keep:!1}),r=(0,p.k6)(),{signIn:m,user:v}=(0,h.aC)();(0,l.useEffect)((()=>{v&&r.push("/agency-subscription")}),[]);return(0,u.jsxs)("div",{className:"min-vh-100 d-flex flex-column align-items-center w-100 justify-content-center",children:[(0,u.jsx)(x,{children:(0,u.jsx)("img",{src:d.Z,alt:"Maralytics Logo Horizontal transparent BG",className:"w-100",style:{cursor:"pointer"},onClick:e=>{window.open("https://maralytics.com/","__blank")}})}),(0,u.jsxs)(f,{onSubmit:async e=>{e.preventDefault(),s(!0);const a=await m(i.email,i.password,i.keep);r.push("/agency-subscription"),""===a.email||""===a.password?n({code:500,message:"Signed in Failure"}):n({code:200,message:"Signed in Successfully! Please wait for redirection..."}),s(!1)},children:[(0,u.jsx)("div",{className:"text-center",style:{fontSize:"14px"},children:(0,u.jsx)("p",{className:"".concat(200===(null===a||void 0===a?void 0:a.code)?"text-primary":"text-danger"),children:a.message})}),(0,u.jsx)("div",{className:"mb-3",children:(0,u.jsx)(c.jO,{type:"email",id:"email",placeholder:"Email Address",size:"sm",value:null===i||void 0===i?void 0:i.email,onChange:e=>{t({...i,email:e.target.value})}})}),(0,u.jsx)("div",{className:"mb-3",children:(0,u.jsx)(c.jO,{type:"password",id:"password",placeholder:"Password",size:"sm",value:null===i||void 0===i?void 0:i.password,onChange:e=>{t({...i,password:e.target.value})}})}),(0,u.jsx)("div",{className:"mb-3",style:{fontSize:"14px"},children:(0,u.jsx)(c.EC,{id:"check",label:"Keep me signed in",onChange:e=>{t({...i,keep:e.target.checked})}})}),(0,u.jsx)("div",{className:"mb-3",children:(0,u.jsx)(o.Z,{color:"primary",className:"w-100",style:{fontSize:"14px"},type:"submit",children:"SIGN IN"})}),(0,u.jsx)("div",{className:"text-center",children:(0,u.jsx)(g,{target:"__blank",href:"/forgot-password",flag:!0,children:"Forgot Password?"})})]}),(0,u.jsxs)("div",{className:"w-100 text-center py-4",children:[(0,u.jsx)(g,{target:"__blank",href:"https://maralytics.com/terms-of-service/",children:"Term of Service"})," | ",(0,u.jsx)(g,{target:"__blank",href:"https://maralytics.com/privacy-policy/",children:"Privacy Policy"})]})]})}}}]);
//# sourceMappingURL=2398.33e8fdee.chunk.js.map