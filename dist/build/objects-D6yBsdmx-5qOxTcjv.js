import{ar as u,aq as f}from"./strapi-CtMThWUB.js";function h(t,l,i,n=0){const r=f(l);for(;t&&n<r.length;)t=t[r[n++]];return n!==r.length&&!t||t===void 0?i:t}const g=t=>t!==null&&typeof t=="object"&&!Array.isArray(t),y=t=>String(Math.floor(Number(t)))===t;function m(t,l,i){const n=u(t);let r=n,e=0;const s=f(l);for(;e<s.length-1;e++){const a=s[e],c=h(t,s.slice(0,e+1));if(c&&(g(c)||Array.isArray(c)))r=r[a]=u(c);else{const o=s[e+1];r=r[a]=y(o)&&Number(o)>=0?[]:{}}}return(e===0?t:r)[s[e]]===i?t:(delete r[s[e]],e===0&&i===void 0&&delete n[s[e]],n)}export{h as g,m as s};
