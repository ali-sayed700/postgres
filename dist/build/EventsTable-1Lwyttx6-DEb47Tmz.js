import{j as e}from"./strapi-CtMThWUB.js";import{a as s}from"./EditPage-DmCwq9lg-B6AE44qA.js";import"./selectors-BUDjU_0m-DPIB6wH6.js";import"./useWebhooks-PMmtSF2F-BWSBalgV.js";const t={"review-workflows":{"review-workflows":["review-workflows.updateEntryStage"]},releases:{releases:["releases.publish"]}},a=r=>{switch(r){case"review-workflows":return()=>[{id:"review-workflows.updateEntryStage",defaultMessage:"Stage Change"}];case"releases":return()=>[{id:"releases.publish",defaultMessage:"Publish"}]}},n=()=>e.jsxs(s.Root,{children:[e.jsx(s.Headers,{}),e.jsx(s.Body,{}),Object.keys(t).map(r=>e.jsxs(e.Fragment,{children:[e.jsx(s.Headers,{getHeaders:a(r)}),e.jsx(s.Body,{providedEvents:t[r]})]}))]});export{n as EventsTableEE};
