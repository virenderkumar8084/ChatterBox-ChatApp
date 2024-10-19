import{j as e,c as oe,u as Y,r as n,d as ae,e as q,_ as k,f as O,h as ie,i as ce,k as le,l as de,m as me,n as ue,o as ge,C as pe,p as fe,q as he,t as xe,S as $,g as je,T as ye,I as ve,v as Me,w as P,x as B,N as G,A as Ce}from"./index-dRst-7iy.js";import{M as Se,a as Ae}from"./Menu-DXxMw8cN.js";import{M as T,L as E}from"./MenuItem-DtIX8nYN.js";import{T as F}from"./Tooltip-Bi23DJI7.js";import{c as C,T as R}from"./Typography-CDGuFNvf.js";import{m as be,A as ke}from"./AppLayout-CQU2VLJ4.js";import{R as Le}from"./RenderAttachment-DysiEhxC.js";import{B as Te,u as Ee,a as Fe}from"./Menu-Bx84lkot.js";import{b as Ve}from"./index-WJTt8NRO.js";import{I as U}from"./IconButton-Cd5V1Ggt.js";import"./Modal-HVwfm5_O.js";import"./ExitToApp-BindQh3z.js";import"./Delete-B6dPH1Zf.js";import"./AvatarCard-sxswjPhD.js";import"./Avatar-CUFCW8-T.js";import"./Toolbar-Ccpoply8.js";import"./Notifications-COOZzEnN.js";const Ie=C(e.jsx("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6z"}),"AttachFile"),we=C(e.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 11h-3v3.75c0 1.24-1.01 2.25-2.25 2.25S8.5 17.99 8.5 16.75s1.01-2.25 2.25-2.25c.46 0 .89.14 1.25.38V11h4zm-3-4V3.5L18.5 9z"}),"AudioFile"),Re=C(e.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Image"),He=C(e.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send"),_e=C(e.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile"),ze=C(e.jsx("path",{d:"M14 2H6.01c-1.1 0-2 .89-2 2L4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm-1 7V3.5L18.5 9zm1 5 2-1.06v4.12L14 16v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1z"}),"VideoFile"),Ne=({anchorE1:t,chatId:c})=>{const{isFileMenu:l}=oe(s=>s.misc),i=Y(),o=n.useRef(null),p=n.useRef(null),f=n.useRef(null),g=n.useRef(null),[h]=ae(),x=()=>i(q(!1)),d=()=>{var s;return(s=o.current)==null?void 0:s.click()},y=()=>{var s;return(s=p.current)==null?void 0:s.click()},L=()=>{var s;return(s=f.current)==null?void 0:s.click()},V=()=>{var s;return(s=g.current)==null?void 0:s.click()},v=async(s,j)=>{const S=Array.from(s.target.files);if(S.length<=0)return;if(S.length>5)return k.error(`You can only send 5 ${j} at a time`);i(O(!0));const M=k.loading(`Sending ${j}...`);x();try{const m=new FormData;m.append("chatId",c),S.forEach(a=>m.append("files",a)),(await h(m)).data?k.success(`${j} sent successfully`,{id:M}):k.error(`Failed to send ${j}`,{id:M})}catch(m){k.error(m,{id:M})}finally{i(O(!1))}};return e.jsx(Se,{anchorEl:t,open:l,onClose:x,children:e.jsx("div",{style:{width:"10rem"},children:e.jsxs(Ae,{children:[e.jsxs(T,{onClick:d,children:[e.jsx(F,{title:"Image",children:e.jsx(Re,{})}),e.jsx(E,{style:{marginLeft:"0.5rem"},children:"Image"}),e.jsx("input",{type:"file",multiple:!0,accept:"image/png, image/jpeg, image/gif",style:{display:"none"},onChange:s=>v(s,"Images"),ref:o})]}),e.jsxs(T,{onClick:y,children:[e.jsx(F,{title:"Audio",children:e.jsx(we,{})}),e.jsx(E,{style:{marginLeft:"0.5rem"},children:"Audio"}),e.jsx("input",{type:"file",multiple:!0,accept:"audio/mpeg, audio/wav",style:{display:"none"},onChange:s=>v(s,"Audios"),ref:p})]}),e.jsxs(T,{onClick:L,children:[e.jsx(F,{title:"Video",children:e.jsx(ze,{})}),e.jsx(E,{style:{marginLeft:"0.5rem"},children:"Video"}),e.jsx("input",{type:"file",multiple:!0,accept:"video/mp4, video/webm, video/ogg",style:{display:"none"},onChange:s=>v(s,"Videos"),ref:f})]}),e.jsxs(T,{onClick:V,children:[e.jsx(F,{title:"File",children:e.jsx(_e,{})}),e.jsx(E,{style:{marginLeft:"0.5rem"},children:"File"}),e.jsx("input",{type:"file",multiple:!0,accept:"*",style:{display:"none"},onChange:s=>v(s,"Files"),ref:g})]})]})})})},De=({message:t,user:c})=>{const{sender:l,content:i,attachments:o=[],createdAt:p}=t,f=(l==null?void 0:l._id)===(c==null?void 0:c._id),g=ie(p).fromNow();return e.jsxs(be.div,{initial:{opacity:0,x:"-100%"},whileInView:{opacity:1,x:0},style:{alignSelf:f?"flex-end":"flex-start",backgroundColor:"white",color:"black",borderRadius:"5px",padding:"0.5rem",width:"fit-content"},children:[!f&&e.jsx(R,{color:ce,fontWeight:"600",variant:"caption",children:l.name}),i&&e.jsx(R,{children:i}),o.length>0&&o.map((h,x)=>{const d=h.url,y=le(d);return e.jsx(Te,{children:e.jsx("a",{href:d,target:"_blank",download:!0,style:{color:"black"},children:Le(y,d)})},x)}),e.jsx(R,{variant:"caption",color:"text.secondary",children:g})]})},Oe=n.memo(De),$e=({chatId:t,user:c})=>{var _,z,N,D;const l=n.useRef(null),i=n.useRef(null),o=de(),p=Y(),f=me(),[g,h]=n.useState(""),[x,d]=n.useState([]),[y,L]=n.useState(1),[V,v]=n.useState(null),[s,j]=n.useState(!1),[S,M]=n.useState(!1),m=n.useRef(null),u=ue({chatId:t,skip:!t}),a=ge({chatId:t,page:y}),{data:Q,setData:I}=Ve(l,(_=a.data)==null?void 0:_.totalPages,y,L,((z=a.data)==null?void 0:z.message)||[]),A=(D=(N=u==null?void 0:u.data)==null?void 0:N.chat)==null?void 0:D.members,W=[{isError:u.isError,error:u.error},{isError:a.isError,error:a.error}],J=r=>{h(r.target.value),s||(o.emit(P,{members:A,chatId:t}),j(!0)),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{o.emit(B,{members:A,chatId:t}),j(!1)},2e3)},X=r=>{p(q(!0)),v(r.currentTarget)},K=r=>{r.preventDefault(),g.trim()&&(o.emit(G,{chatId:t,members:A,message:g}),h(""))};n.useEffect(()=>(o.emit(pe,{userId:c._id,members:A}),p(fe(t)),()=>{d([]),h(""),I([]),L(1),o.emit(he,{userId:c._id,members:A})}),[t]),n.useEffect(()=>{i.current&&i.current.scrollIntoView({behavior:"smooth"})},[x]),n.useEffect(()=>{if(u.isError)return f("/")},[u.isError]);const Z=n.useCallback(r=>{r.chatId===t&&d(b=>[...b,r.message])},[t]),ee=n.useCallback(r=>{r.chatId===t&&M(!0)},[t]),se=n.useCallback(r=>{r.chatId===t&&M(!1)},[t]),te=n.useCallback(r=>{if(r.chatId!==t)return;const b={content:r.message,sender:{_id:"djasdhajksdhasdsadasdas",name:"Admin"},chat:t,createdAt:new Date().toISOString()};d(w=>[...w,b])},[t]),ne={[Ce]:te,[G]:Z,[P]:ee,[B]:se};Ee(o,ne),Fe(W),n.useEffect(()=>{a.data&&a.data.message&&a.data.message.length>0&&I(r=>{const b=a.data.message.filter(w=>!r.some(re=>re._id===w._id));return[...r,...b]})},[a.data,I]);const H=[...Q,...x];return u.isLoading?e.jsx(xe,{}):e.jsxs(e.Fragment,{children:[e.jsxs($,{ref:l,boxSizing:"border-box",padding:"1rem",spacing:"1rem",bgcolor:je,height:"90%",sx:{overflowX:"hidden",overflowY:"auto"},children:[H.length>0&&H.map(r=>e.jsx(Oe,{message:r,user:c},r._id)),S&&e.jsx(ye,{}),e.jsx("div",{ref:i})]}),e.jsx("form",{style:{height:"10%"},onSubmit:K,children:e.jsxs($,{direction:"row",height:"100%",padding:"1rem",alignItems:"center",position:"relative",children:[e.jsx(U,{sx:{rotate:"30deg",position:"absolute",left:"1rem","&:hover":{bgcolor:"error.dark"}},onClick:X,children:e.jsx(Ie,{})}),e.jsx(ve,{placeholder:"Type Message Here....",value:g,onChange:J}),e.jsx(U,{type:"submit",sx:{rotate:"-30deg",backgroundColor:Me,color:"white",marginLeft:"1rem",padding:"0.5rem","&:hover":{bgcolor:"error.dark"}},children:e.jsx(He,{})})]})}),e.jsx(Ne,{anchorE1:V,chatId:t})]})},os=ke()($e);export{os as default};
