import{$ as V,Q as f,c as r,o as c,y as g,g as i,k as m,a0 as v,r as k,S as b,d as x,f as u,h as C}from"./index-MHwsMoCS.js";const w={__name:"dialog",props:{modelValue:{},modelModifiers:{}},emits:V(["opened","closed"],["update:modelValue"]),setup(n,{emit:e}){const o=e,a=f(n,"modelValue"),l=()=>{o("opened")},t=()=>{o("closed")};return(s,d)=>{const p=r("el-dialog");return c(),g(p,v({modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=_=>a.value=_)},s.$attrs,{width:"30%",onOpened:l,onClosed:t}),{default:i(()=>[m("示例弹窗")]),_:1},16,["modelValue"])}}},M={__name:"index",setup(n){const e=k(!1),o=b(()=>{e.value=!0},150);return(a,l)=>{const t=r("el-button");return c(),x("div",null,[u(t,{onClick:C(o)},{default:i(()=>[m("点击弹窗")]),_:1},8,["onClick"]),u(w,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=s=>e.value=s),title:"示例标题123"},null,8,["modelValue"])])}}};export{M as default};
