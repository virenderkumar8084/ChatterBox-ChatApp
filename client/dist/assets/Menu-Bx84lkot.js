import{aM as K,aN as Z,r as u,aO as tt,aP as et,j as v,G as M,z as Y,aQ as rt,aR as nt,aS as ot,aJ as O,y as at,B as L,E as W,av as st,D as z,F as it,H as ct,_ as B}from"./index-dRst-7iy.js";import{b as lt,g as pt,q as X,k as dt,t as ut,l as ft,n as F,M as ht,P as mt,d as gt}from"./Modal-HVwfm5_O.js";import{c as xt}from"./Typography-CDGuFNvf.js";function vt(e={}){const{themeId:t,defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:a}=e,m=K("div",{shouldForwardProp:l=>l!=="theme"&&l!=="sx"&&l!=="as"})(Z);return u.forwardRef(function(p,s){const i=tt(n),{className:g,component:c="div",...E}=et(p);return v.jsx(m,{as:c,ref:s,className:M(g,a?a(r):r),theme:t&&i[t]||i,...E})})}const wt=Y("MuiBox",["root"]),yt=rt(),Nt=vt({themeId:nt,defaultTheme:yt,defaultClassName:wt.root,generateClassName:ot.generate});function Et(e,t,n){const r=t.getBoundingClientRect(),a=n&&n.getBoundingClientRect(),m=X(t);let f;if(t.fakeTransform)f=t.fakeTransform;else{const s=m.getComputedStyle(t);f=s.getPropertyValue("-webkit-transform")||s.getPropertyValue("transform")}let l=0,p=0;if(f&&f!=="none"&&typeof f=="string"){const s=f.split("(")[1].split(")")[0].split(",");l=parseInt(s[4],10),p=parseInt(s[5],10)}return e==="left"?a?`translateX(${a.right+l-r.left}px)`:`translateX(${m.innerWidth+l-r.left}px)`:e==="right"?a?`translateX(-${r.right-a.left-l}px)`:`translateX(-${r.left+r.width-l}px)`:e==="up"?a?`translateY(${a.bottom+p-r.top}px)`:`translateY(${m.innerHeight+p-r.top}px)`:a?`translateY(-${r.top-a.top+r.height-p}px)`:`translateY(-${r.top+r.height-p}px)`}function kt(e){return typeof e=="function"?e():e}function N(e,t,n){const r=kt(n),a=Et(e,t,r);a&&(t.style.webkitTransform=a,t.style.transform=a)}const Dt=u.forwardRef(function(t,n){const r=O(),a={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},m={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:f,appear:l=!0,children:p,container:s,direction:i="down",easing:g=a,in:c,onEnter:E,onEntered:A,onEntering:C,onExit:k,onExited:T,onExiting:I,style:b,timeout:D=m,TransitionComponent:R=dt,...P}=t,h=u.useRef(null),j=lt(pt(p),h,n),w=o=>d=>{o&&(d===void 0?o(h.current):o(h.current,d))},y=w((o,d)=>{N(i,o,s),ft(o),E&&E(o,d)}),x=w((o,d)=>{const V=F({timeout:D,style:b,easing:g},{mode:"enter"});o.style.webkitTransition=r.transitions.create("-webkit-transform",{...V}),o.style.transition=r.transitions.create("transform",{...V}),o.style.webkitTransform="none",o.style.transform="none",C&&C(o,d)}),S=w(A),$=w(I),G=w(o=>{const d=F({timeout:D,style:b,easing:g},{mode:"exit"});o.style.webkitTransition=r.transitions.create("-webkit-transform",d),o.style.transition=r.transitions.create("transform",d),N(i,o,s),k&&k(o)}),J=w(o=>{o.style.webkitTransition="",o.style.transition="",T&&T(o)}),Q=o=>{f&&f(h.current,o)},H=u.useCallback(()=>{h.current&&N(i,h.current,s)},[i,s]);return u.useEffect(()=>{if(c||i==="down"||i==="right")return;const o=ut(()=>{h.current&&N(i,h.current,s)}),d=X(h.current);return d.addEventListener("resize",o),()=>{o.clear(),d.removeEventListener("resize",o)}},[i,c,s]),u.useEffect(()=>{c||H()},[c,H]),v.jsx(R,{nodeRef:h,onEnter:y,onEntered:S,onEntering:x,onExit:G,onExited:J,onExiting:$,addEndListener:Q,appear:l,in:c,timeout:D,...P,children:(o,d)=>u.cloneElement(p,{ref:j,style:{visibility:o==="exited"&&!c?"hidden":void 0,...b,...p.props.style},...d})})});function Rt(e){return at("MuiDrawer",e)}Y("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const _=(e,t)=>{const{ownerState:n}=e;return[t.root,(n.variant==="permanent"||n.variant==="persistent")&&t.docked,t.modal]},Pt=e=>{const{classes:t,anchor:n,variant:r}=e,a={root:["root"],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${z(n)}`,r!=="temporary"&&`paperAnchorDocked${z(n)}`]};return ct(a,Rt,t)},Tt=L(ht,{name:"MuiDrawer",slot:"Root",overridesResolver:_})(W(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer}))),U=L("div",{shouldForwardProp:st,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:_})({flex:"0 0 auto"}),bt=L(mt,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.paper,t[`paperAnchor${z(n.anchor)}`],n.variant!=="temporary"&&t[`paperAnchorDocked${z(n.anchor)}`]]}})(W(({theme:e})=>({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0,variants:[{props:{anchor:"left"},style:{left:0}},{props:{anchor:"top"},style:{top:0,left:0,right:0,height:"auto",maxHeight:"100%"}},{props:{anchor:"right"},style:{right:0}},{props:{anchor:"bottom"},style:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"}},{props:({ownerState:t})=>t.anchor==="left"&&t.variant!=="temporary",style:{borderRight:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:t})=>t.anchor==="top"&&t.variant!=="temporary",style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:t})=>t.anchor==="right"&&t.variant!=="temporary",style:{borderLeft:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:t})=>t.anchor==="bottom"&&t.variant!=="temporary",style:{borderTop:`1px solid ${(e.vars||e).palette.divider}`}}]}))),q={left:"right",right:"left",top:"down",bottom:"up"};function Mt(e){return["left","right"].includes(e)}function Bt({direction:e},t){return e==="rtl"&&Mt(t)?q[t]:t}const zt=u.forwardRef(function(t,n){const r=it({props:t,name:"MuiDrawer"}),a=O(),m=gt(),f={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:l="left",BackdropProps:p,children:s,className:i,elevation:g=16,hideBackdrop:c=!1,ModalProps:{BackdropProps:E,...A}={},onClose:C,open:k=!1,PaperProps:T={},SlideProps:I,TransitionComponent:b=Dt,transitionDuration:D=f,variant:R="temporary",...P}=r,h=u.useRef(!1);u.useEffect(()=>{h.current=!0},[]);const j=Bt({direction:m?"rtl":"ltr"},l),y={...r,anchor:l,elevation:g,open:k,variant:R,...P},x=Pt(y),S=v.jsx(bt,{elevation:R==="temporary"?g:0,square:!0,...T,className:M(x.paper,T.className),ownerState:y,children:s});if(R==="permanent")return v.jsx(U,{className:M(x.root,x.docked,i),ownerState:y,ref:n,...P,children:S});const $=v.jsx(b,{in:k,direction:q[j],timeout:D,appear:h.current,...I,children:S});return R==="persistent"?v.jsx(U,{className:M(x.root,x.docked,i),ownerState:y,ref:n,...P,children:$}):v.jsx(Tt,{BackdropProps:{...p,...E,transitionDuration:D},className:M(x.root,x.modal,i),open:k,ownerState:y,onClose:C,hideBackdrop:c,ref:n,...P,...A,children:$})}),At=(e=[])=>{u.useEffect(()=>{e.forEach(({isError:t,error:n,fallback:r})=>{var a;t&&(r?r():B.error(((a=n==null?void 0:n.data)==null?void 0:a.message)||"Something went wrong"))})},[e])},It=e=>{const[t,n]=u.useState(!1),[r,a]=u.useState(null),[m]=e();return[async(l,...p)=>{var i,g;n(!0);const s=B.loading(l||"Updating data...");try{const c=await m(...p);c.data?(B.success(c.data.message||"Updated data successfully",{id:s}),a(c.data)):B.error(((g=(i=c==null?void 0:c.error)==null?void 0:i.data)==null?void 0:g.message)||"Something went wrong",{id:s})}catch(c){console.log(c),B.error("Something went wrong",{id:s})}finally{n(!1)}},t,r]},jt=(e,t)=>{u.useEffect(()=>(Object.entries(t).forEach(([n,r])=>{e.on(n,r)}),()=>{Object.entries(t).forEach(([n,r])=>{e.off(n,r)})}),[e,t])},Lt=xt(v.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");export{Nt as B,zt as D,Lt as M,At as a,It as b,jt as u};
