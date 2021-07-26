import{_ as o}from"./Container.aba3277e.js";import{_ as n}from"./Button.f4de5e64.js";import{n as l,d as t,c as e,z as a,e as u,t as i,f as c,q as s,y as r,o as g,k as p,r as d,F as m,i as D,h as f,w as v,j as b,l as k}from"./vendor.6cd36be9.js";import{_ as h}from"./Attr.226aa56e.js";var B={props:{visible:{type:Boolean,default:!1},bottomButton:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!0},title:{type:String,default:"标题"},ok:Function,cancel:Function},components:{Button:n},setup(o,n){const t=()=>{n.emit("update:visible",!1)},e=l((()=>""!==o.title));return{close:t,onClickOverlay:()=>{o.closeOnClickOverlay&&t()},showTitle:e,ok:()=>{o.ok&&!1!==o.ok()&&t()},cancel:()=>{o.cancel&&o.cancel(),t()}}}};const C={key:0},_={class:"lu-dialog-wrapper"},w={class:"lu-dialog"},y={key:0},L={key:1},O=p("确定"),T=p("取消");B.render=function(o,n,l,p,d,m){const D=t("Button");return l.visible?(g(),e("div",C,[(g(),e(a,{to:"body"},[u("div",{class:"lu-dialog-overlay",onClick:n[1]||(n[1]=(...o)=>p.onClickOverlay&&p.onClickOverlay(...o))}),u("div",_,[u("div",w,[u("span",{class:"lu-dialog-close",onClick:n[2]||(n[2]=(...o)=>p.close&&p.close(...o))}),p.showTitle?(g(),e("header",y,[u("h1",null,i(l.title),1)])):c("",!0),u("main",null,[s(o.$slots,"default"),s(o.$slots,"content")]),l.bottomButton?(g(),e("footer",L,[u(D,{theme:"success",onClick:p.ok},{default:r((()=>[O])),_:1},8,["onClick"]),u(D,{theme:"warning",onClick:p.cancel},{default:r((()=>[T])),_:1},8,["onClick"])])):c("",!0)])])]))])):c("",!0)};var x={components:{LuDialog:B,LuButton:n},setup(){const o=d(!1);return{showDialog:o,toggle:()=>{o.value=!o.value}}}};function j(o){o.__sourceCode='<template>\n  <lu-button theme="primary" @click="toggle">打开Dialog</lu-button>\n  <lu-dialog v-model:visible="showDialog">\n    <p>Dialog内容</p>\n  </lu-dialog>\n</template>\n<script lang="ts">\nimport { ref } from \'vue\'\nimport LuButton from \'@/lib/Button/Button.vue\'\nimport LuDialog from \'@/lib/Dialog/Dialog.vue\'\nexport default {\n  components: {\n    LuDialog,\n    LuButton\n  },\n  setup() {\n    const showDialog = ref(false)\n    const toggle = () => {\n      showDialog.value = !showDialog.value\n    }\n    return {\n      showDialog,\n      toggle\n    }\n  }\n}\n<\/script>',o.__sourceCodeTitle=" 基本用法 "}const F=p("打开Dialog"),U=u("p",null,"Dialog内容",-1);j(x),x.render=function(o,n,l,a,i,c){const s=t("lu-button"),p=t("lu-dialog");return g(),e(m,null,[u(s,{theme:"primary",onClick:a.toggle},{default:r((()=>[F])),_:1},8,["onClick"]),u(p,{visible:a.showDialog,"onUpdate:visible":n[1]||(n[1]=o=>a.showDialog=o)},{default:r((()=>[U])),_:1},8,["visible"])],64)};const A=o=>{const{title:n,content:l,ok:t,cancel:e,bottomButton:a}=o,u=document.createElement("div");document.body.appendChild(u);const i=D({render:()=>f(B,{visible:!0,"onUpdate:visible":o=>{!1===o&&(i.unmount(u),u.remove())},title:n,bottomButton:a,ok:t,cancel:e},{content:()=>l})});i.mount(u)};var N={components:{LuButton:n},setup:()=>({toggle:()=>{A({title:"我的标题",bottomButton:!0,content:"这是内容",ok:()=>(console.log("ok"),!0),cancel(){console.log("cancel")}})}})};function S(o){o.__sourceCode="<template>\n  <lu-button theme=\"error\" @click=\"toggle\">打开对话框</lu-button>\n</template>\n\n<script lang=\"ts\">\nimport LuButton from '@/lib/Button/Button.vue'\nimport { openDialog } from '@/lib/Dialog/openDialog'\nexport default {\n  components: {\n    LuButton\n  },\n  setup() {\n    const toggle = () => {\n      openDialog({\n        title: '我的标题',\n        bottomButton: true,\n        content: '这是内容',\n        ok() {\n          console.log('ok')\n          return true\n        },\n        cancel() {\n          console.log('cancel')\n        }\n      })\n    }\n    return { toggle }\n  }\n}\n<\/script>",o.__sourceCodeTitle=" 一键打开 Dialog "}const $=p("打开对话框");S(N),N.render=function(o,n,l,a,u,i){const c=t("lu-button");return g(),e(c,{theme:"error",onClick:a.toggle},{default:r((()=>[$])),_:1},8,["onClick"])};var q={name:"DialogOverlay",components:{LuDialog:B,LuButton:n},setup(){const o=d(!1);return{showDialog:o,toggle:()=>{o.value=!o.value}}}};function z(o){o.__sourceCode='<template>\n  <lu-button theme="success" @click="toggle">打开Dialog</lu-button>\n  <lu-dialog v-model:visible="showDialog" :closeOnClickOverlay="false">\n    <p>Dialog内容</p>\n  </lu-dialog>\n</template>\n\n<script lang="ts">\nimport { ref } from \'vue\'\nimport LuButton from \'@/lib/Button/Button.vue\'\nimport LuDialog from \'@/lib/Dialog/Dialog.vue\'\nexport default {\n  name: \'DialogOverlay\',\n  components: {\n    LuDialog,\n    LuButton\n  },\n  setup() {\n    const showDialog = ref(false)\n    const toggle = () => {\n      showDialog.value = !showDialog.value\n    }\n    return {\n      showDialog,\n      toggle\n    }\n  }\n}\n<\/script>',o.__sourceCodeTitle=" 禁止点击遮罩层关闭Dialog "}const E=p("打开Dialog"),I=u("p",null,"Dialog内容",-1);z(q),q.render=function(o,n,l,a,i,c){const s=t("lu-button"),p=t("lu-dialog");return g(),e(m,null,[u(s,{theme:"success",onClick:a.toggle},{default:r((()=>[E])),_:1},8,["onClick"]),u(p,{visible:a.showDialog,"onUpdate:visible":n[1]||(n[1]=o=>a.showDialog=o),closeOnClickOverlay:!1},{default:r((()=>[I])),_:1},8,["visible"])],64)};var G={name:"DialogTitle",components:{LuDialog:B,LuButton:n},setup(){const o=d(!1);return{showDialog:o,toggle:()=>{o.value=!o.value}}}};function H(o){o.__sourceCode='<template>\n  <lu-button theme="warning" @click="toggle"> 打开Dialog</lu-button>\n  <lu-dialog v-model:visible="showDialog" title="这是自定义标题">\n    <p>这是内容</p>\n  </lu-dialog>\n</template>\n\n<script lang="ts">\nimport { ref } from \'vue\'\nimport LuButton from \'@/lib/Button/Button.vue\'\nimport LuDialog from \'@/lib/Dialog/Dialog.vue\'\nexport default {\n  name: \'DialogTitle\',\n  components: {\n    LuDialog,\n    LuButton\n  },\n  setup() {\n    const showDialog = ref(false)\n    const toggle = () => {\n      showDialog.value = !showDialog.value\n    }\n    return {\n      showDialog,\n      toggle\n    }\n  }\n}\n<\/script>',o.__sourceCodeTitle=" 自定义标题 "}const J=p(" 打开Dialog"),K=u("p",null,"这是内容",-1);H(G),G.render=function(o,n,l,a,i,c){const s=t("lu-button"),p=t("lu-dialog");return g(),e(m,null,[u(s,{theme:"warning",onClick:a.toggle},{default:r((()=>[J])),_:1},8,["onClick"]),u(p,{visible:a.showDialog,"onUpdate:visible":n[1]||(n[1]=o=>a.showDialog=o),title:"这是自定义标题"},{default:r((()=>[K])),_:1},8,["visible"])],64)};var M={name:"DialogButton",components:{LuDialog:B,LuButton:n},setup(){const o=d(!1);return{showDialog:o,toggle:()=>{o.value=!o.value},ok:()=>(console.log("确定"),!0),cancel:()=>{console.log("取消")}}}};function P(o){o.__sourceCode='<template>\n  <lu-button theme="primary" @click="toggle">打开Dialog</lu-button>\n  <lu-dialog v-model:visible="showDialog" bottomButton="true" :ok="ok" :cancel="cancel">\n    <p>Dialog内容</p>\n  </lu-dialog>\n</template>\n\n<script lang="ts">\nimport { ref } from \'vue\'\nimport LuButton from \'@/lib/Button/Button.vue\'\nimport LuDialog from \'@/lib/Dialog/Dialog.vue\'\nexport default {\n  name: \'DialogButton\',\n  components: {\n    LuDialog,\n    LuButton\n  },\n  setup() {\n    const showDialog = ref(false)\n    const toggle = () => {\n      showDialog.value = !showDialog.value\n    }\n    const ok = () => {\n      console.log(\'确定\')\n      return true\n    }\n    const cancel = () => {\n      console.log(\'取消\')\n    }\n    return {\n      showDialog,\n      toggle,\n      ok,\n      cancel\n    }\n  }\n}\n<\/script>',o.__sourceCodeTitle=" 按钮功能 "}const Q=p("打开Dialog"),R=u("p",null,"Dialog内容",-1);P(M),M.render=function(o,n,l,a,i,c){const s=t("lu-button"),p=t("lu-dialog");return g(),e(m,null,[u(s,{theme:"primary",onClick:a.toggle},{default:r((()=>[Q])),_:1},8,["onClick"]),u(p,{visible:a.showDialog,"onUpdate:visible":n[1]||(n[1]=o=>a.showDialog=o),bottomButton:"true",ok:a.ok,cancel:a.cancel},{default:r((()=>[R])),_:1},8,["visible","ok","cancel"])],64)};var V={components:{Container:o,Attr:h},setup:()=>({DialogNormal:x,DialogOnCode:N,DialogOverlay:q,DialogTitle:G,DialogButton:M,data:[{params:"closeOnClickOverlay",desc:"点击遮罩层关闭",type:"Boolean",select:"false / true",default:"true"},{params:"title",desc:"自定义标题",type:"String",select:"自定义标题",default:"null"},{params:"bottomButton",desc:"带有按钮",type:"Boolean",select:"false / true",default:"false"},{params:"ok",desc:"确认按钮执行函数",type:"Function",select:"function return false（不关闭Dialog）  function return true（关闭Dialog）",default:"null"},{params:"cancel",desc:"取消按钮执行函数",type:"Function",select:"function（均关闭Dialog）",default:"null"}]})};const W=v();b("data-v-4b0ef6a7");const X={class:"lu-dialog-demo"},Y=u("h1",null,"Dialog 对话框",-1),Z=u("p",null,[p(" 可以使用"),u("code",null,"v-model"),p("绑定一个"),u("code",null,"Boolean"),p("类型的变量到"),u("code",null,"Dialog"),p("组件 ")],-1),oo=u("p",null,[p(" 可以使用"),u("code",null,"closeOnClickOverlay"),p("属性，设置禁止点击遮罩层关闭"),u("code",null,"Dialog"),p("组件,他接受一个"),u("code",null,"Boolean"),p("值 ")],-1),no=u("p",null,[p("可以使用"),u("code",null,"title"),p("属性，来自定义Dialog组件标题")],-1),lo=u("p",null,[p(" 可以使用"),u("code",null,"bottomButton"),p("属性给"),u("code",null,"Dialog"),p("组件添加"),u("code",null,"button"),p("，他接受一个"),u("code",null,"Boolean"),p("值，"),u("code",null,"ok"),p("函数需返回"),u("code",null,"true"),p("才可退出 ")],-1),to=u("p",null,[p("可以引入"),u("code",null,"openDialog"),p("模块创建一个"),u("code",null,"Dialog"),p("组件")],-1);k();const eo=W(((o,n,l,a,i,c)=>{const s=t("Container"),r=t("Attr");return g(),e("div",X,[Y,u(s,{component:a.DialogNormal},{default:W((()=>[Z])),_:1},8,["component"]),u(s,{component:a.DialogOverlay},{default:W((()=>[oo])),_:1},8,["component"]),u(s,{component:a.DialogTitle},{default:W((()=>[no])),_:1},8,["component"]),u(s,{component:a.DialogButton},{default:W((()=>[lo])),_:1},8,["component"]),u(s,{component:a.DialogOnCode},{default:W((()=>[to])),_:1},8,["component"]),u(r,{data:a.data},null,8,["data"])])}));V.render=eo,V.__scopeId="data-v-4b0ef6a7";export default V;
