import{q as p,r as d,a as h,C as g,W as _,w as f,o as m,d as v,h as n}from"./index.CAAC43IS.v0.0.3.js";const q=["element-loading-text","element-loading-spinner"],x={__name:"refreshPage",setup(y){const{contentAreaLoadingText:a,contentAreaLoadingSvg:i}=p(),l=d(!0),c=h(),t=g();let r={};const o=t.query.refreshPath.split("?");return o.length>1&&o[1].split("&").forEach(s=>{let e=s.split("=");r[e[0]]=e[1]}),setTimeout(()=>{c.replace({path:t.query.refreshPath,query:r})},1e3),(u,s)=>{const e=_("loading");return f((m(),v("div",{"element-loading-text":n(a),"element-loading-spinner":n(i),class:"absolute left-0 right-0 bottom-0 top-0"},null,8,q)),[[e,l.value]])}}};export{x as default};
