import{r as m,aP as B,u as F,b as K,a as Q,a5 as X,c as Y,aI as ee,j as e,d as k,L as p,p as D,a7 as E,bf as L,h as l,B as se,n as $,T as te,bh as ae,e as oe,f as I,g as x,ae as W,Z as ne,i as ie,k as b,l as R,bU as re,I as N,_ as le,E as de,bV as ce,D as O,C as U}from"./strapi-BDL4OyES.js";import{u as he}from"./useWebhooks-ChRqPd68-CNv91VsX.js";const ge=()=>{const[d,i]=m.useState(!1),[r,o]=m.useState([]),c=B(s=>s.admin_app.permissions.settings?.webhooks),{formatMessage:t}=F(),{_unstableFormatAPIError:h}=K(),{toggleNotification:n}=Q(),T=X(),{isLoading:_,allowedActions:{canCreate:w,canUpdate:C,canDelete:v}}=Y(c),{notifyStatus:A}=ee(),{isLoading:H,webhooks:g,error:M,updateWebhook:z,deleteManyWebhooks:P}=he();m.useEffect(()=>{if(M){n({type:"danger",message:h(M)});return}g&&A(t({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[g,M,n,t,A,h]);const V=async s=>{try{const a=await z(s);"error"in a&&n({type:"danger",message:h(a.error)})}catch{n({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})}},G=async s=>{try{const a=await P({ids:[s]});if("error"in a){n({type:"danger",message:h(a.error)});return}o(f=>f.filter(y=>y!==s))}catch{n({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})}},J=async()=>{try{const s=await P({ids:r});if("error"in s){n({type:"danger",message:h(s.error)});return}o([])}catch{n({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})}finally{i(!1)}},Z=s=>o(s?g?.map(a=>a.id)??[]:[]),q=(s,a)=>o(s?f=>[...f,a]:f=>f.filter(y=>y!==a)),S=_||H,j=g?.length??0,u=r.length;return S?e.jsx(k.Loading,{}):e.jsxs(p.Root,{children:[e.jsx(k.Title,{children:t({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Webhooks"})}),e.jsxs(k.Main,{"aria-busy":S,children:[e.jsx(p.Header,{title:t({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:t({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:w&&!S&&e.jsx(D,{tag:E,startIcon:e.jsx(L,{}),variant:"default",to:"create",size:"S",children:t({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),u>0&&v&&e.jsx(p.Action,{startActions:e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"epsilon",textColor:"neutral600",children:t({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:u})}),e.jsx(se,{onClick:()=>i(!0),startIcon:e.jsx($,{}),size:"L",variant:"danger-light",children:t({id:"global.delete",defaultMessage:"Delete"})})]})}),e.jsx(p.Content,{children:j>0?e.jsxs(te,{colCount:5,rowCount:j+1,footer:e.jsx(ae,{onClick:()=>{w&&T("create")},icon:e.jsx(L,{}),children:t({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[e.jsx(oe,{children:e.jsxs(I,{children:[e.jsx(x,{children:e.jsx(W,{"aria-label":t({id:"global.select-all-entries",defaultMessage:"Select all entries"}),checked:u>0&&u<j?"indeterminate":u===j,onCheckedChange:Z})}),e.jsx(x,{width:"20%",children:e.jsx(l,{variant:"sigma",textColor:"neutral600",children:t({id:"global.name",defaultMessage:"Name"})})}),e.jsx(x,{width:"60%",children:e.jsx(l,{variant:"sigma",textColor:"neutral600",children:t({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),e.jsx(x,{width:"20%",children:e.jsx(l,{variant:"sigma",textColor:"neutral600",children:t({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),e.jsx(x,{children:e.jsx(ne,{children:t({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),e.jsx(ie,{children:g?.map(s=>e.jsxs(I,{onClick:()=>{C&&T(s.id)},style:{cursor:C?"pointer":"default"},children:[e.jsx(b,{onClick:a=>a.stopPropagation(),children:e.jsx(W,{"aria-label":`${t({id:"global.select",defaultMessage:"Select"})} ${s.name}`,checked:r?.includes(s.id),onCheckedChange:a=>q(!!a,s.id),name:"select"})}),e.jsx(b,{children:e.jsx(l,{fontWeight:"semiBold",textColor:"neutral800",children:s.name})}),e.jsx(b,{children:e.jsx(l,{textColor:"neutral800",children:s.url})}),e.jsx(b,{onClick:a=>a.stopPropagation(),children:e.jsx(R,{children:e.jsx(re,{onLabel:t({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:t({id:"global.disabled",defaultMessage:"Disabled"}),"aria-label":`${s.name} ${t({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,checked:s.isEnabled,onCheckedChange:a=>{V({...s,isEnabled:a})},visibleLabels:!0})})}),e.jsx(b,{children:e.jsxs(R,{gap:1,children:[C&&e.jsx(N,{label:t({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),variant:"ghost",children:e.jsx(le,{})}),v&&e.jsx(ue,{onDelete:()=>{G(s.id)}})]})})]},s.id))})]}):e.jsx(de,{icon:e.jsx(ce,{width:"160px"}),content:t({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:w?e.jsx(D,{variant:"secondary",startIcon:e.jsx(L,{}),tag:E,to:"create",children:t({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}):null})})]}),e.jsx(O.Root,{open:d,onOpenChange:i,children:e.jsx(U,{onConfirm:J})})]})},ue=({onDelete:d})=>{const[i,r]=m.useState(!1),{formatMessage:o}=F();return e.jsxs(e.Fragment,{children:[e.jsx(N,{onClick:c=>{c.stopPropagation(),r(!0)},label:o({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),variant:"ghost",children:e.jsx($,{})}),e.jsx(O.Root,{open:i,onOpenChange:r,children:e.jsx(U,{onConfirm:c=>{c?.stopPropagation(),d()}})})]})},be=()=>{const d=B(i=>i.admin_app.permissions.settings?.webhooks.main);return e.jsx(k.Protect,{permissions:d,children:e.jsx(ge,{})})};export{ge as ListPage,be as ProtectedListPage};