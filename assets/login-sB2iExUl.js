import{_ as z,u as B,s as P,a as C,r as c,b as F,c as i,o as U,d as $,e as t,w as v,v as x,n as u,f as d,g as y,h as N,i as j,j as M,m,k as A,p as L,l as R}from"./index-GMG092dj.js";const D=[{id:"2",parentId:"0",url:"/home",title:"首页",icon:"icon-shouye",menuType:0},{id:"1",parentId:"0",url:"",title:"嵌套路由",icon:"icon-caidan",menuType:0},{id:"0-1",parentId:"1",url:"",title:"路由菜单1",menuType:0},{id:"0-1-1",parentId:"0-1",url:"/example/menu1/menu1-1",title:"路由菜单1-1",menuType:0},{id:"0-3",parentId:"1",url:"/example/menu2",title:"路由菜单2",menuType:0},{id:"3",parentId:"0",url:"",title:"组件示例",icon:"icon-kaifazujian",menuType:0},{id:"3-1",parentId:"3",url:"/example/dialog",title:"弹窗",menuType:0},{id:"3-2",parentId:"3",url:"/example/table",title:"table",menuType:0},{id:"3-3",parentId:"3",url:"/example/numCountUp",title:"数字滚动",menuType:0},{id:"3-4",parentId:"3",url:"/example/tree",title:"树形筛选器",menuType:0},{id:"3-5",parentId:"3",url:"/example/seamlessScroll",title:"无缝滚动",menuType:0},{id:"3-6",parentId:"3",url:"/example/echarts",title:"echarts",menuType:0},{id:"4",parentId:"0",url:"",title:"页面示例",icon:"icon-kaifazujian",menuType:0},{id:"4-1",parentId:"4",url:"/examplePage/fullScreenShowPage",title:"全屏展示页",menuType:0},{id:"4-2",parentId:"4",url:"/examplePage/transparentBackground",title:"透明背景页",menuType:0},{id:"4-3",parentId:"4",url:"/examplePage/pageMultilevel",title:"多级页面",menuType:0},{id:"4-3-1",parentId:"4-3",url:"/examplePage/pageMultilevel/child",title:"子页面",menuType:1},{id:"4-4",parentId:"4",url:"/examplePage/pageAlias",title:"页面别名",menuType:0},{id:"4-4-1",parentId:"4-4",url:"/examplePage/pageAlias/add",title:"添加页面",menuType:1}],b=s=>(L("data-v-92c98741"),s=s(),R(),s),E={class:"relative w-full h-full bg-[#f5f5f5]"},J={class:"login-form text-center"},K=b(()=>t("div",{class:"login-form-title text-3xl mb-4 tracking-wider"},"请登录",-1)),q={class:"w-[300px] bg-white border border-[var(--el-border-color-light)] rounded-lg"},G={class:"relative border-b border-b-[var(--el-border-color-light)]"},H={class:"relative"},O={class:"mt-4"},Q={class:"mt-3"},W=b(()=>t("div",{class:"mt-1 text-gray-500 text-sm"},"点击登录即可，示例版本没做登录校验",-1)),X={__name:"login",setup(s){const w=B(),{isNavigating:I}=P(w),T=C(),o=c(!1),r=c(!1),g=c(!1),l=F({username:"",password:""}),f=n=>{n==="login_username"?o.value=!0:n==="login_password"&&(r.value=!0)},_=n=>{n==="login_username"?l.username||(o.value=!1):n==="login_password"&&(l.password||(r.value=!1))},h=n=>{j().$patch(p=>{p.menu=M(D,{id:m.id,parentId:m.parentId,children:m.children})}),T.replace({path:"/"})};return(n,e)=>{const p=i("el-checkbox"),k=i("el-button"),S=i("Top"),V=i("el-icon");return U(),$("div",E,[t("div",J,[K,t("div",q,[t("div",G,[v(t("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>l.username=a),id:"login_username",type:"text",class:u(["w-full px-3 rounded-t-lg focus:ring-4 focus:ring-[#bbd3f7] relative focus:z-10 transition-all",[o.value||l.username?"pt-6 pb-2":"py-4"]]),onFocus:e[1]||(e[1]=a=>f("login_username")),onBlur:e[2]||(e[2]=a=>_("login_username"))},null,34),[[x,l.username]]),t("label",{for:"login_username",class:u(["absolute left-3 z-10 transition-all",[o.value||l.username?"top-1 text-sm text-gray-500":"top-1/2 -translate-y-1/2"]])}," 用户名 ",2)]),t("div",H,[v(t("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>l.password=a),id:"login_password",type:"password",class:u(["w-full px-3 rounded-b-lg focus:ring-4 focus:ring-[#bbd3f7] relative focus:z-10 transition-all",[r.value||l.password?"pt-6 pb-2":"py-4"]]),onFocus:e[4]||(e[4]=a=>f("login_password")),onBlur:e[5]||(e[5]=a=>_("login_password"))},null,34),[[x,l.password]]),t("label",{for:"login_password",class:u(["absolute left-3 z-10 transition-all",[r.value||l.password?"top-1 text-sm text-gray-500":"top-1/2 -translate-y-1/2"]])}," 密码 ",2)])]),t("div",O,[d(p,{modelValue:g.value,"onUpdate:modelValue":e[6]||(e[6]=a=>g.value=a),label:"记住我",class:"h-auto"},null,8,["modelValue"])]),d(k,{type:"primary",class:"mt-4 w-[300px] h-[48px] text-xl rounded-lg tracking-wider",loading:N(I),onClick:h},{default:y(()=>[A(" 登录 ")]),_:1},8,["loading"]),t("div",Q,[d(V,{class:"arrow"},{default:y(()=>[d(S)]),_:1})]),W])])}}},Z=z(X,[["__scopeId","data-v-92c98741"]]);export{Z as default};
