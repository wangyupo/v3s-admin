import{a as d,a4 as i,c as u,o as m,d as _,e as p,f as o,g as s,k as n}from"./index.OzRnMrhy.v0.0.11.js";const f=p("p",{class:"mt-3 font-bold"},"通常用在“新增”、“编辑”跳转同一个页面，但需要显示不同面包屑名称的情况。",-1),g={__name:"index",setup(h){const a=d();i((e,c)=>{e.path=="/examplePage/pageAlias/operate"&&(e.meta.alias=e.query.id?"编辑页面（这是编辑的别名）":"添加页面（这是添加的别名）")});const r=()=>{a.push({path:"/examplePage/pageAlias/operate"})},l=()=>{a.push({path:"/examplePage/pageAlias/operate",query:{id:1}})};return(e,c)=>{const t=u("el-button");return m(),_("div",null,[p("div",null,[o(t,{type:"primary",onClick:r},{default:s(()=>[n("添加")]),_:1}),o(t,{type:"primary",onClick:l},{default:s(()=>[n("编辑")]),_:1})]),f])}}};export{g as default};
