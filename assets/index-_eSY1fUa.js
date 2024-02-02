import{b as N,c as p,o as _,q as y,g as l,t as S,j as v,f as u,r as f,G as L,d as x,Q as D,h as z,B as V,e as w,z as $,F as R,a3 as G,a4 as I,y as A,X as P}from"./index-yl1wmfEP.js";const F={__name:"tableBasic",setup(k){const a=N({showOverflowTooltip:!0,columns:[{label:"序号",type:"index"},{label:"日期",prop:"date",width:"150px"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],data:[],pages:{total:100,pageNumber:1,pageSize:10}});return(d,t)=>{const i=p("el-link"),b=p("RhTable");return _(),y(b,{border:"",stripe:"","table-data":a},{name:l(({scope:s})=>[u(i,{type:"primary"},{default:l(()=>[v(S(s.row.name),1)]),_:2},1024)]),_:1},8,["table-data"])}}},O={__name:"tableForm",setup(k){const a=f(!1),d=f({name:"",address:"",date:"",time:""}),t=f([{type:"input",placeholder:"请输入姓名",key:"name",colSpan:4},{type:"select",placeholder:"请选择地址",key:"address",options:[{value:"No. 188, Grove St, Los Angeles",label:"No. 188, Grove St, Los Angeles"},{value:"No. 189, Grove St, Los Angeles",label:"No. 189, Grove St, Los Angeles"}],colSpan:4},{type:"date",placeholder:"请选择日期",key:"date",colSpan:4},{type:"daterange",startPlaceholder:"开始日期",endPlaceholder:"结束日期",key:"time",startKey:"beginTime",endKey:"endTime",value:null,colSpan:6}]),i=(o,h)=>h!==1,b=f([]),s=N({showOverflowTooltip:!0,columns:[{type:"expand"},{type:"selection",selectable:i},{label:"序号",type:"index"},{label:"日期",prop:"date",width:"150px",diyHeader:!0,sortable:!0},{label:"姓名",prop:"name"},{label:"地址",prop:"address",prefix:"<span class='font-bold'>送货地址：</span>",suffix:"(not too spicy)"}],data:[{date:"15311665523",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],pages:{total:100,pageNumber:1,pageSize:10}});L(()=>{});const n=o=>{console.log(o)},m=(o=1)=>{a.value=!0;const h=Object.assign({},d.value,{pageNumber:o||s.pages.pageNumber,pageSize:s.pages.pageSize});api(h).then(e=>{e.code===200&&(s.data=e.rows,s.pages.total=e.total,s.pages.pageNumber=h.pageNumber)}).finally(()=>{a.value=!1})},c=o=>{s.pages.pageSize=o,m(1)},r=o=>{b.value=o};return(o,h)=>{const e=p("RhSearch"),g=p("el-link"),C=p("RhTable");return _(),x("div",null,[u(e,{searchInfo:t.value,searchData:d.value,onSearch:n},null,8,["searchInfo","searchData"]),u(C,{border:"",stripe:"","table-data":s,loading:a.value,onPageChange:m,onPageSizeChange:c,onSelectionChange:r},{dateHeader:l(({scope:T})=>[v(S(T.column.label)+"Diy",1)]),expand:l(({scope:T})=>[v(S(T.row.date),1)]),name:l(({scope:T})=>[u(g,{type:"primary"},{default:l(()=>[v(S(T.row.name),1)]),_:2},1024)]),_:1},8,["table-data","loading"])])}}},U={__name:"tableWrapper",setup(k){const a=N({showOverflowTooltip:!0,columns:[{label:"序号",type:"index"},{label:"日期",prop:"date",width:"150px",sortable:!0},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],data:[{date:"2016-05-03",name:"",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],pages:{total:100,pageNumber:1,pageSize:10}});return(d,t)=>{const i=p("el-input"),b=p("el-link"),s=p("RhTable"),n=p("RhWrapper");return _(),y(n,null,{"title-right":l(()=>[u(i,{placeholder:"请输入","suffix-icon":z(D)},null,8,["suffix-icon"])]),default:l(()=>[u(s,{border:"",stripe:"","table-data":a},{name:l(({scope:m})=>[u(b,{type:"primary"},{default:l(()=>[v(S(m.row.name),1)]),_:2},1024)]),_:1},8,["table-data"])]),_:1})}}},W={class:"flex"},B={class:"w-[300px] text-sm"},j={class:"flex items-center"},E={__name:"tableRowEdit",setup(k){const a=N({showOverflowTooltip:!0,columns:[{label:"序号",type:"index"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"},{label:"操作",prop:"operate",width:"250px"}],data:[{date:"2016-05-03",name:"Joe",address:"No. 189, Grove St"}],pages:{total:100,pageNumber:1,pageSize:10}}),d=f(null),t=V(()=>a.data),i=n=>{d.value=null,a.data=n},b=(n,m)=>{n&&(a.data=n),a.data.splice(m+1,0,{date:"",name:"",address:""}),d.value=null},s=(n,m)=>{a.data=n,a.data.splice(m,1),d.value=null};return(n,m)=>{const c=p("el-button"),r=p("el-input"),o=p("RhTable"),h=p("RhWrapper");return _(),x("div",W,[w("div",B,[w("code",null,[w("pre",null,S(t.value),1)])]),u(h,{class:"flex-1"},{"title-right":l(()=>[a.data.length?$("",!0):(_(),y(c,{key:0,type:"primary",onClick:m[0]||(m[0]=e=>b())},{default:l(()=>[v("新增")]),_:1})),u(c,{type:"primary",disabled:!a.data.length},{default:l(()=>[v("保存")]),_:1},8,["disabled"])]),default:l(()=>[u(o,{border:"",stripe:"","table-data":a},{date:l(({scope:e})=>[d.value==e.$index?(_(),y(r,{key:0,modelValue:e.row.date,"onUpdate:modelValue":g=>e.row.date=g,placeholder:"Please input date"},null,8,["modelValue","onUpdate:modelValue"])):(_(),x(R,{key:1},[v(S(e.row.date),1)],64))]),name:l(({scope:e})=>[d.value==e.$index?(_(),y(r,{key:0,modelValue:e.row.name,"onUpdate:modelValue":g=>e.row.name=g,placeholder:"Please input name"},null,8,["modelValue","onUpdate:modelValue"])):(_(),x(R,{key:1},[v(S(e.row.name),1)],64))]),address:l(({scope:e})=>[d.value==e.$index?(_(),y(r,{key:0,modelValue:e.row.address,"onUpdate:modelValue":g=>e.row.address=g,placeholder:"Please input address"},null,8,["modelValue","onUpdate:modelValue"])):(_(),x(R,{key:1},[v(S(e.row.address),1)],64))]),operate:l(({scope:e,tableData:g})=>[w("div",j,[d.value==null?(_(),y(c,{key:0,type:"primary",onClick:()=>d.value=e.$index},{default:l(()=>[v(" 编辑 ")]),_:2},1032,["onClick"])):d.value==e.$index?(_(),y(c,{key:1,type:"primary",onClick:C=>i(g)},{default:l(()=>[v(" 保存 ")]),_:2},1032,["onClick"])):$("",!0),u(c,{icon:z(G),circle:"",title:"添加行",onClick:C=>b(g,e.$index)},null,8,["icon","onClick"]),u(c,{icon:z(I),circle:"",title:"删除行",onClick:C=>s(g,e.$index)},null,8,["icon","onClick"])])]),_:1},8,["table-data"])]),_:1})])}}},J={__name:"tableColumnsDIY",setup(k){const a=f({key:""}),d=f([{type:"input",placeholder:"请输入",key:"input",value:"",colSpan:4},{type:"select",placeholder:"请选择",key:"select",value:"",options:[{value:"1",label:"选项一"},{value:"2",label:"选项二"}],colSpan:4}]),t=N({showOverflowTooltip:!0,columns:[{label:"序号",type:"index"},{label:"日期",prop:"date",minWidth:"120px",show:!0},{label:"姓名",prop:"name",width:"120px",show:!0},{label:"操作",prop:"operate",width:"200px",show:!0}],data:[{date:"2016-05-03",name:"tableColumnsDIY 示例数据"}],pages:{total:0,pageNumber:1,pageSize:10}}),i=f(!1);L(()=>{});const b=c=>{a.value=c,s(1)},s=(c=1)=>{i.value=!0;const r=Object.assign({pageNumber:c||t.pages.pageNumber,pageSize:t.pages.pageSize},a.value);getList(r).then(o=>{o.code==200&&(t.data=o.rows,t.pages.total=o.total,t.pages.pageNumber=r.pageNumber)}).finally(()=>{i.value=!1})},n=c=>{t.pages.pageSize=c,s(1)},m=c=>{const r=t.columns.findLastIndex(h=>h.type),o=t.columns.slice(0,r+1);t.columns=o.concat(c)};return(c,r)=>{const o=p("RhSearch"),h=p("el-button"),e=p("RhTable");return _(),x("div",null,[u(o,{diyColumns:"",searchInfo:d.value,searchForm:a.value,columns:t.columns,onUpdateColumns:m,onSearch:b},null,8,["searchInfo","searchForm","columns"]),u(e,{border:"",stripe:"",loading:i.value,"table-data":t,onPageChange:s,onPageSizeChange:n},{operate:l(({scope:g})=>[u(h,{type:"primary",link:""},{default:l(()=>[v("操作")]),_:1})]),_:1},8,["loading","table-data"])])}}},H={class:"flex"},K={class:"w-[300px] text-sm"},Y={class:"flex-1"},q={__name:"tableDragRow",setup(k){const a=f({key:""}),d=f([{type:"input",placeholder:"请输入",key:"input",value:"",colSpan:4},{type:"select",placeholder:"请选择",key:"select",value:"",options:[{value:"1",label:"选项一"},{value:"2",label:"选项二"}],colSpan:4}]),t=N({showOverflowTooltip:!0,draggable:!0,columns:[{label:"序号",type:"index"},{label:"日期",prop:"date",minWidth:"120px"},{label:"姓名",prop:"name"},{label:"操作",prop:"operate",width:"200px"}],data:[{date:"2016-05-01",name:"home 示例数据1"},{date:"2016-05-02",name:"home 示例数据2"},{date:"2016-05-03",name:"home 示例数据3"}],pages:{total:0,pageNumber:1,pageSize:10}}),i=f(!1),b=V(()=>t.data);L(()=>{});const s=r=>{a.value=r,n(1)},n=(r=1)=>{i.value=!0;const o=Object.assign({pageNumber:r||t.pages.pageNumber,pageSize:t.pages.pageSize},a.value);getList(o).then(h=>{h.code==200&&(t.data=h.rows,t.pages.total=h.total,t.pages.pageNumber=o.pageNumber)}).finally(()=>{i.value=!1})},m=r=>{t.pages.pageSize=r,n(1)},c=r=>{t.data=r};return(r,o)=>{const h=p("RhSearch"),e=p("el-button"),g=p("RhTable");return _(),x("div",H,[w("div",K,[w("code",null,[w("pre",null,S(b.value),1)])]),w("div",Y,[u(h,{searchInfo:d.value,searchForm:a.value,onSearch:s},null,8,["searchInfo","searchForm"]),u(g,{border:"",stripe:"","row-key":"date",loading:i.value,"table-data":t,onDragEnd:c,onPageChange:n,onPageSizeChange:m},{operate:l(({scope:C})=>[u(e,{type:"primary",link:""},{default:l(()=>[v("操作")]),_:1})]),_:1},8,["loading","table-data"])])])}}},Q={__name:"index",setup(k){const a=f(0),d=[{label:"基础样式",component:F},{label:"搜索样式",component:O},{label:"线框样式",component:U},{label:"列字段配置（排序、显示/隐藏）",component:J},{label:"行编辑",component:E},{label:"行拖拽（必须设置row-key，且保证是唯一不重复的）",component:q}];return(t,i)=>{const b=p("el-tab-pane"),s=p("el-tabs");return _(),y(s,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=n=>a.value=n),class:"demo-tabs"},{default:l(()=>[(_(),x(R,null,A(d,(n,m)=>u(b,{label:n.label,name:m,key:m},{default:l(()=>[(_(),y(P(n.component)))]),_:2},1032,["label","name"])),64))]),_:1},8,["modelValue"])}}};export{Q as default};
