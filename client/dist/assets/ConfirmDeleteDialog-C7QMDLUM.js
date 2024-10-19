import{y as d,z as p,B as g,r as u,F as x,j as n,G as C,H as m,E as f,av as v}from"./index-dRst-7iy.js";import{d as y,D as T,a as j}from"./DialogTitle-Bw4QftuY.js";import{T as w}from"./Typography-CDGuFNvf.js";import{B as D}from"./Button-ymTN7-ia.js";import"./Modal-HVwfm5_O.js";import"./Menu-DXxMw8cN.js";function R(o){return d("MuiDialogActions",o)}p("MuiDialogActions",["root","spacing"]);const h=o=>{const{classes:t,disableSpacing:s}=o;return m({root:["root",!s&&"spacing"]},R,t)},M=g("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,!s.disableSpacing&&t.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:({ownerState:o})=>!o.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),S=u.forwardRef(function(t,s){const e=x({props:t,name:"MuiDialogActions"}),{className:l,disableSpacing:a=!1,...r}=e,i={...e,disableSpacing:a},c=h(i);return n.jsx(M,{className:C(c.root,l),ownerState:i,ref:s,...r})});function A(o){return d("MuiDialogContent",o)}p("MuiDialogContent",["root","dividers"]);const b=o=>{const{classes:t,dividers:s}=o;return m({root:["root",s&&"dividers"]},A,t)},U=g("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,s.dividers&&t.dividers]}})(f(({theme:o})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:t})=>t.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}},{props:({ownerState:t})=>!t.dividers,style:{[`.${y.root} + &`]:{paddingTop:0}}}]}))),N=u.forwardRef(function(t,s){const e=x({props:t,name:"MuiDialogContent"}),{className:l,dividers:a=!1,...r}=e,i={...e,dividers:a},c=b(i);return n.jsx(U,{className:C(c.root,l),ownerState:i,ref:s,...r})});function $(o){return d("MuiDialogContentText",o)}p("MuiDialogContentText",["root"]);const B=o=>{const{classes:t}=o,e=m({root:["root"]},$,t);return{...t,...e}},k=g(w,{shouldForwardProp:o=>v(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,t)=>t.root})({}),E=u.forwardRef(function(t,s){const e=x({props:t,name:"MuiDialogContentText"}),{children:l,className:a,...r}=e,i=B(r);return n.jsx(k,{component:"p",variant:"body1",color:"textSecondary",ref:s,ownerState:r,className:C(i.root,a),...e,classes:i})}),I=({open:o,handleClose:t,deleteHandler:s})=>n.jsxs(T,{open:o,onClose:t,children:[n.jsx(j,{children:"Confirm Delete"}),n.jsx(N,{children:n.jsx(E,{children:"Are you sure want to delete the group?"})}),n.jsxs(S,{children:[n.jsx(D,{onClick:t,children:"No"}),n.jsx(D,{onClick:s,color:"error",children:"Yes"})]})]});export{I as default};
