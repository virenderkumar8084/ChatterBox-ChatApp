import{j as e,r as C,u as U,S as F,V,_ as o,a as I,s as S,b as L}from"./index-dRst-7iy.js";import{i as q,u as x,a as A}from"./index-WJTt8NRO.js";import{C as D}from"./Container-YA2OyvgQ.js";import{P as k}from"./Modal-HVwfm5_O.js";import{c as B,T as i}from"./Typography-CDGuFNvf.js";import{T as l}from"./TextField-zR2u7fcs.js";import{B as v}from"./Button-ymTN7-ia.js";import{A as P}from"./Avatar-CUFCW8-T.js";import{I as E}from"./IconButton-Cd5V1Ggt.js";import"./isMuiElement-Cx3b-8fr.js";import"./Menu-DXxMw8cN.js";const M=B([e.jsx("circle",{cx:"12",cy:"12",r:"3.2"},"0"),e.jsx("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},"1")],"CameraAlt"),O=f=>{if(!q(f))return{isValid:!1,errorMessage:"Username is Invalid"}},Z=()=>{const[f,W]=C.useState(!0),y=()=>W(c=>!c),[g,p]=C.useState(!1),j=x(""),b=x(""),r=x("",O),n=x(""),d=A(),w=U(),H=async c=>{var h,m;c.preventDefault();const u=o.loading("Logging In....");p(!0);const t={withCredentials:!0,headers:{"Content-Type":"application/json"}};try{const{data:a}=await I.post(`${S}/api/v1/user/login`,{username:r.value,password:n.value},t);w(L(a.user)),o.success(a.message,{id:u})}catch(a){o.error(((m=(h=a==null?void 0:a.response)==null?void 0:h.data)==null?void 0:m.message)||"Something went wrong",{id:u})}finally{p(!1)}},T=async c=>{var m,a;c.preventDefault();const u=o.loading("Sign up in processing...");p(!0);const t=new FormData,h={withCredentials:!0,headers:{"Content-Type":"multipart/form-data"}};t.append("avatar",d.file),t.append("name",j.value),t.append("bio",b.value),t.append("username",r.value),t.append("password",n.value);try{const{data:s}=await I.post(`${S}/api/v1/user/new`,t,h);w(L(s.user)),o.success(s.message,{id:u})}catch(s){o.error(((a=(m=s==null?void 0:s.response)==null?void 0:m.data)==null?void 0:a.message)||"Something went wrong",{id:u})}finally{p(!1)}};return e.jsx("div",{style:{backgroundImage:"linear-gradient(rgba(255, 255, 209), rgba(249, 159, 159))"},children:e.jsx(D,{component:"main",maxWidth:"xs",sx:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(k,{elevation:3,sx:{padding:4,display:"flex",flexDirection:"column",alignItems:"center"},children:f?e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"h5",children:"Login"}),e.jsxs("form",{style:{width:"100%",marginTop:"1rem"},onSubmit:H,children:[e.jsx(l,{required:!0,fullWidth:!0,label:"Username",margin:"normal",variant:"outlined",value:r.value,onChange:r.changeHandler}),e.jsx(l,{required:!0,fullWidth:!0,label:"Password",margin:"normal",variant:"outlined",type:"password",value:n.value,onChange:n.changeHandler}),e.jsx(v,{sx:{marginTop:"1rem"},variant:"contained",color:"primary",type:"submit",fullWidth:!0,disabled:g,children:"Login"}),e.jsx(i,{textAlign:"center",m:"1rem",children:"Or"}),e.jsx(v,{sx:{},variant:"text",onClick:y,fullWidth:!0,disabled:g,children:"Sign Up"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"h5",children:"Sign Up"}),e.jsxs("form",{style:{width:"100%",marginTop:"1rem"},onSubmit:T,children:[e.jsxs(F,{position:"relative",width:"10rem",margin:"auto",children:[e.jsx(P,{sx:{width:"10rem",height:"10rem",objectFit:"contain"},src:d.preview}),e.jsx(E,{sx:{position:"absolute",bottom:"0",right:"0",color:"white",bgcolor:"rgba(0, 0, 0, 0.5)",":hover":{bgcolor:"rgba(0, 0, 0, 0.7)"}},component:"label",children:e.jsxs(e.Fragment,{children:[e.jsx(M,{}),e.jsx(V,{type:"file",onChange:d.changeHandler})]})})]}),d.error&&e.jsx(i,{color:"error",m:"1rem auto",width:"fit-content",display:"block",variant:"caption",children:d.error}),e.jsx(l,{required:!0,fullWidth:!0,label:"Name",margin:"normal",variant:"outlined",value:j.value,onChange:j.changeHandler}),e.jsx(l,{required:!0,fullWidth:!0,label:"Username",margin:"normal",variant:"outlined",value:r.value,onChange:r.changeHandler}),r.error&&e.jsx(i,{color:"error",variant:"caption",children:r.error}),e.jsx(l,{required:!0,fullWidth:!0,label:"Password",margin:"normal",variant:"outlined",type:"password",value:n.value,onChange:n.changeHandler}),n.error&&e.jsx(i,{color:"error",variant:"caption",children:n.error}),e.jsx(l,{required:!0,fullWidth:!0,label:"Bio",margin:"normal",variant:"outlined",value:b.value,onChange:b.changeHandler}),e.jsx(v,{sx:{marginTop:"1rem"},variant:"contained",color:"primary",type:"submit",fullWidth:!0,disabled:g,children:"Sign Up"}),e.jsx(i,{textAlign:"center",m:"1rem",children:"Or"}),e.jsx(v,{sx:{},variant:"text",onClick:y,fullWidth:!0,disabled:g,children:"Login Instead"})]})]})})})})};export{Z as default};
