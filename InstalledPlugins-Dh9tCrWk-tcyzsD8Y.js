import{u as x,aI as m,a as P,b,b_ as M,r as T,j as s,d as n,L as d,T as y,e as C,f as u,g as c,h as l,i as I,k as p,aP as E}from"./strapi-BDL4OyES.js";const L=()=>{const{formatMessage:e}=x(),{notifyStatus:a}=m(),{toggleNotification:t}=P(),{_unstableFormatAPIError:g}=b(),{isLoading:h,data:i,error:r}=M();return T.useEffect(()=>{i&&a(e({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:e({id:"global.plugins",defaultMessage:"Plugins"})})),r&&t({type:"danger",message:g(r)})},[i,r,g,e,a,t]),h?s.jsx(n.Loading,{}):s.jsx(d.Root,{children:s.jsxs(n.Main,{children:[s.jsx(d.Header,{title:e({id:"global.plugins",defaultMessage:"Plugins"}),subtitle:e({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),s.jsx(d.Content,{children:s.jsxs(y,{colCount:2,rowCount:i?.plugins?.length??1,children:[s.jsx(C,{children:s.jsxs(u,{children:[s.jsx(c,{children:s.jsx(l,{variant:"sigma",textColor:"neutral600",children:e({id:"global.name",defaultMessage:"Name"})})}),s.jsx(c,{children:s.jsx(l,{variant:"sigma",textColor:"neutral600",children:e({id:"global.description",defaultMessage:"description"})})})]})}),s.jsx(I,{children:i?.plugins.map(({name:o,displayName:f,description:j})=>s.jsxs(u,{children:[s.jsx(p,{children:s.jsx(l,{textColor:"neutral800",variant:"omega",fontWeight:"bold",children:e({id:`global.plugins.${o}`,defaultMessage:f})})}),s.jsx(p,{children:s.jsx(l,{textColor:"neutral800",children:e({id:`global.plugins.${o}.description`,defaultMessage:j})})})]},o))})]})})]})})},N=()=>{const{formatMessage:e}=x(),a=E(t=>t.admin_app.permissions);return s.jsxs(n.Protect,{permissions:a.marketplace?.main,children:[s.jsx(n.Title,{children:e({id:"global.plugins",defaultMessage:"Plugins"})}),s.jsx(L,{})]})};export{L as InstalledPlugins,N as ProtectedInstalledPlugins};
