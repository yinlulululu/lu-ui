import{_ as e}from"./Container.aba3277e.js";import{_ as t}from"./Attr.226aa56e.js";import{c as a,q as l,o as n,r as s,A as o,B as u,n as d,e as r,F as i,x as b,s as c,t as p,d as m,y as f,k as T,w as v,j as _,l as g}from"./vendor.6cd36be9.js";var F={name:"lu-tab",props:{disabled:{type:Boolean,default:!1}}};F.render=function(e,t,s,o,u,d){return n(),a("div",{disabled:s.disabled},[l(e.$slots,"default")],8,["disabled"])};var C={name:"t-tabs",props:{selected:String},setup(e,t){const a=s(null),l=s(null),n=s(null);o((()=>{u((()=>{const{width:e}=a.value.getBoundingClientRect();l.value.style.width=e+"px";const{left:t}=n.value.getBoundingClientRect(),{left:s}=a.value.getBoundingClientRect(),o=s-t;l.value.style.left=o+"px"}),{flush:"post"})}));const r=t.slots.default();r.forEach((e=>{if(e.type.name!==F.name)throw new Error("t-tabs 子标签必须是 t-tab")}));return{current:d((()=>r.find((t=>t.props.title===e.selected)))),colNodes:r,select:e=>{""!==e.props.disabled&&t.emit("update:selected",e.props.title)},selectedItem:a,indicator:l,container:n}}};const L={class:"lu-tabs"},y={class:"lu-tabs-nav",ref:"container"},I={class:"lu-tabs-nav-indicator",ref:"indicator"},B={class:"lu-tabs-content"};C.render=function(e,t,l,s,o,u){return n(),a("div",L,[r("div",y,[(n(!0),a(i,null,b(s.colNodes,((e,t)=>(n(),a("div",{class:["lu-tabs-nav-item",[e.props.title===l.selected?"selected":""]+[""===e.props.disabled?"disabled":""]],ref:t=>{e.props.title===l.selected&&(s.selectedItem=t)},onClick:t=>s.select(e),key:t},p(e.props.title),11,["onClick"])))),128)),r("div",I,null,512)],512),r("div",B,[(n(),a(c(s.current),{class:"lu-tabs-content-item",key:s.current.props.title}))])])};var h={name:"TabsNormal",components:{LuTabs:C,LuTabItem:F},setup:()=>({TabFlag:s("导航1")})};function x(e){e.__sourceCode="<template>\n  <lu-tabs v-model:selected=\"TabFlag\">\n    <lu-tab-item title=\"导航1\">内容1</lu-tab-item>\n    <lu-tab-item title=\"导航2\">内容2</lu-tab-item>\n    <lu-tab-item title=\"导航3\">内容3</lu-tab-item>\n  </lu-tabs>\n</template>\n\n<script lang=\"ts\">\nimport { ref } from 'vue'\nimport LuTabs from '@/lib/Tabs/Tabs.vue'\nimport LuTabItem from '@/lib/Tabs/TabsItem.vue'\nexport default {\n  name: 'TabsNormal',\n  components: {\n    LuTabs,\n    LuTabItem\n  },\n  setup() {\n    const TabFlag = ref('导航1')\n    return { TabFlag }\n  }\n}\n<\/script>",e.__sourceCodeTitle=" 基础使用 "}const N=T("内容1"),k=T("内容2"),w=T("内容3");x(h),h.render=function(e,t,l,s,o,u){const d=m("lu-tab-item"),i=m("lu-tabs");return n(),a(i,{selected:s.TabFlag,"onUpdate:selected":t[1]||(t[1]=e=>s.TabFlag=e)},{default:f((()=>[r(d,{title:"导航1"},{default:f((()=>[N])),_:1}),r(d,{title:"导航2"},{default:f((()=>[k])),_:1}),r(d,{title:"导航3"},{default:f((()=>[w])),_:1})])),_:1},8,["selected"])};var j={components:{LuTabs:C,LuTab:F},setup:()=>({TabFlag:s("导航1")})};function A(e){e.__sourceCode='<template>\n  <lu-tabs v-model:selected="TabFlag">\n    <lu-tab title="导航1">内容1</lu-tab>\n    <lu-tab title="导航2">内容2</lu-tab>\n    <lu-tab title="导航3" disabled>内容3</lu-tab>\n  </lu-tabs>\n</template>\n\n<script lang="ts">\nimport { ref } from \'vue\'\nimport LuTabs from \'@/lib/Tabs/Tabs.vue\'\nimport LuTab from \'@/lib/Tabs/TabsItem.vue\'\nexport default {\n  components: {\n    LuTabs,\n    LuTab\n  },\n  setup() {\n    const TabFlag = ref(\'导航1\')\n    return { TabFlag }\n  }\n}\n<\/script>',e.__sourceCodeTitle=" 禁用状态 "}const R=T("内容1"),D=T("内容2"),E=T("内容3");A(j),j.render=function(e,t,l,s,o,u){const d=m("lu-tab"),i=m("lu-tabs");return n(),a(i,{selected:s.TabFlag,"onUpdate:selected":t[1]||(t[1]=e=>s.TabFlag=e)},{default:f((()=>[r(d,{title:"导航1"},{default:f((()=>[R])),_:1}),r(d,{title:"导航2"},{default:f((()=>[D])),_:1}),r(d,{title:"导航3",disabled:""},{default:f((()=>[E])),_:1})])),_:1},8,["selected"])};var U={components:{Container:e,Attr:t},setup:()=>({TabsNormal:h,TabsDisabled:j,data:[{params:"disabled",desc:"禁止状态",type:"boolean",select:"false / true",default:"false"}]})};const q=v();_("data-v-1f8340b6");const S={class:"lu-tabs-demo"},$=r("h1",null,"Tabs 导航栏切换",-1),z=r("p",null,[T(" 可以使用"),r("code",null,"v-model"),T("绑定一个"),r("code",null,"Boolean"),T("类型的变量到"),r("code",null,"Tabs"),T("组件，指定默认"),r("span",null,"Tab")],-1),G=r("p",null,[T(" 可以使用"),r("code",null,"disabled"),T("属性定义"),r("code",null,"Tab"),T("组件禁止状态，它接受一个"),r("code",null,"Boolean"),T("值。 ")],-1);g();const H=q(((e,t,l,s,o,u)=>{const d=m("Container"),i=m("Attr");return n(),a("div",S,[$,r(d,{component:s.TabsNormal},{default:q((()=>[z])),_:1},8,["component"]),r(d,{component:s.TabsDisabled},{default:q((()=>[G])),_:1},8,["component"]),r(i,{data:s.data},null,8,["data"])])}));U.render=H,U.__scopeId="data-v-1f8340b6";export default U;
