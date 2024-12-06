const __vite__fileDeps=["strapi-BDL4OyES.js","strapi-COJtagOC.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{o as N,c5 as I,c6 as _,aM as T,u as P,j as i,d as M,ba as D,L as A,c7 as C,r as g,c1 as O,c8 as U,c9 as R,aG as B,ca as G,bv as H,bw as K,bm as $,aq as V,cb as q,cc as z,cd as F,ce as W,a7 as Y}from"./strapi-BDL4OyES.js";import{s as J}from"./sortBy-CG-9-IyT.js";import{s as Q}from"./selectors-pHipySOe-lfSgRfRy.js";import"./_baseMap-BLFyqj2V.js";import"./_baseEach-ChER3iGH.js";const X=n=>n.map(a=>{const r=a.links.map(o=>({...o,isDisplayed:!1}));return{...a,links:r}}),Z=()=>{const[{isLoading:n,menu:a},r]=g.useState({isLoading:!0,menu:[]}),o=O("useSettingsMenu",s=>s.checkUserHasPermissions),b=U("useSettingsMenu",s=>s.shouldUpdateStrapi),m=R("useSettingsMenu",s=>s.settings),c=B(Q),h=g.useMemo(()=>G(),[]),{admin:e,global:t}=H(h,async()=>(await K(()=>import("./strapi-BDL4OyES.js").then(s=>s.jz),__vite__mapDeps([0,1])).then(s=>s.K)).SETTINGS_LINKS_EE(),{combine(s,l){return{admin:[...l.admin,...s.admin],global:[...s.global,...l.global]}},defaultValue:{admin:[],global:[]}}),f=g.useCallback(s=>{if(!s.id)throw new Error("The settings menu item must have an id attribute.");return{...s,permissions:c.settings?.[s.id]?.main??[]}},[c.settings]);return g.useEffect(()=>{const s=async()=>{const w=await(S=>Promise.all(S.reduce((d,L,k)=>{const x=L.links.map(async(v,p)=>({hasPermission:(await o(v.permissions)).length>0,sectionIndex:k,linkIndex:p}));return[...d,...x]},[])))(j);r(S=>({...S,isLoading:!1,menu:j.map((d,L)=>({...d,links:d.links.map((k,x)=>{const v=w.find(p=>p.sectionIndex===L&&p.linkIndex===x);return{...k,isDisplayed:!!v?.hasPermission}})}))}))},{global:l,...E}=m,j=X([{...l,links:J([...l.links,...t.map(f)],u=>u.id).map(u=>({...u,hasNotification:u.id==="000-application-infos"&&b}))},{id:"permissions",intlLabel:{id:"Settings.permissions",defaultMessage:"Administration Panel"},links:e.map(f)},...Object.values(E)]);s()},[e,t,m,b,f,o]),{isLoading:n,menu:a.map(s=>({...s,links:s.links.filter(l=>l.isDisplayed)}))}},y=N(I)`
  right: 15px;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);

  path {
    fill: ${({theme:n})=>n.colors.warning500};
  }
`,ss=N(_)`
  &.active ${y} {
    right: 13px;
  }
`,ts=({menu:n})=>{const{formatMessage:a}=P(),{trackUsage:r}=$(),{pathname:o}=V(),m=n.filter(e=>!e.links.every(t=>t.isDisplayed===!1)).map(e=>({...e,title:e.intlLabel,links:e.links.map(t=>({...t,title:t.intlLabel,name:t.id}))})),c=a({id:"global.settings",defaultMessage:"Settings"}),h=e=>()=>{r("willNavigate",{from:o,to:e})};return i.jsxs(q,{"aria-label":c,children:[i.jsx(z,{label:c}),i.jsx(F,{children:m.map(e=>i.jsx(W,{label:a(e.intlLabel),children:e.links.map(t=>i.jsxs(ss,{tag:Y,withBullet:t.hasNotification,to:t.to,onClick:h(t.to),position:"relative",children:[a(t.intlLabel),t?.licenseOnly&&i.jsx(y,{width:"1.5rem",height:"1.5rem"})]},t.id))},e.id))})]})},rs=()=>{const n=T("/settings/:settingId/*"),{formatMessage:a}=P(),{isLoading:r,menu:o}=Z();return r?i.jsx(M.Loading,{}):n?.params.settingId?i.jsxs(A.Root,{sideNav:i.jsx(ts,{menu:o}),children:[i.jsx(M.Title,{children:a({id:"global.settings",defaultMessage:"Settings"})}),i.jsx(C,{})]}):i.jsx(D,{to:"application-infos"})};export{rs as Layout};
