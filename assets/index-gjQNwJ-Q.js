import{r as c,D as v,c as i,o as m,q as g,g as p,j as _,a2 as b,R as k,d as x,f as r,h as C}from"./index-LMYybX5V.js";const w={__name:"dialog",props:{modelValue:{type:Boolean,require:!0,default:!1}},emits:["update:modelValue","opened","closed"],setup(d,{emit:e}){const o=e,l=c(!1),a=d;v(()=>a.modelValue,n=>{l.value=n});const t=()=>{o("opened")},s=()=>{l.value=!1,o("update:modelValue",!1),o("closed")};return(n,u)=>{const f=i("el-dialog");return m(),g(f,b({modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=V=>l.value=V)},n.$attrs,{width:"30%",onOpened:t,onClosed:s}),{default:p(()=>[_("示例弹窗")]),_:1},16,["modelValue"])}}},h={__name:"index",setup(d){const e=c(!1),o=k(()=>{e.value=!0},150);return(l,a)=>{const t=i("el-button");return m(),x("div",null,[r(t,{onClick:C(o)},{default:p(()=>[_("点击弹窗")]),_:1},8,["onClick"]),r(w,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value=s),title:"示例标题123"},null,8,["modelValue"])])}}};export{h as default};
