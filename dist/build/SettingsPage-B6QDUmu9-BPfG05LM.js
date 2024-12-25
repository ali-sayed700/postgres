import{g as ae,k as D,h as se,u as f,n as S,q as M,fX as te,t as re,fY as k,r as b,j as e,P as L,b as w,fZ as n,bX as ne,bY as ie,M as g,S as F,be as oe,f_ as N,f$ as le,c3 as O,Z as $,ex as h,F as T,T as p,b3 as q,B as z,bS as B,a0 as de,g0 as H,Q as I,_ as ce,aV as ue,U as v,ae as ge,af as me,y as he,z as xe,A as R,C as E,V as fe,D as je,E as A,g1 as pe,bj as V,I as G,bi as be,bk as ye,G as Se,g2 as Me}from"./strapi-CtMThWUB.js";const Q=s=>s.name!==void 0,_=({disabled:s,variant:r="default"})=>{const{formatMessage:t}=f(),[a,d]=b.useState(!1);return e.jsxs(g.Root,{open:a,onOpenChange:d,children:[e.jsx(g.Trigger,{children:e.jsx(F,{variant:r,disabled:s,startIcon:e.jsx(oe,{}),onClick:()=>d(!0),size:"S",children:t({id:n("Settings.list.actions.add"),defaultMessage:"Add new locale"})})}),e.jsx(ve,{onClose:()=>d(!1)})]})},U=ae().shape({code:D().nullable().required({id:"Settings.locales.modal.create.code.error",defaultMessage:"Please select a locale"}),name:D().nullable().max(50,{id:"Settings.locales.modal.create.name.error.min",defaultMessage:"The locale display name can only be less than 50 characters."}).required({id:"Settings.locales.modal.create.name.error.required",defaultMessage:"Please give the locale a display name"}),isDefault:se()}),Ce={code:"",name:"",isDefault:!1},ve=({onClose:s})=>{const r=N(),{toggleNotification:t}=S(),{_unstableFormatAPIError:a,_unstableFormatValidationErrors:d}=M(),[c]=le(),{formatMessage:l}=f(),i=O("CreateModal",u=>u.refetchPermissions),o=async(u,m)=>{try{const x=await c(u);if("error"in x){Q(x.error)&&x.error.name==="ValidationError"?m.setErrors(d(x.error)):t({type:"danger",message:a(x.error)});return}t({type:"success",message:l({id:n("Settings.locales.modal.create.success"),defaultMessage:"Created locale"})}),i(),s()}catch{t({type:"danger",message:l({id:"notification.error",defaultMessage:"An error occurred, please try again"})})}};return e.jsx(g.Content,{children:e.jsxs($,{method:"POST",initialValues:Ce,validationSchema:U,onSubmit:o,children:[e.jsx(g.Header,{children:e.jsx(g.Title,{children:l({id:n("Settings.list.actions.add"),defaultMessage:"Add new locale"})})}),e.jsx(g.Body,{children:e.jsxs(h.Root,{variant:"simple",defaultValue:"basic",children:[e.jsxs(T,{justifyContent:"space-between",children:[e.jsx(p,{tag:"h2",variant:"beta",id:r,children:l({id:n("Settings.locales.modal.title"),defaultMessage:"Configuration"})}),e.jsxs(h.List,{"aria-labelledby":r,children:[e.jsx(h.Trigger,{value:"basic",children:l({id:n("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),e.jsx(h.Trigger,{value:"advanced",children:l({id:n("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),e.jsx(q,{}),e.jsxs(z,{paddingTop:7,paddingBottom:7,children:[e.jsx(h.Content,{value:"basic",children:e.jsx(Y,{})}),e.jsx(h.Content,{value:"advanced",children:e.jsx(Z,{})})]})]})}),e.jsxs(g.Footer,{children:[e.jsx(g.Close,{children:e.jsx(F,{variant:"tertiary",children:l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),e.jsx(X,{})]})]})})},X=()=>{const{formatMessage:s}=f(),r=B("SubmitButton",a=>a.isSubmitting),t=B("SubmitButton",a=>a.modified);return e.jsx(F,{type:"submit",startIcon:e.jsx(de,{}),disabled:r||!t,children:s({id:"global.save",defaultMessage:"Save"})})},Y=({mode:s="create"})=>{const{formatMessage:r}=f(),{toggleNotification:t}=S(),{_unstableFormatAPIError:a}=M(),{data:d,error:c}=H();if(b.useEffect(()=>{c&&t({type:"danger",message:a(c)})},[c,a,t]),!Array.isArray(d))return null;const l=d.map(o=>({label:o.name,value:o.code})),i=[{disabled:s!=="create",label:{id:n("Settings.locales.modal.create.code.label"),defaultMessage:"Locales"},name:"code",options:l,placeholder:{id:"components.placeholder.select",defaultMessage:"Select"},required:!0,size:6,type:"enumeration"},{hint:{id:n("Settings.locales.modal.create.name.label.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"},label:{id:n("Settings.locales.modal.create.name.label"),defaultMessage:"Locale display name"},name:"name",required:!0,size:6,type:"string"}].map(o=>({...o,hint:o.hint?r(o.hint):void 0,label:r(o.label),placeholder:o.placeholder?r(o.placeholder):void 0}));return e.jsx(I.Root,{gap:4,children:i.map(({size:o,...u})=>e.jsx(I.Item,{col:o,direction:"column",alignItems:"stretch",children:e.jsx(J,{...u})},u.name))})},Z=({isDefaultLocale:s})=>{const{formatMessage:r}=f(),t=[{disabled:s,hint:{id:n("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"},label:{id:n("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"},name:"isDefault",size:6,type:"boolean"}].map(a=>({...a,hint:a.hint?r(a.hint):void 0,label:r(a.label)}));return e.jsx(I.Root,{gap:4,children:t.map(({size:a,...d})=>e.jsx(I.Item,{col:a,direction:"column",alignItems:"stretch",children:e.jsx(J,{...d})},d.name))})},J=s=>{switch(s.type){case"enumeration":return e.jsx(Ee,{...s});default:return e.jsx(ce,{...s})}},Ee=({disabled:s,hint:r,label:t,name:a,options:d,placeholder:c,required:l})=>{const{value:i,error:o,onChange:u}=ue(a),{data:m=[]}=H(),x=j=>{if(Array.isArray(m)){const P=m.find(C=>C.code===j);u(a,j),u("name",P.name)}else u(a,j)};return e.jsxs(v.Root,{error:o,hint:r,name:a,required:l,children:[e.jsx(v.Label,{children:t}),e.jsx(ge,{disabled:s,onChange:x,placeholder:c,value:i,children:d.map(j=>e.jsx(me,{value:j.value,children:j.label},j.value))}),e.jsx(v.Error,{}),e.jsx(v.Hint,{})]})},Ae=({id:s,name:r})=>{const{formatMessage:t}=f(),{toggleNotification:a}=S(),{_unstableFormatAPIError:d}=M(),[c,l]=b.useState(!1),[i]=pe(),o=async()=>{try{const u=await i(s);if("error"in u){a({type:"danger",message:d(u.error)});return}a({type:"success",message:t({id:n("Settings.locales.modal.delete.success"),defaultMessage:"Deleted locale"})}),l(!1)}catch{a({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred, please try again"})})}};return e.jsxs(V.Root,{open:c,onOpenChange:l,children:[e.jsx(V.Trigger,{children:e.jsx(G,{onClick:()=>l(!0),label:t({id:n("Settings.list.actions.delete"),defaultMessage:"Delete {name} locale"},{name:r}),variant:"ghost",children:e.jsx(be,{})})}),e.jsx(ye,{onConfirm:o})]})},Le=s=>{const{formatMessage:r}=f(),[t,a]=b.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(G,{onClick:()=>a(!0),label:r({id:n("Settings.list.actions.edit"),defaultMessage:"Edit {name} locale"},{name:s.name}),variant:"ghost",children:e.jsx(Se,{})}),e.jsx(K,{...s,open:t,onOpenChange:a})]})},K=({id:s,code:r,isDefault:t,name:a,open:d,onOpenChange:c})=>{const{toggleNotification:l}=S(),{_unstableFormatAPIError:i,_unstableFormatValidationErrors:o}=M(),u=O("EditModal",C=>C.refetchPermissions),{formatMessage:m}=f(),x=N(),[j]=Me(),P=async({code:C,...W},ee)=>{try{const y=await j({id:s,...W});if("error"in y){Q(y.error)&&y.error.name==="ValidationError"?ee.setErrors(o(y.error)):l({type:"danger",message:i(y.error)});return}l({type:"success",message:m({id:n("Settings.locales.modal.edit.success"),defaultMessage:"Updated locale"})}),u(),c(!1)}catch{l({type:"danger",message:m({id:"notification.error",defaultMessage:"An error occurred, please try again"})})}};return e.jsx(g.Root,{open:d,onOpenChange:c,children:e.jsx(g.Content,{children:e.jsxs($,{method:"PUT",onSubmit:P,initialValues:{code:r,name:a,isDefault:t},validationSchema:U,children:[e.jsx(g.Header,{children:e.jsx(g.Title,{children:m({id:n("Settings.list.actions.edit"),defaultMessage:"Edit a locale"},{name:a})})}),e.jsx(g.Body,{children:e.jsxs(h.Root,{variant:"simple",defaultValue:"basic",children:[e.jsxs(T,{justifyContent:"space-between",children:[e.jsx(p,{tag:"h2",variant:"beta",id:x,children:m({id:n("Settings.locales.modal.title"),defaultMessage:"Configuration"})}),e.jsxs(h.List,{"aria-labelledby":x,children:[e.jsx(h.Trigger,{value:"basic",children:m({id:n("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),e.jsx(h.Trigger,{value:"advanced",children:m({id:n("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),e.jsx(q,{}),e.jsxs(z,{paddingTop:7,paddingBottom:7,children:[e.jsx(h.Content,{value:"basic",children:e.jsx(Y,{mode:"edit"})}),e.jsx(h.Content,{value:"advanced",children:e.jsx(Z,{isDefaultLocale:t})})]})]})}),e.jsxs(g.Footer,{children:[e.jsx(g.Close,{children:e.jsx(F,{variant:"tertiary",children:m({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),e.jsx(X,{})]})]})})})},Ie=({locales:s=[],canDelete:r,canUpdate:t})=>{const[a,d]=b.useState(),{formatMessage:c}=f(),l=i=>()=>{t&&d(i)};return e.jsxs(he,{colCount:4,rowCount:s.length+1,children:[e.jsx(xe,{children:e.jsxs(R,{children:[e.jsx(E,{children:e.jsx(p,{variant:"sigma",textColor:"neutral600",children:c({id:n("Settings.locales.row.id"),defaultMessage:"ID"})})}),e.jsx(E,{children:e.jsx(p,{variant:"sigma",textColor:"neutral600",children:c({id:n("Settings.locales.row.displayName"),defaultMessage:"Display name"})})}),e.jsx(E,{children:e.jsx(p,{variant:"sigma",textColor:"neutral600",children:c({id:n("Settings.locales.row.default-locale"),defaultMessage:"Default locale"})})}),e.jsx(E,{children:e.jsx(fe,{children:"Actions"})})]})}),e.jsx(je,{children:s.map(i=>e.jsxs(b.Fragment,{children:[e.jsxs(R,{onClick:l(i.id),style:{cursor:t?"pointer":"default"},children:[e.jsx(A,{children:e.jsx(p,{textColor:"neutral800",children:i.id})}),e.jsx(A,{children:e.jsx(p,{textColor:"neutral800",children:i.name})}),e.jsx(A,{children:e.jsx(p,{textColor:"neutral800",children:i.isDefault?c({id:n("Settings.locales.default"),defaultMessage:"Default"}):null})}),e.jsx(A,{children:e.jsxs(T,{gap:1,justifyContent:"flex-end",onClick:o=>o.stopPropagation(),children:[t&&e.jsx(Le,{...i}),r&&!i.isDefault&&e.jsx(Ae,{...i})]})})]}),e.jsx(K,{...i,onOpenChange:()=>d(void 0),open:a===i.id})]},i.id))})]})},Fe=()=>{const{formatMessage:s}=f(),{toggleNotification:r}=S(),{_unstableFormatAPIError:t}=M(),{data:a,isLoading:d,error:c}=te(),{isLoading:l,allowedActions:{canUpdate:i,canCreate:o,canDelete:u}}=re(k);return b.useEffect(()=>{c&&r({type:"danger",message:t(c)})},[c,t,r]),d||l?e.jsx(L.Loading,{}):c||!Array.isArray(a)?e.jsx(L.Error,{}):e.jsxs(L.Main,{tabIndex:-1,children:[e.jsx(w.Header,{primaryAction:e.jsx(_,{disabled:!o}),title:s({id:n("plugin.name"),defaultMessage:"Internationalization"}),subtitle:s({id:n("Settings.list.description"),defaultMessage:"Configure the settings"})}),e.jsx(w.Content,{children:a.length>0?e.jsx(Ie,{locales:a,canDelete:u,canUpdate:i}):e.jsx(ne,{icon:e.jsx(ie,{width:void 0,height:void 0}),content:s({id:n("Settings.list.empty.title"),defaultMessage:"There are no locales"}),action:e.jsx(_,{disabled:!o,variant:"secondary"})})})]})},Te=()=>e.jsx(L.Protect,{permissions:k.read,children:e.jsx(Fe,{})});export{Te as ProtectedSettingsPage,Fe as SettingsPage};
