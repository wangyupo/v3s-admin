import{_ as $,r as o,b as z,W as q,t as b,D as C,E as N,I as B,o as c,d as u,e as w,L as g,Y as E,n as I,a6 as O,c as W,f as m,g as H,F as k,A as F,x as M}from"./index-0b_M4S63.js";const Y=["innerHTML"],j={__name:"RhSeamlessScroll",props:{data:Array,width:[Number,String],height:[Number,String],options:{type:Object,default:()=>({})}},setup(f){const e=f,s=o(),n=o(0),d=o(0),v=o(0),h=o(0),i=o(""),a=o(),y={step:1,direction:"vertical",hoverStop:!0};let p=z(q(y));const A=b(()=>{function t(_){return O(_)==="string"?_:`${_}px`}const l=e.options.direction==="vertical",r={width:e.width?t(e.width):"auto",height:`${e.height?t(e.height):t(n.value)}`},T={width:`${e.width?t(e.width):t(v.value)}`,height:e.height?t(e.height):"auto"};return l?r:T}),S=b(()=>{const t=e.options.direction==="vertical";let l=t?"translateY":"translateX",r=t?d.value:h.value;return{display:"flex","flex-direction":t?"column":"row",transform:`${l}(${r}px)`}});C(()=>e.data,t=>{N(()=>{x(),v.value=s.value.offsetWidth,n.value=s.value.offsetHeight,i.value=s.value.innerHTML,p=Object.assign({},p,e.options),L()})},{immediate:!0}),B(()=>{x()});const x=()=>{v.value=0,h.value=0,n.value=0,d.value=0,i.value="",p=y,a.value&&window.cancelAnimationFrame(a.value)},L=()=>{const t=e.options.direction==="vertical"?d:h,l=e.options.direction==="vertical"?-n.value:-v.value,r=()=>{t.value-=e.options.step,t.value<=l&&(t.value=0),s.value&&(a.value=window.requestAnimationFrame(r))};a.value=window.requestAnimationFrame(r)},D=()=>{p.hoverStop&&window.cancelAnimationFrame(a.value)},R=t=>{p.hoverStop&&L()};return(t,l)=>(c(),u("div",{class:"rh-seamless-wrapper",style:g(A.value)},[w("div",{class:I(["main flex",f.options.direction==="vertical"?"flex-col":""]),onMouseenter:D,onMouseleave:R},[w("div",{ref_key:"slotListRef",ref:s,style:g(S.value)},[E(t.$slots,"default",{},void 0,!0)],4),w("div",{innerHTML:i.value,style:g(S.value)},null,12,Y)],34)],4))}},V=$(j,[["__scopeId","data-v-25692e6d"]]),X={__name:"seamlessScroll",setup(f){const e=o(["1、突然！阿里云重大宣布：史上最大规模降价！","2、2023最新爆笑喜剧片，半个好莱坞的人来打酱油，导演好大的面子","3、“对标Model Y”，“最美比亚迪”，宋L被过度期待了","4、苹果版“余额宝”来了！年利率4.15%，10倍高收益！半月前刚推出“花呗”","5、文心一言满月：完成4次迭代，大模型推理成本降为原来十分之一"]),s=o({step:1,direction:"vertical"}),n=o(["1、预计10万左右，五菱宝骏悦也，能悦不能“野” 。","2、针对北大路演事件！《惊天救援》片方作出回应。","3、大范围降雨将重启 暴雨袭击6省。","4、全面实现不动产统一登记，房地产税真的要来了。"]),d=o({step:1,direction:"horizontal",hoverStop:!1});return(v,h)=>{const i=W("RhTitle");return c(),u("div",null,[m(i,{title:"纵向",divider:"",class:"mb-3"}),m(V,{class:"border border-black overflow-hidden",data:e.value,options:s.value},{default:H(()=>[(c(!0),u(k,null,F(e.value,a=>(c(),u("div",{class:"h-[60px]",key:a},M(a),1))),128))]),_:1},8,["data","options"]),m(i,{title:"横向",divider:"",class:"my-3"}),m(V,{class:"border border-black overflow-hidden",data:e.value,options:d.value},{default:H(()=>[(c(!0),u(k,null,F(n.value,a=>(c(),u("div",{class:"h-[60px] leading-[60px]",key:a},M(a),1))),128))]),_:1},8,["data","options"])])}}};export{X as default};
