import{i as p}from"./echarts.CB-Aoi_g.v0.0.11.js";import{_ as x,b as f,G as d,S as u,o as h,d as _,X as w,L as m,r as v,c as y,y as k,g,e,k as b,f as S}from"./index.OzRnMrhy.v0.0.11.js";const N={__name:"RhLargeScreenWrapper",props:{width:{type:[Number,String],default:1920},height:{type:[Number,String],default:1080},background:"#012700"},setup(l){const t=l,a=f({width:`${t.width}px`,height:`${t.height}px`,transform:"scale(1)"});d(()=>{n(),window.onresize=u(n,500),document.body.style.background=t.background});const s=()=>{const{width:r,height:i}=t,o=window.innerWidth/r,c=window.innerHeight/i;return o<c?o:c},n=()=>{a.transform=`scale(${s()}) translate(-50%, -50%)`};return(r,i)=>(h(),_("div",{class:"rh-ls-wrapper text-white",style:m(a)},[w(r.$slots,"default",{},void 0,!0)],4))}},$=x(N,[["__scopeId","data-v-66d5de6f"]]),B={class:"flex items-center justify-center h-[94px] text-[42px] flex-shrink-0"},W={class:"flex justify-between p-3 pt-0"},j={class:"w-[459px] h-[332px] flex-shrink-0"},C=e("div",{class:"mt-3 w-[459px] h-[332px] flex-shrink-0"},null,-1),L=e("div",{class:"mt-3 w-[459px] h-[273px] flex-shrink-0"},null,-1),T=e("div",{class:"flex flex-col mx-[14px] w-[941px] flex-shrink-0"},[e("div",{class:"flex-1"}),e("div",{class:"flex justify-between"},[e("div",{class:"mt-3 w-[459px] h-[273px] flex-shrink-0"}),e("div",{class:"mt-3 w-[459px] h-[273px] flex-shrink-0"})])],-1),V=e("div",null,[e("div",{class:"w-[459px] h-[332px] flex-shrink-0"},[e("div",{class:"w-full h-full"})]),e("div",{class:"mt-3 w-[459px] h-[332px] flex-shrink-0"}),e("div",{class:"mt-3 w-[459px] h-[273px] flex-shrink-0"})],-1),D={__name:"largeScreen",setup(l){const t=v();return d(()=>{var a=p(t.value),s;s={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]},s&&a.setOption(s)}),(a,s)=>{const n=y("Decoration5");return h(),k($,null,{default:g(()=>[e("div",B,[b(" xxxx默认标题 "),S(n,{style:{width:"1100px",height:"70px"},class:"absolute top-[38px]"})]),e("div",W,[e("div",null,[e("div",j,[e("div",{class:"w-full h-full",ref_key:"chart",ref:t},null,512)]),C,L]),T,V])]),_:1})}}};export{D as default};
