import{y as R,z as w,aw as P,ax as S,B as h,D as n,E as $,r as j,F as E,j as f,G as N,H as U}from"./index-dRst-7iy.js";function z(e){return R("MuiCircularProgress",e)}w("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const t=44,g=P`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,y=P`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,F=typeof g!="string"?S`
        animation: ${g} 1.4s linear infinite;
      `:null,I=typeof y!="string"?S`
        animation: ${y} 1.4s ease-in-out infinite;
      `:null,A=e=>{const{classes:r,variant:s,color:a,disableShrink:c}=e,l={root:["root",s,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(s)}`,c&&"circleDisableShrink"]};return U(l,z,r)},B=h("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${n(s.color)}`]]}})($(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:F||{animation:`${g} 1.4s linear infinite`}},...Object.entries(e.palette).filter(([,r])=>r&&r.main).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))]}))),G=h("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),K=h("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${n(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})($(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink,style:I||{animation:`${y} 1.4s ease-in-out infinite`}}]}))),O=j.forwardRef(function(r,s){const a=E({props:r,name:"MuiCircularProgress"}),{className:c,color:l="primary",disableShrink:b=!1,size:p=40,style:D,thickness:i=3.6,value:m=0,variant:v="indeterminate",...M}=a,o={...a,color:l,disableShrink:b,size:p,thickness:i,value:m,variant:v},d=A(o),u={},k={},x={};if(v==="determinate"){const C=2*Math.PI*((t-i)/2);u.strokeDasharray=C.toFixed(3),x["aria-valuenow"]=Math.round(m),u.strokeDashoffset=`${((100-m)/100*C).toFixed(3)}px`,k.transform="rotate(-90deg)"}return f.jsx(B,{className:N(d.root,c),style:{width:p,height:p,...k,...D},ownerState:o,ref:s,role:"progressbar",...x,...M,children:f.jsx(G,{className:d.svg,ownerState:o,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:f.jsx(K,{className:d.circle,style:u,ownerState:o,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})})});export{O as C};
