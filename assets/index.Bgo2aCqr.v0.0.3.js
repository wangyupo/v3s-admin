import{i as g}from"./echarts.DjBWLO_m.v0.0.3.js";import{q as v,r as c,D as u,S as n,G as h,a3 as _,V as x,I as w,o as k,d as R,e as A}from"./index.CAAC43IS.v0.0.3.js";const d={lb:{grid:{bottom:30},tooltip:{},legend:{},xAxis:{type:"category"},yAxis:{type:"value"},series:[]},lb_row:{grid:{bottom:30},tooltip:{},legend:{},yAxis:{type:"category"},xAxis:{type:"value"},series:[]},pie:{tooltip:{trigger:"item"},legend:{top:"5%",left:"center"},series:[{type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:40,fontWeight:"bold"}},labelLine:{show:!1},data:[]}]}},O={class:"relative w-full h-full overflow-hidden"},D={__name:"index",props:{option:{type:Object,default:()=>({})},type:String},setup(f,{expose:m}){const{isDark:p}=v(),o=f,s=c();let e=null,i=null;const r=c();u(()=>o.option,n(()=>{e&&a()},150)),u(p,()=>{e.dispose(),e=null,a()}),h(()=>{a(),y()});const a=n(()=>{if(!s.value)return;if(!e){const t=s.value;e=g(t,p.value?"dark":"light")}const l=d[o.type]?_(x(d[o.type]),o.option):o.option;e.setOption(l),o.type=="map"&&(e.on("click",n(t=>{r.value=t.name},200)),e.getZr().on("click",n(t=>{t.target||(e.dispatchAction({type:"unselect",name:r.value}),e.dispatchAction({type:"geoUnSelect",name:r.value}))},200)))},150),y=()=>{if(i)return;const l=n(t=>{for(let b of t)b.contentRect,e==null||e.resize()},300);i=new ResizeObserver(l),s.value&&i.observe(s.value.parentElement)};return w(()=>{i==null||i.disconnect(),e==null||e.dispose(),e=null}),m({chartInstance:e}),(l,t)=>(k(),R("div",O,[A("div",{ref_key:"chartRef",ref:s,class:"absolute top-0 bottom-0 left-0 right-0"},null,512)]))}};export{D as _};
