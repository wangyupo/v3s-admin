import{_ as z,r as o,b as A,V as q,B as b,D as B,E as C,I as N,o as c,d as u,e as w,L as y,X as E,n as I,a7 as O,c as j,f as m,g as H,F as V,y as k,t as F}from"./index-TaY89MIF.js";const U=["innerHTML"],W={__name:"RhSeamlessScroll",props:{data:Array,width:[Number,String],height:[Number,String],options:{type:Object,default:()=>({})}},setup(f){const e=f,s=o(),n=o(0),d=o(0),v=o(0),h=o(0),i=o(""),a=o(),g={step:1,direction:"vertical",hoverStop:!0};let p=A(q(g));const D=b(()=>{function t(_){return O(_)==="string"?_:`${_}px`}const l=e.options.direction==="vertical",r={width:e.width?t(e.width):"auto",height:`${e.height?t(e.height):t(n.value)}`},$={width:`${e.width?t(e.width):t(v.value)}`,height:e.height?t(e.height):"auto"};return l?r:$}),S=b(()=>{const t=e.options.direction==="vertical";let l=t?"translateY":"translateX",r=t?d.value:h.value;return{display:"flex","flex-direction":t?"column":"row",transform:`${l}(${r}px)`}});B(()=>e.data,t=>{C(()=>{L(),v.value=s.value.offsetWidth,n.value=s.value.offsetHeight,i.value=s.value.innerHTML,p=Object.assign({},p,e.options),x()})},{immediate:!0}),N(()=>{L()});const L=()=>{v.value=0,h.value=0,n.value=0,d.value=0,i.value="",p=g,a.value&&window.cancelAnimationFrame(a.value)},x=()=>{const t=e.options.direction==="vertical"?d:h,l=e.options.direction==="vertical"?-n.value:-v.value,r=()=>{t.value-=e.options.step,t.value<=l&&(t.value=0),s.value&&(a.value=window.requestAnimationFrame(r))};a.value=window.requestAnimationFrame(r)},R=()=>{p.hoverStop&&window.cancelAnimationFrame(a.value)},T=t=>{p.hoverStop&&x()};return(t,l)=>(c(),u("div",{class:"rh-seamless-wrapper",style:y(D.value)},[w("div",{class:I(["main flex",f.options.direction==="vertical"?"flex-col":""]),onMouseenter:R,onMouseleave:T},[w("div",{ref_key:"slotListRef",ref:s,style:y(S.value)},[E(t.$slots,"default",{},void 0,!0)],4),w("div",{innerHTML:i.value,style:y(S.value)},null,12,U)],34)],4))}},M=z(W,[["__scopeId","data-v-25692e6d"]]),Y={__name:"seamlessScroll",setup(f){const e=o(["1、突然！阿里云重大宣布：史上最大规模降价！","2、2023最新爆笑喜剧片，半个好莱坞的人来打酱油，导演好大的面子","3、“对标Model Y”，“最美比亚迪”，宋L被过度期待了","4、苹果版“余额宝”来了！年利率4.15%，10倍高收益！半月前刚推出“花呗”","5、文心一言满月：完成4次迭代，大模型推理成本降为原来十分之一"]),s=o({step:1,direction:"vertical"}),n=o(["1、预计10万左右，五菱宝骏悦也，能悦不能“野” 。","2、针对北大路演事件！《惊天救援》片方作出回应。","3、大范围降雨将重启 暴雨袭击6省。","4、全面实现不动产统一登记，房地产税真的要来了。"]),d=o({step:1,direction:"horizontal",hoverStop:!1});return(v,h)=>{const i=j("RhTitle");return c(),u("div",null,[m(i,{title:"纵向",divider:"",class:"mb-3"}),m(M,{class:"border border-black overflow-hidden",data:e.value,options:s.value},{default:H(()=>[(c(!0),u(V,null,k(e.value,a=>(c(),u("div",{class:"h-[60px]",key:a},F(a),1))),128))]),_:1},8,["data","options"]),m(i,{title:"横向",divider:"",class:"my-3"}),m(M,{class:"border border-black overflow-hidden",data:e.value,options:d.value},{default:H(()=>[(c(!0),u(V,null,k(n.value,a=>(c(),u("div",{class:"h-[60px] leading-[60px]",key:a},F(a),1))),128))]),_:1},8,["data","options"])])}}};export{Y as default};
