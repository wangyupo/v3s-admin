import{r as _,c as t,o as p,d as u,f as e,g as l,k as v,x as b}from"./index.Dnaxa93p.v0.0.6.js";const f={class:"flex h-full"},w={__name:"treeFilter",setup(x){const d=a=>{console.log("单选：",a)},s=a=>{console.log("多选：",a)},o=_([{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}]);return(a,L)=>{const n=t("RhTree"),c=t("RhWrapper"),r=t("Link"),h=t("el-icon");return p(),u("div",f,[e(c,{title:"单选",class:"w-[300px]"},{default:l(()=>[e(n,{"default-expand-all":"",fixSearch:"",data:o.value,onNodeClick:d},null,8,["data"])]),_:1}),e(c,{title:"多选",class:"ml-3 w-[300px]"},{default:l(()=>[e(n,{"default-expand-all":"","show-checkbox":"",data:o.value,onCheck:s},null,8,["data"])]),_:1}),e(c,{title:"自定义节点内容",class:"ml-3 w-[300px]"},{default:l(()=>[e(n,{"default-expand-all":"","show-checkbox":"",data:o.value,onCheck:s},{default:l(({node:i,data:m})=>[v(b(i.label)+" ",1),e(h,{class:"ml-2"},{default:l(()=>[e(r)]),_:1})]),_:1},8,["data"])]),_:1})])}}};export{w as default};
