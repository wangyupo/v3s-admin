import{_ as g}from"./index.Bgo2aCqr.v0.0.3.js";import{_ as v,r as p,G as x,b as y,c as h,o as w,d as b,e as m,f as r,g as u,k as z,F as M,p as C,l as E}from"./index.CAAC43IS.v0.0.3.js";import"./echarts.DjBWLO_m.v0.0.3.js";const S=o=>(C("data-v-45b882fd"),o=o(),E(),o),T=S(()=>m("div",{class:"handle z-40"},null,-1)),k={__name:"chartTest",setup(o){const c=p({});x(()=>{i()});const i=()=>{const e=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],s=Array.from({length:7},()=>Math.floor(Math.random()*100));c.value={xAxis:{data:e},series:[{name:"Count",type:"bar",data:s}]}},t=y({width:300,height:300}),a=p({x:0,y:0}),_=e=>{a.value={x:e.clientX,y:e.clientY},document.addEventListener("mousemove",l),document.addEventListener("mouseup",d)},l=e=>{const s=e.clientX-a.value.x,n=e.clientY-a.value.y;t.width=Math.max(t.width+s,50),t.height=Math.max(t.height+n,50),a.value={x:e.clientX,y:e.clientY},e.target.style.setProperty("--resize-width",`${t.width}px`),e.target.style.setProperty("--resize-height",`${t.height}px`)},d=()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",d)};return(e,s)=>{const n=h("RhWrapper"),f=h("el-button");return w(),b(M,null,[m("div",{class:"resizable p-4",style:{width:"var(--resize-width)",height:"var(--resize-height)"},onMousedown:_},[r(n,{class:"w-full h-full"},{default:u(()=>[r(g,{ref:"chartComponent",option:c.value,type:"lb"},null,8,["option"])]),_:1}),T],32),r(f,{type:"primary",onClick:i},{default:u(()=>[z("更变数据")]),_:1})],64)}}},B=v(k,[["__scopeId","data-v-45b882fd"]]);export{B as default};
