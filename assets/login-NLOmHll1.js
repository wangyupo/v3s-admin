import{_ as V,u as B,s as z,a as C,r as c,b as F,c as i,o as U,d as $,e as t,w as _,v,n as u,f as d,g as x,h as N,i as j,j as L,p as R,k as D,m as E}from"./index-yv28gaaR.js";import{u as J}from"./user-xkl7dN3u.js";const K=[{id:"2",parentId:"0",url:"/home",title:"首页",icon:"icon-shouye",menuType:0},{id:"1",parentId:"0",url:"",title:"嵌套路由",icon:"icon-caidan",menuType:0},{id:"0-1",parentId:"1",url:"",title:"路由菜单1",menuType:0},{id:"0-1-1",parentId:"0-1",url:"/example/menu1/menu1-1",title:"路由菜单1-1",menuType:0},{id:"0-3",parentId:"1",url:"/example/menu2",title:"路由菜单2",menuType:0},{id:"3",parentId:"0",url:"",title:"组件",icon:"icon-kaifazujian",menuType:0},{id:"3-1",parentId:"3",url:"/example/dialog",title:"弹窗",menuType:0},{id:"3-2",parentId:"3",url:"/example/table",title:"table",menuType:0},{id:"3-3",parentId:"3",url:"/example/numCountUp",title:"数字滚动",menuType:0},{id:"3-4",parentId:"3",url:"/example/page",title:"多级页面",menuType:0},{id:"3-4-1",parentId:"3-4",url:"/example/page/child",title:"子页面",menuType:1},{id:"3-5",parentId:"3",url:"/example/tree",title:"树形筛选器",menuType:0},{id:"3-6",parentId:"3",url:"/example/seamlessScroll",title:"无缝滚动",menuType:0},{id:"3-7",parentId:"3",url:"/example/transparentBackground",title:"透明背景",menuType:0}],b=n=>(R("data-v-7699269c"),n=n(),D(),n),M={class:"relative w-full h-full bg-[#f5f5f5]"},q={class:"login-form text-center"},A=b(()=>t("div",{class:"login-form-title text-3xl mb-4 tracking-wider"},"请登录",-1)),G={class:"w-[300px] bg-white border border-[var(--el-border-color-light)] rounded-lg"},H={class:"relative border-b border-b-[var(--el-border-color-light)]"},O={class:"relative"},P={class:"mt-4"},Q={class:"mt-3"},W=b(()=>t("div",{class:"mt-1 text-gray-500 text-sm"},"点击登录即可，示例版本没做登录校验",-1)),X={__name:"login",setup(n){const y=B(),{isNavigating:w}=z(y),I=C(),a=c(!1),r=c(!1),m=c(!1),o=F({username:"",password:""}),f=l=>{l==="login_username"?a.value=!0:l==="login_password"&&(r.value=!0)},g=l=>{l==="login_username"?o.username||(a.value=!1):l==="login_password"&&(o.password||(r.value=!1))},T=l=>{J().$patch(p=>{p.menu=j(K,"id","parentId",E.children)}),I.replace({path:"/"})};return(l,e)=>{const p=i("el-checkbox"),h=i("el-button"),k=i("Top"),S=i("el-icon");return U(),$("div",M,[t("div",q,[A,t("div",G,[t("div",H,[_(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.username=s),id:"login_username",type:"text",class:u(["w-full px-3 rounded-t-lg focus:ring-4 focus:ring-[#bbd3f7] relative focus:z-10 transition-all",[a.value||o.username?"pt-6 pb-2":"py-4"]]),onFocus:e[1]||(e[1]=s=>f("login_username")),onBlur:e[2]||(e[2]=s=>g("login_username"))},null,34),[[v,o.username]]),t("label",{for:"login_username",class:u(["absolute left-3 z-10 transition-all",[a.value||o.username?"top-1 text-sm text-gray-500":"top-1/2 -translate-y-1/2"]])}," 用户名 ",2)]),t("div",O,[_(t("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>o.password=s),id:"login_password",type:"password",class:u(["w-full px-3 rounded-b-lg focus:ring-4 focus:ring-[#bbd3f7] relative focus:z-10 transition-all",[r.value||o.password?"pt-6 pb-2":"py-4"]]),onFocus:e[4]||(e[4]=s=>f("login_password")),onBlur:e[5]||(e[5]=s=>g("login_password"))},null,34),[[v,o.password]]),t("label",{for:"login_password",class:u(["absolute left-3 z-10 transition-all",[r.value||o.password?"top-1 text-sm text-gray-500":"top-1/2 -translate-y-1/2"]])}," 密码 ",2)])]),t("div",P,[d(p,{modelValue:m.value,"onUpdate:modelValue":e[6]||(e[6]=s=>m.value=s),label:"记住我",class:"h-auto"},null,8,["modelValue"])]),d(h,{type:"primary",class:"mt-4 w-[300px] h-[48px] text-xl rounded-lg tracking-wider",loading:N(w),onClick:T},{default:x(()=>[L(" 登录 ")]),_:1},8,["loading"]),t("div",Q,[d(S,{class:"arrow"},{default:x(()=>[d(k)]),_:1})]),W])])}}},ee=V(X,[["__scopeId","data-v-7699269c"]]);export{ee as default};
