import{_ as B,u as z,s as C,a as F,r as c,b as U,c as i,o as $,d as N,e as t,w as v,v as x,n as u,f as d,g as b,h as j,i as L,j as R,m,k as D,p as E,l as J}from"./index-0b_M4S63.js";const K=[{id:"2",parentId:"0",url:"/home",title:"首页",icon:"icon-shouye",menuType:0},{id:"1",parentId:"0",url:"",title:"嵌套路由",icon:"icon-caidan",menuType:0},{id:"0-1",parentId:"1",url:"",title:"路由菜单1",menuType:0},{id:"0-1-1",parentId:"0-1",url:"/example/menu1/menu1-1",title:"路由菜单1-1",menuType:0},{id:"0-3",parentId:"1",url:"/example/menu2",title:"路由菜单2",menuType:0},{id:"3",parentId:"0",url:"",title:"组件",icon:"icon-kaifazujian",menuType:0},{id:"3-1",parentId:"3",url:"/example/dialog",title:"弹窗",menuType:0},{id:"3-2",parentId:"3",url:"/example/table",title:"table",menuType:0},{id:"3-3",parentId:"3",url:"/example/numCountUp",title:"数字滚动",menuType:0},{id:"3-4",parentId:"3",url:"/example/page",title:"多级页面",menuType:0},{id:"3-4-1",parentId:"3-4",url:"/example/page/child",title:"子页面",menuType:1},{id:"3-5",parentId:"3",url:"/example/tree",title:"树形筛选器",menuType:0},{id:"3-6",parentId:"3",url:"/example/seamlessScroll",title:"无缝滚动",menuType:0},{id:"3-7",parentId:"3",url:"/example/transparentBackground",title:"透明背景",menuType:0}],y=n=>(E("data-v-92c98741"),n=n(),J(),n),M={class:"relative w-full h-full bg-[#f5f5f5]"},q={class:"login-form text-center"},A=y(()=>t("div",{class:"login-form-title text-3xl mb-4 tracking-wider"},"请登录",-1)),G={class:"w-[300px] bg-white border border-[var(--el-border-color-light)] rounded-lg"},H={class:"relative border-b border-b-[var(--el-border-color-light)]"},O={class:"relative"},P={class:"mt-4"},Q={class:"mt-3"},W=y(()=>t("div",{class:"mt-1 text-gray-500 text-sm"},"点击登录即可，示例版本没做登录校验",-1)),X={__name:"login",setup(n){const w=z(),{isNavigating:I}=C(w),T=F(),a=c(!1),r=c(!1),f=c(!1),o=U({username:"",password:""}),g=l=>{l==="login_username"?a.value=!0:l==="login_password"&&(r.value=!0)},_=l=>{l==="login_username"?o.username||(a.value=!1):l==="login_password"&&(o.password||(r.value=!1))},h=l=>{L().$patch(p=>{p.menu=R(K,{id:m.id,parentId:m.parentId,children:m.children})}),T.replace({path:"/"})};return(l,e)=>{const p=i("el-checkbox"),k=i("el-button"),S=i("Top"),V=i("el-icon");return $(),N("div",M,[t("div",q,[A,t("div",G,[t("div",H,[v(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.username=s),id:"login_username",type:"text",class:u(["w-full px-3 rounded-t-lg focus:ring-4 focus:ring-[#bbd3f7] relative focus:z-10 transition-all",[a.value||o.username?"pt-6 pb-2":"py-4"]]),onFocus:e[1]||(e[1]=s=>g("login_username")),onBlur:e[2]||(e[2]=s=>_("login_username"))},null,34),[[x,o.username]]),t("label",{for:"login_username",class:u(["absolute left-3 z-10 transition-all",[a.value||o.username?"top-1 text-sm text-gray-500":"top-1/2 -translate-y-1/2"]])}," 用户名 ",2)]),t("div",O,[v(t("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>o.password=s),id:"login_password",type:"password",class:u(["w-full px-3 rounded-b-lg focus:ring-4 focus:ring-[#bbd3f7] relative focus:z-10 transition-all",[r.value||o.password?"pt-6 pb-2":"py-4"]]),onFocus:e[4]||(e[4]=s=>g("login_password")),onBlur:e[5]||(e[5]=s=>_("login_password"))},null,34),[[x,o.password]]),t("label",{for:"login_password",class:u(["absolute left-3 z-10 transition-all",[r.value||o.password?"top-1 text-sm text-gray-500":"top-1/2 -translate-y-1/2"]])}," 密码 ",2)])]),t("div",P,[d(p,{modelValue:f.value,"onUpdate:modelValue":e[6]||(e[6]=s=>f.value=s),label:"记住我",class:"h-auto"},null,8,["modelValue"])]),d(k,{type:"primary",class:"mt-4 w-[300px] h-[48px] text-xl rounded-lg tracking-wider",loading:j(I),onClick:h},{default:b(()=>[D(" 登录 ")]),_:1},8,["loading"]),t("div",Q,[d(V,{class:"arrow"},{default:b(()=>[d(S)]),_:1})]),W])])}}},Z=B(X,[["__scopeId","data-v-92c98741"]]);export{Z as default};
