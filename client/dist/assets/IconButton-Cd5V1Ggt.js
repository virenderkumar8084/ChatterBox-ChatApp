import{z,y as R,B as m,D as e,E as u,au as g,r as C,F as B,j as x,G as I,H as $}from"./index-dRst-7iy.js";import{c as S}from"./Modal-HVwfm5_O.js";function k(o){return R("MuiIconButton",o)}const O=z("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),j=o=>{const{classes:a,disabled:t,color:s,edge:r,size:n}=o,i={root:["root",t&&"disabled",s!=="default"&&`color${e(s)}`,r&&`edge${e(r)}`,`size${e(n)}`]};return $(i,k,a)},E=m(S,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.root,t.color!=="default"&&a[`color${e(t.color)}`],t.edge&&a[`edge${e(t.edge)}`],a[`size${e(t.size)}`]]}})(u(({theme:o})=>({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest}),variants:[{props:{disableRipple:!1},style:{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:g(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),u(({theme:o})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(o.palette).filter(([,a])=>a&&a.main).map(([a])=>({props:{color:a},style:{color:(o.vars||o).palette[a].main}})),...Object.entries(o.palette).filter(([,a])=>a&&a.main).map(([a])=>({props:{color:a,disableRipple:!1},style:{"&:hover":{backgroundColor:o.vars?`rgba(${(o.vars||o).palette[a].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:g((o.vars||o).palette[a].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}})),{props:{size:"small"},style:{padding:5,fontSize:o.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:o.typography.pxToRem(28)}}],[`&.${O.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}}))),U=C.forwardRef(function(a,t){const s=B({props:a,name:"MuiIconButton"}),{edge:r=!1,children:n,className:i,color:f="default",disabled:l=!1,disableFocusRipple:c=!1,disableRipple:p=!1,size:y="medium",...v}=s,d={...s,edge:r,color:f,disabled:l,disableFocusRipple:c,disableRipple:p,size:y},b=j(d);return x.jsx(E,{className:I(b.root,i),centerRipple:!0,focusRipple:!c,disabled:l,disableRipple:p,ref:t,...v,ownerState:d,children:n})});export{U as I};
